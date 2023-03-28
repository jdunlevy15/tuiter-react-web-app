import React from "react";
import PostSummaryList from "../post-summary-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCog } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const ExploreComponent = () => {
  //<i className="fas fa-search"></i>
  //<i className="fas fa-cog fa-2x wd-bootstrap-blue"></i>
  return (
    <>
      <div>
        <span className="wd-search-div">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            id="search-bar"
            placeholder="Search Tuiter"
            className="wd-transparent-input"
          />
        </span>
        <span className="wd-float-right">
          <FontAwesomeIcon icon={faCog} className={"fa-2x wd-bootstrap-blue"} />
        </span>
      </div>
      <ul className="mt-3 mb-3 nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" href="../tuiter">
            For you
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="../tuiter">
            Trending
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="../tuiter">
            News
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="../tuiter">
            Sports
          </a>
        </li>
        <li className="nav-item">
          <a className="d-none d-md-block nav-link" href="../tuiter">
            Entertainment
          </a>
        </li>
      </ul>
      <div className="wd-image-caption-wrapper">
        <h3 className="wd-image-caption text-white">SpaceX's Starship</h3>
        <img
          width="100%"
          alt="space x starship"
          src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"
        />
      </div>
      <PostSummaryList />
    </>
  );
};

export default ExploreComponent;
