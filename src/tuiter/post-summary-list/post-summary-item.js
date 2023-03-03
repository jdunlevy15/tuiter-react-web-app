import React from "react";

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
            <i className="fas fa-check-circle"></i>
            <span className="text-secondary">- {post.time}</span>
          </p>
          <p>{post.title}</p>
        </div>
        <div className="col-3">
          <img width="96px" height="96px" src={post.image} />
        </div>
      </div>
    </div>
  );
};

export default PostSummaryItem;
