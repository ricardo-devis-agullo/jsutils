(function () {
  function printColor(color) {
    const fontSize = 'font-size: 14px;';
    console.log(`%c${color}`, `color:#fff;background-color:${color};${fontSize}`);
  }

  window.utls = window.utls || {};
  window.utls.color = printColor;
})();
