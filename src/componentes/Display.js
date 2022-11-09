import React from "react";



export default function Display(props) {


    return (
        <div className="display">
            <span className="telaOper"> {props.valor} </span> 
            <span className="telaRes"> {props.result} </span>
        </div>
    )
}