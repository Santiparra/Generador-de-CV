import { Component } from 'react';

class Header extends Component {
     constructor () {
    
      super()
    }
  
    render() {
      return(
        <header className="pageHeader">
            <div className="headerTittle">Creador de CV</div>
        </header>
      )
    } 
  }

export default Header;