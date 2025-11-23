const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology - BTech, Computer Science Engineering",
      institution: "Gobal Academy of Technology",
      status: "2022 - 2026",
      description: "Pursuing Computer Science Engineering with a focus on software development, system design, and architecture. Current CGPA: 8.35/10."
    },
    {
      degree: "PCMB (Pre-University)",
      institution: "NMKRV College",
      status: "2020 - 2021",
      description: "Completed Pre-University education with Physics, Chemistry, Mathematics, and Biology. Percentage: 82.7%."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary">{edu.degree}</h3>
                  <p className="text-gray-700 font-medium">{edu.institution}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className={`${edu.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'} text-xs font-medium px-3 py-1 rounded-full`}>
                    {edu.status}
                  </span>
                </div>
              </div>
              <p className="text-gray-600">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
