import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const skills = [
    "React",
    "Next.js",
    "Node.js",
    "Azure Functions",
    "JavaScript",
    "Express.js",
    "GraphQL",
    "Redux",
    "HTML",
    "CSS",
    "SCSS",
    "TailwindCSS",
    "Bootstrap",
    "Material-UI",
    "TypeScript",
    "Vite",
    "Webpack",
    "Babel",
    "MongoDB",
    "MySQL",
    "Git",
    "GitHub",
    "Vercel",
    "Jest",
    "Postman",
    "Jenkins",
    "Azure Storage",
    "Azure Cosmos DB",
    "Azure DevOps",
    "Azure Event Grid"
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <h1>Skills</h1>
            <div className="skills-container">
                <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="skills-list"
                >
                    {skills.map((skill, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="skill-item"
                        >
                            {skill}
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </section>
    );
};

export default Skills;
