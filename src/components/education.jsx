export default function Education({
  education,
  changeInfo,
  addEdu,
  removeEdu,
}) {
  return (
    <div className="edit">
      <h4>Education</h4>
      {education.map((obj, index) => {
        return (
          <div className="editflex" key={index}>
            <h4 style={{ fontSize: '15px' }}>
              Education {index + 1}{' '}
              <button
                className="delete"
                data-section="education"
                onClick={e => removeEdu(e, { index })}
              >
                x
              </button>
            </h4>
            <input
              type="text"
              name="school"
              data-section="education"
              data-index={index}
              value={education.school}
              onChange={changeInfo}
              placeholder="School"
            />
            <input
              type="text"
              name="datestart"
              data-section="education"
              data-index={index}
              value={education.datestart}
              onChange={changeInfo}
              placeholder="Date Started"
            />
            <input
              type="text"
              name="dateend"
              data-section="education"
              data-index={index}
              value={education.dateend}
              onChange={changeInfo}
              placeholder="Date Graduated"
            />
            <label>
              <input
                type="checkbox"
                data-section="education"
                data-index={index}
                checked={education.current}
                onChange={changeInfo}
                name="current"
              />
              Currently Studying
            </label>
            <input
              type="text"
              name="major"
              data-section="education"
              data-index={index}
              value={education.major}
              onChange={changeInfo}
              placeholder="Major"
            />
          </div>
        );
      })}
      <div className="button">
        <button
          className="add"
          data-section="education"
          onClick={e => addEdu(e)}
        >
          +
        </button>
      </div>
    </div>
  );
}
