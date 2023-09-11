export default function PersonalInfo({name, changeName, email, changeEmail, phone, changePhone}) {
  return <div className='personal-edit edit'>
    <h4>Personal Info</h4>
    <input type="text" value={name} onChange={e => changeName(e.target.value)} placeholder='Full Name'/>
    <input type="email" value={email} onChange={e => changeEmail(e.target.value)} placeholder='Email'/>
    <input type="text" value={phone} onChange={e => changePhone(e.target.value)} placeholder='Phone Number'/>
  </div>
}