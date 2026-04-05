import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import { Helmet } from "react-helmet-async";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import Experience from "../../components/Experience/Experience";
import aiImage from "../../assets/projects/assistant.png";
import lava from "../../assets/projects/lavastore.png";
import visa from "../../assets/projects/visa.png";

const ProjectsData = [
  {
    id: 1,
    title: "Virtual assistant",
    image: aiImage,
    tech: "HTML CSS JavaScript React MonogoDB Express Gemini API",
    description: [
      "A full-stack AI-powered virtual assistant built using the MERN stack and Gemini API. It allows users to register, log in, and interact with an intelligent assistant capable of handling queries and providing dynamic responses. The project demonstrates authentication, API integration, and responsive UI design.",
    ],
    link: "https://github.com/sanju-88/EVA---virtual-assistant",
    livelink: "https://assistant-frontend-ashen.vercel.app/",
  },
  {
    id: 2,
    image: lava,
    title: "Lava Store",
    tech: "HTML CSS JavaScript",
    description: [
      "A modern and visually appealing e-commerce frontend designed using HTML, CSS, and JavaScript. It features product showcases, interactive UI elements, and smooth user experience focused on design and responsiveness. This project highlights strong frontend development and UI/UX skills.",
    ],
    link: "https://github.com/sanju-88/lavaStore",
    livelink: "https://lavastore.netlify.app/",
  },
  {
    id: 3,
    title: "Animated visa consultancy website",
    tech: "HTML CSS JavaScript",
    image: visa,
    description: [
      "A professional and animated business website for a visa consultancy service. Built with HTML, CSS, and JavaScript, it includes smooth animations, service sections, and a clean layout to enhance user engagement. The project focuses on real-world business design and interactive web experiences.",
    ],
    link: "https://github.com/sanju-88/World-visa",
    livelink: "https://world-visa-immigration.netlify.app/",
  },
];
const ExperienceData = [
  {
    id: 1,

    tech: "Company Name: Studio Sonrai PVT LTD",
    title: "Designation: Software Engineer",
    description: [
      "Backend Development: Upskilled in NestJS, MongoDB, and authentication, implementing features like MultiModel Function Calling with OpenAI Assistant API, real-time conversation, and reducing the response time of voice conversation from 10 - 15 seconds to 3 - 4 Sec",
      "Frontend Development: Improved ReactJS focusing on state management using Redux Toolkit, optimization, and integration of Material UI for Hotel Services System - AI, React Native for services visualization app for hotel staff with role-based UI rendering, reminder notifications using Notifee and Firebase Cloud Messaging  and Three.js and WebGL for 3D Character rendering on browser it includes humanoid and animated characters, Voice based system with Agentic ai Integration",
      "Problem Solving & Collaboration: Enhanced problem-solving in JS/NestJS, contributed to team projects, and collaborated on building responsive, scalable applications. Solved a Major problem for them in IOS Safari in Voice to Voice Conversation and was able to build/deliver 10+ demos for clients' visits,  also provided major contribution in the company's product.",
    ],
  },
  {
    id: 2,

    tech: "Company Name: AlphaDroid",
    title: "Designation: Software Engineer",
    description: [
      "Backend Development: Upskilled in NestJS, MongoDB, and authentication, implementing features like MultiModel Function Calling with OpenAI Assistant API, real-time conversation, and reducing the response time of voice conversation from 10 - 15 seconds to 3 - 4 Sec",
      "Frontend Development: Improved ReactJS focusing on state management using Redux Toolkit, optimization, and integration of Material UI for Hotel Services System - AI, React Native for services visualization app for hotel staff with role-based UI rendering, reminder notifications using Notifee and Firebase Cloud Messaging  and Three.js and WebGL for 3D Character rendering on browser it includes humanoid and animated characters, Voice based system with Agentic ai Integration",
      "Problem Solving & Collaboration: Enhanced problem-solving in JS/NestJS, contributed to team projects, and collaborated on building responsive, scalable applications. Solved a Major problem for them in IOS Safari in Voice to Voice Conversation and was able to build/deliver 10+ demos for clients' visits,  also provided major contribution in the company's product.",
    ],
  },
];

const InternshipData = [
  {
    id: 3,

    tech: "Company Name: Kloudidev",
    title: "Designation: React Engineer Intern",
    description: [
      "Kloudidev Digital Solution Oct 2023 – Jun 2024 Acquired advanced proficiency in Tailwind CSS and Shadcnui frameworks , immediately implementing techniques to elevate a company website's design and functionality",
      "Recognized as the top-performing intern within the first month of tenure. Executed frontend enhancements for Teckshila AI, optimizing user interfaces with innovative solutions and streamlined experiences; Websites built by me are below",
    ],
  },
  {
    id: 4,

    tech: "Company Name: Institute of Nuclear Medicine & Allied Sciences (INMAS), DRDO",
    title: "Designation Research Internship",
    description: [
      "Completed a 10-week internship at INMAS, DRDO under G Scientist mentorship.",
      "Spearheaded a comprehensive analysis of EEG data to uncover key patterns in brain activity, resulting in the development of sophisticated predictive models for Parkinson's disease",
      "Developed and implemented sophisticated algorithms, including KNN, Random Forest, and Decision Tree, utilizing Python's MNElibrary to significantly enhance disease prediction accuracy based on EEG data",
    ],
  },
  {
    id: 5,

    tech: "Company Name: Robust Results PVT LTD",
    title: "Designation: Full-stack Developer Intern",
    description: [
      "Finished a 6-week internship as a Full Stack Developer at Robust Results Pvt Ltd, an IITK incubated company.",
      "Gained hands-on experience in HTML5, CSS3, JavaScript, Bootstrap, PHP, and MySQL during the internship",
      "Directed a cross-functional team to create an innovative web platform for E-Learners Technology, harnessing HTML, CSS, JavaScript, PHP, and MySQL",
    ],
  },
];
const aboutData = [
  {
    id: 1,
    description:
      "I am a passionate Full Stack Developer and a BCA graduate. I love building modern, responsive, and user-friendly web applications.",
  },
  {
    id: 2,
    description:
      "I have hands-on experience with React.js, Node.js, and MongoDB. I am currently looking for opportunities to start my professional journey in the IT industry.",
  },
];
// Define variants for animation
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

// Custom hook for adding scroll animations to each section
const ScrollReveal = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only animate once when in view
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
    >
      {children}
    </motion.div>
  );
};

function HomePage({
  setSelectedItem,
}: {
  setSelectedItem?: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div>
      <Helmet>
        <title>Sanju Sawariya</title>
        <meta
          name="description"
          content="Sanju Sawariya is a Software Developer and Community Manager based in Noida, Uttar Pradesh, India. He specializes in Frontend Development, Full-stack Development, Machine Learning, and Open Source. Explore Sanju Sawariya's portfolio of innovative projects, including web and mobile apps built with Dart, Flutter, React, Firebase, HTML, CSS, JavaScript, and more. Discover cutting-edge applications like CareLink, E-Learners, Movie Tickiter, and Rent-Up, each showcasing advanced development in user experience, seamless functionality, and modern design principles. Connect with Sanju Sawariya for software development, web design, and community management services. Reach out to Sanju Sawariya for collaborations, projects, and more."
        />
      </Helmet>
      {/* Apply scroll reveal to each section */}
      <ScrollReveal>
        <Hero />
      </ScrollReveal>
      <ScrollReveal>
        <Experience ExperienceData={InternshipData} title="Internships" />
      </ScrollReveal>
      <ScrollReveal>
        <Projects
          ProjectsData={ProjectsData}
          heading="Projects"
          setSelectedItem={setSelectedItem}
        />
      </ScrollReveal>
      <ScrollReveal>
        <Skills showimg={true} />
      </ScrollReveal>
      <ScrollReveal>
        <About description={aboutData} />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </div>
  );
}

export default HomePage;
