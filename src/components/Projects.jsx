import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      
      name: "Blog Platform",
      description: "A platform to write and share blogs.",
      link: "#",
      screenshots: [
        "Capture.png",
        "Capture.png",
        "Capture.png",
        "Capture.png",
        "Capture.png",
        "Capture.png",
      ],
    },
    {
      name: "Electronic Library",
      description: "A platform to read, buy, and publish books.",
      link: "#",
      screenshots: [
        "/screenshots/library1.png",
        "/screenshots/library2.png",
      ],
    },
    {
      name: "Hardware Store Management",
      description: "An app to manage inventory and sales.",
      link: "#",
      screenshots: [
        "/screenshots/store1.png",
        "/screenshots/store2.png",
      ],
    },
    
    {
      name: "E-commerce App",
      description: "An online store with user authentication and payment integration.",
      link: "#",
      screenshots: [
        "/screenshots/ecommerce1.png",
        "/screenshots/ecommerce2.png",
      ],
    },
    {
      name: "Portfolio Website",
      description: "My personal portfolio showcasing my work and skills.",
      link: "#",
      screenshots: [
        "/screenshots/portfolio1.png",
        "/screenshots/portfolio2.png",
      ],
    },
    {
      name: "Chat Application",
      description: "A real-time chat app with multiple rooms.",
      link: "#",
      screenshots: [
        "/screenshots/chat1.png",
        "/screenshots/chat2.png",
      ],
    },
  ];

  return (
    <section id="projects" className="py-16  text-center  bg-gradient-to-b from-gray-50 to-gray-200 dark:from-black dark:to-black">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Projects</h2>
      <div className="max-w-4xl mx-auto h-96 overflow-y-scroll border border-gray-200 rounded-lg shadow-inner p-4 bg-white ">
        <ul className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <li key={index} className="border rounded-lg p-6 shadow-sm hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <button
                onClick={() => setSelectedProject(project)}
                className="text-blue-500 hover:underline"
              >
                View Project
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Afficher ProjectDetails si un projet est sélectionné */}
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)} // Fermer le modal
        />
      )}
    </section>
  );
};

export default Projects;
