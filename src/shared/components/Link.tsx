import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import { Link } from 'react-router-dom';

function baseStyle({ theme }: ThemeProps<DefaultTheme>) {
  return {
    color: theme.textColor.string(),
    font: `${theme.bodyFontWeightBold} ${theme.bodyFontSize} ${theme.bodyFontFamily}`,
    textDecoration: 'none',
    transition: 'color 500ms',
    '&:active': {
      color: theme.orange.string(),
    },
    '&:hover': {
      color: theme.orange.string(),
    },
  };
}

const StyledLink = styled(Link)(baseStyle);

export const Anchor = styled.a(baseStyle);

export default StyledLink;
