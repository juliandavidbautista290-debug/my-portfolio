import { useEffect } from "react"

function MouseParallax() {

  useEffect(() => {

    const handleMouseMove = (e) => {

      const layers = document.querySelectorAll(".parallax-layer")

      layers.forEach((layer) => {

        const speed = layer.getAttribute("data-speed")

        const x = (window.innerWidth - e.pageX * speed) / 100

        const y = (window.innerHeight - e.pageY * speed) / 100

        layer.style.transform =
          `translate(${x}px, ${y}px)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }

  }, [])

  return (

    <div className="parallax-container">

      <div
        className="parallax-layer layer1"
        data-speed="2"
      ></div>

      <div
        className="parallax-layer layer2"
        data-speed="4"
      ></div>

      <div
        className="parallax-layer layer3"
        data-speed="6"
      ></div>

    </div>

  )
}

export default MouseParallax