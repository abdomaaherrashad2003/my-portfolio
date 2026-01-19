import React, { useRef } from 'react';
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from '@emailjs/browser';

const ContactData = [
  {
    id: 1,
    icon: <MdOutlineMail />,
    title: "Email",
    info: "abdomaaherrashad2003@gmail.com",
    link: "mailto:abdomaaherrashad2003@gmail.com"
  },
  {
    id: 2,
    icon: <RiMessengerLine />,
    title: "Messenger",
    info: "@abd02003.7",
    link: "https://m.me/abdo2003.7"
  },
  {
    id: 3,
    icon: <BsWhatsapp />,
    title: "WhatsApp",
    info: "015203117927",
    link: "https://wa.me/201503117927"
  }
];

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_jls6y7a',
      'template_8qico89',
      form.current,
      'aVAOlcBiCmh8bMLcf'
    )
    .then((result) => {
      console.log(result.text);
      alert("Message sent successfully ✅");
      e.target.reset();
    })
    .catch((error) => {
      console.error(error);
      alert(error.text || "Something went wrong ❌");
    });
  };

  return (
    <section className='contact' id='contact'>
      <div className="top_section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className='container contact_container'>
        <div className='contact_options'>
          {ContactData.map(({ id, icon, info, link, title }) => (
            <article key={id} className='contact_option'>
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target='_blank' rel="noreferrer">
                Send Message
              </a>
            </article>
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Your Email'
            required
          />
          <textarea
            name='message'
            rows='10'
            placeholder='Your Message'
            required
          />
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
