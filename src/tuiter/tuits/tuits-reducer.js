import { createSlice } from "@reduxjs/toolkit";
import tuits from "./tuits.json";

const currentUser = {
  userName: "NASA",
  handle: "@nasa",
  image: "/images/nasa.jpeg",
};

const templateTuit = {
  ...currentUser,
  topic: "Space",
  time: "2h",
  liked: false,
  replies: 0,
  retuits: 0,
  likes: 0,
};

const tuitsSlice = createSlice({
  name: "tuits",
  initialState: tuits,
  reducers: {
    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: new Date().getTime(),
      });
    },
    deleteTuit(state, action) {
      const index = state.findIndex((tuit) => tuit._id === action.payload);
      state.splice(index, 1);
    },
    likeTuit(state, action) {
      const tuit = state.find((t) => t._id === action.payload);
      console.log(`TUIT LIKED === 'false'?: ${tuit.liked === "false"}`);
      if (tuit.liked === "false") {
        tuit.liked = false;
      } else if (tuit.liked === "true") {
        tuit.liked = true;
      }
      console.log(`TUIT LIKED: ${tuit.liked ? "yessir" : "no"}`);
      tuit.likes = parseInt(tuit.likes);
      tuit.liked = !tuit.liked;
      tuit.liked
        ? (tuit.likes = tuit.likes + 1)
        : (tuit.likes = tuit.likes - 1);
    },
  },
});

export const { createTuit, deleteTuit, likeTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
