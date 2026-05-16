import ProgressBar from "./ProgressBar";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

function Stats() {
  return (
    <section className="stats" id="stats">
      <h2 className="section-title">
        Mis <span>Stats Pro</span>
      </h2>

      <div className="stats-bars">
        <ProgressBar label="HTML5" percentage={95} icon={FaHtml5} color="#e34c26" />
        <ProgressBar label="CSS3" percentage={92} icon={FaCss3Alt} color="#264de4" />
        <ProgressBar label="JavaScript" percentage={88} icon={FaJs} color="#f7df1e" />
        <ProgressBar label="React" percentage={85} icon={FaReact} color="#61dafb" />
        <ProgressBar label="Git" percentage={80} icon={FaGitAlt} color="#f1502f" />
        <ProgressBar label="GitHub" percentage={78} icon={FaGithub} color="#ffffff" />
      </div>
    </section>
  );
}

export default Stats;