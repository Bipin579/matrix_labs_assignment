import React from 'react';
import { Box } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      bg="#f30050"
      color="white"
      h="10vh"
      borderTop={'solid 1px white'}
      position={'sticky'}
      bottom={0}
    ></Box>
  );
};

export default Footer;
