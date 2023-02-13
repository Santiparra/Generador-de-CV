import { Component } from 'react';
import Display from './Display';
import GenInfo from './GenInfo';
import WorkExp from "./ExpLaboral"
import Education from './Educacion';
import uniqid from "uniqid";

class Main extends Component {
  constructor () {
        super()
        this.state = {
            name: "",
            email: "",
            city: "",
            phone: "",
            born: "",
            study: { 
              tittle: "",
              dateStarted: "",
              dateEnded: "", 
              school: "",
              id: uniqid()
          },
          studies: []
        }        
    }

    changeName = (newName) => {
      this.setState({
        name: newName
      })
    }
    changeEmail = (newEmail) => {
      this.setState({
        email: newEmail
      })
    }
    changeCity = (newCity) => {
      this.setState({
        city: newCity
      })
    }
    changePhone = (newPhone) => {
      this.setState({
        phone: newPhone
      })
    }
    changeBorn = (newBorn) => {
      this.setState({
        born: newBorn
      })
    } 

   
    render() {
      const { name, 
        email,
        city,
        phone,
        born,
        tittle,
              dateStarted,
              dateEnded, 
              school,
              id,
              studies,
       } = this.state; 
      return(
        <>
          <GenInfo 
            changeNameVal={this.changeName.bind(this)}
            changeEmailVal={this.changeEmail.bind(this)}
            changeCityVal={this.changeCity.bind(this)}
            changePhoneVal={this.changePhone.bind(this)}
            changeBornVal={this.changeBorn.bind(this)}
          />
          <ul>
      {studies.map((study) => {
        return <li key={study.id}>{study.tittle}</li>;
      })}
    </ul>
          <Education/>
          <WorkExp />
          <Display 
            name={name} 
            email={email} 
            city={city} 
            phone={phone} 
            born={born}
            studies={studies}
          />
        </>
      )
    }
  }

export default Main;