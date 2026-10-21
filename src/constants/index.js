import emperor from "../assets/emperor.jpg";
import expensesImg from "../assets/projects/expenses-tracker.jpg";
import slotImg from "../assets/projects/slot-machine.jpg";
import stayImg from "../assets/projects/stay-timeless.jpg";
import homyzImg from "../assets/projects/homyz.jpg";
import tastyImg from "../assets/projects/tastybite.jpg";

export const PROFILE = {
  name: "Oluwanifemi Emperor",
  role: "Full-Stack Developer",
  photo: emperor,
  cv: "/Oluwanifemi-Emperor-CV.pdf",
};

export const HERO_CONTENT = `I'm a full-stack developer and Computer Engineering student who builds responsive, user-focused web applications, from clean interfaces to the APIs and databases behind them. I enjoy turning ideas into working products with clean, maintainable code.`;

export const ABOUT_TEXT = [
  `I'm a Computer Engineering student at Olabisi Onabanjo University and a full-stack developer based in Lagos. I enjoy building modern, responsive web applications that combine clean design with efficient performance.`,
  `I work across the frontend and backend, with JavaScript, C#, Node.js and SQL, and I'm currently learning Laravel and CodeIgniter. Every project is a chance to learn something new and deliver lasting value.`,
];

export const FACTS = [
  { label: "Based in", value: "Lagos, Nigeria" },
  { label: "Studying", value: "Computer Engineering, 400 Level" },
  { label: "Graduating", value: "Early 2028" },
];

export const EXPERIENCES = [
  {
    year: "Jul 2026 - Oct 2026",
    role: "Web Developer Intern",
    company: "RMSys Solutions",
    description: `Built responsive web pages and user interfaces using HTML, CSS and JavaScript, and contributed to web development tasks across the frontend and backend during a three-month internship.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    year: "Expected early 2028",
    role: "Computer Engineering (400 Level)",
    company: "Olabisi Onabanjo University",
    description: `Currently in my final stretch of study, building full-stack projects alongside my coursework.`,
    technologies: [],
  },
  {
    year: "Sep 2023 - Jan 2024",
    role: "Web Development Student",
    company: "Pantera Tech School",
    description: `Completed hands-on training in web development, working on a range of projects and building websites from the ground up.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "Expenses Tracker",
    image: expensesImg,
    description:
      "A personal finance dashboard to add, edit and delete expenses, track weekly and monthly spending against a limit, and explore it with a category pie chart, a yearly overview and CSV export.",
    technologies: ["JavaScript", "HTML", "CSS", "SVG charts"],
    live: "https://expenses-tracker-app-seven-woad.vercel.app/",
    liveLabel: "Live demo",
  },
  {
    title: "Slot Machine",
    image: slotImg,
    description:
      "A slot machine game that began as a Node.js command-line project and became a responsive web game, with weighted symbols, multi-line betting and per-line payouts.",
    technologies: ["JavaScript", "Node.js", "HTML", "CSS"],
    live: "https://slot-machine-snowy-five.vercel.app/",
    liveLabel: "Play it live",
    github: "https://github.com/Emperor557/Slot-machine",
  },
  {
    title: "Stay Timeless",
    image: stayImg,
    description:
      "A luxury fashion e-commerce front end with product browsing, detailed product pages, cart and checkout, in a sleek, fully responsive design.",
    technologies: ["Responsive design", "Front-end"],
  },
  {
    title: "Homyz",
    image: homyzImg,
    description:
      "A modern real estate web app with property search, featured listings and detailed property pages, in a clean, mobile-friendly layout.",
    technologies: ["Responsive design", "Front-end"],
  },
  {
    title: "TastyBite",
    image: tastyImg,
    description:
      "A food delivery website for browsing menus and placing orders, with smooth navigation across desktop and mobile.",
    technologies: ["Responsive design", "Front-end"],
  },
];

export const CONTACT = {
  email: "oluwanifemiemperor234@gmail.com",
  github: "https://github.com/Emperor557",
  linkedin: "https://www.linkedin.com/in/oluwanifemi-emperor-264021412/",
};