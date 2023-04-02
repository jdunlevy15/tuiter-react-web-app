import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const PostSummaryItem = ({
  post = {
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title:
      "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    image: "/images/tesla.png",
  },
}) => {
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col col-9">
          <p className="mb-0 text-secondary">{post.topic}</p>
          <p className="mb-0">
            {post.userName}
            <FontAwesomeIcon icon={faCheckCircle} />
            <span className="text-secondary">- {post.time}</span>
          </p>
          <p>{post.title}</p>
        </div>
        <div className="col-3">
          <img width="96px" height="96px" src={post.image} alt={post.topic} />
        </div>
      </div>
    </div>
  );
};

export default PostSummaryItem;
