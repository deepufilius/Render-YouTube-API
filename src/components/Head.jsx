import { useDispatch, useSelector } from "react-redux";
import {HAMBURGER_ICON,LOGO_URL,USER_ICON, YOUTUBE_SEARCH_API} from "../../utils/constants";
import { toggleMenu } from "../../utils/appSlice";
import { useEffect, useState } from "react";
import {cacheResult} from "../../utils/searchSlice";
import { useNavigate } from "react-router-dom";


const Head = () => {

  const [searchQuery,setSearchQuery] = useState("");
  const [searchList,setSearchList] = useState([]);
  const [showSearchList,setShowSearchList] = useState(false);
  const searchCache = useSelector(store=>store.search);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSideBar = ()=>{
    dispatch(toggleMenu());
  }

  const handleSearch = (e)=>{
    const search = e.target.textContent.replace("🔍","").trim();

    navigate(`/results?search_query=${encodeURIComponent(search)}`);

    setShowSearchList(false);
  } 

  const getAutoCompleteAPI = async(searchQuery)=>{
    const response = await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json = await response.json();
    setSearchList(json[1]);
    dispatch(cacheResult({[searchQuery]:json[1]}))
  }

  useEffect(()=>{
    
    const timer = setTimeout(()=>{
      if(searchCache[searchQuery]){
          setSearchList(searchCache[searchQuery])
      } else{
          getAutoCompleteAPI(searchQuery)
      }
    },200);

    return()=>{
      clearTimeout(timer);
    }

  },[searchQuery])

  //console.log(searchList);

  return (
    <div className="px-4 grid grid-flow-col shadow-lg" >
      <div className="flex items-center col-span-1">
        <img className="h-6 bg-white cursor-pointer" src={HAMBURGER_ICON} alt="menu" onClick={handleSideBar}/>
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center col-span-10 flex-wrap">
        <div className="relative w-full">
          <div className="flex w-full">
            <input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} 
              onFocus={()=>setShowSearchList(true)}
              
            type="text" placeholder="search" className="relative border border-gray-400 px-3 py-1 w-1/2 rounded-l-full  focus:border focus:border-blue-400 focus:rounded-r-none focus:outline-none"/>
            <button className="border border-gray-400 rounded-r-full px-3 py-1 border-l-0 hover:bg-gray-100 cursor-pointer">🔍</button>
          </div>
          {  
            showSearchList && searchList.length >0 && <div className="absolute bg-white w-1/2 py-2 px-3 mt-1 rounded-2xl shadow-md border border-gray-100">
              <ul onClick={handleSearch} onBlur={()=>setShowSearchList(false)}>
                {
                  searchList.map((searchedItem)=>(
                      <li key={searchedItem} className="p-1 hover:bg-gray-200 rounded-md"><span className="m-1">🔍</span>{searchedItem}</li>
                  ))
                }
              </ul>
            </div>
          }
        </div>
      </div>
      <div className="flex items-center col-span-1">
        <img className="h-6" src={USER_ICON} alt="user" />
      </div>
    </div>
  )
}

export default Head