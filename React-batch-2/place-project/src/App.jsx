import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Title from "./components/Title";
import Card from "./components/Card";
import Cards from "./components/Cards";
import { Route, Routes } from "react-router-dom";
import PlacesList from "./pages/PlacesList";
import PlaceDetail from "./pages/PlaceDetail";

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<PlacesList />}></Route>
        <Route path="/place/:id" element={<PlaceDetail />}></Route>
     </Routes>
    </>
  );
}

export default App;
