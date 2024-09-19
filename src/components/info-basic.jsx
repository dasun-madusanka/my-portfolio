import React from "react";
import Typography from "@mui/material/Typography";

export const Info = ({ children }) => (
  <div style={{ padding: "16px" }}>{children}</div>
);

export const InfoEyebrow = ({ children }) => (
  <Typography
    sx={{
      textTransform: "uppercase",
      letterSpacing: "1px",
      fontSize: 12,
      marginBottom: "0.875em",
      display: "inline-block",
    }}
  >
    {children}
  </Typography>
);

export const InfoTitle = ({ children }) => (
  <Typography
    variant="h5"
    sx={{
      fontWeight: "bold",
      marginBottom: "0.35em",
    }}
  >
    {children}
  </Typography>
);

export const InfoSubtitle = ({ children }) => (
  <Typography
    variant="body2"
    sx={{
      marginBottom: 2,
      letterSpacing: "0.00938em",
    }}
  >
    {children}
  </Typography>
);
