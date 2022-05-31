import './style/App.scss';
import Login from "./Components/Login";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <div className="App">
      <h2>Projets - React - App</h2>
      <Login/>
      <Welcome/>
    </div>
  );
}

export default App;