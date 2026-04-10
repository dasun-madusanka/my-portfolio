import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import WorkIcon from "@mui/icons-material/Work";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export function SingleWorkExperience({ logo, company, position, duration, description, index }) {
  return (
    <Card
      sx={{
        width: { xs: "90%", sm: 380 },
        borderRadius: "20px",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        opacity: 0,
        transform: "translateY(40px)",
        animation: `slideUpFade 0.6s ease forwards`,
        animationDelay: `${index * 0.2}s`,
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 16px 48px -10px rgba(109, 40, 217, 0.35)",
        },
        "@keyframes slideUpFade": {
          "0%": { opacity: 0, transform: "translateY(40px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      }}
    >
      {/* Top accent bar */}
      <Box
        sx={{
          height: "4px",
          background: "linear-gradient(90deg, #6d28d9 0%, #4338ca 100%)",
          borderRadius: "20px 20px 0 0",
        }}
      />

      {/* Logo + divider header */}
      <Box sx={{ minWidth: 256 }}>
        <Box
          sx={{
            padding: "12px 24px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avatar
            alt={`${company} logo`}
            src={logo}
            sx={(theme) => ({
              width: 52,
              height: 52,
              transform: "translateY(50%)",
              border: "2px solid #e8e8e8",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
              backgroundColor: "#fff",
              "& > img": {
                margin: 0,
                objectFit: "contain",
              },
              [theme.breakpoints.up("sm")]: {
                width: 64,
                height: 64,
              },
            })}
          >
            {/* Fallback icon if logo not provided */}
            <WorkIcon sx={{ color: "#6d28d9", fontSize: 28 }} />
          </Avatar>

          <Chip
            icon={<CalendarTodayIcon sx={{ fontSize: "12px !important" }} />}
            label={duration}
            size="small"
            sx={{
              fontSize: "11px",
              height: "24px",
              backgroundColor: "rgba(109, 40, 217, 0.1)",
              color: "#6d28d9",
              fontWeight: 600,
              border: "1px solid rgba(109, 40, 217, 0.2)",
              "& .MuiChip-icon": { color: "#6d28d9" },
            }}
          />
        </Box>

        <Box
          component="hr"
          sx={(theme) => ({
            border: "none",
            borderTop: "1px solid rgba(0,0,0,0.08)",
            marginBottom: `${24 - 1}px`,
            [theme.breakpoints.up("sm")]: {
              marginBottom: `${30 - 1}px`,
            },
          })}
        />
      </Box>

      {/* Card content */}
      <CardContent sx={{ p: 3, pt: 0 }}>
        <Box>
          <Typography
            sx={{
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontSize: 11,
              marginBottom: "6px",
              color: "#6d28d9",
              fontWeight: 700,
            }}
          >
            {position}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              marginBottom: "12px",
              fontSize: "1.1rem",
              lineHeight: 1.3,
            }}
          >
            {company}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              letterSpacing: "0.00938em",
              lineHeight: 1.7,
              color: "text.secondary",
            }}
          >
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}