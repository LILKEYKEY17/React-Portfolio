import React from 'react';
import '../styles/Portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
const Portfolio = () => {
  return (
    <section>
      <h2 className='portfolio'>Portfolio</h2>
      <section className='project-container'>
      <div className="project">
          <div className="project-content">
            <img src="./images/project1.png" alt="Project 1" className="project-image" />
            <div className="project-overlay">
              <a href="https://agile-hollows-63324-0df4568dcdbc.herokuapp.com/login">
                <h3>Data Dish</h3>
              </a>
              <a href="https://github.com/mymashedpotatoes/Data-Dish?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
              
            </a>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="project-content">
            <img src="./images/Screenshot (281).png" alt="Project 2" className="project-image" />
            <div className="project-overlay">
              <a href="https://efren96.github.io/movies-to-watch-app/">
                <h3>MovieGo+</h3>
              </a>
              <a href="https://github.com/Efren96/movies-to-watch-app.git" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
              
            </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Portfolio;