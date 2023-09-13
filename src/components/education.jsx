export default function Education({ education, changeInfo }) {
  return (
    <div className="education-edit edit">
      <h4>Education</h4>
      <label>School</label>
      <input
        type="text"
        name="school"
        data-section="education"
        value={education.school}
        onChange={changeInfo}
        placeholder="..."
      />
      <label>Date Started</label>
      <input
        type="text"
        name="datestart"
        data-section="education"
        value={education.datestart}
        onChange={changeInfo}
        placeholder="..."
      />
      <label>Date Graduated</label>
      <input
        type="text"
        name="dateend"
        data-section="education"
        value={education.dateend}
        onChange={changeInfo}
        placeholder="..."
      />
      <label>
        <input
          type="checkbox"
          data-section="education"
          checked={education.current}
          onChange={changeInfo}
          name="current"
        />
        Currently Studying
      </label>
      <label>Major / Focus of Study</label>
      <input
        type="text"
        name="major"
        data-section="education"
        value={education.major}
        onChange={changeInfo}
        placeholder="..."
      />
    </div>
  );
}
