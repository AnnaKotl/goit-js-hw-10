import { Spinner } from 'spin.js';

const opts = {
  lines: 13,
  length: 29,
  width: 12,
  radius: 42,
  scale: 0.9,
  corners: 0.8,
  speed: 0.9,
  rotate: 0,
  animation: 'spinner-line-fade-more',
  direction: 1,
  color: '#f7692b',
  fadeColor: 'transparent',
  top: '50%',
  left: '50%',
  shadow: '0 0 1px transparent',
  zIndex: 2000000000,
  className: 'spinner',
  position: 'absolute',
};

export const spinner = new Spinner(opts);
