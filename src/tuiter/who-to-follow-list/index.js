import React from "react";
import whoArray from "./who.json";
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
  return (
    <div className="list-group">
      <div className="list-group-item">Who to follow</div>
      {whoArray.map((w) => (
        <WhoToFollowListItem key={w._id} who={w} />
      ))}
    </div>
  );
};

export default WhoToFollowList;
