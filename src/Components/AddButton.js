import React from 'react';
import Form from './form';


export default class AddButton extends React.Component{
   state= {
       open:false
   }

   close=(c)=>{
       this.setState({
           open:c
       })

   }



    render(){

        return(
        <div>
        <button onClick={()=>this.setState({open:!this.state.open})} className="add" type="button">Add +</button>
        <Form display={this.state.open} addpoke={this.props.addpoke} close={this.close}  ></Form>
        </div>
        
        )
        
    }
}

