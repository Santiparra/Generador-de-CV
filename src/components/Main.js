import { useState } from 'react';
import Display from './Display';
import GenInfo from './GenInfo';
import WorkExp from "./ExpLaboral"
import Education from './Educacion';


function Main () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [city, setCity] = useState("")
  const [phone, setPhone] = useState("")
  const [born, setBorn] = useState("")
  const [studies, setStudies] = useState([])
  const [works, setWorks] = useState([])


  return(
    <>
      <GenInfo 
        setName={setName}
        setEmail={setEmail}
        setCity={setCity}
        setPhone={setPhone}
        setBorn={setBorn}
      />
     
      <Education
        setStudies={setStudies}
        studies={studies}
      />
      <WorkExp 
        works={works}
        setWorks={setWorks}
      />
      <Display 
        name={name}
        email={email}
        city={city}
        phone={phone}
        born={born}
        works={works}
        studies={studies}
      />
    </>
  )
}

export default Main;