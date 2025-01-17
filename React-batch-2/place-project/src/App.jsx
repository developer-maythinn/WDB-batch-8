import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Title from "./components/Title";
import Button from "./components/Button";
import { faArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Places from "./components/Places";
import { Route, Routes } from "react-router-dom";
import PlacesList from "./pages/PlacesList";
import PlaceDetail from "./pages/PlaceDetail";

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<PlacesList />}></Route>
        <Route path="/:id" element={<PlaceDetail />}></Route>
     </Routes>
    </>
  );
}

export default App;
