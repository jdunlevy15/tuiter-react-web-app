import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faComment as farComment } from "@fortawesome/free-regular-svg-icons";
import "./tuits.css";

function TuitStats({
  stats = { liked: false, likes: 0, retuits: 0, replies: 0 },
}) {
  return (
    <div className={"tuit-stats"}>
      <span>
        <FontAwesomeIcon icon={farComment} className="icon-num" />
        {stats.replies}
      </span>
      <span>
        <FontAwesomeIcon icon={faRetweet} className="icon-num" />
        {stats.retuits}
      </span>
      <span>
        <FontAwesomeIcon icon={farHeart} className="icon-num" />
        {stats.likes}
      </span>
      <span>
        <FontAwesomeIcon icon={faShareAlt} />
      </span>
    </div>
  );
}

export default TuitStats;
