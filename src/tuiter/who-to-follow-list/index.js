import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import { useSelector } from "react-redux";

const WhoToFollowList = () => {
  const whoArray = useSelector((state) => state.who);
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
