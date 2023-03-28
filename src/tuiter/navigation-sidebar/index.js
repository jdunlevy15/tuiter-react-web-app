import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import {
  faHome,
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faList,
  faUser,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <>
      <div className="list-group">
        <Link
          to="../tuiter/home"
          className={`list-group-item list-group-item-action ${
            active === "home" ? "active" : ""
          }`}
        >
          <FontAwesomeIcon icon={faHome} />
          <span className="wd-padding-left-4 d-none d-xl-inline">Home</span>
        </Link>
        <Link
          to="../tuiter/explore"
          className={`list-group-item list-group-item-action ${
            active === "explore" ? "active" : ""
          }`}
        >
          <FontAwesomeIcon icon={faHashtag} />
          <span className="wd-padding-left-4 d-none d-xl-inline">Explore</span>
        </Link>
        <Link
          to="../notifications/index.html"
          className={`list-group-item list-group-item-action ${
            active === "notifications" ? "active" : ""
          }`}
        >
          <FontAwesomeIcon icon={faBell} />
          <span className="wd-padding-left-4 d-none d-xl-inline">
            Notifications
          </span>
        </Link>
        <Link
          to="../messages/index.html"
          className={`list-group-item list-group-item-action ${
            active === "messages" ? "active" : ""
          }`}
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="wd-padding-left-4 d-none d-xl-inline">Messages</span>
        </Link>
        <Link
          to="../bookmarks/index.html"
          className={`list-group-item list-group-item-action ${
            active === "bookmarks" ? "active" : ""
          }`}
        >
          <FontAwesomeIcon icon={faBookmark} />
          <span className="wd-padding-left-4 d-none d-xl-inline">
            Bookmarks
          </span>
        </Link>
        <Link
          to="../lists/index.html"
          className={`list-group-item list-group-item-action ${
            active === "lists" ? "active" : ""
          }`}
        >
          <FontAwesomeIcon icon={faList} />
          <span className="wd-padding-left-4 d-none d-xl-inline">Lists</span>
        </Link>
        <Link
          to="../profile/index.html"
          className={`list-group-item list-group-item-action ${
            active === "profile" ? "active" : ""
          }`}
        >
          <FontAwesomeIcon icon={faUser} />
          <span className="wd-padding-left-4 d-none d-xl-inline">Profile</span>
        </Link>
        <Link
          to="../more/index.html"
          className={`list-group-item list-group-item-action ${
            active === "more" ? "active" : ""
          }`}
        >
          <FontAwesomeIcon icon={faEllipsisH} />
          <span className="wd-padding-left-4 d-none d-xl-inline">More</span>
        </Link>
      </div>
    </>
  );
};

export default NavigationSidebar;
