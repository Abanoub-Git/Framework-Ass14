import { createBrowserRouter, RouterProvider } from "react-router"
import NotFound from "./components/NotFound/NotFound"
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import SinglePost from "./components/SinglePost/SinglePost";


const myRouter = createBrowserRouter([
  {path: "", element: <Home />},
  {path: "*", element: <NotFound />},
  {path: "blog", element: <Blog />},
  {path: "About", element: <About />},
  {path: "blog/:slug", element: <SinglePost /> },

])

export default function App() {
  return (
   <>
    <RouterProvider router={myRouter} />
   </>
  )
}
