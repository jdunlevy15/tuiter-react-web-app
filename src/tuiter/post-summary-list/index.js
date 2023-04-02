import React from "react";
import PostSummaryItem from "./post-summary-item";
import postsArray from "./posts.json";

const PostSummaryList = () => {
  return (
    <div className="list-group">
      {postsArray.map((p) => (
        <PostSummaryItem key={p._id} post={p} />
      ))}
    </div>
  );
};

export default PostSummaryList;
