import React from "react"


class Footer extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            isLoggedIn : true,
        }
    }
    render()
    {
        return (
            <div> 
                <h2> You are currently logged :{this.state.isLoggedIn ? <p> in </p> : <p> out </p>}</h2>
            </div>
        )

    }
   
}

export default Footer