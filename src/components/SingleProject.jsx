import React, { useRef, useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DoneIcon from '@mui/icons-material/Done';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { Info, InfoEyebrow, InfoSubtitle, InfoTitle } from "./info-basic";
import { keyframes } from "@mui/system";
// import { Info}
import { Chip } from "@mui/material";

// Define the zoom-in animation
const zoomIn = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export default function SingleProject({
  project_img,
  project_title,
  project_description,
  style,
  status,
}) {
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
      { threshold: 0.1 } // Trigger when 10% of the element is visible
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
    <Card
      sx={(theme) => ({
        margin: 0,
        borderRadius: theme.spacing(2), // 16px
        transition: "0.3s",
        boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
        position: "relative",
        maxWidth: 500,
        // marginLeft: "auto",
        overflow: "initial",
        // background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: theme.spacing(2),
        [theme.breakpoints.up("md")]: {
          flexDirection: "row",
          paddingTop: theme.spacing(2),
        },
      })}
    >
      <CardMedia
        image={
          project_img
        }
        sx={(theme) => ({
          minWidth: "200px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: theme.spacing(-3),
          maxHeight: "200px",
          paddingBottom: "48%",
          borderRadius: theme.spacing(2),
          backgroundColor: "#fff",
          position: "relative",
          [theme.breakpoints.up("md")]: {
            width: "100%",
            marginLeft: theme.spacing(-3),
            marginTop: 0,
            transform: "translateX(-8px)",
          },
          "&:after": {
            content: '" "',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // backgroundImage: "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
            borderRadius: theme.spacing(2), // 16
            opacity: 0.5,
          },
        })}
      />
      <CardContent>
        <Info
          useStyles={(theme) => {
            const family =
              "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif";
            return {
              eyebrow: {
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontSize: 12,
                marginBottom: "0.875em",
                display: "inline-block",
              },
              title: {
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: "0.35em",
                fontFamily: family,
              },
              subtitle: {
                marginBottom: theme.spacing(2),
                fontSize: "0.8rem",
                letterSpacing: "0.00938em",
                fontFamily: family,
              },
            };
          }}
        >
          {/* <InfoEyebrow>28 MAR 2019</InfoEyebrow> */}
          <InfoTitle>{project_title}</InfoTitle>
          <InfoSubtitle>
            {project_description}
          </InfoSubtitle>
        </Info>
        <Button
          sx={{
            backgroundImage: "linear-gradient(147deg, #6d28d9 0%, #4338ca 74%)",
            boxShadow: "0px 4px 32px rgba(109, 40, 217, 0.6)",
            borderRadius: 100,
            paddingLeft: 3,
            paddingRight: 3,
            color: "#ffffff",
          }}
        >
          Read more
        </Button>
      </CardContent>
    </Card>
  );
}
