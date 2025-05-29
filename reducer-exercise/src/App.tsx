import { useState, useReducer } from "react";
import './App.css'

const initialState = {
    isDark: false,
    fSize: 16,
  };

  const reducer = (state: typeof initialState, action: any) => {
    switch (action.type) {
      case "TOGGLE_DARK_MODE":
        return { ...state, isDark: !state.isDark };
      
      case "INCREASE_FONT_SIZE":
        return { ...state, fSize: state.fSize + 1 };

      case "DECREASE_FONT_SIZE":
        return { ...state, fSize: state.fSize - 1 };

        default:
          return state;
    }
  };

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div style={{
        backgroundColor: state.isDark ? "black" : "white",
        color: state.isDark ? "white" : "black",
        fontSize: `${state.fSize}px`,
        padding: "20px",
        textAlign: "center",
      }}
      >
        <h1>Actions:</h1>

        <p>Dark mode:</p>
        <button onClick={() => dispatch({ type: "TOGGLE_DARK_MODE"})}>
          Toggle Dark Mode
        </button> 

        <p>Increase Font Size</p>
        <button onClick={() => dispatch({ type: "INCREASE_FONT_SIZE"})}>
          Increase Font Size
        </button>

        <p>Decrease Font Size</p>
        <button onClick={() => dispatch({ type: "DECREASE_FONT_SIZE"})}>
          Decrease Font Size
        </button>
      </div>
    </>
  )
}

export default App
