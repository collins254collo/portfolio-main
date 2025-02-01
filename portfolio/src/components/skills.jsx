const Skills = () => {
  return (
    <section id="skills" className="py-16  text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-indigo-500 mb-8">
          My Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">HTML</h3>
            <p className="text-gray-400">Advanced</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">CSS</h3>
            <p className="text-gray-400">Advanced</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">JavaScript</h3>
            <p className="text-gray-400">Advanced</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">React</h3>
            <p className="text-gray-400">Advanced</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Node.js</h3>
            <p className="text-gray-400">Intermediate</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Tailwind CSS</h3>
            <p className="text-gray-400">Advanced</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">MongoDB</h3>
            <p className="text-gray-400">Intermediate</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">Express js</h3>
            <p className="text-gray-400">Advanced</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
