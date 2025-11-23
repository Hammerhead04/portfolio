import { Project } from "../types";

const Projects = () => {
  // Projects data from resume
  const projects: Project[] = [
    {
      id: 1,
      title: "Agentic AI based Therapy Assistant",
      description: "Developed an intelligent therapy assistant using agentic AI architecture to provide personalized mental health support. Implemented conversational AI capabilities with natural language processing to understand user context and provide empathetic responses. Built a scalable backend system using Node.js and Express to handle real-time therapy sessions, user data management, and AI model integration. Designed the system with focus on privacy, security, and user experience, incorporating session management and progress tracking features.",
      technologies: ["Python", "Node.js", "Express", "AI/ML", "Natural Language Processing", "React.js"],
      demoUrl: null,
      githubUrl: "https://github.com/Hammerhead04",
      featured: true,
      createdAt: "2024-03-01T00:00:00.000Z",
    },
    {
      id: 2,
      title: "Diabetes Prediction using Random Forest",
      description: "Built a Random Forest model to predict diabetes using clinical data, achieving 76% accuracy. Performed data preprocessing, feature scaling, and trained a Random Forest classifier on the Pima Indians dataset. Evaluated performance with confusion matrix and classification report.",
      technologies: ["Python", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"],
      demoUrl: null,
      githubUrl: "https://github.com/Hammerhead04",
      featured: true,
      createdAt: "2024-01-01T00:00:00.000Z",
    },
    {
      id: 3,
      title: "QR-Enabled AR System for 3D Medical and Agricultural Training",
      description: "Created a QR-enabled browser-based AR training system with interactive 3D models, real-time rendering, and integrated user assessments. Built a responsive React.js interface integrated with real-time 3D model rendering using Three.js. Enabled model interactions including zoom, rotation, and detailed exploration.",
      technologies: ["React.js", "Three.js", "JavaScript", "CSS", "HTML"],
      demoUrl: null,
      githubUrl: "https://github.com/Hammerhead04",
      featured: true,
      createdAt: "2024-02-01T00:00:00.000Z",
    }
  ];

  return (
    <section id="projects" className="py-20 section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div key={project.id || index} className="project-card bg-white rounded-xl shadow-lg h-full flex flex-col">
              {project.demoUrl ? (
                <iframe
                  className={"h-96"}
                  src={project.demoUrl} 
                  title={project.title}
                />
              ) : (
                <div className="h-48 bg-gradient-to-br from-primary/10 to-blue-100 flex items-center justify-center">
                  <div className="text-center p-4">
                    <i className="ri-code-s-slash-line text-4xl text-primary mb-2"></i>
                    <p className="text-gray-600 text-sm">Project Preview</p>
                  </div>
                </div>
              )}
              <div className="p-5 md:p-7 flex-1 flex flex-col">
                <h3 className="text-lg md:text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-5 flex-1">
                  {project.description}
                </p>
                <div className="flex gap-4 mb-4">
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:text-primary/80 font-medium inline-block"
                    >
                      View Project
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:text-primary/80 font-medium inline-block"
                    >
                      View on GitHub
                    </a>
                  )}
                </div>
                <div className="flex flex-wrap gap-1.5 md:gap-2 mt-auto">
                  {project.technologies && project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
