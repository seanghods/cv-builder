export default function Education() {
  return <div className='education-edit edit'>
    <h4>Education</h4>
    <input type="text" placeholder='School'/>
    <input type="number" placeholder='Year Started'/>
    <input type="number" placeholder='Year Graduated'/>
    <label><input type="checkbox"/> Currently Studying </label>
    <input type="text" placeholder='Focus of Study'/>
  </div>
}