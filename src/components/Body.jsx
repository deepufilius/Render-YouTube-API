import { Outlet } from "react-router-dom";
import SideBar from "../components/Sidebar";

const Body = () => {
  return (
    <div className="flex">
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default Body