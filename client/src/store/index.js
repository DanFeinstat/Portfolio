import { createStore } from "redux";
import { SELECT_DISPLAY, toDisplay } from "../actions/user-actions";

const initialState = {
  toDisplay: "",
  tools: {
    name: "Javascript",
    imgSrc:
      "https://www.berkeleypubliclibrary.org/sites/default/files/images/featured/1200px-unofficial_javascript_logo_2.svg_.png?slideshow=true&slideshowAuto=false&slideshowSpeed=4000&speed=350&transition=fade",
  },
  // {
  //   name: "React",
  //   imgSrc: "https://www.01rad.com/wp-content/uploads/2018/02/react.png",
  // }
};

const reducer = (state = initialState, { type, payload }) => {
  console.log("reducer running", type, payload);

  switch (type) {
    case SELECT_DISPLAY:
      return { ...state, toDisplay: payload.toDisplay };
  }

  return state;
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

//const allReducers = combineReducers({
//   products: productsReducer,
//   user: userReducer,
// });

// const store = createStore(
//   allReducers,
//   {
//     products: [{ name: "iPhone" }],
//     user: {
//       user: "Michael",
//       tools: "javascript",
//     },
//   },
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
