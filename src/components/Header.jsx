// src/components/Header.js
import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import AdbIcon from "@mui/icons-material/Adb";
import PropTypes from "prop-types";
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { useTheme } from "@mui/material";
import { ColorModeContext } from "../context/ThemeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import AssignmentIcon from '@mui/icons-material/Assignment';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import logo2 from "../assets/images/logo2.png";
import logolight from "../assets/images/logolight.png";
import logodark from "../assets/images/logodark.png";

const pages = ["Intro", "Soft Skills", "Technical Skills", "Projects", "Contact"];
const drawerWidth = 240;
const handleClick = () => {
  try {
    window.location.href = 'https://drive.google.com/file/d/1Ud47VII5n5FIO1LckGfOquuvftjkN1iL/view?usp=drive_link';
  } catch (error) {
    console.error('Error setting location:', error);
  }
};



function Header(props) {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { window } = props;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", zIndex: 2 }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        HST Muthunayaka
      </Typography>
      <Divider />
      <List>
        {pages.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link
                to={item}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ width: '100%', textDecoration: 'none', color: 'inherit' }}
              >
                <ListItemText primary={item} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", zIndex: 200 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: theme.palette.mode === "light" ? "#ffffff" : "#000000",
          color: theme.palette.mode === "light" ? "#000000" : "#ffffff",
          position: "fixed",
          zIndex: 1,
          boxShadow: "none",
        }}
        src={logo2}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Avatar
              alt="Remy Sharp"
              src={theme.palette.mode === "light" ? logolight : logodark}
              sx={{
                display: { xs: "none", md: "flex" },
                width: 100,
                height: 100,
              }}
            />
            {/* <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                ml: 2,
                display: { xs: "none", md: "flex" },
                color: "inherit",
                textDecoration: "none",
              }}
            >
              HST Muthunayaka
            </Typography> */}

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                color: "#007F73",
            fontFamily: "Brush Script MT",
                // fontWeight: 700,
                // letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              <Avatar
              alt="Remy Sharp"
              src={theme.palette.mode === "light" ? logolight : logodark}
              sx={{
                // display: { xs: "none", md: "flex" },
                width: 100,
                height: 100,
              }}
            />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
                <Link
                  key={page}
                  to={page}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  style={{ marginRight: 2, textDecoration: 'none', color: 'inherit' }}
                >
                  <Button sx={{ my: 2, color: 'inherit', display: 'block' }}>
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
              
              <Button variant="contained" color="secondary" onClick={handleClick} sx={{borderRadius: "50px"}}>
                {/* {xs: "", sm: "", md: "Download CV"} */}
                Download CV
              </Button>
              <IconButton
                sx={{ ml: 2 }}
                onClick={colorMode.toggleColorMode}
                color="inherit"
              >
                {theme.palette.mode === "dark" ? (
                  <LightModeIcon />
                ) : (
                  <DarkModeIcon />
                )}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
