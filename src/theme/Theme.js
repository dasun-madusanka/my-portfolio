// src/Theme.js
import { createTheme } from '@mui/material/styles';

// Define your custom colors and other theme properties here
const theme = createTheme({
  palette: {
    primary: {
      main: '#35A29F', // Custom primary color
      contrastText: '#fff', // Text color for primary buttons
    },
    secondary: {
      main: '#ff5722', // Custom secondary color
      contrastText: '#fff', // Text color for secondary buttons
    },
  },
});

export default theme;
