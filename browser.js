import Color from './color.js';

function getContrastText(background) {
  const lightText = '#fff';
  const darkText = 'rgba(0, 0, 0, 0.87)';

  return Color(background).isLight() ? darkText : lightText;
}

function printColor(color) {
  const fontSize = 'font-size: 14px;';
  const contrast = getContrastText(color);
  console.log(`%c${color}`, `color:${contrast};background-color:${color};${fontSize}`);
}

window.u = window.u || {};
window.u.color = printColor;
