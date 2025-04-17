import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICES,
        process.env.REACT_APP_TEMPLATE,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          toast.success("Message sent successfully!");
          setFormState({ name: "", email: "", message: "" });
          setSending(false);
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Please try again.");
          setSending(false);
        }
      );
  };

  const [text] = useTypewriter({
    words: [
      `Submit the form below or shoot me an email -
    priyanshusingh.gh@outlook.com`,
    ],
    loop: 1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#8b5cf6",
      color: "white",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
        yoyoEase: "easeOut",
        repeatDelay: 0.8,
      },
    },
    tap: { scale: 0.95 },
    sending: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 0.6,
        repeat: Infinity,
      },
    },
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen text-slate-700 dark:text-gray-300 bg-white dark:bg-[#0a192f] flex justify-center items-center p-4 pt-20"
    >
      <motion.div
        className="relative z-10 max-w-[600px] w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-full backdrop-blur-sm bg-white/5 dark:bg-slate-900/20 p-8 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700/30"
          variants={containerVariants}
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-violet-600">
              Contact
            </p>
            <p className="py-4 text-slate-600 dark:text-gray-400">
              // <span>{text}</span>
              <Cursor cursorColor="#8b5cf6" />
            </p>
          </div>

          <div className="space-y-4">
            <motion.div variants={itemVariants}>
              <motion.input
                className="w-full bg-slate-100 dark:bg-slate-800 p-3 rounded-md border border-transparent focus:border-violet-500 focus:outline-none transition-all duration-300 shadow-sm"
                type="text"
                placeholder="Name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.input
                className="w-full bg-slate-100 dark:bg-slate-800 p-3 rounded-md border border-transparent focus:border-violet-500 focus:outline-none transition-all duration-300 shadow-sm"
                type="email"
                placeholder="Email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.textarea
                className="w-full bg-slate-100 dark:bg-slate-800 p-3 rounded-md border border-transparent focus:border-violet-500 focus:outline-none transition-all duration-300 shadow-sm"
                name="message"
                rows="8"
                placeholder="Message"
                value={formState.message}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center pt-4"
            >
              <motion.button
                type="submit"
                value="Send"
                className="text-black dark:text-white border-2 border-black dark:border-white px-8 py-3 rounded-md font-medium relative overflow-hidden group flex items-center space-x-2"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                animate={sending ? "sending" : "visible"}
                disabled={sending}
              >
                {sending ? (
                  <>
                    <motion.svg
                      className="animate-spin h-5 w-5 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </motion.svg>
                    Sending...
                  </>
                ) : (
                  <span className="z-10">Let's Collaborate</span>
                )}
                <motion.span className="absolute bottom-0 left-0 w-0 h-full bg-violet-600 -z-10 group-hover:w-full transition-all duration-300"></motion.span>
              </motion.button>
            </motion.div>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
