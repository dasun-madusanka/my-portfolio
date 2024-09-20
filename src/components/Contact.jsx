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
    value: "+94779184997",
    link: "https://wa.me/94779184997",
  },
  {
    icon: <FaFacebook style={contactStyles} />,
    title: "Facebook",
    value: "Dasun Madusanka",
    link: "https://www.facebook.com/dasun.wanasinghe?mibextid=ZbWKwL",
  },
  {
    icon: <AiFillInstagram style={contactStyles} />,
    title: "Instagram",
    value: "_dasunmadusanka_",
    link: "https://www.instagram.com/dasunmadusanka?igsh=MTMzbHVwcjR2ZWF2NA==",
  },
  {
    icon: <FaLocationDot style={contactStyles} />,
    title: "I'm Here",
    value: "Bandarawela, Sri Lanka",
    link: "https://maps.app.goo.gl/dj4LmnnLtDt38akEA",
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
            color: "#4338ca",
            fontFamily: "Forte",
            fontWeight: 500,
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
