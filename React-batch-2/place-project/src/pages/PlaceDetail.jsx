import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Title from "../components/Title";
import Place from "../components/Place";
import Button from "../components/Button";
import { markAsVisited, unmarkAsVisited } from "../redux/placesSlice";

function PlaceDetail() {
 const navigate = useNavigate();
  const { id } = useParams();
  const place = useSelector((state) =>
    state.places.places.find((place) => place.id === parseInt(id))
  );
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
      <div className="container mx-auto ">
        <Title title="Historical Places"></Title>
        <Button text="Go Back" clickEvent={() => navigate(-1)} />

        {/* <div className="grid grid-cols-4 ">
          <div className="col-start-2 col-span-2">
            <Place placeItem={place} isDetail={true} />
          </div>
        </div> */}

        <div className="w-80 mx-auto">
          <Place
            placeItem={place}
            isDetail={true}
            toggleVisitedStatus={toggleVisitedStatus}
          />
        </div>
      </div>
    </>
  );
}

export default PlaceDetail;
