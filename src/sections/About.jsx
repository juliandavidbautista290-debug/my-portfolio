import Reveal from "../components/Reveal";

function About() {
  return (
    <Reveal>
      <section className="about" id="about">

        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about-container">

          
          <div className="about-text">

            <p className="about-intro">
              I am a <span>Frontend Developer</span> passionate about building
              modern and animated web experiences.
            </p>

            <div className="about-grid">

              <div className="about-card">
                <h3>⚡ Development</h3>
                <p>React, JavaScript, HTML, CSS</p>
              </div>

              <div className="about-card">
                <h3>🎯 Focus</h3>
                <p>UI/UX + Animations + Clean Code</p>

              </div>

               <div className="about-card">
                <h3>🧠 Philosophy</h3>
                <p>
                  I believe in building clean, fast and meaningful web experiences
                  that feel alive.
                </p>
                
              </div>

            </div>

          </div>

          
          <div className="about-image">

            <div className="image-frame">
              <img
                src="/cyberpunk-me.png"
                alt="Cyberpunk Developer"
              />
            </div>

          </div>

        </div>

      </section>
    </Reveal>
  );
}

export default About;