import React, { useEffect, useRef } from 'react';

const projects = [
  {
    title: 'PokeSite',
    description: 'My First Project',
    image: './public/project1.png',
    link: 'https://github.com/GautamGC/PokeSite',
    languages: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'RestrauntSite',
    description: 'Project deepicting the full use of Full Stack Development',
    image: './public/project2.png',
    link: 'https://github.com/GautamGC/RestaurantPage',
    languages: ['React', 'Node.js' ,'MongoDB', 'ExpressJS'],
  },
  {
    title: 'Project Three',
    description: 'This is the third project.',
    image: 'https://via.placeholder.com/300x200',
    link: 'https://www.stackoverflow.com',
    languages: ['Python', 'Django'],
  },
];

const Projects = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );
    setTimeout(() => {
      cardRefs.current.forEach((ref) => {
        if (ref) {
          observer.observe(ref);
        }
      });
    }, 100);

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-4xl font-bold text-center mb-8 text-zinc-400">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="project-card bg-zinc-900 text-white p-6 rounded-lg shadow-md relative overflow-hidden transition-transform duration-300 hover:scale-110 hover:bg-fuchsia-950">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 "
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p>{project.description}</p>
            <div className="mt-4 flex flex-wrap">
              {project.languages.map((language, langIndex) => (
                <div
                  key={langIndex}
                  className="language-badge bg-gray-800 text-zinc-100 px-2 py-1 rounded-full text-sm mr-2 mb-2"
                >
                  {language}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
