import React from "react";
import { Box, Button, Paper, TextField, Typography, useTheme } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Map from "./Map";

export default function Contact() {
  const theme = useTheme();
  return (
    <Box
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
        Connect with Me
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
          Contacts
        </span>
      </Typography>

      <Box sx={{width: "100%", display: "flex", flexWrap: "wrap"}}>
          <Box sx={{width: {xs: "100%", sm: "100%", md: "500px"}, display: "flex", flexDirection: "column", gap: 2, ml: 5, mr: 5, p: {xs: 2, sm: 2, md: 10} }}>
            <TextField label="Your Name" variant="outlined" sx={{borderRadius: "50px", zIndex: 0}} />
            <TextField label="Your Mobile Number" variant="outlined" sx={{borderRadius: "50px", zIndex: 0}} />
            <TextField label="Your E-mail" variant="outlined" sx={{borderRadius: "50px", zIndex: 0}} />
            <TextField label="Message" rows={5} multiline variant="outlined" sx={{borderRadius: "50px", zIndex: 0}} />
            <Box sx={{width: "100%", display: "flex", justifyContent: "end"}}>
                <Button variant="contained" endIcon={<SendIcon />} sx={{borderRadius: "50px", width: "150px", height: "50px"}}>Send</Button>
                </Box>
          </Box>

          <Box sx={{width: {xs: "100%", sm: "100%", md: "500px"}, height: {xs: "300px", sm: "300px", md: "500px"}, p: {xs: 2, sm: 2, md: 10}, ml: 5, mr: 5}}>
          <Map />   
          </Box>
        
      </Box>
    </Box>
  );
}
