import React from "react";
import logo from "../assets/mod.gif";
import image4 from "../assets/i.gif"; 
import image1 from "../assets/l.gif";
import image2 from "../assets/se.gif";
import image3 from "../assets/d.gif";
import image5 from "../assets/h.gif";
const Features: React.FC = () => {
  return (
    <section className="bg-gray-999 text-white">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold sm:text-4xl mb-10">More Features of Meta</h2>
      </div>
  
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <a
          className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-white hover:shadow-white-100/10"
          href="#"
        > 
         <img
          src={image3}
          alt="META"
          className="w-5 h-5 lg:w-10 lg:h-10 cursor-pointer"
        />
  
          <h2 className="mt-4 text-xl font-bold text-white">Economy Management</h2>
  
          <p className="mt-1 text-sm text-gray-300">
          Facilitate a virtual economy within your Discord server. Users can earn, trade, and manage their digital currency, enhancing interaction and engagement.
          </p>
        </a>
  
        <a
          className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-white hover:shadow-white-100/10"
          href="#"
        >
          <img
          src={image4}
          alt="META"
          className="w-5 h-5 lg:w-10 lg:h-10 object-cover cursor-pointer"
        />
  
          <h2 className="mt-4 text-xl font-bold text-white">Image Commands</h2>
  
          <p className="mt-1 text-sm text-gray-300">
          Utilize advanced image commands to generate, manipulate, and display images directly in your server. This feature brings creativity and fun to your community interactions.
          </p>
        </a>
  
        <a
          className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-white hover:shadow-white-100/10"
          href="#"
        >
          <img
          src={image5}
          alt="META"
          className="w-5 h-5 lg:w-10 lg:h-10 object-cover cursor-pointer"
        />
  
          <h2 className="mt-4 text-xl font-bold text-white">Hentai & Anime</h2>
  
          <p className="mt-1 text-sm text-gray-300">
          Access a curated collection of hentai and anime content, providing users with a specialized resource to explore their interests within the community.
          </p>
        </a>
  
        <a
          className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-white hover:shadow-white-100/10"
          href="#"
        >
          <img
          src={image1}
          alt="META"
          className="w-5 h-5 lg:w-10 lg:h-10 cursor-pointer"
        />
  
          <h2 className="mt-4 text-xl font-bold text-white">Leveling System</h2>
  
          <p className="mt-1 text-sm text-gray-300">
          Engage users with a leveling system that rewards participation. Members earn experience points and unlock unique privileges as they interact more within the server.
          </p>
        </a>
  
        <a
          className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-white hover:shadow-white-100/10"
          href="#"
        >
          <img
          src={logo}
          alt="META"
          className="w-5 h-5 lg:w-10 lg:h-10 object-cover cursor-pointer"
        />
  
          <h2 className="mt-4 text-xl font-bold text-white">Basic Utility Functions</h2>
  
          <p className="mt-1 text-sm text-gray-300">
          Enhance server functionality with essential utility commands. From reminders to information retrieval, our bot simplifies various tasks for users
          </p>
        </a>
  
        <a
          className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-white hover:shadow-white-100/10"
          href="#"
        >
          <img
          src={image2}
          alt="META"
          className="w-5 h-5 lg:w-10 lg:h-10 object-cover cursor-pointer"
        />
  
          <h2 className="mt-4 text-xl font-bold text-white">Advanced Utilities</h2>
  
          <p className="mt-1 text-sm text-gray-300">
          Empower your community with advanced utility features that streamline server management and improve overall user experience, fostering a vibrant and interactive environment.
          </p>
        </a>
      </div>
  
      <div className="mt-12 text-center">
        <a
          href="#"
          className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          View More
        </a>
      </div>
    </div>
  </section>
  );
};

export default Features;
