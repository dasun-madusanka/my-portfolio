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
import { keyframes } from "@mui/system";
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
      sx={{
        width: 345,
        m: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        opacity: isVisible ? 1 : 0,
        animation: isVisible ? `${zoomIn} 1s ease-out` : "none",
        ...style, // Apply additional styles passed via props
      }}
      ref={ref}
    >
      <CardMedia sx={{ height: 140 }} image={project_img} title="project" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project_title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {project_description}
        </Typography>
      </CardContent>

      <Box
        sx={{ maxWidth: "100%", display: "flex", justifyContent: "space-between", p: 3 }}
      >
        <Button size="small">Explore More</Button>
        <Button size="small" startIcon={(status === "Done")? <DoneIcon />: <AutorenewIcon />}  variant="outlined" sx={{borderRadius: "50px"}} disabled>{status=="Done"? "Done": "Ongoing"}</Button>
        {/* <Chip label="React" color="error" /> */}
      </Box>
      {/* <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        
      </CardActions> */}
    </Card>
  );
}
