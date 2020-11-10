const hideLoader = () => {

  let main = document.getElementsByTagName('main')[0];
  let loader = document.querySelector('.loader');

  if (!loader) {
    return;
  }

  if (window.matchMedia('(max-width: 768px)').matches && !loader.classList.contains('hide-loader')) {
    window.addEventListener('click', function () {
      main.classList.add('hide-loader');
    });
  }

  if (window.matchMedia('(min-width: 1024px)').matches && !loader.classList.contains('hide-loader')) {
    window.addEventListener('keyup', function (event) {
      if (event.key === 'Enter') {
        main.classList.add('hide-loader');
      }
    });
  }

};

export {hideLoader};
