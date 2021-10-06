import React, { FC } from "react"
import SEO from "../components/SEO"
const Contact: FC = () => {
  return (
    <>
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form>
            <div className="form-group">
              <input 
              type="text"
              name="name"
              placeholder="Your Name"
              className="form-control" />
              <input 
              type="email"
              name="email"
              placeholder="Your Email"
              className="form-control" />
              <textarea
              name="message"
              rows={5}
              placeholder="Type Here..."
              className="form-control">
              </textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>
    </>
  )
}

export default Contact;
