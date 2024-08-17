import React, { useState } from 'react';

const HeroSection = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <div
        className="h-screen w-full bg-cover bg-center bg-fixed flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('trial.jpg')`,
          fontFamily: 'Edu AU VIC WA NT Hand',
        }}
      >
        <div className="text-left ml-20">
          <div className="text-zinc-400 text-6xl md:text-7xl lg:text-8xl">
            Hello!! <span className="animate__animated animate__tada">👋</span>
          </div>
          <div className="text-zinc-400 text-3xl md:text-4xl lg:text-6xl">
            I'm <span className="text-white text-5xl md:text-6xl lg:text-8xl">Gautam Chauhan</span>;<br />
            A Full Stack Developer;<br />And A CS Engineering Student.
          </div>
          <br/>
          <button className="bg-black hover:bg-slate-800 text-white text-2xl font-semibold py-2 px-4 rounded-full shadow-lg focus:outline-none">
            <a href="resume.pdf" download>
              Download Resume
            </a>
          </button>
        </div>
      </div>
      <div className="absolute right-0 top-0 h-screen flex justify-end items-center">
        <div className="hidden md:flex flex-col justify-center items-center w-40">
          <a href="https://www.linkedin.com/in/gautam-chauhan-008ba6225/" target="_blank" rel="noopener noreferrer">
            <img src="linkedin.png" alt="LinkedIn" className="w-8 h-8 my-4" />
          </a>
          <a href="https://github.com/GautamGC" target="_blank" rel="noopener noreferrer">
            <img src="github.png" alt="Github" className="w-8 h-8 my-4" />
          </a>
          <a href="https://leetcode.com/u/user4729Cz/" target="_blank" rel="noopener noreferrer">
            <img src="Leetcode.svg" alt="Leetcode" className="w-8 h-8 my-4" />
          </a>
          <a href="mailto:gautamchauhan.officialgc@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="mail.png" alt="Mail" className="w-8 h-8 my-4" />
          </a>
        </div>
        <div className="md:hidden flex justify-end items-center">
          <button
            className="bg-black hover:bg-slate-800 text-white font-semibold py-2 px-4 rounded-full shadow-lg focus:outline-none"
            onClick={() => setShowNav(!showNav)}
          >
            {showNav ? (
              <img src="close.png" alt="Close" className="w-8 h-8" />
            ) : (
              'Socials'
            )}
          </button>
          {showNav && (
            <div className="flex flex-col bg-black p-4 rounded-lg shadow-lg">
              <a href="https://www.linkedin.com/in/gautam-chauhan-008ba6225/" target="_blank" rel="noopener noreferrer">
                <img src="linkedin.png" alt="LinkedIn" className="w-8 h-8 my-4" />
              </a>
              <a href="https://github.com/GautamGC" target="_blank" rel="noopener noreferrer">
                <img src="github.png" alt="Github" className="w-8 h-8 my-4" />
              </a>
              <a href="https://leetcode.com/u/user4729Cz/" target="_blank" rel="noopener noreferrer">
                <img src="Leetcode.svg" alt="Leetcode" className="w-8 h-8 my-4" />
              </a>
              <a href="mailto:gautamchauhan.officialgc@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src="mail.png" alt="Mail" className="w-8 h-8 my-4" />
              </a>
              <a href="My_Resume.pdf" download>
              <button className="bg-black hover:bg-slate-800 text-white font-semibold py-2 px-4 rounded-full shadow-lg focus:outline-none">
              <a href="https://drive.google.com/file/d/1-iUP-Tw7ifRa2t5uWmgAudpiTgf_bMRr/view?usp=sharing" download="My_Resume.pdf">
                Download Resume
              </a>
              </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HeroSection