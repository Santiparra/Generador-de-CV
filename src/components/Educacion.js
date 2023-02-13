import React, { Component } from "react";
import EducacionPreview from "./EducacionPreview";


class Education extends Component {
    constructor() {
        super()
        this.state = {
            tittle: "",
            dateStarted: "",
            dateEnded: "", 
            school: "",
        }
    }
    handleChange = (e) => {
        this.setState({
           [e.target.id] : e.target.value 
        });
      };
    render() {
        const { tittle, 
            dateStarted,
            dateEnded,
            school } = this.state; 
        return(
            <div className="container">
                <div className="header">
                    <h2>Estudios</h2>
                </div>
                <form id="form" className="form">
                    <div className="form-control">
                        <label htmlFor="title">Título</label>
                        <input type="text" 
                        onChange={this.handleChange}
                        placeholder="secundaria" 
                        id="tittle" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="dateStarted">Fecha Inicio</label>
                        <input type="date" 
                        onChange={this.handleChange}
                        placeholder="01-05-1901" 
                        id="dateStarted" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="dateEnded">Fecha Completado o presente</label>
                        <input type="date"
                        onChange={this.handleChange} 
                        placeholder="01-05-1902" 
                        id="dateEnded"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="school">Institución</label>
                        <input type="text" 
                        onChange={this.handleChange}
                        placeholder="Liceo Nº1" 
                        id="school"/>
                    </div>
                    <button className="sendBtn">Enviar</button>
                </form>
                <EducacionPreview 
                    tittle={tittle} 
                    dateStarted={dateStarted}
                    dateEnded={dateEnded}
                    school={school}
                />
            </div>

        )
    }
}

export default Education