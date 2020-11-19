import React from "react";
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";

const App = () => {
  const { ref, playState,getAnimation } = useWebAnimations({
   keyframes: [
      {transform:"translate(0,0)"},
      {transform:"translate(500px,0)"}
    ],
    timing:{
      duration:1000,
      iterations:Infinity,
      direction:"alternate",
      easing:"ease-in-out"
    }
  });

  return (
    <div className="container">
      <p>🍿 Animation is {playState}</p>
      <div className="target" ref={ref} >Hello</div>
      <button onClick={()=>{getAnimation().pause()}}>Pause</button>
      <button onClick={()=>{getAnimation().play()}}>Play</button>
      
    </div>
  );
};
export default App;