import test from 'ava';
import { styleColors } from './color.js';

['#ff0000', '#65b', 'rgb(150, 20, 50)'].forEach((color) => {
  test(`dark color ${color}`, (t) => {
    const logLine = [`%c${color}`, `color:#fff;background-color:${color};font-size: 14px;`];

    t.deepEqual(styleColors(color), [logLine]);
  });
});

['#dd97ea', '#0f0', 'rgb(200, 150, 200)'].forEach((color) => {
  test(`light color ${color}`, (t) => {
    const logLine = [
      `%c${color}`,
      `color:rgba(0, 0, 0, 0.87);background-color:${color};font-size: 14px;`,
    ];

    t.deepEqual(styleColors(color), [logLine]);
  });
});
