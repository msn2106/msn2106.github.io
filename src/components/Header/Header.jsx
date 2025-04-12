import React from "react";
import "./Header.css";
import CTA from "./CTA";
import HeroImage from "../../assets/HeroSection.jpg";
import Headersocial from "./Headersocial";
import { motion } from "framer-motion";
import Skills from "./Skills";
const header = () => {
  const initial = {
    translateY: 30,
    opacity: 0,
  };
  const animate = {
    translateY: 0,
    opacity: 1,
  };
  const transition = {
    duration: 0.8,
    delay: 0,
  };
  return (
    <header>
      <div className='container header__container'>
        <div className='heroSection'>
          <motion.div className='intro'>
            <motion.h3 initial={initial} animate={animate} transition={transition} className='intro-greet'>
              Hey there, I'm{" "}
            </motion.h3>
            <motion.h1
              initial={initial}
              animate={animate}
              transition={{
                ...transition,
                delay: 0.6,
              }}
              className='name'>
              Mayank Singh
            </motion.h1>
            <motion.h3
              initial={initial}
              animate={animate}
              transition={{
                ...transition,
                delay: 1.2,
              }}
              className='text-light'>
              Full Stack Developer
            </motion.h3>
          </motion.div>
          <motion.p className='subPara' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.6 }}>
            Senior Software Developer specialized in NodeJS, NextJS, ReactJS and Azure Architecture. Handled CI/CD using Jenkins and Azure DevOps,
            managed team, code reviews, cordinated with client for timely deliveries. Highly motivated and quick learner.
          </motion.p>
          <CTA />
        </div>
        <div className='midPannel'>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 2 }} className='heroImage'>
            <img src={HeroImage} alt='Poster' />
          </motion.div>
          <Headersocial />
        </div>
      </div>
    </header>
  );
};

export default header;
