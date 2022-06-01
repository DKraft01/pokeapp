import React from "react";
import Cards from "./Card";


class OpenCard extends React.Component{

    render(){

      return(<Cards image={this.props.image} 
        nombreO={this.props.nombreO} 
        skill={this.props.skill} 
        type={this.props.type} 
        title={this.props.alt}
         action={this.props.action}></Cards>)
       
    }
}


export default OpenCard;