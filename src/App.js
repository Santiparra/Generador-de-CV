import { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'; 

import "./styles/style.css";

class App extends Component {
  constructor () {
  
    super()
  }

  render() {
    return(
      <>
        <Header/>
        <Main />
        <Footer />
      </>
    )
  }
}
export default App;
