$(document).ready(init);

function init(){
	reset();

	$('#contacts-list .table-row').hover(function(){
		reset();
		$(this).toggleClass('active');
		var contact_info = $(this).find('.contact-info');
		contact_info.find('div').show();
	});
	
	$('select#displayed-info').change(reset);
}

function reset(){
	var display_field = $('#displayed-info option:selected').val();
		$('.contact-info>div').hide();
		$('.contact-info>div.'+display_field).show();
}