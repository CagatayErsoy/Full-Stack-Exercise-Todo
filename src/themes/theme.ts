import { createTheme } from '@mui/material/styles';
declare module '@mui/material/styles' {
  interface Theme {
    flexCenter: {
      display: string;
      alignItems: string;
      justifyContent: string;
    };
    
  }
  interface ThemeOptions {
    flexCenter?: {
      display?: string;
      alignItems?: string;
      justifyContent?: string;
    };
  }
}
const theme = createTheme({
  typography: {
    fontFamily: 'monospace',
  },
  palette: {
    primary: {
      main: '#22D3EE', 
      
      
      
    },
    text: {
      primary: '#FFFFFF',
      secondary:'#22D3EE'
    
    },
    background:{
      paper:'#0A0E19',
      default:'#0F182A'
      
    }
  },
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default theme;