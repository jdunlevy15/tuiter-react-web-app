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

const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <>
      <div className="list-group">
        <a
          href="../home/index.html"
          className={`list-group-item list-group-item-action ${
            active === "home" ? "active" : ""
          }`}
        >
          <FontAwesomeIcon icon={faHome} />
          <span className="wd-padding-left-4 d-none d-xl-inline">Home</span>
        </a>
        <a
          href="#"
          className={`list-group-item list-group-item-action ${
            active === "explore" ? "active" : ""
          }`}
        >
          <FontAwesomeIcon icon={faHashtag} />
          <span className="wd-padding-left-4 d-none d-xl-inline">Explore</span>
        </a>
        <a
          href="../notifications/index.html"
          className={`list-group-item list-group-item-action ${
            active === "notifications" ? "active" : ""
          }`}
        >
          <FontAwesomeIcon icon={faBell} />
          <span className="wd-padding-left-4 d-none d-xl-inline">
            Notifications
          </span>
        </a>
        <a
          href="../messages/index.html"
          className={`list-group-item list-group-item-action ${
            active === "messages" ? "active" : ""
          }`}
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="wd-padding-left-4 d-none d-xl-inline">Messages</span>
        </a>
        <a
          href="../bookmarks/index.html"
          className={`list-group-item list-group-item-action ${
            active === "bookmarks" ? "active" : ""
          }`}
        >
          <FontAwesomeIcon icon={faBookmark} />
          <span className="wd-padding-left-4 d-none d-xl-inline">
            Bookmarks
          </span>
        </a>
        <a
          href="../lists/index.html"
          className={`list-group-item list-group-item-action ${
            active === "lists" ? "active" : ""
          }`}
        >
          <FontAwesomeIcon icon={faList} />
          <span className="wd-padding-left-4 d-none d-xl-inline">Lists</span>
        </a>
        <a
          href="../profile/index.html"
          className={`list-group-item list-group-item-action ${
            active === "profile" ? "active" : ""
          }`}
        >
          <FontAwesomeIcon icon={faUser} />
          <span className="wd-padding-left-4 d-none d-xl-inline">Profile</span>
        </a>
        <a
          href="../more/index.html"
          className={`list-group-item list-group-item-action ${
            active === "more" ? "active" : ""
          }`}
        >
          <FontAwesomeIcon icon={faEllipsisH} />
          <span className="wd-padding-left-4 d-none d-xl-inline">More</span>
        </a>
      </div>
    </>
  );
};

export default NavigationSidebar;
