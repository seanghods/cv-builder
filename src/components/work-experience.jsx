export default function WorkExperience() {
  return <div className='work-edit edit'>
    <h4>Work Experience</h4>
    <input type="text" placeholder='Job Title'/>
    <input type="text" placeholder='Company'/>
    <label><input type="date"/>Date Started</label>
    <label><input type="date"/>Date Ended</label>
    <label><input type="checkbox"/> Currently Working </label>
    <input type="text" placeholder='Role Description'/>
  </div>
}