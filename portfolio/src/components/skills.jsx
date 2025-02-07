import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaDatabase,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiPostgresql } from "react-icons/si";

const skillsData = [
  {
    name: "HTML",
    level: "Advanced",
    icon: <FaHtml5 className="text-orange-500" />,
  },
  {
    name: "CSS",
    level: "Advanced",
    icon: <FaCss3Alt className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    level: "Advanced",
    icon: <FaJs className="text-yellow-500" />,
  },
  {
    name: "React",
    level: "Advanced",
    icon: <FaReact className="text-blue-400" />,
  },
  {
    name: "Node.js",
    level: "Intermediate",
    icon: <FaNode className="text-green-500" />,
  },
  {
    name: "Tailwind CSS",
    level: "Advanced",
    icon: <SiTailwindcss className="text-teal-400" />,
  },
  {
    name: "MongoDB",
    level: "Intermediate",
    icon: <FaDatabase className="text-green-400" />,
  },
  {
    name: "Express.js",
    level: "Advanced",
    icon: <SiExpress className="text-gray-400" />,
  },
  {
    name: "PostgreSql",
    level: "Advanced",
    icon: <SiPostgresql className="text-gray-400" />,
  },
  {
    name: "Git",
    level: "Advanced",
    icon: <FaGitAlt className="text-gray-400" />,
  },
  {
    name: "Github",
    level: "Advanced",
    icon: <FaGithub className="text-gray-400" />,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-indigo-400 mb-12">
          Tools and Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center transform transition-transform hover:scale-110 hover:shadow-xl backdrop-blur-md bg-opacity-80"
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-1">{skill.name}</h3>
              <p className="text-gray-400">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
