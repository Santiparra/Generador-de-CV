import { Component } from 'react';
import Education from './Educacion';
import GenInfo from './GenInfo';
import WorkExp from "./ExpLaboral"

class Forms extends Component {
    constructor () {
    
      super()
    }
  
    render() {
      return(
        <>
          <GenInfo />
          <Educacion />
          <WorkExp />
        </>
      )
    }
  }

export default Forms;