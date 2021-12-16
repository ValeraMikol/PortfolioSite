window.addEventListener('DOMContentLoaded', () => {
    const btnMinus = document.querySelector('[data-action="minus"]'),
          btnPlus = document.querySelector('[data-action="plus"]'),
          counter = document.querySelector('[data-counter]');
    btnMinus.addEventListener('click', function () {
        counter.innerText = --counter.innerText;
    });
    btnPlus.addEventListener('click', function () {
        counter.innerText = ++counter.innerText;
    });

})