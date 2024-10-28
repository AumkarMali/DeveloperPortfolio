const Projects = () => {
  return (
    <div className="mt-20">
      {/* Title Section */}
      <div id="pr" className="text-center px-4 lg:px-40">
        <h3 className="text-2xl sm:text-5xl lg:text-4xl mt-10 lg:mt-20 tracking-wide bg-gradient-to-r from-orange-500 to-black-300 text-transparent bg-clip-text">
          Project Timeline
        </h3>
      </div>

      {/* Project Sections */}
      <div className="px-5 lg:px-20 mt-10">
        {/* First Row of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Box 1 */}
          <div className="border-2 border-gray-300 rounded-lg p-6 bg-gradient-to-r from-black to-blue-950">
            <h3 className="lg:text-2xl text-lg bg-gradient-to-r from-red-500 to-black-900 text-transparent bg-clip-text mb-6">
              ACR - Automated Chess Robot
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Built a robotic arm with MATLAB, aluminum, and Raspberry Pi.</li>
              <li>Designed and assembled hardware with Circuito.io and a breadboard.</li>
              <li>Developed a chess AI in Python with advanced algorithms.</li>
              <li>Optimized AI to handle 3,000 to 100,000 calculations.</li>
              <li>Created a Tkinter GUI for game visualization.</li>
              <li>Integrated GUI with backend using subprocesses and threading.</li>
            </ul>
            <a
              href="https://github.com/AumkarMali/ACR-Robotic-Turk" // Replace with your project video link
              className="inline-block px-6 py-3 mt-4 border border-gray-500 text-gray-500 font-semibold rounded-lg shadow-lg hover:bg-gray-600 hover:text-white transition-colors"
            >
              Source Code
            </a>
          </div>

          {/* Project Box 2 */}
          <div className="border-2 border-gray-300 rounded-lg p-6 bg-gradient-to-r from-black to-blue-950">
            <h3 className="lg:text-2xl text-lg bg-gradient-to-r from-red-500 to-black-900 text-transparent bg-clip-text mb-6">
              RC Car Controlled with Arduino
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Built an RC car with Bluetooth, IR sensors, and an Arduino.</li>
              <li>Designed a circuit schematic with relay, IR sensor, and servo motor.</li>
              <li>Programmed with Arduino IDE and C++ to show data on a mobile app.</li>
              <li>Achieved ~40 km/h speed with responsive controls and accurate metrics.</li>
            </ul>
            <a
              href="https://github.com/AumkarMali/Bluetooth-RC-Car" // Replace with your project video link
              className="inline-block px-6 py-3 mt-4 border border-gray-500 text-gray-500 font-semibold rounded-lg shadow-lg hover:bg-gray-600 hover:text-white transition-colors"
            >
              Source Code
            </a>
          </div>
        </div>

        {/* Second Row of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* Project Box 3 */}
          <div className="border-2 border-gray-300 rounded-lg p-6 bg-gradient-to-r from-black to-blue-950">
            <h3 className="lg:text-2xl text-lg bg-gradient-to-r from-red-500 to-red-950 text-transparent bg-clip-text mb-6">
              Discord Bot with Natural Language Processing
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Initializes a Discord bot with various commands and interactions.</li>
              <li>Includes functions for user management and moderation.</li>
              <li>Provides an interactive RPG game with battles and spells.</li>
              <li>Supports playing music from YouTube and managing voice channels.</li>
              <li>Enables web scraping and sending HTML content directly in chat.</li>
            </ul>
            <a
              href="https://github.com/AumkarMali/Cortana-discord-bot-" // Replace with your project video link
              className="inline-block px-6 py-3 mt-4 border border-gray-500 text-gray-500 font-semibold rounded-lg shadow-lg hover:bg-gray-600 hover:text-white transition-colors"
            >
              Source Code
            </a>
          </div>

          {/* Project Box 4 */}
          <div className="border-2 border-gray-300 rounded-lg p-6 bg-gradient-to-r from-black to-blue-950">
            <h3 className="lg:text-2xl text-lg bg-gradient-to-r from-red-500 to-black-900 text-transparent bg-clip-text mb-6">
              Voice Recognition AI Assistant
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Converts speech to text using Google’s speech recognition.</li>
              <li>Processes commands for weather updates, calculations, and music playback.</li>
              <li>Handles web searches and system commands like locking the workstation.</li>
              <li>Generates spoken responses using IBM Watson’s text-to-speech API.</li>
              <li>Includes a conversational AI model for general interactions and responses.</li>
            </ul>
            <a
              href="https://github.com/AumkarMali/Voice-Recognition-Assistant" // Replace with your project video link
              className="inline-block px-6 py-3 mt-4 border border-gray-500 text-gray-500 font-semibold rounded-lg shadow-lg hover:bg-gray-600 hover:text-white transition-colors"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
