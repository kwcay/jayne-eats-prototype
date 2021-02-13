import Color from 'color';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: Color;
    textColor: Color;

    bodyFontFamily: string;
    headingFontFamily: string;
  }
}
