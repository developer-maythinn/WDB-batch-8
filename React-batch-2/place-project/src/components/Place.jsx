import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Place({ placeItem, isDetail, toggleVisitedStatus }) {
  const { id, name, image, description, visited } = placeItem;
  const status = visited ? "Not visited" : "Visited";

  return (
    <div className="bg-white p-4 rounded-lg text-center">
      <img src={image} className="aspect-video object-cover" alt="img" />
      <div className="text-black">
        <h3 className="mt-3 font-bold text-xl">{name}</h3>
        <p className="text-sm">{description}</p>
        <h5 className="my-3 text-orange-500 font-bold">{status}</h5>
      </div>
      <div
        className="flex mt-4"
        style={{ justifyContent: isDetail ? "center" : "space-between" }}
      >
       
        <Button
          text="Mark as Visited"
          toggleVisitedStatus={toggleVisitedStatus}
          clickEvent={() => toggleVisitedStatus(id, visited)}
         
          startIcon={<FontAwesomeIcon icon={faLocationDot} />}
        />
        {!isDetail && (
          <Link to={`/${id}`}>
            <Button
              text="View Datail"
              endIcon={<FontAwesomeIcon icon={faArrowRight} />}
            />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Place;
