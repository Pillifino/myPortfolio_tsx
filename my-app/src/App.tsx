import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"


import  myNewTheme  from './Styles/theme';


export const App = () => (
  <ChakraProvider theme={myNewTheme}>
    
  </ChakraProvider>
)
