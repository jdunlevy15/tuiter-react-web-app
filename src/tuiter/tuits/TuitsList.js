import React, { useEffect } from "react";
import TuitItem from "./TuitItem";
import { useDispatch, useSelector } from "react-redux";
import { findTuitsThunk } from "../../services/tuits-thunks";

const TuitsList = () => {
  const { tuits, loading } = useSelector((state) => {
    console.log(state);
    return state.tuitsData;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("sdlfkjsldkjflkdsjflksdjfkdsj");
    dispatch(findTuitsThunk());
  }, [dispatch]);

  return (
    <ul className="list-group">
      {loading && <li className="list-group-item">Loading...</li>}
      {!loading && tuits.map((t) => <TuitItem key={t._id} tuit={t} />)}
    </ul>
  );
};

export default TuitsList;
