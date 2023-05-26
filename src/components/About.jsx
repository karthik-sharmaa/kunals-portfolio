import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Hello ! I am a Software Engineer with keen interests in backend technology. 
        I have built Microservices with Serverless technology/AKS, 
        in Java, SQL. Strong expertise in Java, Spring Boot, and AWS, 
        with a focus on delivering successful projects. 
        Proficient in JUnit/testing, GitHub.
        I am excited about working with challenging problems and using new technologies in solving them.
        
      </motion.p>

      
    </>
  );
};

export default SectionWrapper(About, "about");
