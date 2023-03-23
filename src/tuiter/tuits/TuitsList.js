import React from "react";
import TuitItem from "./TuitItem";
import { useSelector } from "react-redux";

function TuitsList() {
  const tuitsArray = useSelector((state) => state.tuits);
  return (
    <div className="list-group">
      {tuitsArray.map((t) => (
        <TuitItem key={t._id} tuit={t} />
      ))}
    </div>
  );
}

export default TuitsList;
