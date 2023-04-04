// Определяем действующие элементы на странице
const year = document.querySelector('#year');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

// Делаем расчеты
const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Устанавливаем год на страницу
year.textContent = currentYear + 1;

const currentTime = new Date();
const diff = nextYear - currentTime;

// Перевод в дни
const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
// Часов всего, далее остаток от деления на 24 (преобразования в дни)
const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
// Минут всего, далее остаток от преобразования в часы, минут осталось
const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
// Секунд всего, далее остаток от преобразования в минуты,  секунд осталось
const secondsLeft = Math.floor(diff / 1000) % 60;

days.textContent = daysLeft;
hours.textContent = hoursLeft;
minutes.textContent = minutesLeft;
seconds.textContent = secondsLeft;






