import Head from "./components/Head";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Head/>
        <Outlet/>
      </div>
    </Provider>
  )
}

export default App