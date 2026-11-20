
import { useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import emailjs from "@emailjs/browser";

import ContactExperience from "../components/Models/contact/ContactExperience";

gsap.registerPlugin(ScrollTrigger);

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const submittingRef = useRef(false);

  const [form, setForm] = useState<ContactForm>(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".contact-heading",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".contact-panel",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-content",
            start: "top 82%",
            once: true,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status) setStatus(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submittingRef.current || !formRef.current) return;

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message:
          "The contact service is not configured yet. Please try again later.",
      });
      return;
    }

    submittingRef.current = true;
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey,
      );

      setForm(initialForm);
      formRef.current.reset();

      setStatus({
        type: "success",
        message: "Message sent successfully. Thank you for reaching out!",
      });
    } catch (error) {
      console.error("EmailJS submission failed:", error);

      setStatus({
        type: "error",
        message:
          "Your message could not be sent. Please try again in a moment.",
      });
    } finally {
      submittingRef.current = false;
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="contact-section"
    >
      <div className="contact-inner">
        <header className="contact-heading">
          <span className="contact-eyebrow">
            07 / START A CONVERSATION
          </span>

          <div className="contact-heading-content">
            <h2>
              Have an idea?
              <br />
              <span>Let's build something.</span>
            </h2>

            <p>
              Whether it's a software project, an interesting
              opportunity, or a conversation about technology,
              I'd be glad to hear from you.
            </p>
          </div>
        </header>

        <div className="contact-content">
          <div className="contact-panel contact-form-panel">
            <div className="contact-panel-heading">
              <span>01 / SEND A MESSAGE</span>
              <span className="contact-online-indicator">
                <i />
                OPEN TO CONNECTIONS
              </span>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <div className="contact-field">
                <label htmlFor="contact-name">YOUR NAME</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">EMAIL ADDRESS</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">YOUR MESSAGE</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me what you're thinking about..."
                  rows={5}
                  required
                />
              </div>

              {status && (
                <p
                  className={`contact-status contact-status--${status.type}`}
                  role="status"
                >
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                className="contact-submit"
                disabled={loading}
              >
                <span>{loading ? "SENDING MESSAGE..." : "SEND MESSAGE"}</span>
                <span aria-hidden="true">
                  {loading ? "..." : "↗"}
                </span>
              </button>
            </form>

            <div className="contact-socials">
              <span>FIND ME ELSEWHERE</span>

              <div>
                <a
                  href="https://github.com/Bernard-Mokoana"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/bernard-mokoana-680519228/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          <div className="contact-panel contact-visual-panel">
            <div className="contact-panel-heading">
              <span>02 / THE NEXT CONNECTION</span>
              <span>BM / 2026</span>
            </div>

            <div className="contact-experience-frame">
              <ContactExperience />
            </div>

            {/* <div className="contact-visual-caption">
              <span>CURIOUS BY NATURE.</span>
              <span>ENGINEERED BY INTENTION.</span>
            </div> */}
          </div>
        </div>

        {/* <div className="contact-bottom">
          <span>THE CURIOUS MIND / PORTFOLIO</span>
          <span>BUILT WITH INTENTION © 2026</span>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
