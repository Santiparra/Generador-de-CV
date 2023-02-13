import { Image } from '@react-pdf/renderer';
import { Component } from 'react';

class Footer extends Component {
     constructor () {
    
      super()
    }
  
    render() {
      return(
        <footer className="pageFooter">        
            <p>Creado por: Santiparra </p>
            <a href="https://github.com/Santiparra">
            <img className="footer-img" src="../assets/github-mark-white.svg" alt="Logo de Github conteniendo un link"/></a>   
        </footer>
      )
    } 
  }

export default Footer;