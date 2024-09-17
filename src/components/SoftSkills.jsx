import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import SingleSkillCard from "./SingleSkillCard";

export default function SoftSkills() {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Set visibility based on whether the section is intersecting
      },
      {
        threshold: 0.3, // 30% of the element needs to be visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        paddingTop: 10,
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center", fontWeight: 550 }}>
        What I Excel In
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
          Soft Skills
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
        <SingleSkillCard topic="Communication" value={90} isVisible={isVisible} />
        <SingleSkillCard topic="Teamwork" value={95} isVisible={isVisible} />
        <SingleSkillCard topic="Leadership" value={97} isVisible={isVisible} />
        <SingleSkillCard topic="Time Management" value={90} isVisible={isVisible} />
        <SingleSkillCard topic="Critical Thinking" value={88} isVisible={isVisible} />
        <SingleSkillCard topic="Problem Solving" value={92} isVisible={isVisible} />
      </Box>
    </Box>
  );
}
