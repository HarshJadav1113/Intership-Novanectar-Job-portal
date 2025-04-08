import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "YOUR_SERVICE_ID",   // From EmailJS dashboard
      "YOUR_TEMPLATE_ID",  // From EmailJS dashboard
      form.current,
      "YOUR_PUBLIC_KEY"    // From EmailJS dashboard
    ).then(
      () => alert("Message sent successfully!"),
      (error) => alert(`Error: ${error.text}`)
    );
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Name" required />
        <input type="email" name="user_email" placeholder="Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;