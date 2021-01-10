$(document).ready(function() {
    $('.form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: 'required',
        },
        messages: {
            name: {
                required: "Пожалуйста введите ваше имя",
                minlength: jQuery.validator.format("Не менее {0} символов!")
              },
            phone: "Введите ваш номер телефона"
        }
    });
    $("#phone").mask("+999-(99)-999-99-99");
});