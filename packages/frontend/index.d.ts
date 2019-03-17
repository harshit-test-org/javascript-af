import {} from 'react';
import { CSSProp } from 'styled-components';

declare module 'react' {
  /**
   * disabling our interface rule as it is important to name this interface as this
   */
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
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
