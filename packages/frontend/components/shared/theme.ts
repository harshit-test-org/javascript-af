import { SANS_FAMILY, MONO_FAMILY } from './constants';

export default {
  colors: {
    purple: '#6200EE',
    while: '#FFFFFF',
  },
  fontFamily: {
    sans: SANS_FAMILY,
    mono: MONO_FAMILY,
  },
  buttons: {
    primary: {
      color: 'white',
      backgroundColor: '#6200EE',
      '&:hover': {
        opacity: '0.9',
      },
      '&:after': {
        backgroundImage:
          'radial-gradient(circle, #fff 10%, transparent 10.01%)',
      },
    },
    outlined: {
      backgroundColor: 'white',
      borderRadius: '44px',
      border: '2px solid #6200EE',
      color: '#6200EE',
      '&:hover': {
        opacity: '0.9',
      },
      '&:after': {
        backgroundImage:
          'radial-gradient(circle, #6200EE 10%, transparent 10.01%)',
      },
    },
  },
};
