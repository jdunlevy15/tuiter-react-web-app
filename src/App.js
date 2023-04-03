import "./App.css";
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import HomeComponent from "./tuiter/home";
import whoReducer from "./tuiter/reducers/who-reducer";
import tuitsReducer from "./tuiter/tuits/tuits-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import React, { useEffect } from "react";

const store = configureStore({
  reducer: { who: whoReducer, tuitsData: tuitsReducer },
});
function App() {
  useEffect(() => {
    console.log("App");
  });
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/*" element={<Labs />} />
            <Route path="/hello" element={<HelloWorld />} />
            <Route path="/tuiter" element={<HomeComponent />} />
            <Route path="/tuiter/home" element={<HomeComponent />} />
            <Route path="/tuiter/explore" element={<Tuiter />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
