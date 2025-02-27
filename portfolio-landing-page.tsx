import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [projectHover, setProjectHover] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Personal info - replace with your own
  const personalInfo = {
    name: "Aarifah Loonat",
    title: "Computer Engineering Student",
    about: "As a engineering student with special interests in machine learning, and embedded systems. Currently seeking internship opportunities to apply my skills in a real-world setting.",
    education: "BEng Computer Engineering|Expected 2026",
    university: "Bahçeşehir University",
  };

  // Sample projects - replace with your own
  const projects = [
    {
      id: 1,
      title: "Kham Academy Learning App",
      description: "Developed an inclusive learning app for children aged 4–8, teaching time, seasons, counting, and math, with a strong focus on accessibility for learning disabilities, earning a 110% grade for exceptional design.",
      tech: ["Java", "Firebase"],
      github: "https://github.com/aarifah0/aarifah0.git"
    },
    /*
    {
      id: 2,
      title: "Machine Learning Algorithm Visualizer",
      description: "Interactive tool to visualize how different ML algorithms process data.",
      tech: ["JavaScript", "TensorFlow.js", "D3.js"],
      github: "#"
    },
    {
      id: 3,
      title: "Embedded Systems Project",
      description: "Created a custom firmware for an Arduino-based weather station.",
      tech: ["C++", "Arduino", "Sensors", "PCB Design"],
      github: "#"
    }
    */
  ];

  // Skills - add or modify as needed
   const skills = {
    "Programming Languages": ["Python", "JavaScript", "C/C++", "Java"],
   /* "Cloud": ["AWS", "Google Cloud", "Azure"],*/
    "Web Development": ["HTML", "CSS", "React", "Node.js"],
    "Tools": ["Git", "VS Code"],
  };

  // Navigate to section and close mobile menu
  const navigateToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  // Simulating loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Track mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Loading animation
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
        <div className="text-4xl font-bold mb-4">Loading Portfolio</div>
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 animate-pulse rounded-full"></div>
        </div>
      </div>
    );
  }

  // GitHub logo SVG component
  const GitHubLogo = () => (
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );

  // LinkedIn logo SVG component
  const LinkedInLogo = () => (
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );

  // Email/Contact logo SVG component
  const EmailLogo = () => (
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
      <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Particle effect background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translate(${(mousePosition.x / 50) * (i % 5)}px, ${(mousePosition.y / 50) * (i % 5)}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-800 z-10">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">{personalInfo.name}</div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  className={`${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                  } transition-colors`}
                  onClick={() => setActiveSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                className="text-gray-300 hover:text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="container mx-auto px-6 py-2">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  className={`${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                  } transition-colors block w-full text-left py-2`}
                  onClick={() => navigateToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <div className="container mx-auto px-6 pt-24 pb-12">
        {/* Home Section */}
        {activeSection === 'home' && (
          <div className="min-h-screen flex flex-col items-center justify-center text-center">
            <div 
              className="mb-6 text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
              style={{
                transform: `translate(${(mousePosition.x - window.innerWidth / 2) / 50}px, ${(mousePosition.y - window.innerHeight / 2) / 50}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              {personalInfo.name}
            </div>
            <div className="text-2xl mb-8">{personalInfo.title}</div>
            <div className="max-w-2xl mb-12">{personalInfo.about}</div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-colors">
                <GitHubLogo />
                GitHub
              </a>
              <a href="#" className="flex items-center bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-full transition-colors">
                <LinkedInLogo />
                LinkedIn
              </a>
              <button 
                onClick={() => setActiveSection('contact')}
                className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-colors"
              >
                <EmailLogo />
                Contact Me
              </button>
            </div>
          </div>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <div className="min-h-screen py-12">
            <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
                <p className="mb-4">{personalInfo.about}</p>
                <div className="mb-2">
                  <span className="font-bold">Education:</span> {personalInfo.education}
                </div>
                <div className="mb-4">
                  <span className="font-bold">University:</span> {personalInfo.university}
                </div>
                <div className="flex space-x-4 mt-6">
                  <a href="#" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 9h5.5l-5.5-5.5v5.5zm-7-7h8l6 6v12c0 1.1-.9 2-2 2h-12c-1.1 0-2-.9-2-2v-16c0-1.1.9-2 2-2zm0 18h12v-9h-7v-7h-5v16z"/>
                    </svg>
                    Resume
                  </a>
                  <a href="#" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                    <LinkedInLogo />
                    LinkedIn
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                <div className="relative border-l-2 border-blue-500 pl-6">
                <div className="mb-8">
                    <div className="absolute -left-2 mt-1.5 h-4 w-4 rounded-full bg-blue-500"></div>
                    <div className="text-lg font-semibold"> Actuarial Science</div>
                    <div className="text-gray-400">2020 - 2021</div>
                    <div className="mt-2">Began pursuing degree in Actuarial Science, receiving instruction on statistics and financial mathematics.</div>
                  </div>
                  <div className="mb-8">
                    <div className="absolute -left-2 mt-1.5 h-4 w-4 rounded-full bg-blue-500"></div>
                    <div className="text-lg font-semibold">Computer Engineering</div>
                    <div className="text-gray-400">2022 - Present</div>
                    <div className="mt-2">Move abroad, pivot to Computer Engineering, leveraging a strong mathematical background to focus on both hardware and software development.</div>
                  </div>
                  <div>
                    <div className="absolute -left-2 mt-1.5 h-4 w-4 rounded-full bg-blue-500"></div>
                    <div className="text-lg font-semibold">Looking Forward</div>
                    <div className="text-gray-400">2025</div>
                    <div className="mt-2">Seeking internship opportunities to apply knowledge in real-world scenarios.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="min-h-screen py-12">
            <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
                  onMouseEnter={() => setProjectHover(project.id)}
                  onMouseLeave={() => setProjectHover(null)}
                >
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-2xl font-bold">{project.title}</div>
                  </div>
                  <div className="p-6">
                    <p className="mb-4">{project.description}</p>
                    <div className="mb-4">
                      <div className="font-semibold mb-2">Technologies:</div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                          <span key={index} className="bg-gray-700 px-2 py-1 rounded text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a 
                      href={project.github} 
                      className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
                    >
                      <GitHubLogo />
                      View on GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
        <div className="min-h-screen py-12">
    <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
    <div className="max-w-3xl mx-auto">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="mb-8">
          <h3 className="text-2xl font-bold mb-4">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {items.map((item, index) => (
              <span key={index} className="bg-gray-700 px-3 py-1 rounded text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
   

              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-4xl font-bold text-blue-400 mb-2">3+</div>
                  <div>Years Coding</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-4xl font-bold text-blue-400 mb-2">10+</div>
                  <div>Projects</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-4xl font-bold text-blue-400 mb-2">8+</div>
                  <div>Technologies</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <div className="text-4xl font-bold text-blue-400 mb-2">2+</div>
                  <div>Courses</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div className="min-h-screen py-12">
            <h2 className="text-4xl font-bold mb-8 text-center">Get In Touch</h2>
            <div className="max-w-xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <label className="block mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Aarifah Loonat"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="aarifah.loonat@outlook.com"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2">Message</label>
                <textarea 
                  className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded transition-colors">
                <EmailLogo />
                Send Message
              </button>

              <div className="mt-8 flex justify-center space-x-6">
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <GitHubLogo />
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-600 transition-colors">
                  <LinkedInLogo />
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-300 transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} {personalInfo.name}. See you soon!.</p>
          <div className="mt-2 text-gray-400">Made with React and Tailwind CSS</div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
