import { styleColors } from './color.js';

function printColors(data) {
  const logs = styleColors(data);

  for (const log of logs) {
    console.log(...log);
  }
}

window.u = window.u || {};
window.u.color = printColors;
