import React, { useRef, useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { SingleWorkExperience } from "./Singleworkexperience";

// ─── Dummy data — replace logos with real company images when ready ───────────
// To use a real logo: import companyLogo from "../assets/images/your-logo.png"
// then set logo: companyLogo in the entry below.

const WorkExperienceData = [
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8pP3Z_-kzrditlyTYDEmbVHVsbBodRjzyjg&s', // Replace with: import logo from "../assets/images/company1.png"
    company: "Hasthiya IT",
    position: "Associate Software Engineer",
    duration: "Aug 2025 – Feb 2026",
    description:
      "Built web/mobile apps with React, React Native, and TypeScript, and developed REST APIs using Node.js, Express, NestJS, and FastAPI. Integrated OpenAI/Appify APIs, managed MongoDB/MySQL, and supported deployments via cPanel and Google Cloud.",
  },
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8pP3Z_-kzrditlyTYDEmbVHVsbBodRjzyjg&s', // Replace with: import logo from "../assets/images/company2.png"
    company: "Hasthiya IT",
    position: "Software Engineer Intern",
    duration: "Feb 2025 – Aug 2025",
    description:
      "Assisted in building web apps with React/TypeScript and responsive UI using Tailwind/ShadCN. Supported Node.js/Express APIs, MySQL, Firebase auth/storage, Android (Java), and deployments via cPanel/Google Cloud in an Agile team.",
  }
];

export default function WorkExperience() {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
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
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        paddingTop: 10,
        paddingBottom: 6,
        opacity: isVisible ? 1 : 0,
        transition: "opacity 1s ease-out",
      }}
      ref={ref}
    >
      {/* Section heading — same pattern as Education & Achievements */}
      <Typography variant="h4" sx={{ textAlign: "center", fontWeight: 550 }}>
        Where I Have Worked
      </Typography>
 
      <Typography variant="h5" sx={{ marginBottom: 5 }}>
        My{" "}
        <span
          style={{
            color: "#4338ca",
            fontFamily: "Forte",
            fontWeight: 500,
          }}
        >
          Experience
        </span>
      </Typography>
 
      {/* Cards grid */}
      <Box
        sx={{
          maxWidth: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 5,
          padding: 2,
        }}
      >
        {isVisible &&
          WorkExperienceData.map((exp, index) => (
            <SingleWorkExperience
              key={index}
              index={index}
              logo={exp.logo}
              company={exp.company}
              position={exp.position}
              duration={exp.duration}
              description={exp.description}
            />
          ))}
      </Box>
    </Box>
  );
}