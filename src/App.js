import { Component } from 'react';
import Education from './components/Educacion';
import GenInfo from './components/GenInfo';
import WorkExp from "./components/ExpLaboral"
import "./styles/style.css";

class App extends Component {
  constructor () {
  
    super()
  }

  render() {
    return(
      <>
        <GenInfo />
        <Education />
        <WorkExp />
      </>
    )
  }
}
export default App;
