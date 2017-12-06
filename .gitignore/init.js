$(function(){
	
	$("#form").validate({
		rules: {
			name: {
				required: true,
				minlength: 3
			},
			company: {
				required: true
			},
			phone: {
				required: true,
				number: true,
				minlength: 6
			},
			email: {
				required: true,
				email: true
			},
			message: {
				required: true
			}
		},
		messages: {
			name: {
				required: 'Обязательное поле',
				minlength: 'Мин. длина: 3'
			},
			company: {
				required: 'Обязательное поле'
			},
			phone: {
				required: 'Обязательное поле',
				number: 'Недопустимый номер',
				minlength: 'Мин. длина: 6'
			},
			email: 'Недопустимый e-mail',
			message: {
				required: 'Обязательное поле'
			}
		},
		success: function(label) {
			label.html('OK').removeClass('error').addClass('ok');
			setTimeout(function(){
				label.fadeOut(500);
			}, 2000)
		}
	});
	
});