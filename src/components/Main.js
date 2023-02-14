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
  const [description, setDescription] = useState("")
  const [studies, setStudies] = useState([])
  const [works, setWorks] = useState([])


  return(
    <main>
      <div className='forms'>
        <GenInfo 
          setName={setName}
          setEmail={setEmail}
          setCity={setCity}
          setPhone={setPhone}
          setBorn={setBorn}
          setDescription={setDescription}
        />
        <WorkExp 
          works={works}
          setWorks={setWorks}
        />
        <Education
          setStudies={setStudies}
          studies={studies}
        />        
      </div>
      <Display 
        name={name}
        email={email}
        city={city}
        phone={phone}
        born={born}
        description={description}
        works={works}
        studies={studies}
      />
    </main>
  )
}

export default Main;