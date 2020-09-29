import React from "react"

function Joke(props)
{
    return (
        <div className="main">
        <h3 style = {{display : props.obj.question ? "block" : "none"}}> Question : {props.obj.question} </h3> 
        <h5> JOKE : {props.obj.answer}</h5>
        <br/>
        </div>
        
    )
}
export default Joke