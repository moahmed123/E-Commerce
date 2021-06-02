// @flow


const INIT_STATE = {
  layoutType: "vertical",
  layoutWidth: "fluid",
  leftSideBarTheme: "dark",
  leftSideBarType: "default",
  topbarTheme: "light",
  isPreloader: false,
  showRightSidebar: false,
  isMobile: false
};

const Layout = (state = INIT_STATE, action) => {
  switch (action.type) {
    case getProducts:
      return {
        ...state,
        layoutType: action.payload
      };
   
      default:
      return state;
  }
};

export default Layout;
