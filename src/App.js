import './style/App.scss';
import Login from "./Components/Pages/Login";
import Welcome from "./Components/Pages/Welcome";
import Navigation from "./Components/Molecules/Navigation";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>Projets - React - App</h2>
        <Navigation/>
        <Switch>
            <Route path='/Login'>
              <Login/>
            </Route>
          <Route path='/Welcome'>
            <Welcome/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;