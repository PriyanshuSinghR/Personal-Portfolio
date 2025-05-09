import React from "react";
import { motion } from "framer-motion";
import { transitionVarient } from "../data/animation";

const PageTransition = ({ children }) => (
  <div>
    <motion.div
      className="fixed top-0 bottom-0 right-full w-screen h-screen z-100 bg-violet-900 dark:bg-slate-900"
      variants={transitionVarient}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ delay: 0, duration: 0.4, ease: "easeInOut" }}
    />
    <motion.div
      className="fixed top-0 bottom-0 right-full w-screen h-screen z-90 bg-violet-800 dark:bg-slate-800"
      variants={transitionVarient}
      initial="initial"
      animate="animate"
      // exit="exit"
      transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
    />
    <motion.div
      className="fixed top-0 bottom-0 right-full w-screen h-screen z-80 bg-violet-700 dark:bg-slate-700"
      variants={transitionVarient}
      initial="initial"
      animate="animate"
      // exit="exit"
      transition={{ delay: 0.4, duration: 0.4, ease: "easeInOut" }}
    />
    {children}
  </div>
);

export default PageTransition;
