import React, { Component } from "react";
class Event extends Component{
     myFunction() {
        alert("Hello GFG");
        
    }
    render(){
        return(
            <div>
                <button type="button" on onClick={this.myFunction}>Click me</button>
            </div>
        )
    }
}
export default Event;