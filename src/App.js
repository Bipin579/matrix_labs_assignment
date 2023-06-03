import React from 'react';
import { Box } from '@chakra-ui/react';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import { AllRoutes } from './Routes/AllRoutes';
import bgImage from './rectangle-9398@2x.png';

function App() {
  return (
    <Box backgroundImage={bgImage} color={'white'}>
      <Sidebar />
      <AllRoutes />
      <Footer />
    </Box>
  );
}

export default App;
