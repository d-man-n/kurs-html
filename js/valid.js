const selector = document.querySelector('#phone');
const im = new Inputmask("+7(999) 999-9999");

im.mask(selector);

new JustValidate('.contacts__list', {
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
    
    submitHandler: function(form) {
        let formData = new FormData(form);
        let xhr = new XMLHttpRequest();
        
/*        xhr.onreadystatechange = function() {
    	    if (xhr.readyState === 4) {
    		if (xhr.status === 200) {
    		    console.log('Отправлено');
    		}
    	    }
        }*/
        
        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
        
        form.reset();
    
        $(".contacts__input").val("");
        $(".modal-bg").addClass('modal-bg__showed');
        setTimeout(() => { $(".modal-bg").removeClass('modal-bg__showed') }, 3000);
    }
});

const modalClose = document.querySelector('.modal__close');
const modalSend = document.querySelector('.modal-bg');

modalClose.addEventListener('click', function() {
    modalSend.classList.remove('modal-bg__showed');
});