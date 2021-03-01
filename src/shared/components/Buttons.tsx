import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import { Link } from 'react-router-dom';

function baseStyle(props: ThemeProps<DefaultTheme>) {
  return {
    backgroundImage: `linear-gradient(
      45deg,
      ${props.theme.backgroundColor.darken(0.05).string()} 0%,
      ${props.theme.backgroundColor.darken(0.1).string()} 100%
    );`,
    border: 'none',
    borderBottom: `solid 3px
    ${props.theme.backgroundColor.darken(0.1).string()}`,
    borderRadius: '10px',
    boxShadow: `0px 2px 2px
    ${props.theme.backgroundColor.darken(0.3).string()}`,
    cursor: 'pointer',
    display: 'inline-block',
    fontFamily: props.theme.bodyFontFamily,
    fontSize: props.theme.bodyFontSize,
    padding: '0.4em 1em',
    '&:active': {
      boxShadow: `0px 0px 1px
      ${props.theme.backgroundColor.darken(0.3).string()}`,
      borderBottom: 'none',
      transform: 'translateY(4px)',
    },
    '&:hover': {
      boxShadow: `0px 3px 3px
      ${props.theme.backgroundColor.darken(0.3).string()}`,
    },
  };
}

function coloredStyle(props: ThemeProps<DefaultTheme>) {
  return {
    backgroundImage: `linear-gradient(
      45deg,
      ${props.theme.yellow.string()} 0%,
      ${props.theme.orange.string()} 100%
    )`,
    borderBottom: `solid 3px ${props.theme.orange.darken(0.1).string()}`,
    color: props.theme.backgroundColor.string(),
  };
}

function narrowStyle() {
  return {
    padding: '0.1em 0.7em',
  };
}

export const LightButton = styled.button(baseStyle);

export const NarrowLightButton = styled(LightButton)(narrowStyle);

export const ColouredButton = styled(LightButton)(coloredStyle);

export const NarrowColouredButton = styled(ColouredButton)(narrowStyle);

export const LightLink = styled(Link)(baseStyle);

export const NarrowLightLink = styled(LightLink)(narrowStyle);

export const ColouredLink = styled(LightLink)(coloredStyle);

export const NarrowColouredLink = styled(ColouredLink)(narrowStyle);
