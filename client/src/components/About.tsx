const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row md:gap-12 items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="rounded-lg shadow-xl overflow-hidden bg-gradient-to-br from-primary/5 to-gray-50 transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/assets/developer-8764521_1280 2.jpg" 
                alt="Developer at night coding with city view"
                className="w-full h-auto object-cover" 
                style={{ maxHeight: '450px' }}
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Computer Science Student & Software Developer
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              A Computer Science student passionate about system design and architecture, 
              skilled in JavaScript, Python, Node.js, and Express. Currently pursuing my 
              degree while gaining hands-on experience in software development.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              As a Software Developer Intern at Aulosa, I've secured 100% of endpoints with 
              JWT-based authentication, integrated AWS DynamoDB to handle 500K records with 
              optimized indexing, and developed 10 scalable RESTful APIs. I've also reduced 
              API response times by 35% through caching strategies and query optimization.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              I specialize in developing scalable web applications with React on the frontend 
              and Node.js for backend services. My expertise extends to microservices architecture, 
              API implementation, and working with both relational and NoSQL databases. I have 
              strong knowledge of scalability, fault tolerance, and performance optimization.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              What drives me is solving complex problems with elegant solutions. Whether it's 
              designing scalable systems, optimizing database queries, or building efficient APIs, 
              I thrive on challenges that push my technical abilities and deepen my understanding 
              of software architecture.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium">
                React
              </span>
              <span className="px-3 py-1 bg-green-100 text-secondary rounded-full text-sm font-medium">
                Node.js
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                System Design
              </span>
              <span className="px-3 py-1 bg-indigo-100 text-accent rounded-full text-sm font-medium">
                Microservices
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                AWS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
