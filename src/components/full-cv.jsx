export default function fullCv({ personalInfo, education, workExperience }) {
  return (
    <div className="cv">
      <div className="personal-block block">
        <div className="personal-flex">
          <div className="full-name">{personalInfo.name || 'Joe Schmo'}</div>
          <div className="contact">
            <div className="phone">{personalInfo.phone || '206 232 2255'}</div>
            <div className="email">
              {personalInfo.email || 'joeschmo@gmail.com'}
            </div>
          </div>
        </div>
        <div className="objective">
          Objective:{' '}
          {personalInfo.objective ||
            'To launch my career in software development!'}
        </div>
      </div>
      <h5>
        <i>Education</i>
      </h5>
      <div className="education-block block">
        <div className="education-flex">
          <div className="school-name">
            {education.school || 'University of California, Berkeley'}
          </div>
          <div className="dates">
            <span className="date-start">
              {education.datestart || 'August 2011'}
            </span>
            {' - '}
            <span className="date-end">
              {education.current || education.dateend || 'May 2015'}
            </span>
          </div>
        </div>
        <div className="major">Major: {education.major || 'Economics'}</div>
      </div>
      <h5>
        <i>Work Experience</i>
      </h5>
      <div className="work-block block">
        {workExperience.map((obj, index) => {
          return (
            <div className="job" key={index}>
              <div className="job-flex">
                <div className="job-role">
                  <b>{obj.title || 'Software Developer'}</b>
                </div>
                <div className="dates">
                  <span className="date-start">
                    {obj.datestart || 'June 2023'}
                  </span>
                  {' - '}
                  <span className="date-end">
                    {obj.current || obj.dateend || 'September 2023'}
                  </span>
                </div>
              </div>
              <div className="company-name">
                <i>{obj.company || 'Software Agency'}</i>
              </div>
              <div className="description">
                <DisplayDescription description={obj.description} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DisplayDescription({ description }) {
  if (!description) {
    return <div>Studied extensively HTML, CSS, Javascript, and React</div>;
  }
  return (
    <div>
      {description.split('\n').map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ))}
    </div>
  );
}
