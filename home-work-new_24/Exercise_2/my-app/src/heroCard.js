// import { HttpHerousContext } from './HttpHerousProvider';

// import { useContext, useEffect } from 'react';
// import HeroCard from './heroList';




// const HeroTry = (props) => {
//     const Ctx = useContext(HttpHerousContext);
//     console.log(Ctx.heroList);

//     const HandleNextPage = () => {
//         Ctx.fetchHeros(Ctx.heroList.info.next)
//     }

//     const HandlePrevPage = () => {
//         Ctx.fetchHeros(Ctx.heroList.info.prev)
//     }
  
  
//     return (
//         <div>
//            {Ctx.heroList?.results && Ctx.heroList.results.map((hero, index) => <HeroCard key={`hero-${index}`}>{hero.name}</HeroCard>)}

//            <button onClick={HandlePrevPage} style={{marginTop: "100px", marginBottom: "40px", padding: "10px"}}>Prev</button>

//            <button onClick={HandleNextPage} style={{marginTop: "100px", marginBottom: "40px", padding: "10px"}}>Next</button>
//         </div>

        
//     )
//   }
  
//   export default HeroTry;