import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faComment as farComment } from "@fortawesome/free-regular-svg-icons";
import "./tuits.css";
import { likeTuit } from "../tuits/tuits-reducer";
import { useDispatch } from "react-redux";

function TuitStats({
  tuit = { _id: 0, liked: false, likes: 0, retuits: 0, replies: 0 },
}) {
  const dispatch = useDispatch();
  const tuitLikeHandler = () => {
    console.log(`tuit liked: ${tuit.liked}`);
    dispatch(likeTuit(tuit._id));
  };
  return (
    <div className={"tuit-stats"}>
      <span>
        <FontAwesomeIcon icon={farComment} className="icon-num" />
        {tuit.replies}
      </span>
      <span>
        <FontAwesomeIcon icon={faRetweet} className={"icon-num"} />
        {tuit.retuits}
      </span>
      <span>
        {!tuit.liked || tuit.liked === "false" ? (
          <FontAwesomeIcon
            icon={farHeart}
            className={"icon-num unliked-tuit"}
            onClick={tuitLikeHandler}
          />
        ) : (
          <FontAwesomeIcon
            icon={farHeart}
            className={"icon-num liked-tuit"}
            onClick={tuitLikeHandler}
          />
        )}
        {tuit.likes}
      </span>
      <span>
        <FontAwesomeIcon icon={faShareAlt} />
      </span>
    </div>
  );
}

export default TuitStats;
