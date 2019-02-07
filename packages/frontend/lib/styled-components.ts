import * as styledComp from 'styled-components';

// weird song and dance because babel throws when imported directly
// https://github.com/babel/babel/issues/7641
import { ThemeInterface } from '../components/shared/theme';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComp as styledComp.ThemedStyledComponentsModule<ThemeInterface>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
