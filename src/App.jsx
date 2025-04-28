import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import { ThemeHandler } from "./components/ThemeHandler";
import PageTransition from "./components/Transition";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/skills", element: <Skills /> },
  { path: "/experience", element: <Experience /> },
  { path: "/work", element: <Work /> },
  { path: "/contact", element: <Contact /> },
];

function App() {
  const location = useLocation();

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      <ThemeHandler />
      <Navbar />
      {/* <div className="pt-32 sm:p-0 dark:bg-[#0a192f] text-slate-700 dark:text-gray-300"></div> */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {routes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={<PageTransition>{element}</PageTransition>}
            />
          ))}
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
