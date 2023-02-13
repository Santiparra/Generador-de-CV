import { Component } from 'react';
import GenInfoPreview from './GenInfoPreview';

class Display extends Component {
  constructor () {
    super()
    this.state = {
        name: "Pablo Marmol",
        email: "unmail@mail.com",
        city: "Montevideo, Uruguay",
        phone: "099999999",
        born: "11-02-1956"
    }
    
}
    render() {      
      return(
       <>
       <GenInfoPreview
                    name={this.name.bind(this)} 
                    email={this.email} 
                    city={this.city} 
                    phone={this.phone} 
                    born={this.props.born}
                />
          
       </>
      )
    } 
}

export default Display; 