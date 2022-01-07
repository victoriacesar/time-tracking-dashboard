import { extendTheme } from '@chakra-ui/react';

const colors = {
  primary: {
    blue: 'hsl(246, 80%, 60%)',
    lightRed: 'hsl(15, 100%, 70%)',
    red: 'hsl(348, 100%, 68%)',
    limeGreen: 'hsl(145, 58%, 55%)',
    violet: 'hsl(264, 64%, 52%)',
    softOrange: 'hsl(43, 84%, 65%)',
    lightBlue: '#56C2E6'
  },
  neutral: {
    veryDarkBlue: 'hsl(226, 43%, 10%)',
    darkBlue: 'hsl(235, 46%, 20%)',
    desaturatedBlue: '#34397B',
    paleBlue: 'hsl(236, 100%, 87%)',
  },
};

export const theme = extendTheme(
  { colors },
  {
    styles: {
      boxSizing: 'border-box'
    },
    fonts: {
      heading: 'Rubik',
      body: 'Rubik',
    },
  }
);
