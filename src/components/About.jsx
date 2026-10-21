import { motion } from "framer-motion";
import { ABOUT_TEXT, FACTS, PROFILE } from "../constants";

const About = () => {
  return (
    <section id="about" className="border-b border-neutral-900 pb-16">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center"
          >
            <img
              className="aspect-square w-full max-w-sm rounded-2xl border border-neutral-800 object-cover object-top"
              src={PROFILE.photo}
              alt="Oluwanifemi Emperor smiling"
              loading="lazy"
            />
          </motion.div>
        </div>
        <div className="mt-10 w-full lg:mt-0 lg:w-1/2">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center lg:items-start"
          >
            {ABOUT_TEXT.map((p, i) => (
              <p key={i} className="my-2 max-w-xl py-2 text-neutral-300">
                {p}
              </p>
            ))}
            <dl className="mt-6 grid w-full max-w-xl gap-4 sm:grid-cols-3">
              {FACTS.map((f) => (
                <div key={f.label} className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
                  <dt className="text-xs uppercase tracking-wider text-neutral-500">{f.label}</dt>
                  <dd className="mt-1 text-sm text-neutral-200">{f.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
