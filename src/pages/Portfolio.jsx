import "../css/portfolio.css";
import "../css/general.css";

export default function Portfolio(){
  return (
      <div>
        <section className="flex-container">
          <h2>Portfolio</h2>
          <nav className="nav-container">
            <div className="project-box" id="readme-generator">
              <h4>README Generator</h4>
              <a href="https://github.com/TalHol06/README-Generator" target="_blank">
                <img src="../src/assets/github-mark.png" alt="Github Repository" className="github-repo"/>
              </a>
              <p>Node.js</p>
            </div>

            <div className="project-box" id="employee-tracker">
              <a href="https://talhol06.github.io/Employee-Payroll-Tracker/" target="_blank">
                <h4>Employee Payroll Tracker</h4>
              </a>
              <a href="https://github.com/TalHol06/Employee-Payroll-Tracker" target="_blank">
                <img src="../src/assets/github-mark.png" alt="Github Repository" className="github-repo"/>
              </a>
              <p>HTML - JavaScript - CSS</p>
            </div>

            <div className="project-box" id="automobile-constructor">
              <h4>Automobile Constructor</h4>
              <a href="https://github.com/TalHol06/Automobile-Constructor" target="_blank">
                <img src="../src/assets/github-mark.png" alt="Github Repository" className="github-repo"/>
              </a>
              <p>Node.js - Typescript</p>
            </div>

            <div className="project-box" id="bookKeeper">
              <a href="https://talhol06.github.io/BookKeeper/" target="_blank">
                <h4>BookKeeper</h4>
              </a>
              <a href="https://github.com/TalHol06/BookKeeper" target="_blank">
                <img src="../src/assets/github-mark.png" alt="Github Repository" className="github-repo"/>
              </a>
              <p>JavaScript - HTML - CSS</p>
            </div>

            <div className="project-box" id="personal-blog">
              <a href="https://talhol06.github.io/Personal-Blog/" target="_blank">
                <h4>Personal Blog</h4>
              </a>
              <a href="https://github.com/TalHol06/Personal-Blog" target="_blank">
                <img src="../src/assets/github-mark.png" alt="Github Repository" className="github-repo"/>
              </a>
              <p>JavaScript - HTML - CSS</p>
            </div>

            <div className="project-box" id="horiseon">
              <a href="https://talhol06.github.io/Horiseon-Website-Impv/" target="_blank">
                <h4>Horiseon</h4>
              </a>
              <a href="https://github.com/TalHol06/Horiseon-Website-Impv" target="_blank">
                <img src="../src/assets/github-mark.png" alt="Github Repository" className="github-repo"/>
              </a>
              <p>HTML - CSS</p>
            </div>
          </nav>
        </section>
      </div>
  )
}