import React from 'react';
import Safari from '../components/ui/safari';
import Particles from '../components/ui/particles';
import image from "../assets/meta.png"; 
import image1 from "../assets/mod.gif";
import image2 from "../assets/se.gif";
import image3 from "../assets/m.gif";
const HomePage: React.FC = () => {
    return (
        <div className="bg-black min-h-screen overflow-hidden">
            {/* Navbar */}
            <nav className="p-4 fixed top-0 w-full flex justify-between items-center z-50 bg-transparent">
    <div className="text-white text-2xl font-bold">Bummy</div>
    <div className="hidden md:flex space-x-4">
        <a
            href="/"
            className="relative text-white bg-black-800 border border-blue-600 rounded-full px-3 py-2 transition duration-300 hover:shadow-lg hover:text-yellow-400 group"
        >
            Home
            <span className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
        <a
            href="/about"
            className="relative text-white bg-black-800 border border-blue-600 rounded-full px-3 py-2 transition duration-300 hover:shadow-lg hover:text-yellow-400 group"
        >
            About
            <span className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
        <a
            href="/commands"
            className="relative text-white bg-black-800 border border-blue-600 rounded-full px-3 py-2 transition duration-300 hover:shadow-lg hover:text-yellow-400 group"
        >
            Commands
            <span className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
        <a
            href="/contact"
            className="relative text-white bg-black-800 border border-blue-600 rounded-full px-3 py-2 transition duration-300 hover:shadow-lg hover:text-yellow-400 group"
        >
            Contact
            <span className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
    </div>
    <button className="md:hidden text-white bg-gray-800 px-3 py-2 rounded-full">Menu</button>
</nav>




            {/* Landing Section with Image on the Left and Text on the Right */}
            <section className="relative h-screen overflow-hidden bg-black">
                <Particles />
                <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-8 md:px-20">
                    
                    {/* Left side: Image with Shine Border */}
                    <div className="md:w-1/2 flex justify-left mt-8 md:mt-0">
                       
                        
                            <img
                                src={image}
                                alt="Descriptive Alt Text"
                                className="w-120 h-84 object-cover rounded-lg"
                            />
                       
                    </div>

                    {/* Right side: Text content */}
                    <div className="text-left text-white space-y-4 md:w-1/2">
                        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                            From Meta!
                        </span>
                        <p className="text-xl">
                            Meta is a versatile and powerful Discord bot that offers a wide range of functions to meet everyone's needs.
                        </p>
                        
                        {/* Rainbow Button */}
                
                    </div>

                </div>
            </section>

            <section className="py-12 bg-gradient-to-b from-black-900 to-black-800">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Box 1 */}
      <div className="relative p-1 bg-gradient-to-r from-purple-700 to-purple-900 rounded-2xl shadow-lg">
        <div className="h-full p-6 bg-gray-800 text-white rounded-2xl">
          {/* Title and Icon */}
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold">Moderation</h3>
            <img src={image1} alt="Icon 1" className="w-8 h-8" />
          </div>
          {/* Description */}
          <p className="mt-4 text-sm">
          Ensures a positive, safe community by monitoring user interactions, content, and reports. Enforces community guidelines and takes appropriate actions to address issues.
          </p>
        </div>
      </div>

      {/* Box 2 */}
      <div className="relative p-1 bg-gradient-to-r from-purple-700 to-purple-900 rounded-2xl shadow-lg">
        <div className="h-full p-6 bg-gray-800 text-white rounded-2xl">
          {/* Title and Icon */}
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold">Utilites</h3>
            <img src={image2} alt="Icon 2" className="w-8 h-8" />
          </div>
          {/* Description */}
          <p className="mt-4 text-sm">
          Offers essential tools like auto voice channel creation, ticketing systems, protection against DDoS attacks, and giveaway management to streamline community management and enhance the user experience.
          </p>
        </div>
      </div>

      {/* Box 3 */}
      <div className="relative p-1 bg-gradient-to-r from-purple-700 to-purple-900 rounded-2xl shadow-lg">
        <div className="h-full p-6 bg-gray-800 text-white rounded-2xl">
          {/* Title and Icon */}
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold">Music</h3>
            <img src={image3} alt="Icon 3" className="w-8 h-8" />
          </div>
          {/* Description */}
          <p className="mt-4 text-sm">
             Provides a platform for music-related activities, including a music library, playlists, recommendations, and potentially integration with external music services. Enables users to discover, listen to, and share music within the community.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>


            {/* Safari Section */}
            <section className="relative flex justify-center items-center py-20 bg-black">
                <Safari
                    url="magicui.design"
                    className="size-full"
                    src="https://via.placeholder.com/1200x750"
                />
                <h2 className="text-white text-center text-4xl font-bold mt-10">Safari Window Example</h2>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 py-4 text-center text-white">
                <p>© 2024 Meta. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
