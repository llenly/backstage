
import { createTheme, darkTheme, genPageTheme, lightTheme, shapes } from "@backstage/theme";



 export const myTheme = createTheme({
    
  palette: {
   
    ...darkTheme.palette,
    text: {
      primary:'#1B242A'
      
    },
    primary: {
      main: '#EF3FA9'
    },
    secondary: {
      main: '#EF3FA9',
    },
    error: {
      main: '#EF3FA9',
    },
    warning: {
      main: '#8f5e15',
    },
    info: {
      main: '#89D2E6',
    },
    success: {
      main: '#485e30',
    },
    background: {
      default: '#F3F2F2',
      paper: '#F3F2F2',
    },
    banner: {
      info: '#34548a',
      error: '#8c4351',
      text: '#EF3FA9',
      link: '#565a6e',
    },
    errorBackground: '#8c4351',
    warningBackground: '#8f5e15',
    infoBackground: '#343b58',
    navigation: {
      background: '#343b58',
      indicator: '#8f5e15',
      color: '#d5d6db',
      selectedColor: '#ffffff',
    },
  },
  defaultPageTheme: 'home',
  fontFamily: 'Verdana',
  
  /* below drives the header colors */
  pageTheme: {
    home: genPageTheme({ colors: ['#1B242A','#EF3FA9' ], shape: shapes.wave }),
    // documentation: genPageTheme({
    //   colors: ['#8c4351', '#343b58'],
    //   shape: shapes.wave2,
    // }),
    // tool: genPageTheme({ colors: ['#8c4351', '#343b58'], shape: shapes.round }),
    // service: genPageTheme({
    //   colors: ['#8c4351', '#343b58'],
    //   shape: shapes.wave,
    // }),
    // website: genPageTheme({
    //   colors: ['#8c4351', '#343b58'],
    //   shape: shapes.wave,
    // }),
    // library: genPageTheme({
    //   colors: ['#8c4351', '#343b58'],
    //   shape: shapes.wave,
    // }),
    // other: genPageTheme({ colors: ['#1B242A','#89D2E6'], shape: shapes.wave }),
    // app: genPageTheme({ colors: ['#8c4351', '#343b58'], shape: shapes.wave }),
    // apis: genPageTheme({ colors: ['#8c4351', '#343b58'], shape: shapes.wave }),
  },
});