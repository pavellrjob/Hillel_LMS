import './App.css';
import React, {useState, useEffect, Children, useContext} from 'react';

import { ThemeContext } from './Provider';
import { Toolbar } from './button';


const allSt = {
  bgr: {
    width: "100%",
    height: "100vh",
    margin: "0Auto"
  },
  inSide: {
    background: "#222222",
    display: "flex",
    flexWrap: "noWrap",
    paddingLeft: "100px",
    paddingTop: "50px",
    width: "80%",
    height: "500px",
    marginLeft: "100px",
    marginTop: "50px"
  },
  inSide2: {
    background: "#ffffff",
    display: "flex",
    flexWrap: "noWrap",
    paddingLeft: "100px",
    paddingTop: "50px",
    width: "80%",
    height: "500px",
    marginLeft: "100px",
    marginTop: "50px"
  },
  toolB: {
    paddingTop: "30px",
    paddingLeft: "30px",
    display: "flex",
    flexWrap: "nowWrap"
  },
  inPt: {
    width: "100%",
    marginBottom: "10px",
    display: "block"
  },
  left: {
    width: "50%",

  }
}



const CostumEdit = (props) => {
  const [value, setValue] = useState(props.text);
  const back = useContext(ThemeContext);
  const tes = /\d/;
  console.log(tes.test(value));
  console.log(value);
  // console.log(props);
  const tess = (tes.test(value));
  const tes1 = /\D/;
  const tess1 = (tes1.test(value));

  useEffect (() => {
    console.log("Use");
  }, [props.text]); // komponent did mount
  // console.log(props)

  const onType = (event) => {
    setValue(event.target.value);
    props.onChange(event.target.value);
    // console.log(event.target.value)
  };
  

  return (
    <>
      <input type="text" placeholder={props.placeHolder} value={value} onChange={onType} style={back.theme ? {backgroundColor: "#ffffff"} : {backgroundColor: "#643F3F"}}/>
      {(tess1 && <p>This file anvalid</p>)} 
    </> // вызовет текст если если условие не соблюдены
  );
}



function App() {

  const back = useContext(ThemeContext);


  const [isFieldInvalid, setIsFieldInvalid] = useState(false);

  const [isInvalid, setIsInvalid] = useState(false);


  const handleCustomeChangeNotEmpty = (value) => { // обработчик, валидация
    if (value) {
      setIsFieldInvalid (false);
    }else{
      setIsFieldInvalid (true);
    }
  };


  const indication = (value) => { // обработчик, валидация
    if (value) {
      setIsInvalid (false);
    }else{
      setIsInvalid (true);
    }
  };

  return (
    
    
    <div className= "container" style={back.theme ? {background: "#ffffff", width: "100%", height: "100vh",} : {background: "#643F3F", width: "100%", height: "100vh",}}>
      
      <div className='tb' style={back.theme ? {width: "100%", paddingTop: "30px", paddingLeft: "30px", display: "flex", flexWrap: "nowWrap"} : {width: "100%", paddingTop: "30px", paddingLeft: "30px", display: "flex", flexWrap: "nowWrap"}}>
        
        <Toolbar name="light" margin="20px"/>
        <Toolbar name="dark"/>
      </div>

      <div className='centralConteiner' style={back.theme ? {background: "#643F3F", display: "flex", flexWrap: "noWrap", paddingLeft: "100px", paddingTop: "50px", width: "80%", height: "500px", marginLeft: "100px", marginTop: "50px"} : {background: "#ffffff", display: "flex", flexWrap: "noWrap", paddingLeft: "100px", paddingTop: "50px", width: "80%", height: "500px", marginLeft: "100px", marginTop: "50px"}}>

        <div className='leftConteiner' style={allSt.left}>
          <div className='1' style={allSt.inPt}>
            <CostumEdit text="" placeHolder="Your name" onChange={handleCustomeChangeNotEmpty} isNotValid={isFieldInvalid}/>
          </div>
          
          <div className='2'>
            <CostumEdit text="" placeHolder="Last name" onChange={indication} isNotValid={isInvalid}/>
          </div>
        </div>

        <div className='rightConteiner' style={allSt.left}>
          <div className='2'>
            <h2 style={back.theme ? {color: "#ffffff"} : {color: "#643F3F"}}>{back.theme ? "dark" : "light"}</h2>
          </div>
        </div>
        
      </div>

    </div>
  )
}




export default App;
