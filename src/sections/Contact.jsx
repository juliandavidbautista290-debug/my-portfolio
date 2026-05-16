import { useRef } from "react"
import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"
import Reveal from "../components/Reveal"

function Contact() {

  const form = useRef()

  const sendEmail = (e) => {

    e.preventDefault()

    emailjs.sendForm(
      "service_6a5clch",
      "template_6xw7qs7",
      form.current,
      "ToFkbPgyKMabYFUkp"
    )

    .then(() => {

      toast.success("Message Sent Successfully 🚀")

    })

    .catch((error) => {

      console.log(error)

      alert("Something went wrong ❌")

    })

    e.target.reset()

  }

  return (

    <Reveal>

    <section
      className="contact"
      id="contact"
      
    >

                        <h2 className="section-title">
          Contact <span>Me</span>
                         </h2>


      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
      >

        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
        />

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>

    </Reveal>
  )
}

export default Contact