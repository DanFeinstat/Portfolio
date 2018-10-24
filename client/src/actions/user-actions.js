export const UPDATE_USER = "users:updateUser";

export function updateUser(newUser) {
  return {
    type: UPDATE_USER,
    payload: { user: newUser },
  };
}

export const SELECT_DISPLAY = "SELECT_DISPLAY";

export function toDisplay(targetName) {
  return {
    type: SELECT_DISPLAY,
    payload: { toDisplay: targetName },
  };
}

export const WINDOW_RESIZE = "WINDOW_RESIZE";

export function handleWindowResize() {
  return {
    type: WINDOW_RESIZE,
    payload: { width: window.innerWidth },
  };
}

export const GET_TOOLS = "tools:getTools";

export function getTools() {
  return {
    type: GET_TOOLS,
    payload: {
      tools: [
        {
          name: "Javascript",
          imgSrc:
            "https://www.berkeleypubliclibrary.org/sites/default/files/images/featured/1200px-unofficial_javascript_logo_2.svg_.png?slideshow=true&slideshowAuto=false&slideshowSpeed=4000&speed=350&transition=fade",
        },
        {
          name: "React",
          imgSrc: "https://www.01rad.com/wp-content/uploads/2018/02/react.png",
        },
      ],
    },
  };
}
