import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import SingleSkillCard from "./SingleSkillCard";
import SoftSkillProgess from "./SoftSkillProgress";
import { RiSpeakFill } from "react-icons/ri";
import { RiTeamFill } from "react-icons/ri";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { GiThink } from "react-icons/gi";
import { FaQuestion } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import Grid from '@mui/material/Grid2';
// import { icon } from "leaflet";

const SoftSkillsList = [
  {
    topic: "Communication",
    value: 90,
    icon: <RiSpeakFill />,
  },
  {
    topic: "Team Work",
    value: 90,
    icon: <RiTeamFill />,
  },
  {
    topic: "Leadership",
    value: 90,
    icon: <GrUserManager />,
  },
  {
    topic: "Time Management",
    value: 90,
    icon: <MdOutlineAccessTimeFilled />,
  },
  {
    topic: "Critical Thinking",
    value: 90,
    icon: <GiThink />,
  },
  {
    topic: "Problem Solving",
    value: 90,
    icon: <FaQuestion />,
  },
];

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
            color: "#4338ca",
            fontFamily: "Forte",
            fontWeight: 500,
          }}
        >
          Soft Skills
        </span>
      </Typography>

      <Box
        sx={{
          maxWidth: "100%",
          p: 4
        }}
      >
        <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 5 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {SoftSkillsList.map((skill, index) => (
              <Grid key={index} size={{ xs: 4, sm: 4, md: 4 }}>
                <SoftSkillProgess
                  value={skill.value}
                  isVisible={isVisible}
                  title={skill.topic}
                  icon={skill.icon}
                />
              </Grid>
            ))}
            {/* {Array.from(Array(6)).map((_, index) => (
              <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                <Item>{index + 1}</Item>
              </Grid>
            ))} */}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
