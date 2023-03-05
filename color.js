import Color from 'color';

function getContrastText(background) {
  const lightText = '#fff';
  const darkText = 'rgba(0, 0, 0, 0.87)';

  return Color(background).isLight() ? darkText : lightText;
}

function styleColor({ msg, color }) {
  const fontSize = 'font-size: 14px;';
  const contrast = getContrastText(color);
  if (msg) {
    return [
      `%c${msg} %c${color}`,
      fontSize,
      `color:${contrast};background-color:${color};${fontSize}`,
    ];
  } else {
    return [`%c${color}`, `color:${contrast};background-color:${color};${fontSize}`];
  }
}

function styleColorObject(obj) {
  return Object.entries(obj)
    .filter(([, value]) => typeof value === 'string')
    .map(([key, value]) => styleColor({ msg: key, color: value }));
}

export function styleColors(data) {
  if (typeof data === 'string') {
    return [styleColor({ color: data })];
  } else if (data && typeof data === 'object') {
    return styleColorObject(data);
  }
}
