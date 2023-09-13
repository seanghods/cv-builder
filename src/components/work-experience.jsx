export default function WorkExperience({
  workExperience,
  changeInfo,
  addWork,
  removeWork,
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
                data-section="work"
                onClick={e => removeWork(e, { index })}
              >
                x
              </button>
            </h4>
            <label>Job Title</label>
            <input
              type="text"
              name="title"
              data-section="work"
              data-index={index}
              value={obj.title}
              onChange={changeInfo}
              placeholder="..."
            />
            <label>Company</label>
            <input
              type="text"
              name="company"
              data-section="work"
              data-index={index}
              value={obj.company}
              onChange={changeInfo}
              placeholder="..."
            />
            <label>Date Started</label>
            <input
              type="text"
              name="datestart"
              data-section="work"
              data-index={index}
              value={obj.datestart}
              onChange={changeInfo}
              placeholder="..."
            />
            <label>Date Ended</label>
            <input
              type="text"
              name="dateend"
              data-section="work"
              data-index={index}
              value={obj.dateend}
              onChange={changeInfo}
              placeholder="..."
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
            <label>Role Description</label>
            <textarea
              name="description"
              data-section="work"
              data-index={index}
              value={obj.description}
              onChange={changeInfo}
              placeholder="..."
            />
          </div>
        );
      })}
      <div className="button">
        <button className="add" data-section="work" onClick={e => addWork(e)}>
          +
        </button>
      </div>
    </div>
  );
}
