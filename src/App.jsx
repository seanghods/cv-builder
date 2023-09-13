import { useState } from 'react';
import Header from './components/header.jsx';
import PersonalInfo from './components/personal-info.jsx';
import Education from './components/education.jsx';
import WorkExperience from './components/work-experience.jsx';
import FullCV from './components/full-cv.jsx';
import './css/App.css';
import './css/fullcv.css';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
    objective: '',
  });
  const [education, setEducation] = useState({
    school: '',
    datestart: '',
    dateend: '',
    current: '',
    major: '',
  });
  const [workExperience, setWorkExperience] = useState([{}]);
  // title: '',
  // company: '',
  // datestart: '',
  // dateend: '',
  // description: '',
  const changeInfo = event => {
    const { name, value, dataset, checked } = event.target;
    let inputValue = value;
    if (name == 'current') {
      inputValue = checked ? 'Present' : '';
    }
    switch (dataset.section) {
      case 'personal':
        setPersonalInfo(prevState => ({
          ...prevState,
          [name]: inputValue,
        }));
        break;
      case 'education':
        setEducation(prevState => ({
          ...prevState,
          [name]: inputValue,
        }));
        break;
      case 'work':
        setWorkExperience(prevState => {
          const index = dataset.index;
          const updatedWorkExperience = [...prevState];
          updatedWorkExperience[index][name] = inputValue;
          return updatedWorkExperience;
        });
        break;
      default:
        break;
    }
  };
  const addWorkExperience = () => {
    setWorkExperience(prevState => {
      const updatedWorkExperience = [...prevState];
      updatedWorkExperience.push({});
      return updatedWorkExperience;
    });
  };
  const removeWorkExperience = index => {
    setWorkExperience(prevState => {
      const updatedWorkExperience = [...prevState];
      updatedWorkExperience.splice({ index }, 1);
      return updatedWorkExperience;
    });
  };
  return (
    <>
      <Header />
      <div className="container">
        <section className="edit-section">
          <PersonalInfo personalInfo={personalInfo} changeInfo={changeInfo} />
          <Education education={education} changeInfo={changeInfo} />
          <WorkExperience
            workExperience={workExperience}
            changeInfo={changeInfo}
            addWorkExperience={addWorkExperience}
            removeWorkExperience={removeWorkExperience}
          />
        </section>
        <section className="cv-section">
          <FullCV
            personalInfo={personalInfo}
            education={education}
            workExperience={workExperience}
          />
        </section>
      </div>
    </>
  );
}

export default App;
