import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: 'BCCCDC',
      main: '#102A43',
      dark: '#06101A',
      text: '#fff',
    },
    secondary: {
      light: '#060606',
      main: '#080808',
      dark: '#0A0A0A',
      text: '#',
    },
    common: {
        white: '#FAFAFA',
        black: '#000000'
    }
  },
});

export default theme;