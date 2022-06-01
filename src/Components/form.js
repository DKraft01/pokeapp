import React from 'react';

export default class Form extends React.Component{


    state={
        
        close:false
    }


    onChange=e=>{
        this.setState({
            [e.target.name]:e.target.value,
            
            
            
        })
       
        
    }

    onSubmit=e=>
    {
        e.preventDefault();
        this.props.addpoke(this.state);
        this.props.close(this.state.close);

    }

    render(){

       



        if (this.props.display){
        return(<div className="form">
            <form onSubmit={this.onSubmit.bind()}>
                <h4 className="formName">Generación</h4>
                <input  type="radio" name="gen" value="1" required onChange={this.onChange}></input>1
                <input type="radio" name="gen"  value="2" required onChange={this.onChange}></input>2
                <input type="radio" name="gen"  value="3" required onChange={this.onChange}></input>3
                <br></br>

                
                <input  className="input" placeholder="Nombre"  name="alt" onChange={this.onChange} ></input>




                <input   className="input" placeholder="Foto" name="image"  onChange={this.onChange}></input>
                <br></br>
                <input   className="input" placeholder="Nombre Original" name="NombreO" onChange={this.onChange}></input>
                
                <input   className="input" placeholder="Tipo" name="type" onChange={this.onChange}></input>
                <br></br>
                <center>
                <input   className="input" placeholder="Habilidad" name="skill" onChange={this.onChange}></input></center>
                <br></br>
                <button type="submit" className="formButton" >Add</button>
            </form>
            
        </div>)}
        else{
            return(null)
        }

    }
}


