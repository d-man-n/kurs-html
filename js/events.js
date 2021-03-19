const allEventsBtn = document.querySelector('.events__btn');
const allEvents = document.querySelectorAll('.event__container_add');
const lastEvents = document.querySelector('.events5');

allEventsBtn.addEventListener('click', () => {
    document.querySelector('.event__container_add2').classList.toggle('event__container_hide2');
    for (let i=0; i < allEvents.length; i++) {
        allEvents[i].classList.toggle('event__container_hide');
    }
    if (lastEvents.classList.contains('event__container_hide')) {
        allEventsBtn.innerHTML = "Все события";
    }
    else {
        allEventsBtn.innerHTML = "Скрыть";
    }
})