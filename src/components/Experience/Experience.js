import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";

const experiences = [
    {
        id: 1,
        role: "Senior Software Developer",
        company: "Cogitate Technology Solutions",
        duration: "June 2023 - Present",
        responsibilities: [
            " - Assumed leadership in critical company products, spearheading the creation of a dependable rating mechanism, including the resolution of Out-of-Sequence (OOS) scenarios.",
            " - Innovated a print service mechanism, leveraging Azure blob-triggered functions and time-triggered functions to efficiently batch and print offline requested forms, delivering a streamlined and efficient process for users.",
            " - Orchestrated the integration of payment systems with third-party services, encompassing end-to-end transaction handling in the UI, backend, and Billing System, while proficiently managing scenarios involving instalments and payment failures.",
            " - Led and mentored a team of developers, overseeing their contributions and collaborating closely with Quality Assurance teams, presenting product demos to clients with finesse."
        ],
    },
    {
        id: 2,
        role: "Software Developer",
        company: "Cogitate Technology Solutions",
        duration: "July 2022 - June 2023",
        responsibilities: [
            " - Engineered an Event-Driven system to oversee real-time requests, bolstering performance while implementing robust error detection through dead-lettering and comprehensive logging.",
            " - Programmed and optimized multiple Azure Serverless functions, optimizing backend operations through GraphQL plugins and rigorous unit testing.",
            " - Pioneered a task-based mechanism intricately connected to an Event-Driven architecture, serving as the cornerstone for effectively managing all asynchronous operations.",
            " - Seamlessly integrated Billing REST APIs with the core system, supplanting the previous polling mechanism with efficient webhooks for E-Signature requests.",
            " - Collaborated within an Agile methodology, ensuring agility and adaptability in project execution."
        ],
    },
    {
        id: 3,
        role: "Associate Developer",
        company: "Cogitate Technology Solutions",
        duration: "July 2021 - July 2022",
        responsibilities: [
            " - Orchestrated the assembly of a groundbreaking architectural overhaul, culminating in a remarkable 1000% expansion in the company's simultaneous user capacity.",
            " - Designed and constructed a production-grade frontend framework utilizing ReactJS and NextJS, resulting in a refined user experience and interface.",
            " - Devised and engineered an innovative common backend framework, employing NodeJS, Azure Serverless functions, and Cosmos DB, yielding a 200% augmentation in the user base and a substantial reduction in response time to single digits compared to the previous .NET services hosted on in-house servers.",
            " - Formulated and implemented backend APIs, harnessing the power of Apollo GraphQL, thereby elevating performance by an astounding 500%, while introducing a JSON-based, effortlessly configurable, and reusable UI mechanism.",
            " - Developed and fabricated a queue-triggered Azure function to automate client document generation, proficiently integrating various REST APIs and ensuring code reliability through comprehensive Jest unit testing.",
            " - Proficiently executed releases of both FrontEnd and Backend functions, employing Jenkins and Azure DevOps for streamlined deployment processes."
        ],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <h1>Experience</h1>
            <div className="experience__container">
                {experiences.map(({ id, role, company, duration, responsibilities }) => (
                    <motion.div
                        key={id}
                        initial={{ opacity: 0, translateY: 30 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="experience__item"
                    >
                        <div className="desc">
                            <h3 className="experience__role">{role}</h3>
                            <p className="experience__company">{company}</p>
                            <p className="experience__duration">{duration}</p>
                        </div>
                        <motion.ul
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="experience__responsibilities"
                        >
                            {responsibilities.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
