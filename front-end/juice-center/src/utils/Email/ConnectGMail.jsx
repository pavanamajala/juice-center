import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


export const ConnectGMail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    console.log(form.current);

    emailjs.sendForm('service_ohtyzmq', 'template_ingc6ze', form.current, 'WrUZpU19S55_uYEjN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};