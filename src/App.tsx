
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom"
import Landing from "./pages/landing"
import Login from "./pages/login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "login",
    element: <Login/>
  }
])


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
