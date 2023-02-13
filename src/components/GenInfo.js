import React, { Component } from "react";
import GenInfoPreview from "./GenInfoPreview";

class GenInfo extends Component {
    constructor (props){
        super(props)
            this.state = {
                name: "Pablo Marmol",
                email: "unmail@mail.com",
                city: "Montevideo, Uruguay",
                phone: "099999999",
                born: "11-02-1956"
            }              
    }

        handleName = (e) => {
            this.setState({[e.target.id] : e.target.value });
            this.props.changeNameVal(this.state.name)
        }; 
        
        handleMail = (e) => {
            this.setState({[e.target.id] : e.target.value });
            this.props.changeEmailVal(this.state.email)
        }; 

        handleCity = (e) => {
            this.setState({[e.target.id] : e.target.value });
            this.props.changeCityVal(this.state.city)
        }; 
        
        handlePhone = (e) => {
            this.setState({[e.target.id] : e.target.value });
            this.props.changePhoneVal(this.state.phone)
        };   

        handleBorn = (e) => {
            this.setState({[e.target.id] : e.target.value });
            this.props.changeBornVal(this.state.born)
       };  

       render() {
        return (
            <div className="container">
                <div className="header">
                    <h2>Información Básica</h2>
                </div>
                <form id="form" className="form">
                    <div className="form-control">
                        <label htmlFor="name">Nombre y apellido</label>
                        <input type="text" 
                        onChange={this.handleName}
                        placeholder="Pablo Marmol" 
                        id="name" />
                    </div>
                     <div className="form-control">
                        <label htmlFor="username">Email</label>
                        <input type="text" 
                        onChange={this.handleMail}
                        placeholder="usuario@email.com" 
                        id="email" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="city">Ciudad</label>
                        <input type="text" 
                        onChange={this.handleCity}
                        placeholder="Montevideo, Uruguay" 
                        id="city"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="phone">Número telefónico</label>
                        <input type="number"
                        onChange={this.handlePhone}
                        placeholder="59899999999" 
                        id="phone"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="born">Fecha de nacimiento</label>
                        <input type="date" 
                        onChange={this.handleBorn}
                        placeholder="11-11-1911" 
                        id="born"/>
                    </div>
                </form>
            </div>        
        )
}
}
export default GenInfo;