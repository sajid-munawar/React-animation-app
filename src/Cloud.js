import React from 'react'
import cloud from "./cloud.png";
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";

export default function Cloud() {
    
  const { ref, playState,getAnimation } = useWebAnimations({
    keyframes: [
       {transform:"translateX(100%)"}
       
     ],
     timing:{
       duration:9000,
       iterations:Infinity,
       direction:"reverse",
    //    easing:"ease-in-out"
     }
   });
    return (
        <div>
            
            <div ref={ref}>
                <img src={cloud} className="cloud"></img>
                <img src={cloud} className="cloud"></img>
            </div>
        
        </div>
    )
}
