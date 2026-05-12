import type { FunctionalComponent } from "preact";
import { useState, useEffect } from "preact/hooks";
import { route } from "preact-router";
import "../styles/Contact.css";

const Contact: FunctionalComponent = () => {
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") route("/");
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleChange = (e: Event) => {
    const target = e.target as
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement;

    setForm((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div class="ct-viewport">
      <div class="a-topbar">
        <button class="a-back-btn" onClick={() => route("/")}>
          <span class="a-back-key">ESC</span>
          <span class="a-back-label">BACK</span>
        </button>
      </div>

      <div class="ct-header">
        <div class="ct-header-top">
          <span class="ct-tag">GET IN TOUCH</span>
          <div class="ct-header-line" />
        </div>
        <h1 class="ct-title">
          CONTACT
          <br />
          US.
        </h1>
        <p class="ct-subtitle">
          Have a question or want to collaborate? We'd love to hear from you.
        </p>
      </div>

      <div class="ct-grid">
        <div class="ct-info-panel">
          <div class="ct-info-header">
            <span class="ct-info-header-label">REACH US VIA</span>
          </div>

          <div class="ct-info-block">
            <span class="ct-info-label">EMAIL</span>
            <span class="ct-info-value">nexus@hackclub.com</span>
            <div class="ct-info-dot" />
          </div>

          <div class="ct-info-block">
            <span class="ct-info-label">DISCORD</span>
            <span class="ct-info-value">discord.gg/nexushack</span>
            <div class="ct-info-dot" />
          </div>

          <div class="ct-info-block">
            <span class="ct-info-label">LOCATION</span>
            <span class="ct-info-value">Global · Remote First</span>
            <div class="ct-info-dot" />
          </div>

          <div class="ct-info-block ct-info-block--last">
            <span class="ct-info-label">RESPONSE TIME</span>
            <span class="ct-info-value">Within 48 Hours</span>
          </div>

          <div class="ct-status-bar">
            <span class="ct-status-dot" />
            <span class="ct-status-text">TEAM IS ONLINE</span>
          </div>
        </div>

        <div class="ct-form-panel">
          <div class="ct-form-header">
            <span class="ct-form-header-label">SEND A MESSAGE</span>
            <span class="ct-form-step">01 / 01</span>
          </div>

          {submitted ? (
            <div class="ct-success">
              <div class="ct-success-badge">
                <span class="ct-success-icon">✓</span>
              </div>
              <div class="ct-success-text">
                <h2>MESSAGE SENT!</h2>
                <p>We'll get back to you within 48 hours.</p>
              </div>
              <button
                class="ct-btn"
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", subject: "", message: "" });
                }}
              >
                SEND ANOTHER →
              </button>
            </div>
          ) : (
            <form class="ct-form" onSubmit={handleSubmit}>
              <div class="ct-row">
                <div
                  class={`ct-field${focused === "name" ? " ct-field--focused" : ""}`}
                >
                  <label class="ct-label">
                    <span class="ct-label-num">01</span>YOUR NAME
                  </label>
                  <input
                    class="ct-input"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    required
                    onInput={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <div
                  class={`ct-field${focused === "email" ? " ct-field--focused" : ""}`}
                >
                  <label class="ct-label">
                    <span class="ct-label-num">02</span>EMAIL ADDRESS
                  </label>
                  <input
                    class="ct-input"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    required
                    onInput={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                  />
                </div>
              </div>

              <div
                class={`ct-field${focused === "subject" ? " ct-field--focused" : ""}`}
              >
                <label class="ct-label">
                  <span class="ct-label-num">03</span>SUBJECT
                </label>
                <select
                  class="ct-input ct-select"
                  name="subject"
                  value={form.subject}
                  required
                  onChange={handleChange}
                  onFocus={() => setFocused("subject")}
                  onBlur={() => setFocused(null)}
                >
                  <option value="" disabled>
                    Pick a topic...
                  </option>
                  <option value="general">General Inquiry</option>
                  <option value="event">Event Partnership</option>
                  <option value="collab">Collaboration</option>
                  <option value="press">Press & Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div
                class={`ct-field${focused === "message" ? " ct-field--focused" : ""}`}
              >
                <label class="ct-label">
                  <span class="ct-label-num">04</span>MESSAGE
                </label>
                <textarea
                  class="ct-input ct-textarea"
                  name="message"
                  placeholder="What's on your mind?"
                  value={form.message}
                  required
                  rows={5}
                  onInput={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <div class="ct-form-footer">
                <p class="ct-privacy-note">
                  We never share your information with third parties.
                </p>
                <button class="ct-btn" type="submit">
                  SEND MESSAGE →
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
