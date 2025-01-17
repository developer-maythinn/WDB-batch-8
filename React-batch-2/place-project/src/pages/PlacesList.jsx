import React from "react";
import Button from "../components/Button";
import Title from "../components/Title";
import Places from "../components/Places";

function PlacesList() {
  return (
    <div className="container mx-auto">
      <Title customClass="mt-10" title="Historical Places" />

      <Button text="Suggest random places"></Button>

      <Title   title="All Historical Places" />

      <Places />
    </div>
  );
}

export default PlacesList;
