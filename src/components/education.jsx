export default function Education({ education, changeInfo }) {
  return (
    <div className="edit">
      <h4>Education</h4>
      <input
        type="text"
        name="school"
        data-section="education"
        value={education.school}
        onChange={changeInfo}
        placeholder="School"
      />
      <input
        type="text"
        name="datestart"
        data-section="education"
        value={education.datestart}
        onChange={changeInfo}
        placeholder="Date Started"
      />
      <input
        type="text"
        name="dateend"
        data-section="education"
        value={education.dateend}
        onChange={changeInfo}
        placeholder="Date Graduated"
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
      <input
        type="text"
        name="major"
        data-section="education"
        value={education.major}
        onChange={changeInfo}
        placeholder="Major"
      />
    </div>
  );
}
