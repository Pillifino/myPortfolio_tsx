import { extendTheme } from '@chakra-ui/react';
import "@fontsource/fredoka-one"
// import "@fontsource/bakbak-one"


 const myNewTheme = extendTheme({
  colors: {
    bg: '#1A1A1A',
    bgAccent:"#202020",
  },
  fonts: {
    heading: 'Fredoka One',
    body: 'Fredoka One',
  },
});

export default myNewTheme