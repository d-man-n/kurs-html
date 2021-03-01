const selector = document.querySelector('#phone');
const im = new Inputmask("+7(999) 999-9999");

im.mask(selector);

new JustValidate('.contacts__form_list', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 10
        },
        phone: {
            required: true,
            function: (name, value) =>  {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length ===10
            }
        }
    },
    messages: {
        required: 'The field is required',
        name: 'Введите имя',
        phone: 'Введите номер телефона'
    },
});

$(".contacts__form_list").submit(function(event) {
    event.preventDefault();

    var $form = $(this);
    $.post(
        $form.attr("action"),
        $form.serialize()
    );

    $(".contacts__form_input").val("");
    $(".modal-bg_send").addClass('modal-bg__showed');
    setTimeout(() => { $(".modal-bg_send").removeClass('modal-bg__showed') }, 3000);
});


const modalClose = document.querySelector('.modal__close');
const modalSend = document.querySelector('.modal-bg_send');



modalClose.addEventListener('click', function() {
    modalSend.classList.remove('modal-bg__showed');
});