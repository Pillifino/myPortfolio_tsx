import React from "react";

// Chakra
import { Image } from '@chakra-ui/react'
import Background from "../../Assets/Images/background.jpg";

function Home() {
  return (
    <div>
        <Image 
        src={Background}
        fit="fill" 
        alt='svg image'/>
    </div>
  );
}

export default Home;
