
export const HAMBURGER_ICON = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png";

export const LOGO_URL= "https://www.gstatic.com/youtube/img/promos/dc5f74641537e0e7c0b4de98b2c2a88213edd936ab0b8d14ba1bfa13d4a08f02_129x56.webp";

export const USER_ICON = "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png";

export const TAGS = ["All", "Computer Programming","Telugu Cinema","Spice","Restaurants","History","Display Devices","Podcasts","Desktop Computers"]

export const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SUGGEST_API = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q="