const allEventsBtn = document.querySelector('.events__btn');
const allEvents = document.querySelectorAll('.events__item_add');
const lastEvents = document.querySelector('.events5');

allEventsBtn.addEventListener('click', () => {
    for (let i=0; i < allEvents.length; i++) {
        allEvents[i].classList.toggle('events__item_hide');
    }
    if (lastEvents.classList.contains('events__item_hide')) {
        allEventsBtn.innerHTML = "Все события";
    }
    else {
        allEventsBtn.innerHTML = "Скрыть";
    }
})