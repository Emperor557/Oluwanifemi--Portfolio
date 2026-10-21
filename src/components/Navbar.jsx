import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CONTACT } from "../constants";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <nav className="mb-16 flex items-center justify-between py-6">
      <a
        href="#top"
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-700 text-sm font-semibold tracking-wide text-purple-200"
        aria-label="Back to top"
      >
        OE
      </a>

      <div className="hidden items-center gap-8 text-sm text-neutral-400 md:flex">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} className="transition hover:text-white">
            {l.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4 text-2xl">
        <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-white">
          <FaGithub />
        </a>
        <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-white">
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
