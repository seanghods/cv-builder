export default function PersonalInfo({ personalInfo, changeInfo }) {
  return (
    <div className="edit">
      <h4>Personal Info</h4>
      <input
        type="text"
        name="name"
        data-section="personal"
        value={personalInfo.name}
        onChange={changeInfo}
        placeholder="Full Name"
      />
      <input
        type="text"
        name="phone"
        data-section="personal"
        value={personalInfo.phone}
        onChange={changeInfo}
        placeholder="Phone Number"
      />
      <input
        type="email"
        name="email"
        data-section="personal"
        value={personalInfo.email}
        onChange={changeInfo}
        placeholder="Email"
      />
      <input
        type="text"
        name="objective"
        data-section="personal"
        value={personalInfo.objective}
        onChange={changeInfo}
        placeholder="Objective"
      />
    </div>
  );
}
