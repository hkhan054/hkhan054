import './App.scss';
import { NavigationBar } from './Components/Navbar/Navbar';
import { HashRouter, Route, Routes } from "react-router-dom";
import { Contact } from "./Components/Contact/Contact";
import { HomePage } from "./Components/HomePage/HomePage";
import { About } from "./Components/About/About";
import { Projects } from "./Components/Projects/Projects";
import {ProjectLinks} from "./Components/ProjectLinks/ProjecctLinks";
function App() {
  return (
    <div className="App">
      <NavigationBar/>
    </div>
  );
}

export default App;
