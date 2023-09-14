import { useState } from 'react';
import Header from './components/header.jsx';
import PersonalInfo from './components/personal-info.jsx';
import Education from './components/education.jsx';
import WorkExperience from './components/work-experience.jsx';
import FullCV from './components/full-cv.jsx';
import { DragDropContext } from 'react-beautiful-dnd';
import CvDownload from './components/cv-dl.jsx';
import './css/App.css';
import './css/fullcv.css';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
    objective: '',
  });
  const [education, setEducation] = useState([{}]);
  const [workExperience, setWorkExperience] = useState([{}]);
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
        setEducation(prevState => {
          const index = dataset.index;
          const updatedEducation = [...prevState];
          updatedEducation[index][name] = inputValue;
          return updatedEducation;
        });
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
  const addEduExp = e => {
    if (e.target.dataset.section == 'work') {
      setWorkExperience(prevState => {
        const updatedWorkExperience = [...prevState];
        updatedWorkExperience.push({});
        return updatedWorkExperience;
      });
    } else if (e.target.dataset.section == 'education') {
      setEducation(prevState => {
        const updatedEducation = [...prevState];
        updatedEducation.push({});
        return updatedEducation;
      });
    }
  };
  const removeEduExp = (e, index) => {
    if (e.target.dataset.section == 'work') {
      setWorkExperience(prevState => {
        const updatedWorkExperience = [...prevState];
        updatedWorkExperience.splice({ index }, 1);
        return updatedWorkExperience;
      });
    } else if (e.target.dataset.section == 'education') {
      setEducation(prevState => {
        const updatedEducation = [...prevState];
        updatedEducation.splice({ index }, 1);
        return updatedEducation;
      });
    }
  };
  const onDragEnd = result => {
    const { destination, source } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.droppableId == 'work'
    ) {
      const newWorkExperience = [...workExperience];
      const workItem = newWorkExperience[source.index];
      newWorkExperience.splice(source.index, 1);
      newWorkExperience.splice(destination.index, 0, workItem);
      setWorkExperience(newWorkExperience);
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.droppableId == 'education'
    ) {
      const newEducation = [...education];
      const eduItem = newEducation[source.index];
      newEducation.splice(source.index, 1);
      newEducation.splice(destination.index, 0, eduItem);
      setEducation(newEducation);
    }
  };
  return (
    <>
      <Header />
      <DragDropContext onDragEnd={onDragEnd}>
        <section className="edit-section">
          <PersonalInfo personalInfo={personalInfo} changeInfo={changeInfo} />
          <Education
            education={education}
            changeInfo={changeInfo}
            addEdu={addEduExp}
            removeEdu={removeEduExp}
          />
          <WorkExperience
            workExperience={workExperience}
            changeInfo={changeInfo}
            addWork={addEduExp}
            removeWork={removeEduExp}
          />
        </section>
      </DragDropContext>
      <section className="cv-section">
        <CvDownload />
        <FullCV
          personalInfo={personalInfo}
          education={education}
          workExperience={workExperience}
        />
      </section>
    </>
  );
}

export default App;
