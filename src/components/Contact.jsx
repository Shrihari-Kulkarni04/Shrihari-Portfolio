
import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSending(true);
    setSubmitStatus("");
    setSubmitError(false);

    try {
      const response = await fetch(
        "https://formspree.io/f/xkjjndwn",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Message submission failed");
      }

      setSubmitStatus(
        "Message sent successfully! Thanks for reaching out."
      );

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitError(true);
      setSubmitStatus(
        "Unable to send your message. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <span className="section-eyebrow">
          09 / CONTACT
        </span>

        <div className="contact-heading">
          <h2>
            Let's Build Something <span>Great.</span>
          </h2>

          <p>
            Have a project idea, opportunity, or just want to connect?
            My inbox is open.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact information */}
          <div className="contact-info">
            <span className="contact-kicker">GET IN TOUCH</span>

            <h3>Let's start a conversation.</h3>

            <p>
              I'm interested in data analytics, AI, Python development,
              and opportunities to build meaningful technology.
            </p>

            <a
              className="contact-detail"
              href="mailto:YOUR_EMAIL@example.com"
            >
              <span className="contact-icon">@</span>

              <span>
                <small>Email</small>
                <strong>YOUR_EMAIL@example.com</strong>
              </span>

              <span className="contact-arrow">↗</span>
            </a>

            <a
              className="contact-detail"
              href="https://github.com/Shrihari-Kulkarni04"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-icon">GH</span>

              <span>
                <small>GitHub</small>
                <strong>Explore my repositories</strong>
              </span>

              <span className="contact-arrow">↗</span>
            </a>

            <a
              className="contact-detail"
              href="https://www.linkedin.com/in/shrihari-kulkarni-aa57b931b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-icon">in</span>

              <span>
                <small>LinkedIn</small>
                <strong>Connect professionally</strong>
              </span>

              <span className="contact-arrow">↗</span>
            </a>
          </div>

          {/* Contact form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-heading">
              <h3>Send a message</h3>
              <span>I'd love to hear from you.</span>
            </div>

            <div className="contact-form-row">
              <label>
                Your Name

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </label>

              <label>
                Your Email

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </label>
            </div>

            <label>
              Subject

              <input
                type="text"
                name="subject"
                placeholder="What's this about?"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Message

              <textarea
                name="message"
                placeholder="Tell me about your idea..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>

            <button
              type="submit"
              className="contact-submit"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message"}

              {!sending && <span>↗</span>}
            </button>

            {submitStatus && (
              <p
                className={`contact-form-note ${
                  submitError ? "contact-error" : "contact-success"
                }`}
                role="status"
                aria-live="polite"
              >
                {submitStatus}
              </p>
            )}

            <p className="contact-form-note">
              Your details will be used to respond to your message.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
