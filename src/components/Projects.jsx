import React, { useRef, useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import SingleProject from "./SingleProject";
import hw from "../assets/images/hw.png";
import plazer from "../assets/images/plazer.png";
import anythink from "../assets/images/anythink.png";
import ayurva from "../assets/images/ayurva.png";

// Project data
const ProjectData = [
  {
    project_img: hw,
    project_title: "Plant Growth Chamber",
    project_description: "An innovative process let the seeds to grow in a controlled and sealed environment by controlling the atmosphere around the plants.",
    status: "Done",
  },
  {
    project_img: plazer,
    project_title: "Plazer Multi Service Web Portal",
    project_description: "A multi-service web platform which provides users to access different kind of web application services at same place using the same login credentials.",
    status: "Done",
  },
  {
    project_img: anythink,
    project_title: "AnyThink",
    project_description: "A mobile app that allows the user to manage his/her day-to-day work, manage his/her budget, maintain a personal diary, and manage important notes and documents. Users can also periodically get budget and task analysis to measure their performance.",
    status: "Ongoing",
  },
  {
    project_img: ayurva,
    project_title: "Ayurva",
    project_description: "A mobile responsive web platform helps the user to find the required medicine with the aid of a prescription. Users can order the required medicine from the nearest pharmacies which are registered on the platform.",
    status: "Ongoing",
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
        What have I Done
      </Typography>

      <Typography variant="h5" sx={{ marginBottom: 3 }}>
        My{" "}
        <span
          style={{
            color: "#007F73",
            fontFamily: "Brush Script MT",
            fontWeight: "bold",
          }}
        >
          Projects
        </span>
      </Typography>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
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
          />
        ))}
      </Box>
    </Box>
  );
}
