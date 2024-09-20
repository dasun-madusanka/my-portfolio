import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, useTheme, IconButton, Divider } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { BarChart } from "@mui/x-charts/BarChart";
import Icon from "@mui/material/Icon"; // Import Icon component
import cLogo from "../assets/images/cLogo.png";
import cppLogo from "../assets/images/cppLogo.png";
import javaLogo from "../assets/images/javaLogo.webp";
import htmlLogo from "../assets/images/htmlLogo.png";
import cssLogo from "../assets/images/cssLogo.png";
import jsLogo from "../assets/images/jsLogo.png";
import tsLogo from "../assets/images/tsLogo.png";
import reactLogo from "../assets/images/reactLogo.png";
import nestLogo from "../assets/images/nestLogo.png";
import mysqlLogo from "../assets/images/mysqlLogo.png";
import pgLogo from "../assets/images/pgLogo.png";
import mongoLogo from "../assets/images/mongoLogo.png";
import ghLogo from "../assets/images/ghLogo.png";
import gitLogo from "../assets/images/gitLogo.png";
import pythonLogo from "../assets/images/pythonLogo.png";

const ProgrammingLanguages = [
  { img: cLogo, language: "C", value: 93, color: "#FF5722" },
  { img: cppLogo, language: "C++", value: 82, color: "#FF5722" },
  { img: javaLogo, language: "Java", value: 85, color: "#FF5722" },
  { img: pythonLogo, language: "Python", value: 96, color: "#FF5722" },
];

const WebTechnologies = [
  { img: htmlLogo, language: "HTML", value: 97, color: "#FF5722" },
  { img: cssLogo, language: "CSS", value: 96, color: "#FF5722" },
  { img: jsLogo, language: "JavaScript", value: 90, color: "#FF5722" },
  { img: tsLogo, language: "TypeScript", value: 88, color: "#FF5722" },
  { img: reactLogo, language: "React", value: 92, color: "#FF5722" },
  { img: nestLogo, language: "NestJS", value: 75, color: "#FF5722" },
];

const DbTechnologies = [
  { img: mysqlLogo, language: "MySQL", value: 90, color: "#FF5722" },
  { img: pgLogo, language: "PostgreSQL", value: 80, color: "#FF5722" },
  { img: mongoLogo, language: "MongoDB", value: 90, color: "#FF5722" },
];

const VersionControlTechnologies = [
  { img: gitLogo, language: "Git", value: 90, color: "#FF5722" },
  { img: ghLogo, language: "GitHub", value: 96, color: "#FF5722" },
];

export default function TechSkills() {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sections = [
    { title: "Programming Languages", data: ProgrammingLanguages },
    { title: "Web Technologies", data: WebTechnologies },
    { title: "Database", data: DbTechnologies },
    { title: "Version Controlling", data: VersionControlTechnologies },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
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

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sections.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sections.length - 1 : prevIndex - 1
    );
  };

  const currentSection = sections[currentIndex];

  const chartSettings = {
    xAxis: [{ label: "Proficiency" }],
    layout: "horizontal",
  };

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
        alignItems: "center",
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center", fontWeight: 550 }}>
      What I’m Best at in Tech
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
          Technical Skills
        </span>
      </Typography>

      {/* Display the current section with Bar Chart */}
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: "10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton onClick={handlePrev}>
            <ArrowBackIosIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 2,
            marginBottom: 2,
            gap: 1,
          }}
        >
          <Typography variant="h6" sx={{ fontSize: "1rem", textAlign: "center" }}>
            {currentSection.title}
          </Typography>

          <Divider orientation="horizontal" flexItem />

          <BarChart
            dataset={currentSection.data.map((item, index) => ({
              label: item.language,
              value: item.value,
              color: item.color,
            }))}
            yAxis={[{ scaleType: "band", dataKey: "label" }]}
            series={[
              {
                dataKey: "value",
                label: "Proficiency",
                color: theme.palette.primary.main, // Add colors for bars
                // marginLeft: 10,
              },
            ]}
            style={{ width: "100%", height: "300px" }}
            {...chartSettings}
            borderRadius={10}
            // color="#fff"
            barLabel="value"
            // label={{ position: "end" }}
            // margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            padding={0.2}
          />

          {/* Custom Legend with Icons */}
          <Box sx={{ display: "flex", width: "80%", flexWrap: "wrap", justifyContent: "center", marginTop: 2 }}>
            {currentSection.data.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  margin: 1,
                }}
              >
                <Icon sx={{ color: item.color, fontSize: 24 }}>
                  {/* Use Material Icons or SVGs here */}
                  <img src={item.img} alt={item.language} style={{ width: 24, height: 24 }} />
                </Icon>
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  {item.language}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            width: "10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton onClick={handleNext}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
