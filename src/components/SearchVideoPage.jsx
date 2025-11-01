import formatTimeDiff from "../../utils/formatTimeDiff";
import {Link } from "react-router-dom";

const SearchVideoPage = ({info}) => {

    const {snippet,id} = info;
    const {videoId} = id;
    const {channelTitle,description,title,thumbnails,publishedAt} = snippet;
    const {url} = thumbnails.medium;
    const timeStampInfo = formatTimeDiff(publishedAt);

    return (
        <div className="flex mt-3">
            <Link to={"/watch?v="+videoId}>
                <div className="w-125 h-75 shrink-0">
                    <img className="w-full h-full object-cover rounded-3xl" src={url} alt="video-thumbnail" />
                </div>
            </Link>
            <div className="ml-3">
                <p className="font-bold">{title}</p>
                <p>{timeStampInfo}</p>
                <p>{channelTitle}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default SearchVideoPage