import React, { useRef, useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import SingleProject from "./SingleProject";
import hwg from "../assets/images/hwg.png";
import sathkara from "../assets/images/sathkara.png";
import cowbox from "../assets/images/cowbox.jpeg";
import hw from "../assets/images/hw.jpeg";
import internify from "../assets/images/internify.jpg";
import uom from "../assets/images/uom.jpg";
import bmmv from "../assets/images/bmmv.jpeg";
import { SingleEducation } from "./SingleEducation"

const EducationData = [
    {
        img: uom,
        title: "University of Moratuwa",
        subtitle: "Higher Education",
        description: <>BSc. (Hons) in Information Technology <br/><br/> Academic Year 2020/2021 <br/><br/> 3.653 GPA</>,
    },
    {
        img: bmmv,
        title: <>Central College<br/>Bandarawela</>,
        subtitle: "Secondary Education",
        description: <>ALs - Common Stream | 2020<br/>Combined Maths - A | Physics - B | ICT - B <br/><br></br> OLs | 2017<br/>Passed with 5 A passes, 2 B Passes & 2 C Passes </>,
    }
]
// Project data
const ProjectData = [
  {
    project_img: hwg,
    project_title: "HearWeGo",
    project_description: "Web application provides a platform to manage songs, albums, events, fan clubs, press and PR campaigns of artists and provides facility of hit prediction of a song.",
    status: "Done",
  },
  {
    project_img: sathkara,
    project_title: "Sathkara App",
    project_description: "Web application that provides facility to find medicines and allows to contact the medicine owners. Users can add posts if they have medicines.",
    status: "Done",
  },
  {
    project_img: cowbox,
    project_title: "Cow Box",
    project_description: "Web application that provides facility to express for the voters to express their vote to the electoral candidates. And it allows to manage the parties of the electoral candidates.",
    status: "Done",
  },
  {
    project_img: hw,
    project_title: "Coco-Smoothie Maker",
    project_description: "Arduino project that allows to make fruit juice using coconut water automatically. It automates the full process of making smoothie. ",
    status: "Ongoing",
  },
  {
    project_img: internify,
    project_title: "Internify",
    project_description: "Web application that provides facility students to upload their CVs and apply for the internships",
    status: "Ongoing",
  },
];

export default function Education() {
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
      Foundations of My Skills
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
          Education
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
        {EducationData.map((ed, index) => (
          <SingleEducation
            key={index}
            img={ed.img}
            title={ed.title}
            subtitle={ed.subtitle}
            description={ed.description}
          />
        ))}
      </Box>
    </Box>
  );
}
