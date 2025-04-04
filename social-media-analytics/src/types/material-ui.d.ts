import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
    spacing: (...args: number[]) => string;
    palette: {
      primary: {
        main: string;
        light: string;
        dark: string;
      };
      secondary: {
        main: string;
        light: string;
        dark: string;
      };
      background: {
        default: string;
        paper: string;
      };
      text: {
        primary: string;
        secondary: string;
      };
      divider: string;
    };
    typography: {
      fontFamily: string;
      h1: {
        fontSize: string;
        fontWeight: number;
      };
      h2: {
        fontSize: string;
        fontWeight: number;
      };
      h3: {
        fontSize: string;
        fontWeight: number;
      };
      h4: {
        fontSize: string;
        fontWeight: number;
      };
      h5: {
        fontSize: string;
        fontWeight: number;
      };
      h6: {
        fontSize: string;
        fontWeight: number;
      };
      subtitle1: {
        fontSize: string;
        fontWeight: number;
      };
      subtitle2: {
        fontSize: string;
        fontWeight: number;
      };
      body1: {
        fontSize: string;
        fontWeight: number;
      };
      body2: {
        fontSize: string;
        fontWeight: number;
      };
      button: {
        fontSize: string;
        fontWeight: number;
        textTransform: string;
      };
      caption: {
        fontSize: string;
        fontWeight: number;
      };
      overline: {
        fontSize: string;
        fontWeight: number;
      };
    };
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: string;
            textTransform: string;
            padding: string;
          };
        };
      };
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: string;
          };
        };
      };
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    neutral?: Palette['primary'];
  }
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/styles' {
  export function styled<T extends keyof JSX.IntrinsicElements | React.ComponentType<any>>(
    component: T
  ): <P = {}>(
    styles: (props: { theme: Theme } & P) => any
  ) => React.ComponentType<P & { className?: string; children?: React.ReactNode; sx?: any }>;
}

declare module '@mui/material/AppBar' {
  interface AppBarProps {
    position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit' | 'transparent';
    elevation?: number;
    component?: React.ElementType;
  }
}

declare module '@mui/material/Box' {
  interface BoxProps {
    mb?: number | string;
    mt?: number | string;
    ml?: number | string;
    mr?: number | string;
    mx?: number | string;
    my?: number | string;
    p?: number | string;
    px?: number | string;
    py?: number | string;
    pl?: number | string;
    pr?: number | string;
    pt?: number | string;
    pb?: number | string;
    display?: string;
    flex?: number | string;
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    gap?: number | string;
    component?: React.ElementType;
    children?: React.ReactNode;
    sx?: any;
  }
}

declare module '@mui/material/Button' {
  interface ButtonProps {
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    variant?: 'text' | 'outlined' | 'contained';
    size?: 'small' | 'medium' | 'large';
    component?: React.ElementType;
  }
}

declare module '@mui/material/CardMedia' {
  interface CardMediaProps {
    image?: string;
    title?: string;
    component?: React.ElementType;
  }
}

declare module '@mui/material/Avatar' {
  interface AvatarProps {
    src?: string;
    alt?: string;
    children?: React.ReactNode;
    sx?: any;
  }
}

declare module '@mui/material/Grid' {
  interface GridProps {
    children?: React.ReactNode;
    sx?: any;
  }
}

declare module '@mui/material/CardContent' {
  interface CardContentProps {
    children?: React.ReactNode;
    sx?: any;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyProps {
    component?: React.ElementType;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline';
    color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'textPrimary' | 'textSecondary';
    gutterBottom?: boolean;
    children?: React.ReactNode;
    sx?: any;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonProps {
    children?: React.ReactNode;
    color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    sx?: any;
    onClick?: () => void;
  }
}

declare module '@mui/material/ListItemButton' {
  interface ListItemButtonProps {
    children?: React.ReactNode;
    selected?: boolean;
    sx?: any;
    onClick?: () => void;
  }
}

declare module '@mui/material/ListItemIcon' {
  interface ListItemIconProps {
    children?: React.ReactNode;
    sx?: any;
  }
}

declare module '@mui/material/ListItemText' {
  interface ListItemTextProps {
    primary?: React.ReactNode;
    secondary?: React.ReactNode;
    sx?: any;
  }
}

declare module '@mui/material/Drawer' {
  interface DrawerProps {
    children?: React.ReactNode;
    anchor?: 'left' | 'top' | 'right' | 'bottom';
    open?: boolean;
    onClose?: () => void;
    sx?: any;
  }
}

declare module '@mui/material/CircularProgress' {
  interface CircularProgressProps {
    size?: number;
    thickness?: number;
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    variant?: 'determinate' | 'indeterminate';
    value?: number;
    sx?: any;
  }
} 