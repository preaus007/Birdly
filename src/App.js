
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Header from "./Shared/Header/Header";
import Login from "./Components/Authentication/Login/Login";
import Registration from "./Components/Authentication/Registration/Registration";

import Classification from "./Components/Classification/Classification/Classification";
import Product from "./Components/Product/Product";
import RequireAuth from "./Components/Authentication/RequireAuth";
import Cart from "./Components/Orders/Cart/Cart";
import Aboutus from "./Components/Aboutus/Aboutus";
import Comments from "./Components/Comments/Comment/Comments"
import Detailes from "./Components/ProductDetailes/Detailes/Detailes";

function App() 
{
  
//Gludiolus
//73sE7n8b27Aw7GLA

  return (
    <div className="App">
    <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Registration></Registration>}></Route>
        <Route path="/class" element={<RequireAuth><Classification></Classification></RequireAuth>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/aboutus" element={<Aboutus></Aboutus>}></Route>
        <Route path="/comments" element={<Comments></Comments>}></Route>
        <Route path="/detailes" element={<Detailes></Detailes>}></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
