import Header from "./components/header/Header";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import {productsData} from "./api/api";
import Signing from "./pages/Signing";


const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

function App() {
  const router =  createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>} loader={productsData}></Route>
      <Route path="/signing" element={<Signing/>}></Route>
    </Route>
  ))
  return (
    <div className='font-bodyFont bg-gray-100'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
