let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName('menu-item'),
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv')[0],
    promptFor = document.querySelector('#prompt'),
    menuItemLi = document.createElement('li');

menu.insertBefore(menuItem[2], menuItem[1]);

menuItemLi.classList.add('menu-item');
menuItemLi.textContent = 'Пятый пункт';
menu.appendChild(menuItemLi);

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

title.textContent = "Мы продаем только подлинную технику Apple";

adv.remove();

let questions = prompt('Ваше отношение отношение к технике apple?');
promptFor.textContent = questions;