export default function PersonalInfo({ personalInfo, changeInfo }) {
  return (
    <div className="edit">
      <h4>Personal Info</h4>
      <label>Full Name</label>
      <input
        type="text"
        name="name"
        data-section="personal"
        value={personalInfo.name}
        onChange={changeInfo}
        placeholder="..."
      />
      <label>Phone</label>
      <input
        type="text"
        name="phone"
        data-section="personal"
        value={personalInfo.phone}
        onChange={changeInfo}
        placeholder="..."
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        data-section="personal"
        value={personalInfo.email}
        onChange={changeInfo}
        placeholder="..."
      />
      <label>Objective</label>
      <input
        type="text"
        name="objective"
        data-section="personal"
        value={personalInfo.objective}
        onChange={changeInfo}
        placeholder="..."
      />
    </div>
  );
}
