import Reveal from "../components/Reveal"

import angularCert from "../assets/certificates/angular-componentes-cert.png"
import arquitecturaBackendCert from "../assets/certificates/arquitectura-backend-cert.png"
import concurrenciaCert from "../assets/certificates/arquitectura-de-alta-concurrencia-cert.png"
import frontendCert from "../assets/certificates/frontend-developer-cert.png"
import jsCert from "../assets/certificates/fundamentos-javascript-cert.png"
import nodeCert from "../assets/certificates/fundamentos-nodejs-cert.png"
import phpCert from "../assets/certificates/fundamentos-php-cert.png"
import htmlCssCert from "../assets/certificates/html-css-cert.png"
import webCert from "../assets/certificates/introduccion-a-la-web-historia-y-fundamentos-de-internet-cert.png"
import deployCert from "../assets/certificates/introduccion-al-despliegue-de-aplicaciones-cert.png"
import backendCert from "../assets/certificates/introduccion-desarrollo-backend-cert.png"
import vueCert from "../assets/certificates/introduccion-y-fundamentos-vuejs-cert.png"
import javaCert from "../assets/certificates/java-cert.png"
import domCert from "../assets/certificates/manipulacion-del-dom-javascript-cert.png"
import phpAvanzadoCert from "../assets/certificates/php-avanzado-cert.png"
import reactAvanzadoCert from "../assets/certificates/reactjs-avanzado-cert.png"
import reactCert from "../assets/certificates/reactjs-cert.png"

function Certificates() {

  const certificates = [

    {
      title: "Angular Components",
      image: angularCert
    },

    {
      title: "Backend Architecture",
      image: arquitecturaBackendCert
    },

    {
      title: "High Concurrency Architecture",
      image: concurrenciaCert
    },

    {
      title: "Frontend Developer",
      image: frontendCert
    },

    {
      title: "JavaScript Fundamentals",
      image: jsCert
    },

    {
      title: "Node.js Fundamentals",
      image: nodeCert
    },

    {
      title: "PHP Fundamentals",
      image: phpCert
    },

    {
      title: "HTML & CSS",
      image: htmlCssCert
    },

    {
      title: "Introduction to Web",
      image: webCert
    },

    {
      title: "Application Deployment",
      image: deployCert
    },

    {
      title: "Backend Development",
      image: backendCert
    },

    {
      title: "Vue.js Fundamentals",
      image: vueCert
    },

    {
      title: "Java",
      image: javaCert
    },

    {
      title: "DOM Manipulation",
      image: domCert
    },

    {
      title: "Advanced PHP",
      image: phpAvanzadoCert
    },

    {
      title: "Advanced React",
      image: reactAvanzadoCert
    },

    {
      title: "React.js",
      image: reactCert
    }

  ]

  return (

    <Reveal>

      <section
        className="certificates"
        id="certificates"
      >

        <h2 className="section-title">
          My <span>Certificates</span>
        </h2>

        <div className="certificates-container">

          {certificates.map((cert, index) => (

            <div
              className="certificate-card"
              key={index}
            >

              <img
                src={cert.image}
                alt={cert.title}
              />

              <h3>{cert.title}</h3>

            </div>

          ))}

        </div>

      </section>

    </Reveal>

  )
}

export default Certificates