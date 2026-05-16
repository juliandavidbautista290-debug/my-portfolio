import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

function ParticlesBackground() {

  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (

    <Particles
      id="tsparticles"
      init={particlesInit}

      options={{

        background: {
          color: {
            value: "transparent",
          },
        },

        fpsLimit: 120,

        particles: {

          color: {
            value: "#ffa500",
          },

          links: {
            color: "#ffa500",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },

          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            speed: 1.5,
          },

          number: {
            density: {
              enable: true,
            },
            value: 50,
          },

          opacity: {
            value: 0.3,
          },

          shape: {
            type: "circle",
          },

          size: {
            value: { min: 1, max: 5 },
          },

        },

        detectRetina: true,
      }}
    />
  )
}

export default ParticlesBackground