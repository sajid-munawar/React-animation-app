import React from 'react'
import bird from "./bird.gif";
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";

export default function Bird() {
    const { ref } = useWebAnimations({
        keyframes: [
            { transform: "translateX(100%)" }
        ],
        timing: {
            duration: 8000,
            iterations: Infinity,
            direction: "normal"
        }
    })
    return (
        <div ref={ref}>
            
            <div >
                <img src={bird} className="bird"></img>
               
            </div>
        
        </div>
    )
}
