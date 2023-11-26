import React, { Component } from "react";
const CondRend =() =>{
    let a=9;
    return(
        <div>
            {a%2==0?<h1> Even number</h1>:<h1>Odd number</h1>}
        </div>
    )
    
    
  
    

}
export default CondRend;
