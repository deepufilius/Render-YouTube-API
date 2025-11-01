import { useEffect, useState } from "react"
import VideoCard from "./VideoCard"
import { YOUTUBE_VIDEOS_API } from "../../utils/constants";
import { Link } from "react-router-dom";


const VideoContainer = () => {

  const [videos,setVideos] = useState([]);

  const getAllVideos = async()=>{
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const json = await response.json();

    setVideos(json.items);
  }

  useEffect(()=>{
    getAllVideos();
  },[]);

  return videos.length>0 && (
    <div className="flex flex-wrap justify-between space-x-10 mt-3 border-black">
      {
        videos.map(video=>(
            <Link to={"/watch?v="+video.id} key={video.id}>
              <VideoCard info={video}/>
            </Link>
        ))
      }
    </div>
  )
}

export default VideoContainer