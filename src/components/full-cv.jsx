export default function fullCv({name, email, phone}) {
  return <div className="cv">
    <div className="personal-block block">
      <div className="full-name">{name || 'Joe Schmo'}</div>
      <div className="email">{email || 'joeschmo@gmail.com'}</div>
      <div className="phone">{phone || '206 232 2255'}</div>
    </div>
    <div className="education-block block">
      <h5>Education</h5>
      <div className="school-name">University of California, Berkeley</div>
      <div className="years">
        <span className="year-start">2011 </span>
        -
        <span className="year-end"> 2015</span>
      </div>
      <div className="major">Economics</div>
    </div>
    <div className="work-block block">
    <h5>Work Experience</h5>
      <div className="job block">
        <div className="job-role">Reseller</div>
        <div className="company-name">Sean Collectibles</div>
        <div className="years">
          <span className="year-start">2018 </span>
          -
          <span className="year-end"> 2023</span>
        </div>
        <div className="description">I sell stuff oh yea!</div>
      </div>
    </div>
  </div>
}