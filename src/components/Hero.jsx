import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { PROFILE, HERO_CONTENT } from "../constants";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay } },
});

const Hero = () => {
  return (
    <header id="top" className="border-b border-neutral-900 pb-12 lg:mb-24">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-center text-5xl font-thin tracking-tight lg:mt-8 lg:text-left lg:text-7xl"
            >
              {PROFILE.name}
            </motion.h1>
            <motion.span
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              {PROFILE.role}
            </motion.span>
            <motion.p
              variants={container(0.9)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 text-center font-light tracking-tight lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.div
              variants={container(1.1)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center gap-4 lg:justify-start"
            >
              <a
                href="#projects"
                className="rounded-full bg-neutral-100 px-6 py-3 text-sm font-medium text-neutral-900 transition hover:bg-purple-200"
              >
                View my work
              </a>
              <a
                href={PROFILE.cv}
                download="Oluwanifemi-Emperor-CV.pdf"
                className="flex items-center gap-2 rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium transition hover:border-purple-300 hover:text-purple-200"
              >
                <FaDownload /> Download CV
              </a>
              <a
                href="#contact"
                className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium transition hover:border-purple-300 hover:text-purple-200"
              >
                Get in touch
              </a>
            </motion.div>
          </div>
        </div>
        <div className="mt-12 w-full lg:mt-0 lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="aspect-[4/5] w-full max-w-sm rounded-2xl border border-neutral-800 object-cover object-top"
              src={PROFILE.photo}
              alt="Portrait of Oluwanifemi Emperor"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
