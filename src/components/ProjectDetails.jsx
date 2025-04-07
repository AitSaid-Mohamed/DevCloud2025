import React from "react";

const ProjectDetails = ({ project, onClose }) => {
  if (!project) return null; // Si aucun projet sélectionné, ne rien afficher

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50  ">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative ">
        {/* Bouton de fermeture */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Contenu du projet */}
        <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
        <p className="text-gray-600 mb-4">{project.description}</p>

        {/* Galerie de screenshots avec défilement horizontal */}
        <div className="flex overflow-x-auto space-x-4 py-4">
          {project.screenshots.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Screenshot ${index + 1}`}
              className="w-64 h-40 object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
