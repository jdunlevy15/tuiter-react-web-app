import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import TuitStats from "./TuitStats";
import { deleteTuit } from "../tuits/tuits-reducer";
import { useDispatch } from "react-redux";

export default function TuitItem({
  tuit = {
    topic: "Space",
    userName: "SpaceX",
    handle: "@SpaceX",
    time: "2h",
    title:
      "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    image: "/images/tesla.png",
    liked: "false",
    replies: "0",
    retuits: "0",
    likes: "0",
    tuit: "SpaceX designs, manufactures and launches the world’s most advanced rockets and spacecraft",
  },
}) {
  const tuitStats = {
    liked: tuit.liked,
    replies: tuit.replies,
    retuits: tuit.retuits,
    likes: tuit.likes,
  };

  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-2 col-xl-1">
          <img
            width={48}
            height={48}
            className="rounded-circle"
            src={tuit.image}
            alt={tuit.topic}
          />
        </div>
        <div className="col-10 col-xl-11">
          <i
            className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit._id)}
          ></i>
          <p className="m-1">
            {tuit.userName}
            <FontAwesomeIcon icon={faCheckCircle} />
            <span className="text-secondary">
              {`${tuit.handle} - ${tuit.time}`}
            </span>
          </p>
          <p>{tuit.tuit}</p>
        </div>
      </div>
      <div className="row">
        <TuitStats stats={tuitStats} />
      </div>
    </div>
  );
}
