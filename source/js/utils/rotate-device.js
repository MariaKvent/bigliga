const rotateDevice = () => {

  let mql = window.matchMedia('(orientation: portrait)');

  // для отлеживания поворота в devTools Chrome

  mql.addListener(function () {
    location.reload();
  });

  window.addEventListener('orientationchange', function () {
    location.reload();
  }, false);

};

export {rotateDevice};
