import { useState } from "react";
import "./booking.css";

const FORM_NAME = "booking-request";

const encodeFormData = (data) => new URLSearchParams(data).toString();

const getBookingPayload = (formElement) => {
  const formData = new FormData(formElement);

  return Object.fromEntries(
    Array.from(formData.entries(), ([key, value]) => [
      key,
      typeof value === "string" ? value.trim() : value,
    ]),
  );
};

const Booking = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const payload = getBookingPayload(form);
    const endDateInput = form.elements.namedItem("end-date");

    endDateInput?.setCustomValidity("");

    if (payload["bot-field"]) return;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (payload["end-date"] && payload["end-date"] < payload["start-date"]) {
      endDateInput?.setCustomValidity("The end date must be after the start date.");
      endDateInput?.reportValidity();
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({
          "form-name": FORM_NAME,
          ...payload,
        }),
      });

      if (!response.ok) throw new Error("Booking request failed");

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="booking-page layout__container">
      <div className="booking-hero">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/booking-hero-mobile.jpg"
          />
          <img
            src="/booking-hero-desktop.jpg"
            alt="Mosadoluwa Fasasi speaking at Web3Lagos Conference"
            width="1440"
            height="1800"
            decoding="async"
            fetchPriority="high"
          />
        </picture>
      </div>

      <header className="booking-intro">
        <h1>Book Mosadoluwa Fasasi</h1>
        <p>
          Mosadoluwa Fasasi works with individuals and teams across product
          strategy, operations, growth, research infrastructure, project
          delivery, and selected public engagements.
        </p>
        <p>
          The form below helps him understand your exact need. Kindly fill it
          out patiently, and you will hear from him within 24 hours.
        </p>
      </header>

      <section className="booking-section" aria-label="Booking request">
        <form
          className="booking-form"
          name={FORM_NAME}
          method="POST"
          action="/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value={FORM_NAME} />
          <p className="booking-honeypot" aria-hidden="true">
            <label>
              Do not fill this out:
              <input name="bot-field" tabIndex="-1" autoComplete="off" />
            </label>
          </p>

          <div className="booking-form-grid">
            <label>
              <span>Name</span>
              <input type="text" name="name" autoComplete="name" required />
            </label>

            <label>
              <span>Phone number</span>
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                inputMode="tel"
                required
              />
            </label>

            <label>
              <span>Email</span>
              <input type="email" name="email" autoComplete="email" required />
            </label>

            <label>
              <span>Organisation/project, with public profile</span>
              <input
                type="text"
                name="organization-project-profile"
                autoComplete="organization"
                required
              />
            </label>

            <label className="booking-field-wide">
              <span>What would you like to engage me for?</span>
              <select name="engagement-type" defaultValue="" required>
                <option value="" disabled>Select an engagement</option>
                <option value="product-strategy-operations-growth">
                  Product strategy, operations and growth
                </option>
                <option value="research-infrastructure">Research infrastructure</option>
                <option value="project-delivery">Project delivery</option>
                <option value="speaking">Speaking, panels or podcasts</option>
                <option value="workshop">Workshop or facilitation</option>
                <option value="writing">Writing or editorial work</option>
                <option value="partnership">Partnership or collaboration</option>
                <option value="other">Something else</option>
              </select>
            </label>

            <label className="booking-field-wide">
              <span>Tell me more about the request</span>
              <textarea name="request-details" rows="5" required />
            </label>

            <label className="booking-field-wide">
              <span>What outcome are you hoping for?</span>
              <textarea name="desired-outcome" rows="3" required />
            </label>

            <label className="booking-field-wide">
              <span>What budget have you set aside?</span>
              <input type="text" name="budget" required />
              <small>Include the amount and currency.</small>
            </label>

            <label>
              <span>Preferred start date</span>
              <input type="date" name="start-date" required />
            </label>

            <label>
              <span>End date (if applicable)</span>
              <input type="date" name="end-date" />
            </label>

            <label>
              <span>Format</span>
              <select name="format" defaultValue="" required>
                <option value="" disabled>Select a format</option>
                <option value="remote">Remote</option>
                <option value="in-person">In person</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </label>

            <label>
              <span>Location</span>
              <input
                type="text"
                name="location"
                autoComplete="address-level2"
                required
              />
            </label>

          </div>

          <label className="booking-consent">
            <input type="checkbox" name="consent" value="yes" required />
            <span>
              I consent to being contacted by email or phone about this request
              using the details provided.
            </span>
          </label>

          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send booking request →"}
          </button>

          <p className="booking-status" role="status" aria-live="polite">
            {status === "sent" &&
              "Received. Thank you for the context. I’ll be in touch."}
            {status === "error" &&
              "Something slipped. Please try again in a moment."}
          </p>
        </form>
      </section>
    </main>
  );
};

export default Booking;
