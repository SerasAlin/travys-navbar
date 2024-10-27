import { createTheme } from "@mui/material/styles";
import {
  deepOrange,
  green,
  grey,
  indigo,
  lightGreen,
  orange,
} from "@mui/material/colors";
import { CircularProgress } from "@mui/material";
import {
  Circle,
  FlagCircleOutlined,
  RadioButtonChecked,
} from "@mui/icons-material";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    h2_ligth: React.CSSProperties;
    h2_bold: React.CSSProperties;
    h2_black: React.CSSProperties;
    h3: React.CSSProperties;
    h3_bold: React.CSSProperties;
    h4: React.CSSProperties;
    h4_semibold: React.CSSProperties;
    h4_bold: React.CSSProperties;
    h5: React.CSSProperties;
    h5_bold: React.CSSProperties;
    h5_semibold: React.CSSProperties;
    h6: React.CSSProperties;
    h6_medium: React.CSSProperties;
    h6_semibold: React.CSSProperties;
    h6_bold: React.CSSProperties;
    subtitle1: React.CSSProperties;
    subtitle1_medium: React.CSSProperties;
    subtitle1_semibold: React.CSSProperties;
    body1: React.CSSProperties;
    body1_medium: React.CSSProperties;
    body1_semibold: React.CSSProperties;
    body2: React.CSSProperties;
    body2_medium: React.CSSProperties;
    body2_semibold: React.CSSProperties;
    body3: React.CSSProperties;
    body3_medium: React.CSSProperties;
    body3_semibold: React.CSSProperties;
    body3_extrabold: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    h2_ligth?: React.CSSProperties;
    h2_bold?: React.CSSProperties;
    h2_black?: React.CSSProperties;
    h3?: React.CSSProperties;
    h3_bold?: React.CSSProperties;
    h4?: React.CSSProperties;
    h4_semibold?: React.CSSProperties;
    h4_bold?: React.CSSProperties;
    h5?: React.CSSProperties;
    h5_bold?: React.CSSProperties;
    h5_semibold?: React.CSSProperties;
    h6?: React.CSSProperties;
    h6_medium?: React.CSSProperties;
    h6_semibold?: React.CSSProperties;
    h6_bold?: React.CSSProperties;
    subtitle1?: React.CSSProperties;
    subtitle1_medium?: React.CSSProperties;
    subtitle1_semibold?: React.CSSProperties;
    body1?: React.CSSProperties;
    body1_medium?: React.CSSProperties;
    body1_semibold?: React.CSSProperties;
    body2?: React.CSSProperties;
    body2_medium?: React.CSSProperties;
    body2_semibold?: React.CSSProperties;
    body3?: React.CSSProperties;
    body3_medium?: React.CSSProperties;
    body3_semibold?: React.CSSProperties;
    body3_extrabold?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h2_ligth: true;
    h2_bold: true;
    h2_black: true;
    h3: true;
    h3_bold: true;
    h4: true;
    h4_semibold: true;
    h4_bold: true;
    h5: true;
    h5_bold: true;
    h5_semibold: true;
    h6: true;
    h6_medium: true;
    h6_semibold: true;
    h6_bold: true;
    subtitle1: true;
    subtitle1_medium: true;
    subtitle1_semibold: true;
    body1: true;
    body1_medium: true;
    body1_semibold: true;
    body2: true;
    body2_medium: true;
    body2_semibold: true;
    body3: true;
    body3_medium: true;
    body3_semibold: true;
    body3_extrabold: true;
  }
}

const colorAndTyphograpyTheme = createTheme({
  palette: {
    mode: "light",
    neutral: {
      main: grey[800],
    },
    primary: {
      main: "#1C64F2",
    },
    secondary: {
      main: "#0E9F6E",
    },
    success: {
      main: "#8BC34A",
    },
    warning: {
      main: "rgba(255, 178, 87, 1)",
    },
    info: {
      main: "rgba(128, 159, 255, 1)",
    },
    error: {
      main: "rgba(230, 74, 25, 1)",
    },
  },
  typography: {
    subtitle1_medium: {
      fontSize: 16,
      fontWeight: 500,
    },
    body3: {
      fontSize: 12,
      fontWeight: 400,
    },
    body3_medium: {
      fontSize: 12,
      fontWeight: 500,
    },
    body3_semibold: {
      fontSize: 12,
      fontWeight: 600,
    },
    body3_extrabold: {
      fontSize: 12,
      fontWeight: 800,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
    },
    body2_medium: {
      fontSize: 14,
      fontWeight: 500,
    },
    body2_semibold: {
      fontSize: 14,
      fontWeight: 600,
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
    },
    body1_medium: {
      fontSize: 16,
      fontWeight: 500,
    },
    body1_semibold: {
      fontSize: 16,
      fontWeight: 600,
    },
    h2_ligth: {
      fontSize: 60,
      fontWeight: 300,
    },
  },
});

export const lightTheme = createTheme(colorAndTyphograpyTheme, {
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        sizeSmall: {
          height: "1.875rem",
          padding: "0.25rem 0.625rem 0.25rem 0.625rem",
          lineHeight: "1.375rem",
          fontWeight: 500,
        },
        sizeMedium: {
          height: "2.25rem",
          padding: "0.375rem 1rem 0.375rem 1rem",
          lineHeight: "1.5rem",
          fontWeight: 500,
        },
        sizeLarge: {
          height: "2.625rem",
          padding: "0.5rem 1.375rem 0.5rem 1.375rem",
          lineHeight: "1.625rem",
          fontWeight: 600,
        },
      },
    },
  },
});
