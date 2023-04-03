import NavigationSidebar from "../navigation-sidebar";
import TuitsList from "../tuits/TuitsList";
import WhatsHappening from "./whats-happening";
import React, { useEffect, useState } from "react";
import WhoToFollowList from "../who-to-follow-list";

import whoReducer from "../reducers/who-reducer";
import tuitsReducer from "../tuits/tuits-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

function HomeComponent() {
  useEffect(() => {
    console.log("Home");
  }, []);
  return (
    <div className="row mt-2">
      <div className="col-2 col-md-2 col-lg-1 col-xl-2">
        <NavigationSidebar active="home" />
      </div>
      <div className="col-10 col-lg-7 col-xl-6">
        <WhatsHappening />
        <TuitsList />
      </div>
      <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
        <WhoToFollowList />
      </div>
    </div>
  );
}

export default HomeComponent;
