import React from "react";
import logoF from "../assets/github-mark-white.svg"


function Footer () {
     
  return(
        <footer className="pageFooter">        
            <p>Creado por: Santiparra </p>
            <a href="https://github.com/Santiparra">
            <img src={logoF} className="footer-img" alt="Logo de Github conteniendo un link"/></a>   
        </footer>
      )
} 

export default Footer;