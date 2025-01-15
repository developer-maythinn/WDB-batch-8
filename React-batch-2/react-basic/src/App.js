import logo from "./logo.svg";
import "./App.css";
import addTwo, { addThree } from "./helper";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Bag from "./components/Props/Bag";
import Shop from "./components/PropsChildren/Shop";
import Products from "./components/Props/Pratice/Products";
import ClickEvent from "./components/Events/ClickEvent";
import SimpleUseState from "./components/Hooks/UseState/SimpleUseState";
import InputWithUseState from "./components/Hooks/UseState/InputWithUseState";
import SelectedImage from "./components/Hooks/UseState/SelectedImage";
import InputFormUseState from "./components/Hooks/UseState/InputFormUseState";
import CRUD from "./components/Hooks/UseState/CRUD";
import APIData from "./components/Hooks/UseEffect/APIData";
import SimpleUseEffect from "./components/Hooks/UseEffect/SimpleUseEffect";
import Clock from "./components/Hooks/UseEffect/Clock";
import ComponentA from "./components/Hooks/PropsDrilling/ComponentA";
import VideoPlayer from "./components/Hooks/UseRef/VideoPlayer";
import { Link, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Hooks from "./pages/Hooks";
import Nav from "./components/Nav";
import HookDetail from "./pages/HookDetail";
import HOC from "./components/HOC/HOC";
import Test from "./components/HOC/Test";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Nav />
        <Routes>
          <Route path="/projects" element={<Projects></Projects>}></Route>
          <Route path="/hooks" element={<Hooks></Hooks>}></Route>
          <Route path="/hooks/:id" element={<HookDetail />}></Route>
          <Route path="/hoc" element={<HOC />} />
        </Routes>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
