import { Component } from "react";
import Display from "./Display";

class WorkExp extends Component {
    constructor() {
        super()
        this.state = {
            position: "",
            dateStartedw: "",
            dateEndedw: "",
            company: "",
            tasks: ""
        }
        
    }

    handleChange = (e) => {
        this.setState({
           [e.target.id] : e.target.value 
        });
      };
    render() {
        const { position, 
            dateStartedw,
            dateEndedw,
            company,
            tasks } = this.state;
        return(
            <div className="container">
                <div className="header">
                    <h2>Experiencia Laboral</h2>
                </div>
                <form id="form" className="form">
                    <div className="form-control">
                        <label htmlFor="position">Cargo</label>
                        <input type="text"
                        onChange={this.handleChange} 
                       // value={this.position}
                        placeholder="Vendedor de Humo" 
                        id="position" />
                        <p>{this.state.position}</p>
                    </div>
                    <div className="form-control">
                        <label htmlFor="dateStartedw">Fecha Inicio</label>
                        <input type="date"
                        onChange={this.handleChange}  
                        placeholder="03-03-1933" 
                        id="dateStartedw" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="dateEndedw">Fecha Completado o presente</label>
                        <input type="date"
                        onChange={this.handleChange}  
                        placeholder="04-04-1944" 
                        id="dateEndedw"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="company">Institución</label>
                        <input type="text" 
                        onChange={this.handleChange} 
                        placeholder="Humo LTD" 
                        id="company"/>
                    </div>
                    <div className="form-control">
                    <textarea name="tasks" 
                    onChange={this.handleChange} 
                    className="tasks" 
                    cols="33" 
                    rows="5" 
                    id="tasks" 
                    placeholder="Describa las tareas de su cargo aquí"></textarea>  
                </div>
                    <button className="sendBtn">Enviar</button>                    
                </form>
                <Display 
                    company={company} 
                />
            </div>
        )
    }
}

export default WorkExp