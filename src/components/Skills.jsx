import React from "react";
import { FaReact, FaNodeJs, FaLaravel } from "react-icons/fa";

const skills = [
  {
    name: "React",
    description:
      "A powerful JavaScript library for building modern and dynamic user interfaces.",
    logo: <FaReact className="text-blue-500 text-4xl" />,
  },
  {
    name: "Laravel",
    description:
      "A robust PHP framework for building web applications with an MVC architecture.",
    logo: <FaLaravel className="text-red-500 text-4xl" />,
  },
  {
    name: "Node.js",
    description:
      "A server-side JavaScript runtime environment for building fast and scalable applications.",
    logo: <FaNodeJs className="text-green-500 text-4xl" />,
  },
];


const Skills = () => {
  return (
    <section id="skills" className="py-16   bg-gradient-to-b from-gray-50 to-gray-200 dark:from-black dark:to-black ">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 dark:text-white">
        My Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 sm:p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4">{skill.logo}</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {skill.name}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
  
  
};

export default Skills;
