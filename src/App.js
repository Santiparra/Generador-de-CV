import { Component } from 'react';
import GenInfo from './components/GenInfo';
import uniqid from "uniqid";
/* import './styles/style.css'; */

class App extends Component {
  constructor () {
  
    super()
    this.state = {
      name: {
        text: "",
        id: uniqid()
      },
      names: [],
    }
      this.state = {
      city: {
        text: "",
        id: uniqid()
      },
      cities: [],
    }
      this.state = {
      mail: {
        text: "",
        id: uniqid(),
      },
      mails: [],
    }
      this.state = {
      born: {
        text: "",
        id: uniqid(),
      },
    }
      this.state = {
      dborn: [],
      phone: { 
        text:"",
        id: uniqid(),
      },
      phones: [],
    }
      /* datesstarted: {
        text: "",
        id: uniqid()
      },
      datesstartes: [],
      dateended: {
        text: "",
        id: uniqid(),
      },
      datesended: [],      
      title: {
        text: "",
        id: uniqid()
      },
      titles: [],
      state: {
        text: "",
        id: uniqid()
      },
      states: [],
      school: {
        text: "",
        id: uniqid()
      },
      schools: [],

      datesw: {
        text: "",
        id: uniqid()
      },
      datesws: [],
      dateew: {
        text: "",
        id: uniqid()
      },
      dateews: [],
      position: {
        text: "",
        id: uniqid()
      },
      positions: [],
      tasks: {
        text: "",
        id: uniqid()
      },
      tasks: [],

    }; */
  }
  handleChangeF1 = (e) => {
    this.setState({
      name: {
        text: e.target.value,
        id: this.state.name.id,
      },
    });
    this.setState({
      city: {
        text: e.target.value,
        id: this.state.city.id,
      },
    });
    this.setState({
      mail: {
        text: e.target.value,
        id: this.state.mail.id,
      },
    });
    this.setState({
      born: {
        text: e.target.value,
        id: this.state.born.id,
      },
    });
    this.setState({
      phone: {
        text: e.target.value,
        id: this.state.phone.id,
      },
    });
 
  };
  
  onSubmitForm1 = (e) => {
    e.preventDefault();
    this.setState({
      name: this.state.names.concat(this.state.name),
      name: {
        text: '', 
        id: uniqid()
      },
    });
    this.setState({
      city: this.state.cities.concat(this.state.city),
      city: {
        text: '', 
        id: uniqid()
      },
    });
    this.setState({
      mail: this.state.mails.concat(this.state.mail),
      mail: {
        text: '', 
        id: uniqid()
      },
    });
    this.setState({
      born: this.state.dborn.concat(this.state.born),
      born: {
        text: '', 
        id: uniqid()
      },
    });
    this.setState({
      phone: this.state.phones.concat(this.state.phone),
      phone: {
        text: '', 
        id: uniqid()
      },
    });

  }; 


  render() {
    const {name, city, mail, born, phone} = this.state
    return (
      <div>
        <form onSubmit={this.onSubmitForm1}>
          <label htmlFor="nameInput">Nombre y apellido</label>
          <input
            onChange={this.handleChangeF1}
            value={name.text}
            type="text"
            id="nameInput"
          />
          <label htmlFor="cityInput">Ciudad de residencia</label>
          <input
            onChange={this.handleChangeF1}
            value={city.text}
            type="text"
            id="cityInput"
          />
          <label htmlFor="mailInput">Dirección de Email</label>
          <input
            onChange={this.handleChangeF1}
            value={mail.text}
            type="mail"
            id="mailInput"
          />
          <label htmlFor="bornInput">Fecha de nacimiento</label>
          <input
            onChange={this.handleChangeF1}
            value={born.text}
            type="date"
            id="bornInput"
          />
          <label htmlFor="phoneInput">Número telefónico</label>
          <input
            onChange={this.handleChangeF1}
            value={phone.text}
            type="number"
            id="phoneInput"
          />
          <button type="submit">
            Agregue esta sección
          </button>  
        </form>








        <GenInfo names={name}/>
        <GenInfo cities={city}/>
        <GenInfo dborn={born}/>
        <GenInfo mails={mail}/>
        <GenInfo phones={phone}/>



      </div>
    )
  }
}

export default App;

/* name: {

names: [],
city: {

cities: [],
mail: {

mails: [],
born: {

dborn: [],
phone: { 

phones: [],

EDUCACION

datesstarted: {

datesstartes: [],
dateended: {

datesended: [],      
title: {

titles: [],
state: {

states: [],
school: {

schools: [],

LABORAL

datesw: {

datesws: [],
dateew: {

dateews: [],
position: {

positions: [],
tasks: {

tasks: [], */