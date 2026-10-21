import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <section id="contact" className="pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="my-16 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>
      <div className="text-center tracking-tight">
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-8 max-w-md text-neutral-400"
        >
          Have a project or opportunity in mind? Send me a message and I'll get back to you soon.
        </motion.p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-7 py-3 text-sm font-medium text-neutral-900 transition hover:bg-purple-200"
        >
          <FaEnvelope /> {CONTACT.email}
        </a>
        <div className="mt-8 flex justify-center gap-6 text-3xl text-neutral-400">
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-white">
            <FaGithub />
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-white">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <p className="mt-16 text-center text-xs text-neutral-600">
        &copy; {new Date().getFullYear()} Oluwanifemi Emperor. All rights reserved.
      </p>
    </section>
  );
};

export default Contact;
