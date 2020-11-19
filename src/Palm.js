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
            duration: 1000,
            iterations: Infinity,
            direction: "reverse"
        }
    })
    return (
        <div className="palm" ref={ref}>
            <img src={palm}></img>

        </div>
    )
}