import React, { useState } from "react";
import uniqid from "uniqid";

function Education (props) {
    const [study, setStudy] = useState({tittle: "",
                                        dateStarted: "",
                                        dateEnded: "",
                                        school: "",
                                        id: uniqid()})
    

    const handleTitle = (e) => {
        setStudy({ ...study, tittle : e.target.value });        
    };
    
    const handleDateStarted = (e) => {
        setStudy({ ...study, dateStarted : e.target.value });        
    };
    
    const handleDateEnded = (e) => {
        setStudy({ ...study, dateEnded : e.target.value });        
    };
     const handleSchool = (e) => {
        setStudy({ ...study, school : e.target.value });        
    };
     
    const submitStudy = (e) => {
        e.preventDefault()
        props.setStudies([...props.studies, {
            id: uniqid(),
            value: study
        }])
    };    

        return(
            <div className="container">
                <div className="header">
                    <h2>Estudios</h2>
                </div>
                <form  
                onSubmit={submitStudy}
                id="form" 
                className="form">
                    <div className="form-control">
                        <label htmlFor="title">Título</label>
                        <input type="text" 
                        onChange={handleTitle}
                        value={study.tittle}
                        placeholder="secundaria" 
                        id="tittle" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="dateStarted">Fecha Inicio</label>
                        <input type="date" 
                        value={study.dateStarted}
                        onChange={handleDateStarted}
                        placeholder="01-05-1901" 
                        id="dateStarted" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="dateEnded">Fecha Completado o presente</label>
                        <input type="date"
                        value={study.dateEnded}
                        onChange={handleDateEnded} 
                        placeholder="01-05-1902" 
                        id="dateEnded"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="school">Institución</label>
                        <input type="text" 
                        value={study.school}
                        onChange={handleSchool}
                        placeholder="Liceo Nº1" 
                        id="school"/>
                    </div>
                    <button className="sendBtn">Enviar</button>
                </form>
            </div>
        )
}

export default Education