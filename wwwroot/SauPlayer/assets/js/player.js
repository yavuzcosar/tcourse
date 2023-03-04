var uid = $('.video').attr('id');

var gPosition;
var question = true;

var playerInstance = jwplayer("video");


var options = {
	playButton: false,
	soundControl: true,
	fullScreen: false,
	seek: false
};


playerInstance.setup({

		file: 'player/video/video.mp4',
		
		//skin: 'skins/agreen.xml', // html5 only

		//primary: 'flash',  // bunu kaldırırsak html5 ile çalışır, eklersek flash ile
		width: '100%',
		aspectratio: '16:9',
		//playlist: "playlist/playlist.rss",

		/*listbar: {
			position: "right",
			size: 240
		},*/

	   autostart: 'true',
	   //controls : "false",

		logo: {
			file: 'assets/img/logo.png',
			link: 'http://iamistanbul.tv/'
		},

		/*
	   sharing: {
		  code: encodeURI("<iframe src='http://jqueryegitimseti.com/player/embed.html' />"),
		  link: "http://jqueryegitimseti.com/player/index.html",
		  heading: "Videoyu Paylaş"
	   },

	   related: {
		  file: "assets/related.rss",
		  onclick: "link",
		  heading: "Benzer Videolar"
		},
		*/


		/*
		advertising: {
			'admessage': "Videonuz xx saniye sonra başlayacak.",
			'skipmessage' : 'Geç xx',
			'skiptext' : "Geç",
			'skipoffset': 5,
			'client': "vast",
			'schedule': {
				'adbreak1': {
					'offset': 'pre',
					'tag': 'http://demo.jwplayer.com.s3.amazonaws.com/player-demos/assets/preroll.xml'
				},
				'adbreak2': {
					'offset': '10%',
					'tag': 'http://demo.jwplayer.com.s3.amazonaws.com/player-demos/assets/overlay.xml'
				}
			}
		},
		*/

		events: {

			onReady: function() {
				prepare(options);
			},

			onPlay: function (event) {
				// ga('send', 'pageview');

				ajaxCall({'event':1,'uid':uid,'position':jwplayer().getPosition()},function(){
					
				});

				return false;
			},

			onPause: function (event) {
				ajaxCall({'event':2,'uid':uid,'position':jwplayer().getPosition()},function(){

				});

				return false;
			},

			onSeek: function(){

				var position = jwplayer().getPosition();

				ajaxCall({'event':3,'uid':uid,'position':jwplayer().getPosition()},function(){

				});


			},

			/*
			onTime: function(e){


				if(e.position > 5 && question == true){

					jwplayer().pause();
   
					$('.ui.modal').modal({
						 closable  : false,
						 onApprove : function() {

							if($('#email').val() == "" ||  $('#name').val() == "" ){
								alert('E-mail and name required!');
								return false;
							}else{
								counter = setInterval("init(hiz)",saniye);
								audio[1].play();
							}
							
						 }
					}).modal('show');

					question = false;
					return false;
				}

			},*/

			onFullscreen: function(e){
				var st;

				if (e.fullscreen)
					st = 1;
				else
					st = 0;
				
				ajaxCall({'event':4,'uid':uid,'state': st , 'position':jwplayer().getPosition()},function(){

				});
				
			},

			
			onVolume: function(e){
				ajaxCall({'event':5,'uid':uid, 'position':jwplayer().getPosition()},function(){

				});
			},

			onMute: function(e){

				var st;

				if (e.mute)
					st = 0;
				else
					st = 1;

				
				ajaxCall({'event':6,'uid':uid,'state': st , 'position':jwplayer().getPosition()},function(){

				});
				

			}


		},


		/*
		tracks: [{ 
			file: "player/assets/en.vtt", 
			label: "English",
			kind: "captions",
			"default": true 
		},{ 
			file: "player/assets/fr.vtt", 
			kind: "captions",
			label: "French"
		}]
		*/



	});


	/*
	jwplayer().addButton(
	//This portion is what designates the graphic used for the button
	   "img/downloadButton.png",
	//This portion determines the text that appears as a tooltip
	   "Videoyu İndir", 
	//This portion designates the functionality of the button itself
	   function() {
	//With the below code, we're grabbing the file that's currently playing
		   window.location.href = jwplayer().getPlaylistItem()['file'];
	  },
	//And finally, here we set the unique ID of the button itself.
	  "download"
	);
	*/

$(function(){



	$('.video').on('click', function() {

		if(!options.playButton){
			playerInstance.play();
			return false;
		}
	});

	$('.video').on('dblclick', function() {
		playerInstance.setFullscreen(false);
		return false;
	})


	$('#test').on('click',function(){
		
		var position = jwplayer().getPosition();
		var duration = jwplayer().getDuration();

		jwplayer().seek(15.3)
	});



	$(window).bind('beforeunload',function(){
		var t = jwplayer().getState();
		//return t;
	});


	   
});




function prepare(opt) {


	if (!opt.playButton) {
		$('.jw-icon-playback').hide();
	}

	if (!opt.soundControl) {
		$('.jw-icon-volume').hide();
	}

	if (!opt.fullScreen) {
		$('.jw-icon-fullscreen').hide();
	}

	if (!opt.seek) {
		//$('.jw-rail').hide();
	}
   

}



function ajaxCall(data,callback){
	$.ajax({
		type:'POST',
		data: data,
		url : 'lib/ajax.php',
		success:function(){
			callback();
		}
	})
}