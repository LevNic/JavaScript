// 1. получить объект модального окна с классом .wrap
const modalWindow = document.querySelector('.wrap');
// 2. получить тег span, используемый для закрытия окна
const closingWindow = document.querySelector('.close-window');
// 3. получить кнопку, используемую для показа модального окна
const showingWindow = document.querySelector('.show-window');

// 4. назначить обработку клика на кнопку показа модального окна
// когда функция обработчик срабатывает она должна у модального
// окна удалять класс hidden
showingWindow.addEventListener('click', function () {
    modalWindow.classList.remove('hidden');
});
// 5. назначить обработку клика на тег span, при клике
// в обработчике модальному окну должен быть добавлен
// класс hidden
closingWindow.addEventListener('click', function () {
    modalWindow.classList.add('hidden');
});
