import { useState } from 'react'
import Header from './components/header.jsx'
import PersonalInfo from './components/personal-info.jsx'
import Education from './components/education.jsx'
import WorkExperience from './components/work-experience.jsx'
import FullCV from './components/full-cv.jsx'
import './css/App.css'
import './css/fullcv.css'

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  // const [education, setEducation] = useState('');
  // const [workExperience, setWorkExperience] = useState('');
    return <>
      <Header />
      <div className='container'>
        <section className="edit-section">
          <PersonalInfo 
            name={name}
            changeName={setName}
            email={email}
            changeEmail={setEmail}
            phone={phone}
            changePhone={setPhone}/>
          <Education />
          <WorkExperience />
        </section>
        <section className="cv-section">
          <FullCV
          name={name}
          email={email}
          phone={phone}/>
        </section>
      </div>
    </>
}

export default App
