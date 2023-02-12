import { Component } from "react";

class WorkExp extends Component {
    constructor() {
        super()
    }
    render() {
        return(
            <div className="container">
                <div className="header">
                    <h2>Experiencia Laboral</h2>
                </div>
                <form id="form" className="form">
                    <div className="form-control">
                        <label htmlFor="position">Cargo</label>
                        <input type="text" 
                        placeholder="Vendedor de Humo" 
                        id="position" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="dateStartedw">Fecha Inicio</label>
                        <input type="date" 
                        placeholder="03-03-1933" 
                        id="dateStartedw" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="dateEndedw">Fecha Completado o presente</label>
                        <input type="date" 
                        placeholder="04-04-1944" 
                        id="dateEndedw"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="company">Institución</label>
                        <input type="text" 
                        placeholder="Humo LTD" 
                        id="company"/>
                    </div>
                    <div className="form-control">
                    <textarea name="tasks" 
                    className="tasks" 
                    cols="33" 
                    rows="5" 
                    id="tasks" 
                    placeholder="Describa las tareas de su cargo aquí"></textarea>  
                </div>
                    <button className="sendBtn">Enviar</button>                    
                </form>
            </div>
        )
    }
}

export default WorkExp