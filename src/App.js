
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Header from "./Shared/Header/Header";
import Login from "./Components/Authentication/Login/Login";
import Registration from "./Components/Authentication/Registration/Registration";
import { AOS } from "aos";
import Classification from "./Components/Classification/Classification/Classification";
import Product from "./Components/Product/Product";

function App() 
{
  
//Gludiolus
//73sE7n8b27Aw7GLA
AOS?.init()
  return (
    <div className="App">
    <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Registration></Registration>}></Route>
        <Route path="/class" element={<Classification></Classification>}></Route>
        <Route path="/product" element={<Product/>}></Route>
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
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
