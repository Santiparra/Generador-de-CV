import React from "react";

function Display (props) {
  
      return(      
        <>
            <div className="datosPersonales">Datos Personales
              <div className="name">{props.name}</div>
              <div className="sobreMi">Pienso luego existo</div>
              <div className="ciudad">{props.city}</div>
              <div className="born">{props.born}</div>
              <div className="phone">{props.phone}</div>
              <div className="mail">{props.email}</div>
            </div> 
            <ul>
              {props.works.map(work => ( 
                <li key={work.id}>
                {work.value.position}
                {work.value.dateStartedw}
                {work.value.dateEndedw}
                {work.value.company}
                {work.value.tasks}
                </li>
              ))}
            </ul> 
            <ul>
              {props.studies.map(study => ( 
                <li key={study.id}>
                {study.value.tittle}
                {study.value.school}
                {study.value.dateStarted}
                {study.value.dateEnded}
                </li>
              ))}
            </ul>       
         </>
  )
} 

export default Display; 