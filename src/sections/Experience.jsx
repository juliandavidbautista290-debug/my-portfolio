function Experience() {
  const journey = [
    {
      year: "2023",
      title: "Started Programming",
      description:
        "Began learning programming fundamentals, computer systems and web development through personal practice and online courses.",
    },
    {
      year: "2024",
      title: "Frontend Development Journey",
      description:
        "Focused on HTML, CSS and JavaScript, building responsive interfaces and improving UI/UX design skills.",
    },
    {
      year: "2025",
      title: "React & Modern Web Projects",
      description:
        "Started developing modern applications with React, APIs and interactive frontend experiences using animations and responsive layouts.",
    },
    {
      year: "2026",
      title: "Building Professional Portfolio",
      description:
        "Creating advanced frontend projects, improving React skills and building a professional portfolio focused on modern UI design and real-world development.",
    },
  ];

  return (
    <section className="experience" id="experience">
      <h2 data-aos="fade-up">My Journey</h2>

      <div className="timeline">
        {journey.map((item, index) => (
          <div
            className="timeline-item"
            key={`${item.year}-${index}`}
            data-aos="fade-up"
          >
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;