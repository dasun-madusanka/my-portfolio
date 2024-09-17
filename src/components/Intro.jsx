import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import {
  Typography,
  useTheme,
  Grid,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ReactTyped as Typed } from "react-typed";
import dasun from "../assets/images/dasun.png";
import "../styles/Intro.css";
import { Link } from "react-scroll";

export default function Intro() {
  const theme = useTheme();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleCall = () => {
    window.location.href = 'tel:+94764975239';
  };
  
  const handleEmail = () => {
    window.location.href = 'mailto:sandanithath17@gmail.com'
  };
  
  const handleLinkedIn = () => {
    window.location.href = 'https://www.linkedin.com/in/sandani-muthunayaka-5159bb27a/';
  };
  
  const handleGitHub = () => {
    window.location.href = 'https://github.com/215078V';
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
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
      sx={{
        p: 2,

        paddingTop: 10,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }}
      ref={sectionRef} // Attach the ref to the Box component
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 2 }}>
          <Grid item xs={12} sm={6} sx={{ order: { xs: 2, sm: 1 } }}>
            <Box
              sx={{
                p: 15,
                pr: { xs: 5, sm: 5, md: 15 },
                pl: { xs: 5, sm: 5, md: 15 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{ width: "100%", display: "flex", justifyContent: "left" }}
              >
                <Typography variant="h6" sx={{ textAlign: "left" }}>Hi I am</Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "left",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 500,
                    textAlign: "left",
                    fontSize: { xs: "3rem", sm: "2.5rem", md: "4rem" }, // Responsive font size
                  }}
                >
                  <Typed
                    strings={["Dasun"]}
                    typeSpeed={200}
                    backSpeed={130}
                    loop={false}
                    showCursor={false}
                    startDelay={100} // Optional: add delay before animation starts
                    visible={isVisible} // Trigger typing effect only when visible
                  />
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "end",
                  mb: 2,
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 500,
                    textAlign: "right",
                    fontSize: { xs: "2.5rem", sm: "2.2rem", md: "4.5rem" }, // Responsive font size
                  }}
                >
                  <Typed
                    strings={["Madusanka"]}
                    typeSpeed={200}
                    backSpeed={200}
                    loop={false}
                    showCursor={false}
                    startDelay={100} // Optional: add delay before animation starts
                    visible={isVisible} // Trigger typing effect only when visible
                  />
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "left",
                  mb: 2,
                }}
              >
                <Typography
                  variant="h5"
                  // color="secondary"
                  sx={{ fontWeight: 500, textAlign: "left" }}
                >
                  <span>I am a </span>
                  <Typed
                  style={{color: "#6d28d9"}}
                    strings={["Programmer"]}
                    typeSpeed={200}
                    backSpeed={200}
                    loop={false}
                    showCursor={false}
                    startDelay={100} // Optional: add delay before animation starts
                    visible={isVisible} // Trigger typing effect only when visible
                  />
                  <span style={{color: "#6d28d9"}}>|</span>
                </Typography>
              </Box>

              <Box sx={{ width: "100%", textAlign: "justify", mb: 2 }}>
                <Typography variant="subtitle2" color="textSecondary">
                  As a third-year undergraduate with a strong interest in
                  technology I am looking forward into experiments and getting
                  knowledge. Despite having little experience, I have an endless
                  amount of energy and a strong desire to learn.
                </Typography>
              </Box>

              <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 2, justifyContent: {xs: "center", sm: "center", md: "left"} }}>
                <Box sx={{ width: "200px" }}>
                  <Link
                    key="contact"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <Button
                    variant="contained"
                    sx={{ width: "100%", height: "50px", borderRadius: "50px" }}
                    endIcon={<ArrowForwardIcon />}
                  >
                    Get in Touch
                  </Button>
                  </Link>
                  
                </Box>
                <Box>
                  <Stack direction="row" spacing={1}>
                  <IconButton aria-label="delete" onClick={handleCall}>
                      <CallIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={handleEmail}>
                      <EmailIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={handleLinkedIn}>
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={handleGitHub}>
                      <GitHubIcon />
                    </IconButton>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              order: { xs: 1, sm: 2 },
              height: { xs: "150px", sm: "200px", md: "250px" },
              marginBottom: { xs: 7, sm: 2, md: 1 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: { xs: "300px", sm: "400px", md: "500px" },
                marginTop: { xs: 3, sm: 3, md: 4 },
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  width: { xs: "300px", sm: "400px", md: "500px" },
                  height: { xs: "300px", sm: "400px", md: "500px" },
                  // borderRadius: "50%",
                  backgroundImage: `url(${dasun})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 1.5s ease-in-out", // Smooth zoom-in transition
                  transform: isVisible ? "scale(1)" : "scale(0.8)", // Zoom in when visible
                }}
              ></Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
