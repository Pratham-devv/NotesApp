import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NavBar from "./components/navBar"
import Home from "./components/home"
import Paste from "./components/Paste"
import ViewPaste from "./components/ViewPaste"


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <NavBar/>
        <Home/>
      </div>
    },
    {
      path:"/pastes",
      element:
      <div>
        <NavBar/>
        <Paste/>
      </div>
    },
    {
      path:"/pastes/:id",
      element:
      <div>
        <NavBar/>
        <ViewPaste/>
      </div>
    },
  ]
)


export default function App(){
  return(

    <div className="dark:bg-gray-950 md:min-h-screen min-h-screen  max-w-screen dark:text-white">
      <RouterProvider router={router}/>
    </div>
  )
}