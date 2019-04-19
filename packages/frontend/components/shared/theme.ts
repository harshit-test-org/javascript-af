import { transitions } from 'polished';
import { SANS_FAMILY, MONO_FAMILY } from './constants';

type swatch =
  | 'darkest'
  | 'darker'
  | 'dark'
  | 'main'
  | 'light'
  | 'lighter'
  | 'lightest';

export interface ITheme {
  colors: {
    primary: Record<swatch, string>;
    white: string;
    offWhite: string;
    black: string;
    blue: string;
  };
  fontFamily: {
    sans: string;
    mono: string;
  };
  buttons: {
    tabs: {
      backgroundColor: string;
      borderRadius: number;
      '&.active': {
        boxShadow: string;
      };
    };
    primary: {
      color: string;
      backgroundColor: string;
      '&:hover': {
        opacity: string;
        backgroundColor: string;
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
    text: {
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

const primarySwatch: Record<swatch, string> = {
  darkest: '#2B0448',
  darker: '#300958',
  dark: '#38116E',
  main: '#452984',
  light: '#5D48A7',
  lighter: '#7568C5',
  lightest: '#A098F1',
};

const theme: ITheme = {
  colors: {
    primary: primarySwatch,
    white: '#FFFFFF',
    offWhite: '#fefefe',
    black: '#000000',
    blue: '#2F47C7',
  },
  fontFamily: {
    sans: SANS_FAMILY,
    mono: MONO_FAMILY,
  },
  buttons: {
    tabs: {
      backgroundColor: '#fff',
      borderRadius: 0,
      '&.active': {
        boxShadow: `${primarySwatch.main} 0px -4px 0px inset`,
      },
    },
    primary: {
      color: 'white',
      backgroundColor: primarySwatch.main,
      ...transitions('0.2s background ease'),
      '&:hover': {
        opacity: '0.9',
        backgroundColor: primarySwatch.light,
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
    text: {
      padding: '8px',
      display: 'inline-block',
      alignItems: 'center',
      '&:hover': {
        opacity: '0.9',
      },
    },
    outlined: {
      backgroundColor: 'white',
      borderRadius: '44px',
      border: `2px solid ${primarySwatch.main}`,
      color: primarySwatch.main,
      '&:hover': {
        opacity: '0.9',
      },
    },
  },
  maxWidth: '1370px',
};

export { theme as default };
