export default function WorkExperience({
  workExperience,
  changeInfo,
  addWorkExperience,
  removeWorkExperience,
}) {
  return (
    <div className="edit">
      <h4>Work Experience</h4>
      {workExperience.map((obj, index) => {
        return (
          <div className="editflex" key={index}>
            <h4 style={{ fontSize: '15px' }}>
              Work {index + 1}{' '}
              <button
                className="delete"
                onClick={() => removeWorkExperience({ index })}
              >
                x
              </button>
            </h4>
            <input
              type="text"
              name="title"
              data-section="work"
              data-index={index}
              value={obj.title}
              onChange={changeInfo}
              placeholder="Job Title"
            />
            <input
              type="text"
              name="company"
              data-section="work"
              data-index={index}
              value={obj.company}
              onChange={changeInfo}
              placeholder="Company"
            />
            <input
              type="text"
              name="datestart"
              data-section="work"
              data-index={index}
              value={obj.datestart}
              onChange={changeInfo}
              placeholder="Date Started"
            />
            <input
              type="text"
              name="dateend"
              data-section="work"
              data-index={index}
              value={obj.dateend}
              onChange={changeInfo}
              placeholder="Date Ended"
            />
            <label>
              <input
                type="checkbox"
                data-section="work"
                data-index={index}
                checked={obj.current}
                onChange={changeInfo}
                name="current"
              />
              Currently Working
            </label>
            <textarea
              name="description"
              data-section="work"
              data-index={index}
              value={obj.description}
              onChange={changeInfo}
              placeholder="Role Description"
            />
          </div>
        );
      })}
      <div className="button">
        <button className="add" onClick={addWorkExperience}>
          +
        </button>
      </div>
    </div>
  );
}
