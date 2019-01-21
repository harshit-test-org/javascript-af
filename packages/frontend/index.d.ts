import {} from 'react';
import { CSSProp } from 'styled-components';

declare module 'react' {
  interface Attributes {
    /**
     * If present, this React element will be converted by
     * `babel-plugin-styled-components` into a styled component
     * with the given css as its styles.
     */
    css?: CSSProp;
  }
}

declare module '*.png' {
  const value: any;
  export default value;
}
