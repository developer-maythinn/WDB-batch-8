import React from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import Card from "../components/Card";
import Cards from "../components/Cards";
import { useSelector } from "react-redux";

function PlacesList() {
  const place = useSelector((state) => state.places[1])
  return (
    <div className="container mx-auto my-4 py-7 px-4 md:px-6">
      {/* <Button
    title="Hello"
    startIcon={<FontAwesomeIcon icon={faLocationDot} />}
  ></Button>
  <br />
  <Button
    title="Hello"
    endIcon={<FontAwesomeIcon icon={faLocationDot} />}
  ></Button>
  <Button
    title="Hello"
    // endIcon={<FontAwesomeIcon icon={faLocationDot} />}
  ></Button> */}

      <Title title="Historical Places" />
      <Button title="Suggest random place"></Button>
      <div className="flex justify-center mt-6 mb-10">
        <Card
          place={place}
        />
      </div>

      <Title title="All Historical Places" />
      <Cards />
    </div>
  );
}

export default PlacesList;
