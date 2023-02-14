import React, { useState } from "react";
import uniqid from "uniqid";

function WorkExp (props) {
    const [work, setWork] = useState({position: "",
                                      dateStartedw: "",
                                      dateEndedw: "",
                                      company: "",
                                      tasks: "",
                                      id: uniqid()})

    const handlePosition = (e) => {
        setWork({ ...work, position: e.target.value });        
    };
    
    const handleDateStartedw = (e) => {
        setWork({ ...work, dateStartedw : e.target.value });        
    };
    
    const handleDateEndedw= (e) => {
        setWork({ ...work, dateEndedw : e.target.value });        
    };

    const handleCompany = (e) => {
        setWork({ ...work, company: e.target.value });        
    };

    const handleTasks = (e) => {
        setWork({ ...work, tasks: e.target.value });        
    };
     
    const submitWork = (e) => {
        e.preventDefault()
        props.setWorks([...props.works, {
            id: uniqid(),
            value: work
        }])
    }; 
   
        return(
            <div className="container">
                <div className="header">
                    <h2>Experiencia Laboral</h2>
                </div>
                <form 
                onSubmit={submitWork}
                id="form" 
                className="form">
                    <div className="form-control">
                        <label htmlFor="position">Cargo</label>
                        <input type="text"
                        value={work.position}
                        onChange={handlePosition} 
                        placeholder="Vendedor de Humo" 
                        id="position" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="dateStartedw">Fecha Inicio</label>
                        <input type="date"
                        value={work.dateStartedw}
                        onChange={handleDateStartedw}  
                        placeholder="03-03-1933" 
                        id="dateStartedw" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="dateEndedw">Fecha Completado o presente</label>
                        <input type="date"
                        value={work.dateEndedw}
                        onChange={handleDateEndedw}  
                        placeholder="04-04-1944" 
                        id="dateEndedw"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="company">Empresa</label>
                        <input type="text" 
                        value={work.company}
                        onChange={handleCompany} 
                        placeholder="Humo LTD" 
                        id="company"/>
                    </div>
                    <div className="form-control">
                    <textarea name="tasks" 
                    value={work.tasks}
                    onChange={handleTasks} 
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

export default WorkExp