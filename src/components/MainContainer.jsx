import { Outlet } from "react-router-dom";
import ButtonList from "../components/ButtonList";

const MainContainer = () => {
  return (
    <div className="px-5 pt-5">
        <ButtonList/>
        <Outlet/>
    </div>
  )
}

export default MainContainer