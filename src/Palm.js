import React from 'react'
import palm from "./palm.png";
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";

export default function Palm() {
    const { ref } = useWebAnimations({
        keyframes: [
            { transform: "translateX(100%)" }
        ],
        timing: {
            duration: 7000,
            iterations: Infinity,
            direction: "reverse"
        }
    })
    return (
        <div  ref={ref}>
            <img src={palm} className="palm"></img>

        </div>
    )
}