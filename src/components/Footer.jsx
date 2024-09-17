import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        maxWidth: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
        pt: 5,
        flexDirection: "column",
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }}
    >
      <Typography variant="subtitle1">
        © 2024 - Developed by Sandani Thathsarani
      </Typography>
    </Box>
  );
}
