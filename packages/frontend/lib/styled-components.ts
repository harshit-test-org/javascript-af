import * as styledComponents from 'styled-components';

// weird song and dance because babel throws when imported directly
// https://github.com/babel/babel/issues/7641
import * as theme from '../components/shared/theme';
interface ThemeInterface extends theme.ThemeInterface {}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ThemeInterface
>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
