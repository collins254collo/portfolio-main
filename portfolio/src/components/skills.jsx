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
import {
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiC,
  SiNextdotjs,
} from "react-icons/si";

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
    name: "Tailwind CSS",
    level: "Advanced",
    icon: <SiTailwindcss className="text-teal-400" />,
  },
  {
    name: "Next.js",
    level: "Intermediate",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  {
    name: "Node.js",
    level: "Advanced",
    icon: <FaNode className="text-green-500" />,
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
    name: "PostgreSQL",
    level: "Advanced",
    icon: <SiPostgresql className="text-blue-500" />,
  },
  {
    name: "Git",
    level: "Advanced",
    icon: <FaGitAlt className="text-red-500" />,
  },
  {
    name: "GitHub",
    level: "Advanced",
    icon: <FaGithub className="text-gray-400" />,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-indigo-500 mb-12">
          Tools & Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="relative bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center transition-all transform hover:scale-105 hover:shadow-2xl hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {skill.level}
              </p>

              {/* Tooltip for additional info */}
              <span className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs bg-gray-800 text-white px-2 py-1 rounded-lg shadow-md">
                {skill.name} - {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
