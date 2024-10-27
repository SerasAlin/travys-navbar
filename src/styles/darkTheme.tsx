import { createTheme } from "@mui/material/styles";
import {
  deepOrange,
  grey,
  indigo,
  lightGreen,
  orange,
} from "@mui/material/colors";
import { CircularProgress } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    neutral: {
      main: grey[600],
    },
    primary: {
      main: "#1C64F2",
    },
    secondary: {
      main: "#0E9F6E",
    },
    success: {
      main: "#0E9F6E",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});
