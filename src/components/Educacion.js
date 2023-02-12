import React, { Component } from "react";


class Education extends Component {
    constructor() {
        super()
    }
    render() {
        return(
            <div className="container">
                <div className="header">
                    <h2>Estudios</h2>
                </div>
                <form id="form" className="form">
                    <div className="form-control">
                        <label htmlFor="title">Título</label>
                        <input type="text" 
                        placeholder="secundaria" 
                        id="tittle" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="dateStarted">Fecha Inicio</label>
                        <input type="date" 
                        placeholder="01-05-1901" 
                        id="dateStarted" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="dateEnded">Fecha Completado o presente</label>
                        <input type="date" 
                        placeholder="01-05-1902" 
                        id="dateEnded"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="school">Institución</label>
                        <input type="text" 
                        placeholder="Liceo Nº1" 
                        id="school"/>
                    </div>
                    <button className="sendBtn">Enviar</button>
                </form>
            </div>

        )
    }
}

export default Education