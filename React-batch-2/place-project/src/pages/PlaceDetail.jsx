import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Title from "../components/Title";
import Place from "../components/Place";
import Button from "../components/Button";

function PlaceDetail() {
  const { id } = useParams();
  const place = useSelector((state) =>
    state.places.find((place) => place.id === parseInt(id))
  );
  console.log(place);
  return (
    <>
      <div className="container mx-auto ">
        <Title title="Historical Places"></Title>
        {/* <Button /> */}

        {/* <div className="grid grid-cols-4 ">
          <div className="col-start-2 col-span-2">
            <Place placeItem={place} isDetail={true} />
          </div>
        </div> */}

        <div className="w-80 mx-auto">
          <Place placeItem={place} isDetail={true} />
        </div>
      </div>
    </>
  );
}

export default PlaceDetail;
