import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const variant = (prop, variants) => props => variants[props[prop]];
export const boolean = (prop, style) => props => props[prop] && style;

export const GlobalStyle = createGlobalStyle`
  ${normalize};

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .slider {
    .paging-dot circle {
      fill: white !important;
    }

    .slider-list {
      margin: 0 !important;
    }
  }
`;

export const colors = {
  primary: '#3b7afa',
  primaryActive: '#1c4eb3',
  white: '#fff',
  light: 'rgba(255,255,255,0.6)',
};

export default {
  colors,
};
