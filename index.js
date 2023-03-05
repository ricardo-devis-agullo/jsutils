import Color from 'color';

function getContrastText(background) {
  const lightText = '#fff';
  const darkText = 'rgba(0, 0, 0, 0.87)';

  return Color(background).isLight() ? darkText : lightText;
}

function printColor({ msg, color }) {
  const fontSize = 'font-size: 14px;';
  const contrast = getContrastText(color);
  if (msg) {
    console.log(
      `%c${msg} %c${color}`,
      fontSize,
      `color:${contrast};background-color:${color};${fontSize}`
    );
  } else {
    console.log(`%c${color}`, `color:${contrast};background-color:${color};${fontSize}`);
  }
}

function printColorObject(obj) {
  Object.entries(obj)
    .filter(([, value]) => typeof value === 'string')
    .forEach(([key, value]) => {
      printColor({ msg: key, color: value });
    });
}

function printColors(data) {
  if (typeof data === 'string') {
    printColor({ color: data });
  } else if (data && typeof data === 'object') {
    printColorObject(data);
  }
}

window.u = window.u || {};
window.u.color = printColors;
