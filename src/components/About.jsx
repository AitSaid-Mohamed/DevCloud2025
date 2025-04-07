import React from "react"
import Header from "./Header";
import DarkModeToggle from "./DarkMode";

const About = () => {
  return (
    <section id="about" className=" bg-gray-50 text-center  bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-500 dark:to-black">
      <div className="pt-6 pb-14 " >
      <Header/><DarkModeToggle />
      
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center pl-5 pb-16">
        {/* Image avec animation */}
        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4  shadow-lg mb-6 md:mb-0 animate-fade-in md:mr-8">
          <img
            src="me.jpg" // Remplacez avec l'URL de votre image
            alt="Mohamed"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texte avec animation */}
        <div className="text-center md:text-left max-w-3xl mx-auto md:ml-8 animate-fade-in delay-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 dark:text-white">
            <span className="word-animation mx-2">Hello!</span> 
            <span className="word-animation delay-300 mx-2">I'm</span> 
            <span className="word-animation delay-500 mx-2">Mohamed</span>
        </h2>

          <p className="text-lg text-gray-700 dark:text-white">
            A passionate Fullstack developer with expertise in React, Laravel, Node.js, and more. 
            I'm always excited to tackle new challenges and collaborate on innovative projects. Let's build something great together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
