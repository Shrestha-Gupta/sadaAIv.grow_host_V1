import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ScrollReveal from "../components/ui/ScrollReveal";
import CubeReveal from "../components/ui/CubeReveal";

const serviceOptions = [
  "AI Automation and Workflows",
  "Digital Solutions and Web Platforms",
  "Custom Technology Solutions",
  "Campaign Planning and Execution",
  "Social Media and Digital Outreach",
  "Influencer and Community Management",
  "Data, Monitoring and Performance",
  "Not sure - let us discuss",
];

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const errs = {};
    if (!data.name?.trim()) errs.name = "Name is required";
    if (!data.email?.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = "Enter a valid email";
    if (!data.message?.trim()) errs.message = "Please describe your project";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const data = Object.fromEntries(new FormData(form));
    const errs = validate(data);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setStatus("sending");
    try {
      await emailjs.sendForm("service_sadaAIv.grow", "template_peed988", form, "qz0oEE_3CXvyOxIxR");
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <main className="page-enter">
      <section className="contact-hero">
        <div className="wrap">
          <ScrollReveal>
            <div className="section-label">Contact</div>
            <h1>Get in <em>touch.</em></h1>
            <p style={{ color: "var(--ink-2)", fontSize: 17, maxWidth: "46ch", marginTop: 16 }}>
              Tell us what you are trying to get done. We will come back with how we would structure and execute it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <CubeReveal>
        <section>
          <div className="wrap contact-inner">
            <ScrollReveal>
              <div className="contact-info">
                <h3>Let us talk about your project.</h3>
                <p style={{ color: "var(--ink-2)", fontSize: 15, lineHeight: 1.7, marginBottom: 32, maxWidth: "38ch" }}>
                  We work with startups, NGOs, political campaigns and businesses. If you have a challenge that needs technology and execution, we want to hear about it.
                </p>
                <div className="contact-points">
                  {[
                    { key: "Email", val: "sadaaiv.grow@gmail.com" },
                    { key: "Response time", val: "Within 1-2 business days" },
                    { key: "Based in", val: "India -- working remotely worldwide" },
                    { key: "Availability", val: "Open to new projects" },
                  ].map(({ key, val }) => (
                    <div key={key} className="contact-pt">
                      <span className="contact-pt-key">{key}</span>
                      <span className="contact-pt-val">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="contact-form-wrap">
                <h3>Send us a message</h3>
                {status === "success" ? (
                  <div style={{ textAlign: "center", padding: "48px 0" }}>
                    <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--accent-light)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", color: "var(--accent)", fontSize: 22 }}>&#10003;</div>
                    <h4 style={{ marginBottom: 8 }}>Message sent!</h4>
                    <p style={{ color: "var(--ink-2)", fontSize: 15 }}>Thanks for reaching out. We will be in touch within 1-2 business days.</p>
                    <button className="btn btn-outline" style={{ marginTop: 24, fontSize: 13 }} onClick={() => setStatus("idle")}>Send another message</button>
                  </div>
                ) : (
                  <form ref={formRef} className="form-inner" onSubmit={handleSubmit} noValidate>
                    <div className="form-row">
                      <div className="field">
                        <label htmlFor="name">Name *</label>
                        <input id="name" name="name" type="text" placeholder="Your name" />
                        {errors.name && <span className="field-error">{errors.name}</span>}
                      </div>
                      <div className="field">
                        <label htmlFor="org">Organisation</label>
                        <input id="org" name="organisation" type="text" placeholder="Company / org" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="field">
                        <label htmlFor="email">Email *</label>
                        <input id="email" name="email" type="email" placeholder="you@company.com" />
                        {errors.email && <span className="field-error">{errors.email}</span>}
                      </div>
                      <div className="field">
                        <label htmlFor="phone">Phone (optional)</label>
                        <input id="phone" name="phone" type="tel" placeholder="+91 00000 00000" />
                      </div>
                    </div>
                    <div className="field">
                      <label htmlFor="service">Service interested in</label>
                      <select id="service" name="service">
                        <option value="">Select a service...</option>
                        {serviceOptions.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="field">
                      <label htmlFor="message">What are you trying to build? *</label>
                      <textarea id="message" name="message" placeholder="A short description of your project or challenge..." />
                      {errors.message && <span className="field-error">{errors.message}</span>}
                    </div>
                    <div className="form-submit">
                      <button type="submit" className="btn btn-dark" disabled={status === "sending"} style={{ opacity: status === "sending" ? 0.7 : 1 }}>
                        {status === "sending" ? "Sending..." : "Send message"}
                      </button>
                      {status === "error" && <span className="form-status error">Something went wrong. Email us directly.</span>}
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </section>
      </CubeReveal>
    </main>
  );
}