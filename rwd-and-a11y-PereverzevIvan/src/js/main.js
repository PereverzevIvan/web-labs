const burgerBtn = document.querySelector('.header__burger-btn');
const headerNav = document.querySelector('.header__nav');
const logotype = document.querySelector('.header__logo');
const toastBox = document.querySelector('.toast-box');

function activateBurger(e) {
    burgerBtn.classList.toggle('header__burger-btn--active');
    headerNav.classList.toggle('header__nav--active');
    document.body.classList.toggle('body--lock');
    if (document.querySelector('.header__burger-btn--active')) {
        document.querySelector('.main').inert = true;
        document.querySelector('.footer').inert = true;
    }
    else {
        document.querySelector('.main').inert = false;
        document.querySelector('.footer').inert = false;
    }
}

function showToast(msg) {
    let toast = document.createElement('div');
    let toastText = document.createElement('p');
    let toastCloseBtn = document.createElement('button');
    toast.classList.add('toast');
    toast.classList.add('toast--active');
    toastText.classList.add('toast__text');
    toastCloseBtn.classList.add('toast__close-btn');

    toastText.innerHTML = msg;
    toastCloseBtn.innerHTML = 'X';

    toastCloseBtn.addEventListener('click', (e) => {
        toast.style.opacity = '0';
        setTimeout(() => {toast.remove()}, 300);
    })

    toast.appendChild(toastText);
    toast.appendChild(toastCloseBtn);

    toastBox.appendChild(toast);
}

if (burgerBtn) {
    burgerBtn.addEventListener('click', activateBurger);
    burgerBtn.addEventListener('mousedown', e => e.preventDefault())
}

logotype.addEventListener('mousedown', e => e.preventDefault());

setTimeout(showToast, 1000, 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sed doloribus corporis odit cupiditate. A?')
