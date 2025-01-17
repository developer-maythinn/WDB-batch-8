import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

function Cards() {
  const places = useSelector((state) => state.places);
  return (
    <>
      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
        {places.map((place, index) => {
          return (
            <React.Fragment key={index}>
              <Card place={place} />
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}

export default Cards;
