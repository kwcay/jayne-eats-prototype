import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import { Link } from 'react-router-dom';

function baseStyle(props: ThemeProps<DefaultTheme>) {
  return {
    backgroundColor: props.theme.backgroundColor.darken(0.1).string(),
    border: 'none',
    borderRadius: '24px',
    color: props.theme.textColor.string(),
    cursor: 'pointer',
    display: 'inline-block',
    fontFamily: props.theme.headingFontFamily,
    fontSize: props.theme.bodyFontSize,
    height: '48px',
    lineHeight: '48px',
    margin: '1rem',
    padding: '0 2rem',
    textDecoration: 'none',
    transition: 'background-color 300ms',
    '&:active': {
      backgroundColor: props.theme.backgroundColor.darken(0.2).string(),
    },
    '&:hover': {
      backgroundColor: props.theme.backgroundColor.darken(0.2).string(),
    },
  };
}

function coloredStyle(props: ThemeProps<DefaultTheme>) {
  return {
    backgroundColor: props.theme.yellow.string(),
    '&:active': {
      backgroundColor: props.theme.yellow.darken(0.2).string(),
    },
    '&:hover': {
      backgroundColor: props.theme.yellow.darken(0.2).string(),
    },
  };
}

function narrowStyle() {
  return {
    padding: '0.1em 0.7em',
  };
}

export const LightButton = styled.button(baseStyle);

/** @deprecated */
export const NarrowLightButton = styled(LightButton)(narrowStyle);

export const ColouredButton = styled(LightButton)(coloredStyle);

/** @deprecated */
export const NarrowColouredButton = styled(ColouredButton)(narrowStyle);

export const LightButtonLink = styled(Link)(baseStyle);

/** @deprecated */
export const NarrowLightLink = styled(LightButtonLink)(narrowStyle);

export const ColouredButtonLink = styled(LightButtonLink)(coloredStyle);

/** @deprecated */
export const NarrowColouredLink = styled(ColouredButtonLink)(narrowStyle);
