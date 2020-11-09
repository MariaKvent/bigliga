const changeContent = () => {

  let main = document.getElementsByTagName('main')[0];
  let contentBlue = document.querySelector('.content__col2');

  if(!contentBlue) {
    return;
  }

  let changeContent = function () {
    main.addEventListener('click', function() {
      contentBlue.classList.toggle('hide-content');
    });
  }

  if (window.matchMedia('(max-width: 768px)').matches) {
    changeContent();
  }

};

export {changeContent}
