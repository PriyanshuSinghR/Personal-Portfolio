import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Transition from '../components/Transition';
import { toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICES,
        process.env.REACT_APP_TEMPLATE,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
          toast.success('Successfully Sended');
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  const [text] = useTypewriter({
    words: [
      `Submit the form below or shoot me an email -
    priyanshusingh.gh@outlook.com`,
    ],
    loop: 1,
  });

  return (
    <div
      name="contact"
      className="w-full h-screen text-slate-700 dark:text-gray-300 bg-white dark:bg-[#0a192f] flex justify-center items-center p-4 pt-32"
    >
      <Transition />
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-violet-600">
            Contact
          </p>
          <p className="py-4">
            // <span>{text}</span>
            <Cursor cursorColor="white" />
          </p>
        </div>
        <input
          className="bg-slate-200 dark:bg-slate-800 p-2 "
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-slate-200  dark:bg-slate-800"
          type="email"
          placeholder="Email"
          name="email"
          required
        />

        <textarea
          className="bg-slate-200  dark:bg-slate-800 p-2"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>

        <button
          type="submit"
          value="Send"
          className="text-black dark:text-white border-2 hover:bg-violet-600 hover:border-violet-600  border-black dark:border-white px-4 py-3 my-8 mx-auto flex items-center"
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
