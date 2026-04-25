import Menu from "./components/Menu/Menu.jsx";
import Register from "./components/Auth/Register.jsx";
import {Router, Route, Routes} from "react-router-dom";
import {Toaster} from "react-hot-toast";

import About from "./components/About/About.jsx";
function App() {
  return (
    <>
    {/*<Toaster position="top-center"/>
    <Routes>

<Route path="/register" element={<Register/>}/>



    </Routes>*/}
   <About/>
   <Menu/>
  
    </>
  );
}

export default App;

