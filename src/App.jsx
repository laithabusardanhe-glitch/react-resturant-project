import Menu from "./components/Menu/Menu.jsx";
import Register from "./components/Auth/Register.jsx";
import {Router, Route, Routes} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import Test from "./components/Test.jsx";
import About from "./components/About/About.jsx";
function App() {
  return (
    <>
    {/*<Toaster position="top-center"/>
    <Routes>

<Route path="/register" element={<Register/>}/>



    </Routes>*/}
   <About/>
    </>
  );
}

export default App;

