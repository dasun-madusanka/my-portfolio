import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Divider,
  Typography,
  Button,
  useTheme,
  IconButton,
} from "@mui/material";
import SliderComponent from "./Slider";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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

const ProgrammingLanguages = [
  { img: cLogo, language: "C", value: 90 },
  { img: cppLogo, language: "C++", value: 80 },
  { img: javaLogo, language: "Java", value: 88 },
];

const WebTechnologies = [
  { img: htmlLogo, language: "html", value: 97 },
  { img: cssLogo, language: "css", value: 93 },
  { img: jsLogo, language: "js", value: 87 },
  { img: tsLogo, language: "ts", value: 82 },
  { img: reactLogo, language: "react", value: 91 },
  { img: nestLogo, language: "nest", value: 89 },
];

const DbTechnologies = [
  { img: mysqlLogo, language: "MySQL", value: 90 },
  { img: pgLogo, language: "PostgreSQL", value: 96 },
  { img: mongoLogo, language: "MongoDB", value: 77 },
];

const VersionControlTechnologies = [
  { img: gitLogo, language: "Git", value: 90 },
  { img: ghLogo, language: "GitHub", value: 96 },
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
      {
        threshold: 0.3,
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
        Technical Proficiencies
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
          Technical Skills
        </span>
      </Typography>

      {/* Display the current section */}
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
            alignItems: "center",
            padding: 2,
            marginBottom: 2,
            gap: 1,
          }}
        >
          <Box sx={{ width: "35%" }}>
            <Typography
              variant="h6"
              sx={{ fontSize: "1rem", textAlign: "center" }}
            >
              {currentSection.title}
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box
            sx={{
              width: "60%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 5,
            }}
          >
            {currentSection.data.map((data, index) => (
              <Box
                key={index}
                sx={{ width: "100%", display: "flex", gap: 2, padding: 1 }}
              >
                <Box sx={{ width: "40px", height: "auto" }}>
                  <Box
                    sx={{
                      width: "30px",
                      height: "30px",
                      backgroundImage: `url(${data.img})`,
                      backgroundSize: "cover",
                    }}
                  ></Box>
                </Box>
                <SliderComponent value={data.value} isVisible={isVisible} />
                <Typography variant="subtitle1">{data.value + "%"}</Typography>
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

      

      {/* Navigation buttons */}
    </Box>
  );
}
