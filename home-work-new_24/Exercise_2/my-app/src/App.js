import './App.css';
import React, { useContext} from 'react';

import { ThemeContext } from './Provider';
import { HttpHerousContext } from './HttpHerousProvider';

import { Toolbar } from './button';

import HeroTry from './heroCard';
import HeroCard from './heroList';




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


function App() {
  const Ctx = useContext(HttpHerousContext);

  const back = useContext(ThemeContext);

  const HandleNextPage = () => {
    Ctx.fetchHeros(Ctx.heroList.info.next)
}

const HandlePrevPage = () => {
    Ctx.fetchHeros(Ctx.heroList.info.prev)
}
  



  return (
    
    
    <div className= "container" style={back.theme ? {background: "#ffffff", width: "100%", overflow: "hidden", height: "100%", paddingBottom: "20px"} : {background: "#643F3F", overflow: "hidden", width: "100%", height: "100%", paddingBottom: "20px"}}>

      <ThemeContext.Consumer> 

        
        {({theme}) => (
          <div className='tb' style={back.theme ? {width: "100%", paddingTop: "30px", paddingLeft: "30px", display: "flex", flexWrap: "nowWrap", justifyContent: "center"} : {width: "100%", paddingTop: "30px", display: "flex", justifyContent: "center", paddingLeft: "30px", flexWrap: "nowWrap"}}>

            <Toolbar theme = {theme} name="light" background={back.light.background} color={back.light.foreground}/>
            <Toolbar theme = {theme} name="dark" color={back.dark.foreground}/>

          </div>
        )}


      </ThemeContext.Consumer> 

      <div className='centralConteiner' style={back.theme ? {background: "#643F3F", display: "flex", flexWrap: "noWrap", justifyContent: 'space-between', padding: "50px", paddingTop: '10px', width: "80%", height: "100%", margin: "Auto", marginTop: '15px'} : {background: "#ffffff", justifyContent: "space-Between", display: "flex", flexWrap: "noWrap", padding: "50px", paddingTop: '10px', width: "80%", height: "100%", margin: "Auto", marginTop: '15px'}}>
        <div>
          {Ctx.heroList?.results && Ctx.heroList.results.map((hero, index) => <HeroCard key={`hero-${index}`}>{hero.id}</HeroCard>)}
        </div>

        <div>
          {Ctx.heroList?.results && Ctx.heroList.results.map((hero, index) => <HeroCard key={`hero-${index}`}>{hero.name}</HeroCard>)}
        </div>

        <div>
          {Ctx.heroList?.results && Ctx.heroList.results.map((hero, index) => <HeroCard key={`hero-${index}`}>{hero.status}</HeroCard>)}
        </div>
        
        
      </div>

      <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>

        <button onClick={HandlePrevPage} style={{marginTop: "100px", marginBottom: "40px", padding: "10px"}}>Prev</button>

        <button onClick={HandleNextPage} style={{marginTop: "100px", marginBottom: "40px", padding: "10px"}}>Next</button>

      </div>


    </div>
  )
}




export default App;
