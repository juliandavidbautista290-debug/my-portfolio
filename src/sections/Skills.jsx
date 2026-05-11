function skills() {
    
    const skills = [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Angular",
        "Git",
        "GitHub",
        "Responsive Desing"
    ]

    return (
        <section className="skills">

         <h2>My Skills</h2>

         <div className="skills-container">

               {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}

         </div>

        </section>
    )
}

export default skills