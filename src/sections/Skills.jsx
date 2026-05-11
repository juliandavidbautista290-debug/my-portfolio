import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub
} from "react-icons/fa"

function Skills() {
  return (
    <section className="skills" id="skills">

      <h2>My Skills</h2>

      <div className="skills-container">

        <div className="skill-card">
          <FaHtml5 className="skill-icon html" />
          <h3>HTML5</h3>
        </div>

        <div className="skill-card">
          <FaCss3Alt className="skill-icon css" />
          <h3>CSS3</h3>
        </div>

        <div className="skill-card">
          <FaJs className="skill-icon js" />
          <h3>JavaScript</h3>
        </div>

        <div className="skill-card">
          <FaReact className="skill-icon react" />
          <h3>React</h3>
        </div>

        <div className="skill-card">
          <FaGitAlt className="skill-icon git" />
          <h3>Git</h3>
        </div>

        <div className="skill-card">
          <FaGithub className="skill-icon github" />
          <h3>GitHub</h3>
        </div>

      </div>

    </section>
  )
}

export default Skills