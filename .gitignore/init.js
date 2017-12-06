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
				required: '������������ ����',
				minlength: '���. �����: 3'
			},
			company: {
				required: '������������ ����'
			},
			phone: {
				required: '������������ ����',
				number: '������������ �����',
				minlength: '���. �����: 6'
			},
			email: '������������ e-mail',
			message: {
				required: '������������ ����'
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