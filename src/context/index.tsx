import { createContext, useContext, useReducer, useMemo } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types"

// Material Dashboard 2 React main context
const MaterialUI = createContext<
  [{ 
    miniSidenav: boolean; 
    transparentSidenav: boolean; 
    whiteSidenav: boolean; 
    sidenavColor: string; 
    transparentNavbar: boolean; 
    fixedNavbar: boolean; 
    openConfigurator: boolean; 
    direction: string; 
    layout: string; 
    darkMode: boolean; 
  }, React.Dispatch<{ type: string; value: any }>] | undefined
>(undefined);

// Setting custom name for the context which is visible on react dev tools
MaterialUI.displayName = "MaterialUIContext";

// Material Dashboard 2 React reducer
type State = {
  miniSidenav: boolean;
  transparentSidenav: boolean;
  whiteSidenav: boolean;
  sidenavColor: string;
  transparentNavbar: boolean;
  fixedNavbar: boolean;
  openConfigurator: boolean;
  direction: string;
  layout: string;
  darkMode: boolean;
};

type Action = { type: string; value: any };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "MINI_SIDENAV": {
      return { ...state, miniSidenav: action.value };
    }
    case "TRANSPARENT_SIDENAV": {
      return { ...state, transparentSidenav: action.value };
    }
    case "WHITE_SIDENAV": {
      return { ...state, whiteSidenav: action.value };
    }
    case "SIDENAV_COLOR": {
      return { ...state, sidenavColor: action.value };
    }
    case "TRANSPARENT_NAVBAR": {
      return { ...state, transparentNavbar: action.value };
    }
    case "FIXED_NAVBAR": {
      return { ...state, fixedNavbar: action.value };
    }
    case "OPEN_CONFIGURATOR": {
      return { ...state, openConfigurator: action.value };
    }
    case "DIRECTION": {
      return { ...state, direction: action.value };
    }
    case "LAYOUT": {
      return { ...state, layout: action.value };
    }
    case "DARKMODE": {
      return { ...state, darkMode: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// Material Dashboard 2 React context provider
function MaterialUIControllerProvider({ children }: { children: React.ReactNode }) {
  const initialState = {
    miniSidenav: false,
    transparentSidenav: false,
    whiteSidenav: false,
    sidenavColor: "info",
    transparentNavbar: true,
    fixedNavbar: true,
    openConfigurator: false,
    direction: "ltr",
    layout: "dashboard",
    darkMode: false,
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  const value = useMemo<[State, Dispatch]>(() => [controller, dispatch], [controller, dispatch]);

  return <MaterialUI.Provider value={value}>{children}</MaterialUI.Provider>;
}

// Material Dashboard 2 React custom hook for using context
function useMaterialUIController() {
  const context = useContext(MaterialUI);

  if (!context) {
    throw new Error(
      "useMaterialUIController should be used inside the MaterialUIControllerProvider."
    );
  }

  return context;
}

// Typechecking props for the MaterialUIControllerProvider
MaterialUIControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Context module functions
// Define the type for the dispatch function
type Dispatch = (action: { type: string; value: any }) => void;

const setMiniSidenav = (dispatch: Dispatch, value: boolean) => dispatch({ type: "MINI_SIDENAV", value });
const setTransparentSidenav = (dispatch: Dispatch, value: boolean) => dispatch({ type: "TRANSPARENT_SIDENAV", value });
const setWhiteSidenav = (dispatch: Dispatch, value: boolean) => dispatch({ type: "WHITE_SIDENAV", value });
const setSidenavColor = (dispatch: Dispatch, value: string) => dispatch({ type: "SIDENAV_COLOR", value });
const setTransparentNavbar = (dispatch: Dispatch, value: boolean) => dispatch({ type: "TRANSPARENT_NAVBAR", value });
const setFixedNavbar = (dispatch: Dispatch, value: boolean) => dispatch({ type: "FIXED_NAVBAR", value });
const setOpenConfigurator = (dispatch: Dispatch, value: boolean) => dispatch({ type: "OPEN_CONFIGURATOR", value });
const setDirection = (dispatch: Dispatch, value: string) => dispatch({ type: "DIRECTION", value });
const setLayout = (dispatch: Dispatch, value: string) => dispatch({ type: "LAYOUT", value });
const setDarkMode = (dispatch: Dispatch, value: boolean) => dispatch({ type: "DARKMODE", value });

export {
  MaterialUIControllerProvider,
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
  setSidenavColor,
  setTransparentNavbar,
  setFixedNavbar,
  setOpenConfigurator,
  setDirection,
  setLayout,
  setDarkMode,
};
