import { Component } from 'react';
import Overview from "./components/Overview";
import uniqid from "uniqid";
import './styles/style.css';

class App extends Component {
  constructor () {
  
    super()
    this.state = {
      name: {
        text: "",
        id: uniqid()
      },
      names: [],
      city: {
        text: "",
        id: uniqid()
      },
      cities: [],
      mail: {
        text: "",
        id: uniqid(),
      },
      mails: [],
      born: {
        text: "",
        id: uniqid(),
      },
      dborn: [],
      phone: { 
        text:"",
        id: uniqid(),
      },
      phones: [],

      datesstarted: {
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

    };
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
  
  onSubmitTask = (e) => {
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
    const {task, tasks} = this.state
    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter Task</label>
          <input
            onChange={this.handleChange}
            value={task.text}
            type="text"
            id="taskInput"
          />
          <button type="submit">
            Add task
          </button>  
        </form>








        <Overview tasks={tasks} />
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