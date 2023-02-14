import React from "react";

function Display (props) {
  
      return(      
        <div className="display">
            <div className="datosPersonales">
              <div className="cvHeader">
                 <div className="name">{props.name}</div>                 
              </div>
              <div className="aboutMe">
              Sobre mi: <p className="description">{props.description}</p>
              </div>
              <div className="ciudad">
              Lugar de residencia:
              <p className="description">{props.city}</p></div>
              <div className="born">
              Fecha de nacimiento:
              <p className="description">{props.born}</p></div>
              <div className="phone">
              Número telefónico:
              <p className="description">{props.phone}</p></div>
              <div className="mail">
              Email:
              <p className="description">{props.email}</p></div>              
            </div> 
            <ul className="employment"> 
            <div className="sectionTitle">
            Experiencia Laboral              
            </div>
              {props.works.map(work => ( 
                <li key={work.id}>                
                  <p className="arrTittle">{work.value.position}</p>
                  <div className="dates">
                    <p className="arrText">{work.value.dateStartedw}</p>
                    <p className="arrText">{work.value.dateEndedw}</p>
                  </div>
                    <p className="arrText">{work.value.company}</p>
                    <p className="arrText">{work.value.tasks}</p>
                </li>                
              ))}
            </ul> 
            <ul className="studies"> 
            <div className="sectionTitle"> 
            Formación
            </div>
              {props.studies.map(study => ( 
                <li key={study.id}>
                  <p className="arrTittle">{study.value.tittle}</p>
                  <div className="dates">
                    <p className="arrText">{study.value.dateStarted}</p>
                    <p className="arrText">{study.value.dateEnded}</p>
                  </div>
                  <p className="arrText">{study.value.school}</p>                  
                </li>
              ))}
            </ul>       
         </div>
  )
} 

export default Display; 