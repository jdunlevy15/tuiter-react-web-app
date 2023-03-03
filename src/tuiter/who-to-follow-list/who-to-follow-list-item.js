import React from "react";
//import Button from "react-boostrap/Button";

const WhoToFollowListItem = ({
  who = {
    userName: "NASA",
    handle: "NASA",
    avatarIcon:
      "https://1000logos.net/wp-content/uploads/2017/03/Color-of-the-NASA-Logo.jpg",
  },
}) => {
  return (
    <div className="list-group-item">
      <div className="row pe-2">
        <div className="col-2">
          <img
            width={48}
            width={48}
            className="rounded-circle"
            src={who.avatarIcon}
          />
        </div>
        <div className="col-7 ps-3">
          <p className="mb-0 ms-1">
            {who.userName} <i className="fas fa-check-circle"></i>
          </p>
          <p className="text-secondary mb-0 ms-1">@{who.handle}</p>
        </div>
        <div className="col-3 align-self-center">
          <div className="align-items-center justify-content-center">
            <button className="wd-background-bootstrap-blue wd-color-white rounded-pill btn-primary align-middle">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoToFollowListItem;
