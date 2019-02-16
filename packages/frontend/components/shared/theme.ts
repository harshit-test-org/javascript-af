import { SANS_FAMILY, MONO_FAMILY } from './constants';

export interface ThemeInterface {
  colors: {
    purple: string;
    white: string;
    blue: string;
  };
  fontFamily: {
    sans: string;
    mono: string;
  };
  buttons: {
    primary: {
      color: string;
      backgroundColor: string;
      '&:hover': {
        opacity: string;
      };
    };
    icon: {
      padding: string;
      display: string;
      alignItems: string;
      '&:hover': {
        opacity: string;
      };
    };
    outlined: {
      backgroundColor: string;
      borderRadius: string;
      border: string;
      color: string;
      '&:hover': {
        opacity: string;
      };
    };
  };
  maxWidth: string;
}

const theme: ThemeInterface = {
  colors: {
    purple: '#6200EE',
    white: '#FFFFFF',
    blue: '#2F47C7',
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
    },
    icon: {
      padding: '8px',
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        opacity: '0.9',
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
    },
  },
  maxWidth: '1370px',
};

export { theme as default };
