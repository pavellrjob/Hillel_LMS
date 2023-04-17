import './App.css';
import React, {useState, useEffect, useContext} from 'react';
import {ThemeContext} from "./index";



const CostumEdit = (props) => {
  const [value, setValue] = useState(props.text);

  useEffect (() => {
    console.log("Use");
  }, [props.test]); // komponent did mount

  const onType = (event) => {
    setValue(event.target.value);
    props.onChange(event.target.value)
  }

  return (
    <>
      <input type="text" placeholder={props.placeHolder} value={value} onChange={onType}/>
      {props.isNotValid && <p>This file anvalid</p>} 
    </> // вызовет текст если если условие не соблюдены
  );
}

function ContextDemo () {
  const myCtx = useContext (ThemeContext);

  return <h2>{myCtx.theme}</h2>
}

function App() {

  const [isFieldInvalid, setIsFieldInvalid] = useState(false);

  // обработчик для извлечения информации

  const handleCustomeChange = (value) => { 
    console.log(value);
  }

  const handleCustomeChangeNotEmpty = (value) => { 
    if (value) {
      setIsFieldInvalid (false);
    }else{
      setIsFieldInvalid (true);
    }
  };

  return (
    <div className="App">
      <CostumEdit text="" placeHolder="Your name" onChange={handleCustomeChange} />

      <CostumEdit text="Your name" onChange={handleCustomeChangeNotEmpty} isNotValid={isFieldInvalid}/>

      <CostumEdit text="Your name" onChange={handleCustomeChangeNotEmpty}/>

      <ContextDemo/>
    </div>
  )
}

export default App;
