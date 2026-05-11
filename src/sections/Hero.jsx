import profile from "../assets/profile.png"

function Hero () {
    return (
        <section className="hero">

            <div className="hero-content">

              <h3>Hello, I'm</h3>

              <h1>Julian David</h1>

              <h2>Frontend Developer</h2>

              <p>
            I build modern, responsive and attractive web interfaces
            using JavaScript, React and frontend technologies.
              </p>

              <div className="hero-buttons">

                <button className="btn-outline">
                    Contact Me
                </button>
                
              </div>

            </div>

            <div className="hero-image">

                <img src={profile} alt="profile" />

            </div>

        </section>
    )
}

export default Hero