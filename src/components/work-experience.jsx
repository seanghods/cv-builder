let counter = 0;

export default function WorkExperience({ workExperience, changeInfo }) {
  return (
    <div className="work-edit edit">
      <h4>Work Experience</h4>
      <label>Job Title</label>
      <input
        type="text"
        name="title"
        data-section="work"
        value={workExperience.title}
        onChange={changeInfo}
        placeholder="..."
      />
      <label>Company</label>
      <input
        type="text"
        name="company"
        data-section="work"
        value={workExperience.company}
        onChange={changeInfo}
        placeholder="..."
      />
      <label>Date Started</label>
      <input
        type="text"
        name="datestart"
        data-section="work"
        value={workExperience.datestart}
        onChange={changeInfo}
        placeholder="..."
      />
      <label>Date Ended</label>
      <input
        type="text"
        name="dateend"
        data-section="work"
        value={workExperience.dateend}
        onChange={changeInfo}
        placeholder="..."
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
      <label>Role Description</label>
      <textarea
        name="description"
        data-section="work"
        value={workExperience.description}
        onChange={changeInfo}
        placeholder="..."
      />
      <div className="buttondiv">
        <button onClick={() => createNewJob({ workExperience, changeInfo })}>
          Add
        </button>
      </div>
    </div>
  );
}

function createNewJob({ workExperience, changeInfo }) {
  counter++;
  return (
    <div className="work-edit edit">
      <label>Job Title</label>
      <input
        type="text"
        name="title"
        data-section="work"
        value={workExperience[counter].title}
        onChange={changeInfo}
        placeholder="..."
      />
      <label>Company</label>
      <input
        type="text"
        name="company"
        data-section="work"
        value={workExperience[counter].company}
        onChange={changeInfo}
        placeholder="..."
      />
      <label>Date Started</label>
      <input
        type="text"
        name="datestart"
        data-section="work"
        value={workExperience[counter].datestart}
        onChange={changeInfo}
        placeholder="..."
      />
      <label>Date Ended</label>
      <input
        type="text"
        name="dateend"
        data-section="work"
        value={workExperience[counter].dateend}
        onChange={changeInfo}
        placeholder="..."
      />
      <label>
        <input
          type="checkbox"
          data-section="work"
          checked={workExperience[counter].current}
          onChange={changeInfo}
          name="current"
        />
        Currently Working
      </label>
      <label>Role Description</label>
      <textarea
        name="description"
        data-section="work"
        value={workExperience[counter].description}
        onChange={changeInfo}
        placeholder="..."
      />
      <div className="buttondiv">
        <button>Add</button>
      </div>
    </div>
  );
}
