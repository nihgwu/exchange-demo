export const variant = (prop, variants) => props => variants[props[prop]];
export const boolean = (prop, style) => props => props[prop] && style;

export const colors = {
  primary: '#3b7afa',
  primaryActive: '#1c4eb3',
  white: '#fff',
  light: 'rgba(255,255,255,0.6)',
};

export default {
  colors,
};
