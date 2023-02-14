import React from "react";

function GenInfo (props) {
      
    const handleName = (e) => {
        props.setName(e.target.value)
    }; 
        
    const handleMail = (e) => {
        props.setEmail(e.target.value)
    }; 

    const handleCity = (e) => {
        props.setCity(e.target.value)
    }; 
        
    const handlePhone = (e) => {
        props.setPhone(e.target.value)
    };   

    const handleBorn = (e) => {
        props.setBorn(e.target.value)
    };  

    const handleDescription = (e) => {
        props.setDescription(e.target.value)
    }; 

    return (
        <div className="container">
            <div className="header">
                <h2>Información Básica</h2>
            </div>
            <form id="form" className="form">
                <div className="form-control">
                    <label htmlFor="name">Nombre y apellido</label>
                    <input type="text" 
                    onChange={handleName}
                    placeholder="Pablo Marmol" 
                    id="name" />
                </div>
                <div className="form-control">
                    <label htmlFor="username">Email</label>
                    <input type="text" 
                    onChange={handleMail}
                    placeholder="usuario@email.com" 
                    id="email" />
                </div>
                <div className="form-control">
                    <label htmlFor="city">Ciudad</label>
                    <input type="text" 
                    onChange={handleCity}
                    placeholder="Montevideo, Uruguay" 
                    id="city"/>
                </div>
                <div className="form-control">
                    <label htmlFor="phone">Número telefónico</label>
                    <input type="number"
                    onChange={handlePhone}
                    placeholder="59899999999" 
                    id="phone"/>
                </div>
                <div className="form-control">
                    <label htmlFor="born">Fecha de nacimiento</label>
                    <input type="date" 
                    onChange={handleBorn}
                    placeholder="11-11-1911" 
                    id="born"/>
                </div> 
                <div className="form-control">
                    <textarea name="description" 
                    onChange={handleDescription} 
                    className="description" 
                    cols="33" 
                    rows="5" 
                    id="description" 
                    placeholder="Sobre mi: puede hablar sobre Ud. aquí"></textarea>  
                </div>
            </form>
        </div>        
    )
}

export default GenInfo;