import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import Body from './components/Body.jsx';
import MainContainer from './components/MainContainer.jsx';
import VideoContainer from './components/VideoContainer.jsx';
import SearchResultsPage from './components/SearchResultsPage.jsx';
import WatchPage from './components/WatchPage.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path:"/",
        element: <Body/>,
        children: [
          {
            path:"/",
            element: <MainContainer/>,
            children: [
              {
                path: "/",
                element: <VideoContainer/>
              },
              {
                path: "/results",
                element: <SearchResultsPage/>
              }
            ]
          },
          {
            path:'/watch',
            element: <WatchPage/>
          }
        ]
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
