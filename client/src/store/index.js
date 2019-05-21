import { createStore } from "redux";
import {
  SELECT_DISPLAY,
  WINDOW_RESIZE,
  GET_ICONS,
  GET_LISTS,
  GET_LISTSANDICONS,
} from "../actions/actions";
import reactIcon from "../images/favicon.ico";
import hambreThumbnail from "../images/hambreThumbnail.png";
import delta32Thumbnail from "../images/delta32Thumbnail.png";
import todoThumbnail from "../images/todoThumbnail.png";
import calCalcThumbnail from "../images/calCalcThumbnail.png";
import artPortThumbnail from "../images/artPortThumbnail.png";
import chatAppThumbnail from "../images/chatAppThumbnail.png";
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
      name: "React",
      imgSrc: reactIcon,
    },
    {
      name: "Javascript",
      imgSrc:
        "https://www.berkeleypubliclibrary.org/sites/default/files/images/featured/1200px-unofficial_javascript_logo_2.svg_.png?slideshow=true&slideshowAuto=false&slideshowSpeed=4000&speed=350&transition=fade",
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
      name: "CSS3",
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
      title: "Calorie Calc + Todo",
      staticSrc: todoThumbnail,
      imgSrc: calCalcThumbnail,
      desc:
        "This is a combo calorie caluclator and todo list mostly built to work react hooks and gesture.  I used the useReducer, useContext and useEffect hook combination as a pseudo Redux for managing global state.",
      demo:
        "https://danfeinstat.github.io/CalorieCounter-TodoList-with-Hooks-and-Gesture/",
      code:
        "https://github.com/DanFeinstat/CalorieCounter-TodoList-with-Hooks-and-Gesture",
    },
    {
      title: "Chat App",
      staticSrc: chatAppThumbnail,
      imgSrc: null,
      desc:
        "Real-time group chat app with persistent data.  Video game themed for an IGN challenge.  MERN stack with web sockets.  This project is hosted on heroku and so may require a moment for the app to 'wake up'.",
      demo: "https://safe-citadel-67645.herokuapp.com/",
      code: "https://github.com/DanFeinstat/Chat-App",
    },
    {
      title: "Art Portfolio",
      staticSrc: artPortThumbnail,
      imgSrc: "https://media.giphy.com/media/1nawH619mxLyrNGHYO/giphy.gif",
      desc:
        "Art portfolio built in React, Node and the nodeMailer package, with a mobile-first responsive design.  This project is hosted on heroku and so may require a few moments for the app to 'wake up'.",
      demo: "https://victoriabloedau.herokuapp.com/",
      code: "https://github.com/DanFeinstat/Artist-Portfolio",
    },
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
