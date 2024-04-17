import React from 'react';
import '../styles/AboutMe.css'
const AboutMe = () => {
  return (
    <section>
      <section>
        <h2 className='aboutMe'>About Me</h2>
      </section>
      <section className='about-me-container'>
        <div className='about-me-content'></div>
        <img className= 'profilepic' src='../images/IMG_9639.jpg' alt="Profile" />
        <p>I was born in Nuevo Leon, Mexico. I move to th United States at 5 years old, and i graduated from Cy-Fair High School. Im a veteran, served 4 years in the Army, i was station in Virgnia. Ive been overseas while in service ti Japan as a Watercraft Engineer. I have always loved being on computers not only gaming but working on mods with my friends, and building computers.</p>
      </section>
    </section>
  );
};

export default AboutMe;