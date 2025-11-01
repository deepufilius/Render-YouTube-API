import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const isMenuOpen = useSelector(store=>store.app.isMenuOpen);

  return isMenuOpen && (
    <div className="w-50 p-5 shadow-lg shrink-0">
      <div>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li>Shorts</li>
          <li>Subscriptions</li>
          <li className="whitespace-nowrap">YouTube Music</li>
        </ul>
        <hr className="mt-4"/>
      </div>
      <div>
        <h1 className="mt-1 font-bold text-xl">You</h1>
        <ul>
          <li>History</li>
          <li>Playlists</li>
          <li>Your Videos</li>
          <li>Watch later</li>
          <li>Liked Videos</li>
          <li>Downloads</li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar