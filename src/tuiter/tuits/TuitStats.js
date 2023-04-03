import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRetweet, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown as farThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { faComment as farComment } from "@fortawesome/free-regular-svg-icons";
import "./tuits.css";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

function TuitStats({
  tuit = {
    _id: 0,
    liked: false,
    likes: 0,
    retuits: 0,
    replies: 0,
    dislikes: 0,
    disliked: false,
  },
}) {
  const dispatch = useDispatch();
  const tuitLikeHandler = () => {
    if (tuit.liked) {
      dispatch(
        updateTuitThunk({ ...tuit, likes: tuit.likes - 1, liked: false })
      );
    } else {
      dispatch(
        updateTuitThunk({ ...tuit, likes: tuit.likes + 1, liked: true })
      );
    }
  };

  const tuitDislikeHandler = () => {
    if (tuit.disliked) {
      dispatch(
        updateTuitThunk({
          ...tuit,
          dislikes: tuit.dislikes - 1,
          disliked: false,
        })
      );
    } else {
      dispatch(
        updateTuitThunk({
          ...tuit,
          dislikes: tuit.dislikes + 1,
          disliked: true,
        })
      );
    }
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
        {!tuit.disliked || tuit.disliked === "false" ? (
          <FontAwesomeIcon
            icon={farThumbsDown}
            className={"icon-num unliked-tuit"}
            onClick={tuitDislikeHandler}
          />
        ) : (
          <FontAwesomeIcon
            icon={farThumbsDown}
            className={"icon-num liked-tuit"}
            onClick={tuitDislikeHandler}
          />
        )}
        {tuit.dislikes}
      </span>
      <span>
        <FontAwesomeIcon icon={faShareAlt} />
      </span>
    </div>
  );
}

export default TuitStats;
