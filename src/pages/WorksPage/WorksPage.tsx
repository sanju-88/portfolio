import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import HeadingSec from "../../components/shared/HeadingSec";
import Projects from "../../components/Projects/Projects";
import aiImage from "../../assets/projects/assistant.png";
import lava from "../../assets/projects/lavastore.png";
import visa from "../../assets/projects/visa.png";
import java from "../../assets/projects/java.png";

const ProjectsData = [
  {
    id: 1,
    title: "Notes App",
    tech: "React and TailwindCSS",

    description: [
      "It is a small notes app website built using React and TailwindCSS. It includes a home page in which users can create, edit, and delete notes.",
    ],
    livelink: "https://notes-app-lyart-theta.vercel.app/",
    link: "https://github.com/sanju-88/notes-app",
  },
  {
    id: 2,
    title: "Basic Website for NGO",
    tech: "React ,Vite and TailwindCSS",

    description: [
      "I have created a basic website for an NGO using React, Vite, and TailwindCSS. The website is responsive and includes a home page, about page, and contact page.",
    ],
    link: "https://ngo-git-main-sanjus-projects-ac449c3d.vercel.app/",
    liveLink: "https://ngo-kd74ov80y-sanjus-projects-ac449c3d.vercel.app/",
  },
  {
    id: 3,
    title: "Music Player",
    tech: "HTML CSS JavaScript",

    description: [
      "This  is my favorite project. I have made a music player using HTML, CSS, and JavaScript. It is a simple music player that can play, pause, and skip songs.",
      "I have also added a feature to jump to a specific part of the song by clicking on the progress bar.",
    ],
    link: "https://github.com/sanju-88/music-player",
    livelink:
      "https://music-player-git-main-sanjus-projects-ac449c3d.vercel.app/",
  },
  {
    id: 4,

    title: "Text Utils",
    tech: "React",
    description: [
      "Developed a React.js web application, 'Text Utils', optimizing text editing and data storage capabilities",
    ],
    livelink: "https://txetutils-react.netlify.app/",
    link: "https://github.com/sanju-88/textutils",
  },
];

const ProjectsCMPdata = [
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
  {
    id: 4,
    title: "Java learning platform",
    tech: "HTML CSS JavaScript",
    image: java,
    description: [
      "An interactive web-based platform designed to help beginners learn Java through structured topics and hands-on practice. It includes categorized concepts, problem-based learning modules, and a user-friendly interface for easy navigation. The project focuses on simplifying core Java concepts while enhancing logical thinking and coding skills."
    ],
    link: "https://github.com/Ashish-chanchal/Rentup",
    livelink: "https://java-practice-4020.netlify.app/",
  },
];
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
const WorksPage = () => {
  return (
    <div>
      <Helmet>
        <title>Works - sanju sawariya</title>
        <meta
          name="description"
          content="Explore a portfolio of innovative projects, including web and mobile apps built with Dart, Flutter, React, Firebase, HTML, CSS, JavaScript, and more. Discover cutting-edge applications like CareLink, E-Learners, Movie Tickiter, and Rent-Up, each showcasing advanced development in user experience, seamless functionality, and modern design principles. View live projects featuring e-commerce platforms, weather apps, music players, and chatbots."
        />
      </Helmet>
      <ScrollReveal>
        <HeadingSec title="projects" description="List of my projects" />
      </ScrollReveal>
      <ScrollReveal>
        <Projects heading="complete-webApps" ProjectsData={ProjectsCMPdata} />
      </ScrollReveal>
      <ScrollReveal>
        <Projects heading="small-projects" ProjectsData={ProjectsData} />
      </ScrollReveal>
    </div>
  );
};

export default WorksPage;
