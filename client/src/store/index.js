import { createStore } from "redux";
import {
  SELECT_DISPLAY,
  WINDOW_RESIZE,
  GET_ICONS,
  GET_LISTS,
  GET_LISTSANDICONS,
} from "../actions/actions";
import hambreThumbnail from "../images/hambreThumbnail.png";
import delta32Thumbnail from "../images/delta32Thumbnail.png";
import artPortThumbnail from "../images/artPortThumbnail.png";
import dndSpellThumbnail from "../images/dndSpellThumbnail.png";

const initialState = {
  width: window.innerWidth,
  toDisplay: "Work",
  icons: true,
  lists: false,
  toolsOther: [
    {
      name: "Git",
      imgSrc: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    },
    {
      name: "RESTful API Design/Integration",
      imgSrc: "https://miro.medium.com/max/480/1*1RDFnS8FgAOQFegtuynxWw.png",
    },
    {
      name: "Github",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1024px-Octicons-mark-github.svg.png",
    },
  ],
  toolsBack: [
    {
      name: "Node.js",
      imgSrc: "https://www.kanhasoft.com/assets/images/nodejs-development.png",
    },
    {
      name: "Express.js",
      imgSrc:
        "https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png",
    },
    {
      name: "SQL",
      imgSrc: "https://image.flaticon.com/icons/svg/28/28826.svg",
    },
    {
      name: "Sequelize",
      imgSrc:
        "https://camo.githubusercontent.com/fdf4b414a9d3805d497cd2568aee16a24e4098a9/687474703a2f2f646f63732e73657175656c697a656a732e636f6d2f6d616e75616c2f61737365742f6c6f676f2d736d616c6c2e706e67",
    },
    {
      name: "MongoDB",
      imgSrc: "https://png.icons8.com/color/1600/mongodb.png",
    },
  ],
  toolsFront: [
    {
      name: "Javascript",
      imgSrc:
        "https://www.berkeleypubliclibrary.org/sites/default/files/images/featured/1200px-unofficial_javascript_logo_2.svg_.png?slideshow=true&slideshowAuto=false&slideshowSpeed=4000&speed=350&transition=fade",
    },
    {
      name: "React",
      imgSrc:
        "http://premium-templates.org/ecommerce/reactjs/images/reactjsicon.png",
    },
    {
      name: "Redux",
      imgSrc: "https://avatars0.githubusercontent.com/u/13142323?s=400&v=4",
    },
    {
      name: "Jquery",
      imgSrc:
        "http://www.myiconfinder.com/uploads/iconsets/256-256-addfd91beb329ef73f608f8b40cb144c.png",
    },
    {
      name: "HTML5",
      imgSrc: "https://cdn0.iconfinder.com/data/icons/HTML5/512/HTML_Logo.png",
    },
    {
      name: "CSS",
      imgSrc:
        "https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png",
    },
  ],
  work: [
    {
      title: "5e Spellbook Builder",
      staticSrc: dndSpellThumbnail,
      imgSrc: "https://media.giphy.com/media/B1SGZpx6nl8O9swASY/giphy.gif",
      desc:
        "5e D&D tool for building and saving a spellbook.  Built on the MERN, the ui is a responsive, mobile-first layout.",
      demo: "https://dnd-5e-spellbook-builder.herokuapp.com/",
      code: "https://github.com/DanFeinstat/5e-Spellbook-Builder",
    },
    {
      title: "Art Portfolio",
      staticSrc: artPortThumbnail,
      imgSrc: "https://media.giphy.com/media/1nawH619mxLyrNGHYO/giphy.gif",
      desc:
        "Art portfolio built in React and Node with a mobile-first responsive design.  Leverages nodeMailer to allow contact and comments while protecting the owner's contact data.",
      demo: "https://thawing-anchorage-87258.herokuapp.com/",
      code: "https://github.com/DanFeinstat/Artist-Portfolio",
    },
    // {
    //   title: "Hambre",
    //   staticSrc: hambreThumbnail,
    //   imgSrc: "https://media.giphy.com/media/23g6oI0pZrcqj8a3vH/giphy.gif",
    //   desc:
    //     "Hambre is a food truck tracking web app.  Built on the MERN stack, this app leverages the Google Maps API and websockets for realtime updates and communication.",
    //   demo: "https://hambre-sacramento.herokuapp.com/",
    //   code: "https://github.com/DanFeinstat/hambre",
    // },
    // {
    //   title: "Delta32",
    //   staticSrc: delta32Thumbnail,
    //   imgSrc: "https://media.giphy.com/media/13QDrZH1eBKyiWEp9z/giphy.gif",
    //   desc:
    //     "Delta32 is a hub for creating, storing and viewing health and fitness related videos.  Built with Jquery, Handlebars, Node, Express, SQL and Sequelize while leveraging the Ziggio API.",
    //   demo: "https://delta32.herokuapp.com/",
    //   code: "https://github.com/DanFeinstat/delta32",
    // },
  ],
};

const reducer = (state = initialState, { type, payload }) => {
  // console.log("reducer running", type, payload);

  switch (type) {
    case SELECT_DISPLAY:
      return { ...state, toDisplay: payload.toDisplay };
    case WINDOW_RESIZE:
      return { ...state, width: payload.width };
    case GET_ICONS:
      return {
        ...state,
        icons: payload.icons,
        lists: payload.lists,
      };
    case GET_LISTS:
      return {
        ...state,
        icons: payload.icons,
        lists: payload.lists,
      };
    case GET_LISTSANDICONS:
      return {
        ...state,
        icons: payload.icons,
        lists: payload.lists,
      };
    default:
      return state;
  }
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
