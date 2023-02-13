import React, { Component } from "react";
import EducacionPreview from "./EducacionPreview";
import uniqid from "uniqid";

class Education extends Component {
    constructor() {
        super()
        this.state = {
                tittle: "",
                dateStarted: "",
                dateEnded: "", 
                school: "",
                id: uniqid(),
       
            studies: []
        }
    }

    handleTitle = (e) => {
        this.setState({
            tittle : e.target.value 
            
        });        
    };
    handleDateStarted = (e) => {
        this.setState({
           
            dateStarted : e.target.value 
            
        });        
    };
    handleDateEnded = (e) => {
        this.setState({
            
            dateEnded : e.target.value 
            
        });        
    };
    handleSchool = (e) => {
        this.setState({
            
            school : e.target.value 
           
        });        
    };
     
    onSubmitStudy = (e) => {
        e.preventDefault();
        this.setState({
          studies: this.state.studies.concat(this.state.tittle, this.state.dateStarted, this.state.dateEnded, this.state.school),
            tittle: "",
            dateStarted: "",
            dateEnded: "", 
            school: "",
            id: uniqid()
        });
        console.log(this.state.tittle, this.state.studies)
    };   

    render() {
        const { 
            tittle, 
            dateStarted,
            dateEnded,
            school,
        studies} = this.state; 
        return(
            <div className="container">
                <div className="header">
                    <h2>Estudios</h2>
                </div>
                <form  
                onSubmit={this.onSubmitStudy}
                id="form" 
                className="form">
                    <div className="form-control">
                        <label htmlFor="title">Título</label>
                        <input type="text" 
                        onChange={this.handleTitle}
                        value={this.tittle}
                        placeholder="secundaria" 
                        id="tittle" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="dateStarted">Fecha Inicio</label>
                        <input type="date" 
                        onChange={this.handleDateStarted}
                        placeholder="01-05-1901" 
                        id="dateStarted" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="dateEnded">Fecha Completado o presente</label>
                        <input type="date"
                        onChange={this.handleDateEnded} 
                        placeholder="01-05-1902" 
                        id="dateEnded"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="school">Institución</label>
                        <input type="text" 
                        onChange={this.handleSchool}
                        placeholder="Liceo Nº1" 
                        id="school"/>
                    </div>
                    <button className="sendBtn">Enviar</button>
                </form>
                {/* <EducacionPreview 
                    studies={studies}
                />  */}
            </div>
        )
    }
}

export default Education