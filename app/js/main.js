const btnHeader = document.querySelector('.header-desc__btn');
const modal = document.querySelector('.modal');
const modalOk = document.querySelector('.modal-ok');
const modalCloset = document.querySelector('.modal__form-closet');
const modalBtn = document.querySelector('.modal__form-btn');
const header = document.querySelector('.header');
const headerTwo = document.querySelector('.header-two');

function render() {
  modalCloset.addEventListener('click', () => {
    modal.classList.remove('showModal');
  });

  btnHeader.addEventListener('click', () => {
    modal.classList.add('showModal');
  });

  modalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    header.classList.add('header--active');
    modal.classList.remove('showModal');
    headerTwo.classList.add('header-two--active');
  });
}

render();
