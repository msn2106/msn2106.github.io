import React, { useEffect, useRef, Suspense } from "react";
import "./Portfolio.css";
import { AiFillGithub } from "react-icons/ai";
import { PiMonitor } from "react-icons/pi";
import { motion, useInView, useAnimation } from "framer-motion";
import imageGallery from "../../assets/image-gallery.png";
import ecommerce from "../../assets/react-ecommerce-project.png";
import codeial from "../../assets/codeial.png";
import aiImageGenerator from "../../assets/ai-image-generator.png";
import imageCaptionGenerator from "../../assets/image-caption-generator.png";

const data = [
  {
    id: 1,
    weburl: "https://image-gallery-beryl.vercel.app/",
    title: "Image Gallery",
    date: "January 25 - February 25",
    techStack: "React . Cloudinary . Tailwind CSS . Redux . Firebase",
    desc: `A React application which uses cloudinary to store images and is built using Tailwind CSS. It uses Redux for state management and Firebase for authentication. The application allows users to upload images and create a gallery.`,
    url: imageGallery,
    github: "https://github.com/msn2106/image-gallery",
  },
  {
    id: 2,
    weburl: "https://msn2106.github.io/react-ecommerce/",
    title: "React E-Commerce",
    date: "November 24 - December 24",
    techStack: "React . styled-components . axios . gh-pages",
    desc: `A responsive and user-friendly e-commerce platform built using ReactJS. The UI is styled with styled-components for modular and maintainable CSS. Axios is used for seamless API integration and data fetching. The application is deployed on GitHub Pages (gh-pages) for easy access and sharing, making it a fully functional front-end project that showcases modern React development practices.`,
    url: ecommerce,
    github: "https://github.com/msn2106/react-ecommerce",
  },
  {
    id: 3,
    weburl: "https://github.com/msn2106/codeial",
    title: "Codeial",
    date: "August 24 - October 24",
    techStack:
      "Thunk · Context API · Responsive Web Design · User Experience (UX) · React.js · Redux · Back-End Web Development · React Hooks . JWT · Local Storage . NodeJS . Render",
    desc: `React-based Social Media Application made using React. Used React Hooks, Local storage and jwt for handling authentication. Added feature to create, like and comment on post and Add and remove friend.`,
    url: codeial,
    github: "https://github.com/msn2106/codeial",
  },
  {
    id: 4,
    weburl: "https://msn2106.github.io/AIImageGenerator/",
    title: "AI Image Generator",
    date: "April 24 - July 24",
    techStack: "ViteJS . CSS . NodeJS . ExpressJS . MongoDB . OpenAI API . Cloudinary . Render . GitHub Pages",
    desc: `A full-stack web application built with ViteJS and ReactJS for a fast and modern front-end experience. The NodeJS and ExpressJS backend integrates the OpenAI API to generate images dynamically based on user input. Generated images are stored on Cloudinary, and all application data is managed using MongoDB Atlas. The backend is deployed via Render, while the frontend is hosted on GitHub Pages, ensuring smooth and scalable deployment.`,
    url: aiImageGenerator,
    github: "https://github.com/msn2106/AIImageGenerator",
  },
  {
    id: 5,
    weburl: "https://github.com/msn2106/ImageCaptionGenerator",
    title: "Image Caption Generator",
    date: "November 22 - March 23",
    techStack: "Python . Flask . Tensorflow . Keras . OpenCV . HTML . CSS . JavaScript",
    desc: `The project uses Convolution Neural Network(CNN) and Long Short Term Memory(LSTM) technique of Recurrent Neural Network(RNN) for predicting the captions for the image provided by the user through the Web App designed using Flask.`,
    url: imageCaptionGenerator,
    github: "https://github.com/msn2106/ImageCaptionGenerator",
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    mainControls.start(isInView && "visible");
  }, [isInView]);

  return (
    <section id='portfolio' className='portfolio'>
      <h1>Portfolio</h1>
      <h5>My Recent Works</h5>
      <div ref={ref} className='portfolio__container'>
        {data.map(({ id, url, title, github, weburl, desc, date, techStack }) => {
          return (
            <motion.article
              variants={{
                hidden: { opacity: 0, translateY: 30 },
                visible: { opacity: 1, translateY: 0 },
              }}
              key={id}
              initial='hidden'
              animate={mainControls}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
              className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={url} alt={title} />
                {/* <Suspense fallback={<div className='image-placeholder'>Loading...</div>}>
								</Suspense> */}
                {/* <LazyLoadImage src={require(url)} alt={title} /> */}
              </div>
              <div className='details'>
                <div className='projectDetails'>
                  <h3>{title}</h3>
                  <p className='date'>{date}</p>
                  <p className='techStack'>{techStack}</p>
                </div>

                <p className='desc'>{desc}</p>
                <div className='button-flex'>
                  <div className='portfolio__item-cta'>
                    <a href={github} className='btn btn-primary ctaBtn' target='_blank' rel="noreferrer">
                      <AiFillGithub fontSize={24} />
                      Github
                    </a>
                  </div>
                  <div className='portfolio__item-cta'>
                    <a href={weburl} className='btn btn-primary ctaBtn' target='_blank'>
                      <PiMonitor fontSize={24} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
