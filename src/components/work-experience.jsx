export default function WorkExperience({ workExperience, changeInfo }) {
  return (
    <div className="work-edit edit">
      <h4>Work Experience</h4>
      <input
        type="text"
        name="title"
        data-section="work"
        value={workExperience.title}
        onChange={changeInfo}
        placeholder="Job Title"
      />
      <input
        type="text"
        name="company"
        data-section="work"
        value={workExperience.company}
        onChange={changeInfo}
        placeholder="Company"
      />
      <input
        type="text"
        name="datestart"
        data-section="work"
        value={workExperience.datestart}
        onChange={changeInfo}
        placeholder="Date Started"
      />
      <input
        type="text"
        name="dateend"
        data-section="work"
        value={workExperience.dateend}
        onChange={changeInfo}
        placeholder="Date Ended"
      />
      <label>
        <input
          type="checkbox"
          data-section="work"
          checked={workExperience.current}
          onChange={changeInfo}
          name="current"
        />
        Currently Working
      </label>
      <textarea
        name="description"
        data-section="work"
        value={workExperience.description}
        onChange={changeInfo}
        placeholder="Role Description"
      />
    </div>
  );
}
