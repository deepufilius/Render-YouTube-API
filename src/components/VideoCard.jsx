import formatTimeDiff from "../../utils/formatTimeDiff";

const VideoCard = ({info}) => {

    //console.log(info);

    const {snippet,statistics} = info;

    const {channelTitle,title,thumbnails,publishedAt} = snippet;

    const {url} = thumbnails.medium;

    const {viewCount} = statistics;

    const timeStampInfo = formatTimeDiff(publishedAt);

    //console.log(thumbnails);

  return (
    <div className="w-80 mt-3">
        <div>
            <img src={url} className="rounded-2xl h-45 object-cover" alt="video-thumbnail" />
        </div>
        <div className="p-2">
            <p className="font-bold line-clamp-2">{title}</p>
            <p>{channelTitle}</p>
            <p>
                <span>{viewCount} views</span>
                &nbsp;&middot;&nbsp;
                <span>{timeStampInfo}</span>
            </p>
        </div>
    </div>
  )
}

export default VideoCard;