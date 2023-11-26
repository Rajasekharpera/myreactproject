import React, { Component } from "react";
const ConditionRender =() =>{
    let iswelcome =true;
    
    if(iswelcome){
        return (
            <div>
            <h1>Hello GFG</h1>
            </div>
        )
    }
    else{
        return(
        <div>
            <h1>Hello Guest</h1>
        </div>
        )
    }

}



export default ConditionRender;