import React from "react";
import Button from "./Button";
import { faArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";

function Card({ place }) {
  const { id, name, image, description, visited } = place;
  const status = visited ? "Visited" : "Not Visited";
  const btnText = visited ? "Unmark as Visited" : "Mark as Visited";
  return (
    <>
      <div className="card p-4 bg-white rounded-lg text-center">
        <img src={image} alt="img" className="h-48 aspect-video object-cover" />
        <h3 className="text-gray-900 mt-3 font-bold text-xl">{name}</h3>
        <p className="text-gray-900 mb-3 text-sm">{description}</p>
        <h5 className="text-orange-500 font-bold">{status}</h5>
        <div className="flex justify-between mt-4">
          <Button
            title={btnText}
            startIcon={<FontAwesomeIcon icon={faLocationDot} />}
          ></Button>
          <Link to={`/place/${id}`}>
            <Button
              title={"Details"}
              endIcon={<FontAwesomeIcon icon={faArrowRight} />}
            ></Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
