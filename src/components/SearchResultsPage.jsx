import { useSearchParams } from "react-router-dom"
import { YOUTUBE_SUGGEST_API, API_KEY } from "../../utils/constants";
import { useEffect, useState } from "react";
import SearchVideoPage from "./SearchVideoPage";

const SearchResultsPage = () => {

  const [searchParamas] = useSearchParams();
  const query = searchParamas.get("search_query");

  const [searchedVideos,setSearchedVideos] = useState([]);

  const getSearchedVideos = async(query)=>{
    const response = await fetch(YOUTUBE_SUGGEST_API+query+"&key="+API_KEY);
    const json = await response.json();

    setSearchedVideos(json.items);
  }

  useEffect(()=>{
    getSearchedVideos(query);
  },[query])

  return searchedVideos.length>0 && (
    <div className="flex flex-col mt-5 max-w-11/12">
      {
        searchedVideos.map((video)=>(
          <SearchVideoPage info={video} key={video.id.videoId}/>
        ))
      }
    </div>
  )
}

export default SearchResultsPage