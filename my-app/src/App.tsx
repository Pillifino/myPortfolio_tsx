import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"

import  myNewTheme  from './styles/theme';


export const App = () => (
  <ChakraProvider theme={myNewTheme}>
    
  </ChakraProvider>
)
