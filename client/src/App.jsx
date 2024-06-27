import { Route, Routes } from "react-router-dom";
import About from "./Pages/About.jsx";
import Details from "./Pages/Details.jsx";
import HomePage from "./Pages/HomePage.jsx";
import Login from "./Pages/Login.jsx";
import Missions from "./Pages/Missions.jsx";
import SpaceExplorer from "./Pages/Satelite.jsx";
import Technology from "./Pages/Technology.jsx";
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/technology' element={<Technology/>}/>
        <Route path='/satelite' element={<SpaceExplorer/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/missions' element={<Missions/>}/>
      </Routes>
    </>
  );
};

export default App;
