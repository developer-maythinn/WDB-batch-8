import React, { useState } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import Place from "./Place";
import { markAsVisited, unmarkAsVisited } from "../redux/placesSlice";

function RandomPlace() {
  const [randomPlaceId, setRandomPlaceId] = useState(null);
  const [prevValue, setPrevValue] = useState(null);

  const places = useSelector((state) => state.places.places);

  const getRandomPlace = () => {
    const randomIndex = Math.floor(Math.random() * places.length);
    const randomPlaceItem = places[randomIndex];
    // setRandomPlaceId(randomPlaceItem.id);

    if (randomPlaceItem !== prevValue) {
      setPrevValue(randomPlaceItem);
      setRandomPlaceId(randomPlaceItem.id);
    } else {
      getRandomPlace(); // Retry if the same value appears
    }
  };

  const randomPlace = randomPlaceId
    ? places.find((place) => place.id === randomPlaceId)
    : null;
  console.log(randomPlace);
  const dispatch = useDispatch();

  const toggleVisitedStatus = (id, visited) => {
    console.log(id, visited);
    if (visited) {
      dispatch(unmarkAsVisited(id));
    } else {
      dispatch(markAsVisited(id));
    }
  };
  return (
    <>
      <Button text="Suggest random places" clickEvent={getRandomPlace}></Button>
      <div className="w-80 mx-auto">
        {randomPlace && (
          <Place
            placeItem={randomPlace}
            isDetail={true}
            toggleVisitedStatus={toggleVisitedStatus}
          />
        )}
      </div>
    </>
  );
}

export default RandomPlace;
