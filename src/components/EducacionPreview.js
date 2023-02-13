import { Component } from "react";

class EducacionPreview extends Component {
    render() {
        return(
            <>
             <div className="educacion"> Formacion
                <div className="fechaIS">{this.props.dateStarted} </div>
                <div className="fechaES">{this.props.dateEnded}</div>
                <div className="grado">{this.props.tittle}</div>
                <div className="orientacion">Derecho</div>
                <div className="institucion">{this.props.school}</div>
            </div>
            </>
        )
        }
}

export default EducacionPreview