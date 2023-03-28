import NavigationSidebar from "../navigation-sidebar";
import WhoToFollowList from "../who-to-follow-list";
import TuitsList from "../tuits/TuitsList";
import PostSummaryList from "../post-summary-list";

import whoReducer from "../reducers/who-reducer";
import tuitsReducer from "../tuits/tuits-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
const store = configureStore({
  reducer: { who: whoReducer, tuits: tuitsReducer },
});

function HomeScreen() {
  return (
    <Provider store={store}>
      <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar />
        </div>
        <div className="col-10 col-lg-7 col-xl-6">
          <TuitsList />
        </div>
        <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
          <PostSummaryList />
        </div>
      </div>
    </Provider>
  );
}

export default HomeScreen;
