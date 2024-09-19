import React from "react";
import RestaurantMenuRounded from "@mui/icons-material/RestaurantMenuRounded";
import TripOrigin from "@mui/icons-material/TripOrigin";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";


const StyledCard = styled(Card)(({ theme: { palette } }) => ({
  width: "180px",
  height: "230px",
//   margin: "20px 0 0 0",
  background: "linear-gradient(147deg, #6d28d9 0%, #4338ca 74%)",
  position: "relative",
  overflow: "visible",
  color: "#adadac",
  borderRadius: "10px",

//   "&:before": {
//     content: "' '",
//     maxWidth: "100%",
//     minWidth: "140px",
//     "border-bottom": `30px solid ${
//       palette.mode === "dark" ? "#6d28d9" : "#4338ca"
//     }`,
//     "border-left": " 20px solid transparent",
//     "border-right": "20px solid transparent",
//     position: "absolute",
//     top: "-30px",
//     left: 0,
//   },
}));

const TripOriginHole = styled(TripOrigin)(({theme: { palette }}) => ({
  position: "absolute",
  top: "-20px",
  margin: "auto",
  width: "100%",
  left: 0,
  color: "#000",
//   backgroundColor: palette.mode === "dark" ? "#000" : "#fff",
//   backgroundColor: theme.palette.mode === "dark" ? "#4338ca" : "#4338ca",
}));

export function SingleContact({icon, title, value, link}) {
  return (
    <StyledCard elevation={0} onClick={()=>{window.location.href = link}}>
      <CardContent sx={{display: "flex", height: "80%", flexDirection: "column", alignItems: "center", justifyContent: "space-between"}}>
        {/* <TripOriginHole /> */}
        {/* <RestaurantMenuRounded sx={{ fontSize: 83, width: "100%" }} /> */}
        {icon} 
        <Typography align="center" color="#fff" variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography
          color="#adadac"
          variant="body2"
          align="center"
        //   component="p"
        overflow={"hidden"}
        >
          {value}
        </Typography>
      </CardContent>
    </StyledCard>
  );
}