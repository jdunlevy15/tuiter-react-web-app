import React from "react";
import PostSummaryItem from "./post-summary-item";
import { useSelector } from "react-redux";

const PostSummaryList = () => {
  const postsArray = useSelector((state) => state.tuits);
  return (
    <div className="list-group">
      {postsArray.map((p) => (
        <PostSummaryItem key={p._id} post={p} />
      ))}
    </div>
  );
};

export default PostSummaryList;
