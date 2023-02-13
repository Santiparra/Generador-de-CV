import { Component } from "react";

class ExpLaboralPreview extends Component {
    render() {
        return(
            <>
                <div className="expLaboral"> Experiencia Laboral
                    <div className="fechaIT">{this.props.position}</div>
                    <div className="fechaTT">{this.props.dateStartedw}</div>
                    <div className="empresa">{this.props.dateEndedwy}</div>
                    <div className="cargo">{this.props.company}</div>
                    <div className="tareas">{this.props.tasks}</div>
                </div>
            </>
        )
        }
}

export default ExpLaboralPreview