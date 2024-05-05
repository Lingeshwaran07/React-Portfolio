import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const handleDownload = () => {
    // Create an anchor element
    const link = document.createElement('a');
    // Set the href attribute to the URL of the file to be downloaded
    link.href = '..\assets\resume.pdf';
    //link.setAttribute('download',resume.pdf)
    // Set the download attribute to specify the filename to be used when saving the file
    link.download = 'resume.pdf';
    // Programmatically trigger a click event on the anchor element
    document.body.appendChild(link)
    link.click();
  };

  const resumebutton = <button type="button"  class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-sm text-sm px-5 py-1 text-center me-2 mb-2">Download Resume </button>;
  const phonebutton = <button type="button"  class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-sm text-sm px-5 py-1 text-center me-2 mb-2">+91 9791225876 </button>;
  const emailbutton = <button type="button"  class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-sm text-sm px-5 py-1 text-center me-2 mb-2">lingeshsince07011998@gmail.com</button>;
  const linkedinbutton = <button type="button"  class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-sm text-sm px-5 py-1 text-center me-2 mb-2">Linked-in</button>;
  const gitinbutton = <button type="button"  class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-sm text-sm px-5 py-1 text-center me-2 mb-2">Github</button>;

  const locationbutton = <button type="button"  class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-sm text-sm px-5 py-1 text-center me-2 mb-2">Chennai</button>;




  return (
    <>
      <motion.div variants={textVariant()}>
        <div className={'mb-3 flex justify-center flex-col items-center gap-4 md:flex-wrap sm:flex-row sm:justify-between'}>
    <a style={{textDecoration:"none"}} download={true}  href={'resume.pdf'} target={'_blank'} rel="noreferrer"  >
        {resumebutton}
        </a>
        <span>{phonebutton}</span>
        <span className={'flex flex-row'}>{locationbutton}</span>
        
        <span>{emailbutton}</span>
        <Link to = 'https://www.linkedin.com/in/linn07/' target="_blank">
        {linkedinbutton}
        </Link>
        <Link to = 'https://github.com/Lingeshwaran07' target="_blank">
        {gitinbutton}
        </Link>
    
        </div>
        
        <h2 className={styles.sectionHeadText}>Over<span className={'text-pink-400'}>view</span></h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px]  leading-[30px]'
      >
        Quality-driven react developer with robust groundwork in building highly responsive optimized scalable web apps along with
firm footing in python and django rest framework for developing powerful rest apis and pandas for data processing. Proven
ability to furnish new techniques for creating better UI-data manageable synchronized react apps. Adept at quickly identifying,
debugging and resolving complex technical issues by collaboration with cross-functional teams. Exp in agile methodologies
facilitating continual improvements and flexibility with excellent technical abilities offering 3 years of related experience
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
