import React,{Component} from "react";
  class Person extends Component{
    constructor(props){
        super(props);
        this.props=props;
    }
    render(){
        return(
        <div>
       <i>
         <h1>Hello {this.props.name},welcome to fc class.your age is{this.props.age}</h1>
         </i>
         </div>
        );
    }

 }
 export default Person;