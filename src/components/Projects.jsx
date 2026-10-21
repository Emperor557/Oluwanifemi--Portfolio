import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <section id="projects" className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Selected <span className="text-neutral-500">Projects</span>
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <motion.article
            key={project.title}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60"
          >
            <div className="overflow-hidden border-b border-neutral-800">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover object-top transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="mb-4 flex-1 text-neutral-400">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded bg-neutral-900 px-2 py-1 text-xs font-medium text-purple-300">
                    {tech}
                  </span>
                ))}
              </div>
              {(project.live || project.github) && (
                <div className="flex flex-wrap items-center gap-5 text-sm">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border-b border-purple-300 pb-0.5 transition hover:text-purple-200"
                    >
                      {project.liveLabel || "Live demo"} <FaExternalLinkAlt className="text-xs" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-neutral-400 transition hover:text-white"
                    >
                      <FaGithub /> Source
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
