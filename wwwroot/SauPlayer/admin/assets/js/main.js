$(function(){

	$('.admin_cont > div').click(function(){

		$('.admin_cont > div').next('.aciklama').slideUp();

		if($(this).next('.aciklama:visible').length < 1)
			$(this).next('.aciklama').slideToggle();
	});


})