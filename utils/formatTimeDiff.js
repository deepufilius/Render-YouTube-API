const formatTimeDiff=(publishedAt)=>{
    const uploaded = new Date(publishedAt);
    const now = new Date();
    const diffs = now - uploaded;

    const diffMins = Math.floor(diffs/(1000*60));
    const diffHours = Math.floor(diffs/(1000*60*60));
    const diffDays = Math.floor(diffs/(1000*60*60*24));

    if(diffMins<60){
        return `${diffMins} minute${diffMins !== 1? 's':''} ago`;
    } else if(diffHours<24){
        return  `${diffHours} hour${diffHours !== 1? 's':''} ago`;
    } else{
        return `${diffDays} day${diffDays !== 1? 's':''} ago`;
    }
}

export default formatTimeDiff;