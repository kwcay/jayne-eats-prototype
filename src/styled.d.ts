import Color from 'color';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: Color;
    textColor: Color;

    orange: Color;
    yellow: Color;

    bodyFontFamily: string;
    bodyFontSize: string;
    bodyFontWeight: string;
    bodyFontWeightBold: string;
    bodyLineHeight: string;
    headingFontFamily: string;
    inputFontFamily: string;
    inputFontSize: string;
  }
}
