import React from "react";
import { Box, Button, Paper, TextField, Typography, useTheme } from "@mui/material";
import { PiPhoneCallFill } from "react-icons/pi";
import SendIcon from "@mui/icons-material/Send";
import { IoIosCall } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { SingleContact } from "./SingleContact";
import Map from "./Map";

const contactStyles = { fontSize: 83, width: "100%" };

const contacts = [
  {
    icon: <IoIosCall style={contactStyles} />,
    title: "Call Me",
    value: "+94 77 918 4997",
    link: "tel:+94779184997",
  },
  {
    icon: <MdEmail style={contactStyles} />,
    title: "E-mail Me",
    value: <span style={{fontSize: "10px"}}>dasunmadusanka7890@gmail.com</span>,
    link: "mailto:dasunmadusanka7890@gmail.com",
  },
  {
    icon: <FaWhatsappSquare style={contactStyles} />,
    title: "Whatsapp",
    value: "dasun-madusanka",
    link: "https://www.linkedin.com/in/dasun-madusanka-aab971265/",
  },
  {
    icon: <FaFacebook style={contactStyles} />,
    title: "Facebook",
    value: "+94 77 918 4997",
    link: "tel:+94779184997",
  },
  {
    icon: <AiFillInstagram style={contactStyles} />,
    title: "Instagram",
    value: <span style={{fontSize: "10px"}}>dasunmadusanka7890@gmail.com</span>,
    link: "mailto:dasunmadusanka7890@gmail.com",
  },
  {
    icon: <FaLocationDot style={contactStyles} />,
    title: "I'm Here",
    value: "dasun-madusanka",
    link: "https://www.linkedin.com/in/dasun-madusanka-aab971265/",
  },
];

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

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {contacts.map((contact, index) => (
          <SingleContact
            key={index}
            icon={contact.icon}
            title={contact.title}
            value={contact.value}
            link={contact.link}
          />
        ))}
      </Box>
    </Box>
  );
}
