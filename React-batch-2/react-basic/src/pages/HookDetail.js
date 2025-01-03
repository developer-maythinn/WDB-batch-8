import React from "react";
import { useParams } from "react-router-dom";
import SimpleUseState from "../components/Hooks/UseState/SimpleUseState";
import Clock from "../components/Hooks/UseEffect/Clock";
import VideoPlayer from "../components/Hooks/UseRef/VideoPlayer";
import ComponentA from "../components/Hooks/PropsDrilling/ComponentA";
import Hooks from "./Hooks";
import CRUD from "../components/Hooks/UseState/CRUD";
import InputFormUseState from "../components/Hooks/UseState/InputFormUseState";
import InputWithUseState from "../components/Hooks/UseState/InputWithUseState";
import SelectedImage from "../components/Hooks/UseState/SelectedImage";
import APIData from "../components/Hooks/UseEffect/APIData";
import SimpleUseEffect from "../components/Hooks/UseEffect/SimpleUseEffect";

function HookDetail() {
  const { id } = useParams();
  return (
    <>
      <Hooks></Hooks>
      <h1>{id}</h1>
      {id === "use-state" ? (
        <>
          <SimpleUseState />
          <hr />
          <CRUD />
          <hr />
          <InputFormUseState />
          <hr />
          <InputWithUseState />
          <hr />
          <SelectedImage />
        </>
      ) : id === "use-effect" ? (
        <>
          <SimpleUseEffect />
          <hr />
          <Clock></Clock>
          <hr />
          <APIData />
        </>
      ) : id === "use-ref" ? (
        <VideoPlayer />
      ) : (
        <ComponentA />
      )}
    </>
  );
}

export default HookDetail;
