import "../css/resume.css";
import "../css/general.css"

export default function Resume(){
  return (
    <div>
      <section className="flex-container">
        <h2 className="resume-h2">Resume</h2>
        <h3 className="resume-heading">Front-end Development</h3>
        <ul className="resume-heading">
          <li className="resume-li">HTML</li>
          <li className="resume-li">CSS</li>
          <li className="resume-li">JavaScript</li>
          <li className="resume-li">React</li>
          <li className="resume-li">Bootstrap</li>
        </ul>
        <h3 className="resume-heading">Back-end Development</h3>
        <ul className="resume-heading">
          <li className="resume-li">PostgresSQL</li>
          <li className="resume-li">Node</li>
          <li className="resume-li">Express</li>
          <li className="resume-li">API's</li>
        </ul>
      </section>
    </div>
  )
}