import React, { useRef, useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import SingleProject from "./SingleProject";
import hwg from "../assets/images/hwg.png";
import sathkara from "../assets/images/sathkara.png";
import cowbox from "../assets/images/cowbox.jpeg";
import hw from "../assets/images/hw.jpeg";
import internify from "../assets/images/internify.jpg";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";

// Project data
const ProjectData = [
  {
    project_img: hwg,
    project_title: "HearWeGo",
    project_description: "Web application provides a platform to manage songs, albums, events, fan clubs, press and PR campaigns of artists and provides facility of hit prediction of a song.",
    status: "Done",
    technologies: [
      { icon: <IoLogoJavascript />, name: "JavaScript" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <RiNextjsFill />, name: "Next.js" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiExpress />, name: "Node.js" },
    ],
    role: "a Full Stack Developer",
    type: "Level II Software Project"
  },
  {
    project_img: sathkara,
    project_title: "Sathkara App",
    project_description: "Web application that provides facility to find medicines and allows to contact the medicine owners. Users can add posts if they have medicines.",
    status: "Done",
    technologies: [
      { icon: <IoLogoJavascript />, name: "JavaScript" },
      { icon: <FaReact />, name: "React.js" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiExpress />, name: "Node.js" },
    ],
    role: "a Backend Developer",
    type: "SLIIT Codecon 2023 App"
  },
  {
    project_img: cowbox,
    project_title: "Cow Box",
    project_description: "Web application that provides facility to express for the voters to express their vote to the electoral candidates. And it allows to manage the parties of the electoral candidates.",
    status: "Done",
    technologies: [
      { icon: <IoLogoJavascript />, name: "JavaScript" },
      { icon: <FaReact />, name: "React.js" },
      { icon: <IoLogoFirebase />, name: "Firebase" },
      { icon: <SiExpress />, name: "Node.js" },
    ],
    role: "a Frontend Developer",
    type: "SLIIT Codefest 2022 App"
  },
  {
    project_img: hw,
    project_title: "Coco-Smoothie Maker",
    project_description: "Arduino project that allows to make fruit juice using coconut water automatically. It automates the full process of making smoothie. ",
    status: "Ongoing",
    technologies: [
      { icon: "Nema17 | ", name: "JavaScript" },
      { icon: "DS3231 RTC Module | ", name: "TypeScript" },
      { icon: "HC-SR04 Ultrasonic Sensor | ", name: "Next.js" },
      { icon: "Water Level Sensor | ", name: "MongoDB" },
      { icon: "12V DC Motor", name: "Node.js" },
    ],
    role: "the Leader",
    type: "Level I Hardware Project"
  },
  {
    project_img: internify,
    project_title: "Internify",
    project_description: "Web application that provides facility students to upload their CVs and apply for the internships",
    status: "Ongoing",
    technologies: [
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <RiNextjsFill />, name: "Next.js" },
      { icon: <BiLogoPostgresql />, name: "PostgreSQl" },
      { icon: <SiExpress />, name: "Node.js" },
    ],
    role: "a Frontend Developer",
    type: "Internship Tracking System"
  },
];

export default function Projects() {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current); // Stop observing after it's visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        paddingTop: 10,
        opacity: isVisible ? 1 : 0,
        transition: "opacity 1s ease-out",
      }}
      ref={ref}
    >
      <Typography variant="h4" sx={{ textAlign: "center", fontWeight: 550 }}>
        How is my Contribution
      </Typography>

      <Typography variant="h5" sx={{ marginBottom: 3 }}>
        My{" "}
        <span
          style={{
            color: "#4338ca",
            fontFamily: "Forte",
            fontWeight: 500,
          }}
        >
          Projects
        </span>
      </Typography>

      <Box
        sx={{
          maxWidth: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 8,
          padding: 2
        }}
      >
        {ProjectData.map((project, index) => (
          <SingleProject
            project_img={project.project_img}
            project_title={project.project_title}
            project_description={project.project_description}
            key={index}
            style={{ animationDelay: `${index * 0.3}s`, animation: isVisible ? `zoomIn 1s ease-out` : 'none' }} // Apply animation if visible
            status={project.status}
            type={project.type}
            technologies={project.technologies}
            role={project.role}
          />
        ))}
      </Box>
    </Box>
  );
}
