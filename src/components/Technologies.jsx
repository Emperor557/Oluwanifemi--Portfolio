import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaFileExcel, FaChartBar } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const SKILLS = [
  { name: "HTML", Icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", Icon: FaCss3Alt, color: "text-sky-500" },
  { name: "JavaScript", Icon: FaJs, color: "text-yellow-400" },
  { name: "React", Icon: FaReact, color: "text-cyan-400" },
  { name: "Node.js", Icon: FaNodeJs, color: "text-green-500" },
  { name: "Express", Icon: SiExpress, color: "text-neutral-300" },
  { name: "C#", Icon: TbBrandCSharp, color: "text-purple-400" },
  { name: "SQL", Icon: FaDatabase, color: "text-blue-400" },
  { name: "Git & GitHub", Icon: FaGitAlt, color: "text-red-400" },
  { name: "Excel", Icon: FaFileExcel, color: "text-emerald-500" },
  { name: "Power BI", Icon: FaChartBar, color: "text-amber-400" },
];

const LEARNING = ["Laravel", "CodeIgniter"];

const Technologies = () => {
  return (
    <section id="skills" className="border-b border-neutral-800 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Skills
      </motion.h2>

      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {SKILLS.map(({ name, Icon, color }, i) => (
          <motion.div
            key={name}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className="flex flex-col items-center gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 transition hover:-translate-y-1 hover:border-purple-400/50"
          >
            <Icon className={`text-5xl ${color}`} aria-hidden="true" />
            <span className="text-sm text-neutral-300">{name}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm">
        <span className="text-neutral-500">Currently learning:</span>
        {LEARNING.map((t) => (
          <span key={t} className="rounded-full border border-neutral-700 px-4 py-1 text-neutral-300">
            {t}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
