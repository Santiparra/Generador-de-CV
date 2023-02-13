import { Component } from 'react';
import Forms from '../components/Forms';
import Display from '../components/Display'; 
import GenInfo from './GenInfo';

class Main extends Component {
  constructor (props) {
    super()   
}

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
      email: e.target.value,
      city: e.target.value,
      phone: e.target.value,
      born: e.target.value
    });
  };

  /* onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: '' },
    });
  }; */
  
    render() {
      return(
        <>
            <Forms />
            <Display />        
        </>
      )
    }
  }

export default Main;