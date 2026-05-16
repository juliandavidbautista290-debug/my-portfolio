import { useRef } from "react"

function MagneticButton({ children }) {

  const buttonRef = useRef(null)

  const handleMouseMove = (e) => {

    const button = buttonRef.current

    const rect = button.getBoundingClientRect()

    const x =
      e.clientX - rect.left - rect.width / 2

    const y =
      e.clientY - rect.top - rect.height / 2

    button.style.transform =
      `translate(${x * 0.2}px, ${y * 0.2}px)`
  }

  const handleMouseLeave = () => {

    buttonRef.current.style.transform =
      "translate(0px, 0px)"
  }

  return (

    <div
      ref={buttonRef}
      className="magnetic-button"

      onMouseMove={handleMouseMove}

      onMouseLeave={handleMouseLeave}
    >

      {children}

    </div>
  )
}

export default MagneticButton