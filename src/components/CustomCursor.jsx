import { useEffect, useState } from "react"

function CustomCursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {

    const moveCursor = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    const handleHover = () => {
      setIsHovering(true)
    }

    const handleLeave = () => {
      setIsHovering(false)
    }

    const hoverElements =
      document.querySelectorAll(
        "button, a, .project-card"
      )

    hoverElements.forEach((el) => {

      el.addEventListener(
        "mouseenter",
        handleHover
      )

      el.addEventListener(
        "mouseleave",
        handleLeave
      )
    })

    window.addEventListener(
      "mousemove",
      moveCursor
    )

    return () => {

      window.removeEventListener(
        "mousemove",
        moveCursor
      )

      hoverElements.forEach((el) => {

        el.removeEventListener(
          "mouseenter",
          handleHover
        )

        el.removeEventListener(
          "mouseleave",
          handleLeave
        )
      })
    }

  }, [])

  return (

    <div
      className={
        isHovering
          ? "custom-cursor active"
          : "custom-cursor"
      }

      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    ></div>

  )
}

export default CustomCursor