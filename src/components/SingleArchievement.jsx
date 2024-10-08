import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Color from "color"; // v3.2.1
import first from "../assets/images/first.png";

const defaultColor = "#4338ca";

const StyledRoot = styled("div")(({ color = defaultColor }) => ({
  position: "relative",
  borderRadius: "1rem",
  minWidth: 320,
  paddingTop: 160,
  "&:before": {
    transition: "0.2s",
    position: "absolute",
    width: "100%",
    height: "100%",
    content: '""',
    display: "block",
    borderRadius: "1rem",
    zIndex: 0,
    bottom: 0,
    backgroundColor: Color("#6d28d9").darken(0.3).desaturate(0.2).string(),
  },
  "&:hover": {
    "&:before": {
      bottom: -6,
    },
    "& .MuiAvatar-root": {
      transform: "scale(1.1)",
      boxShadow: "0 6px 20px 0 rgba(0,0,0,0.38)",
    },
  },
}));

const CardMediaCover = styled(CardMedia)(() => ({
  borderRadius: "1rem",
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 0,
  backgroundColor: "rgba(0, 0, 0, 0.08)",
  backgroundPosition: "center",
}));

const StyledH2 = styled("h2")(() => ({
//   fontFamily: "Fjalla One",
  fontSize: "1.25rem",
  color: "#fff",
  margin: 0,
}));

const StyledContent = styled("div")(({ color = defaultColor }) => ({
  position: "relative",
//   zIndex: 1,
  padding: "1rem",
  borderRadius: "1rem",
  boxShadow: `0 6px 16px 0 ${Color("#6d28d9").fade(0.5)}`,
  "&:before": {
    content: '""',
    display: "block",
    position: "absolute",
    left: 0,
    top: 1,
    zIndex: 0,
    width: "100%",
    height: "100%",
    clipPath:
      "polygon(0% 100%, 0% 35%, 0.3% 33%, 1% 31%, 1.5% 30%, 2% 29%, 2.5% 28.4%, 3% 27.9%, 3.3% 27.6%, 5% 27%,95% 0%,100% 0%, 100% 100%)",
    borderRadius: "1rem",
    background: `linear-gradient(to top, #4338ca, ${Color("#6d28d9")
      .rotate(24)
      .lighten(0.12)})`,
  },
}));

const AvatarLogo = styled(Avatar)(() => ({
  transition: "0.3s",
  width: 100,
  height: 100,
  boxShadow: "0 4px 12px 0 rgba(0,0,0,0.24)",
  borderRadius: "1rem",
}));

const StyledDivTeam = styled("div")(() => ({
//   fontFamily: "Sen",
  fontSize: "0.75rem",
  color: "rgba(255 255 255 / 80%)",
}));

const StyledDivDate = styled("div")(({ theme }) => ({
//   fontFamily: "Sen",
  color: "#fff",
  backgroundColor: theme.palette.text.disabled,
  opacity: 0.72,
  fontSize: "0.75rem",
  padding: "0 0.5rem",
  borderRadius: 12,
  zIndex: 0
}));

const CustomCard = ({ color, cover, logo, title, brand, date }) => {
  return (
    <StyledRoot color={color}>
      <CardMediaCover image={cover} />
      <StyledContent color={color}>
        <Box position={"relative"} zIndex={1}>
          <Box display="flex" p={0} gap={2} sx={{ flexWrap: "nowrap" }}>
            <Box>
              <AvatarLogo src={logo} />
            </Box>
            <Box alignSelf="flex-end">
              <StyledH2>{title}</StyledH2>
            </Box>
          </Box>
          <Box display="flex" mt={4} alignItems={"center"}>
            <Box>
              <StyledDivTeam>{brand}</StyledDivTeam>
            </Box>
            <Box ml="auto">
              <StyledDivDate>{date}</StyledDivDate>
            </Box>
          </Box>
        </Box>
      </StyledContent>
    </StyledRoot>
  );
};

export function SingleArchievement({cover, logo, title, date}) {
  return (
    <CustomCard
      color="#fc7944"
    //   brand={"Overwatch Official"}
      date={date}
      cover={cover}
      logo={logo}
      title={
        <>
          {title}
        </>
      }
    />
  );
}
