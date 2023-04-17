import React, { useContext, useState } from "react";

export const ThemeContext = React.createContext("light"); // значение по умолчанию


  function FirstContext (props) {
    const [theme, setTheme] = useState(true);

    const themes = () => {
      
      return {
        theme,
        light: {
          width: "100%",
          height: "100vh",
          margin: "0Auto",
          background: "#ffffff",
          foreground: "#000000",
          marginRight: "100px",
        },
        callBack: (val) => {
          setTheme (!theme)
          console.log(val)
        },          
        dark: { 
          width: "100%",
          height: "100vh",
          margin: "0Auto",
          background: "#222222",
          foreground: "#ffffff"
        }
      }
    }

    return (
        <ThemeContext.Provider value={themes()} >
            {props.children}
        </ThemeContext.Provider>
    )
  }

export default FirstContext