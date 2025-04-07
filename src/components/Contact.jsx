import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    const { name, message } = formData;
    
    // Vérification du contenu du message
    const whatsappMessage = `Hello, my name is ${name}. ${message}`;
    console.log(whatsappMessage); // Vérifier si le message est correct
    
    // URL correctement encodée pour WhatsApp
    const whatsappURL = `https://wa.me/212762395513?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Ouvrir l'URL WhatsApp dans un nouvel onglet
    window.open(whatsappURL, "_blank");
  };
  

  const handleEmail = () => {
    const { email, name, message } = formData;
    const subject = `Contact Form Submission from ${name}`;
    const body = `Email: ${email}%0D%0A%0D%0A${message}`;
    const emailURL = `mailto:emoh9972@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = emailURL;
  };

  return (
    <section id="contact" className="py-16 text-center bg-gradient-to-b from-gray-50 to-gray-200 dark:from-black dark:to-black">
    <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
      Get in Touch
    </h2>
    <p className="mb-8 text-gray-600 dark:text-gray-400 max-w-md mx-auto">
      Feel free to reach out for collaborations or just a friendly chat. Fill out the form below and I'll get back to you as soon as possible!
    </p>
    <div className="max-w-lg mx-auto bg-white dark:bg-black rounded-lg shadow-lg p-8">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-6"
      >
        {/* Input Name */}
        <div className="relative">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring focus:ring-blue-200 dark:focus:ring-blue-500 peer placeholder-transparent peer-placeholder-shown:border-white dark:peer-placeholder-shown:border-gray-300"
            placeholder="Your Name"
            required
          />
          <label
            className="absolute left-3 top-3 text-gray-500 dark:text-gray-400 px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-[-10px] peer-focus:text-blue-500 peer-focus:text-sm"
          >
            Your Name
          </label>
        </div>

        {/* Input Email */}
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring focus:ring-blue-200 dark:focus:ring-blue-500 peer placeholder-transparent peer-placeholder-shown:border-white dark:peer-placeholder-shown:border-gray-300"
            placeholder="Your Email"
            required
          />
          <label
            className="absolute left-3 top-3 text-gray-500 dark:text-gray-400 px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-[-10px] peer-focus:text-blue-500 peer-focus:text-sm"
          >
            Your Email
          </label>
        </div>

        {/* Textarea Message */}
        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring focus:ring-blue-200 dark:focus:ring-blue-500 peer placeholder-transparent peer-placeholder-shown:border-white dark:peer-placeholder-shown:border-gray-300"
            placeholder="Your Message"
            required
          ></textarea>
          <label
            className="absolute left-3 top-3 text-gray-500 dark:text-gray-400 px-1 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-[-10px] peer-focus:text-blue-500 peer-focus:text-sm"
          >
            Your Message
          </label>
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-4">
          <button
            type="button"
            onClick={handleWhatsApp}
            className="w-full p-3 bg-green-500 text-white rounded hover:bg-green-600 transition-all"
          >
            Send via WhatsApp
          </button>
          <button
            type="button"
            onClick={handleEmail}
            className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
          >
            Send via Email
          </button>
        </div>
      </form>
    </div>
  </section>
);
};

export default Contact;
