import React from "react";
import { useParams } from "react-router-dom";

function PlaceDetail() {
  const { id } = useParams();
  return <div>PlaceDetail {id}</div>;
}

export default PlaceDetail;
