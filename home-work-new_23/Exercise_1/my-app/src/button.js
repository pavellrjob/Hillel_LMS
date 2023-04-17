import React, {useContext} from "react";

import { ThemeContext } from "./Provider";



export function ThemedButton (props) {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.callBack(props.name);
  }
  return (
    <button onClick={handleClick} style={{background: theme.background, color: theme.foreground, marginRight: props.margin}}>
      {props.name}
    </button>
  )
}

export function Toolbar (props) {
  return (
    <div>
      <ThemedButton name={props.name} margin={props.margin} >
      </ThemedButton>
    </div>
  ) 
}
                   
