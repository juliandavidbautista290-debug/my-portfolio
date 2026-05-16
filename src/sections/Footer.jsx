import {
  FaGithub,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa"

function Footer() {

  return (

    <footer className="footer">

      <h2>
        David.Dev
      </h2>

      <p>
        Frontend Developer | React & JavaScript
      </p>

      <div className="footer-icons">

        <a
          href="https://github.com/juliandavidbautista290-debug"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>

      </div>

      <span>
        © 2026 Julian David | Frontend Developer
      </span>

    </footer>
  )
}

export default Footer