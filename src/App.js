import './style/App.scss';
import Login from "./Components/Pages/Login";
import Welcome from "./Components/Pages/Welcome";
import Navigation from "./Components/Molecules/Navigation";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>Projets - React - App</h2>
        <Navigation/>
        <Routes>
          <Route exact path='/Login' element={<Login/>}></Route>
          <Route exact path='/Welcome' element={<Welcome/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;