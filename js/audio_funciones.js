            //added events

            function initEvents() {
                var canvas = document.getElementById('canvas');  
                var oAudio = document.getElementById('myaudio');

                //set up event to toggle play button to pause when playing
                oAudio.addEventListener("playing", function() {
             
					$('#contenido_play').html('<img src="../images/botones/boton_stop.png" class="fadeIn">');
                }, true);

                //set up event to toggle play button to play when paused
                oAudio.addEventListener("pause", function() {

					$('#contenido_play').html('<img src="../images/botones/boton_play.png" class="fadeIn">');
                }, true);
                //set up event to update the progress bar
                oAudio.addEventListener("timeupdate", progressBar, true); 
                //set up mouse click to control position of audio
                canvas.addEventListener("click", function(e) {
                    //this might seem redundant, but this these are needed later - make global to remove these
                    var oAudio = document.getElementById('myaudio'); 
                    var canvas = document.getElementById('canvas');            

                    if (!e) {
                        e = window.event;
                    } //get the latest windows event if it isn't set
                    try {
                        //calculate the current time based on position of mouse cursor in canvas box
                        oAudio.currentTime = oAudio.duration * (e.offsetX / canvas.clientWidth);
                    }
                    catch (err) {
                    // Fail silently but show in F12 developer tools console
                        if (window.console && console.error("Error:" + err));
                    }
                }, true);
            }
            //this event gets fired when a page has loaded
            window.addEventListener("DOMContentLoaded", initEvents, false);


//Global variable to track current file name        
            var currentFile = "";

            //display and update progress bar
            function progressBar() { 
                var oAudio = document.getElementById('myaudio'); 
                //get current time in seconds
                var elapsedTime = Math.round(oAudio.currentTime);
                //update the progress bar
                if (canvas.getContext) {
                    var ctx = canvas.getContext("2d");
                    //clear canvas before painting
                    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
                    ctx.fillStyle = "rgb(255,255,255,255)";
                    var fWidth = (elapsedTime / oAudio.duration) * (canvas.clientWidth);
                    if (fWidth > 0) {
                        ctx.fillRect(0, 0, fWidth, canvas.clientHeight);
                    }
                }
            }
            //Play and pause function 
            function playAudio(variables) {
                try {
                    //return objects we need to work with 
                    var oAudio = document.getElementById('myaudio'); 
                    var btn = document.getElementById('play');
                    var audioURL = document.getElementById('audiofile');               

                    //Skip loading if current file hasn't changed.
                    if (audioURL.value !== currentFile) {
                        oAudio.src = audioURL.value;
                        currentFile = audioURL.value;                        
                    }
					
					//var tiempotranscurrido = oAudio.currentTime;
					
					oAudio.volume = 0//audio cebo
					if(document.getElementById('inlineCheckbox2').checked){
						   document.getElementById("audio1").volume = 1;
					  }else{
						   document.getElementById("audio1").volume = 0;
					  }
					  if(document.getElementById('inlineCheckbox3').checked){
					       document.getElementById("audio2").volume =  1;
					  }else{
						   document.getElementById("audio2").volume = 0;
					  }
					  if(document.getElementById('inlineCheckbox4').checked){
					       document.getElementById("audio3").volume =  1;
					  }else{
						   document.getElementById("audio3").volume = 0;
					  }
					  if(document.getElementById('inlineCheckbox5').checked){
					       document.getElementById("audio4").volume =  1;
					  }else{
						   document.getElementById("audio4").volume = 0;
					  }
					  if(document.getElementById('inlineCheckbox6').checked){
					       document.getElementById("audio5").volume =  1;
					  }else{
						   document.getElementById("audio5").volume = 0;
					  }
	
                    //Tests the paused attribute and set state. 
                    if (oAudio.paused) {
                        oAudio.play();
                        $('.audio').each(function () {
							$(this)[0].play();
							//$(this)[0].currentTime = tiempotranscurrido;
							//alert(tiempotranscurrido);
						});
                        //btn.textContent = '<img src="../images/botones/boton_stop.png">';
						$('#contenido_play').html('<img src="../images/botones/boton_stop.png">');
                    }
                    else {
                        oAudio.pause();
						$('.audio').each(function () {
							$(this)[0].pause();
						});
                        //btn.textContent = '<img src="../images/botones/boton_play.png">';
						$('#contenido_play').html('<img src="../images/botones/boton_play.png">');
                    }
                }
                catch (e) {
                    // Fail silently but show in F12 developer tools console
                    if (window.console && console.error("Error:" + e));
                }
            }

            //Rewinds the audio file by 5 seconds.
            function rewindAudio() {
                try {
                    var oAudio = document.getElementById('myaudio');
                    oAudio.currentTime -= 5.0;
					$('.audio').each(function () {
							$(this)[0].currentTime -= 5.0;
					});
                }
                catch (e) {
                    // Fail silently but show in F12 developer tools console
                    if (window.console && console.error("Error:" + e));
                }
            }

            //Fast forwards the audio file by 5 seconds.
            function forwardAudio() {
                try {
                    var oAudio = document.getElementById('myaudio');
                    oAudio.currentTime += 5.0;
					$('.audio').each(function () {
							$(this)[0].currentTime += 5.0;
					});
                }
                catch (e) {
                    // Fail silently but show in F12 developer tools console
                    if (window.console && console.error("Error:" + e));
                }
            }

            //Restart the audio file to the beginning.

            function restartAudio() {
                try {
                    var oAudio = document.getElementById('myaudio');
                    oAudio.currentTime = 0;
					$('.audio').each(function () {
							$(this)[0].currentTime = 0;
					});
                }
                catch (e) {
                    // Fail silently but show in F12 developer tools console
                    if (window.console && console.error("Error:" + e));
                }
            }


$( "#inlineCheckbox1" ).click(function() {
	if($('#inlineCheckbox1').get(0).checked){
		$('#inlineCheckbox2').get(0).checked = true; 
		$('#inlineCheckbox3').get(0).checked = true;
		$('#inlineCheckbox4').get(0).checked = true;
		$('#inlineCheckbox5').get(0).checked = true;
		$('#inlineCheckbox6').get(0).checked = true;
		document.getElementById("audio1").volume =  1;
		document.getElementById("audio2").volume =  1;
		document.getElementById("audio3").volume =  1;
		document.getElementById("audio4").volume =  1;
		document.getElementById("audio5").volume =  1;
	}else{
		$('#inlineCheckbox2').get(0).checked = false; 
		$('#inlineCheckbox3').get(0).checked = false;
		$('#inlineCheckbox4').get(0).checked = false;
		$('#inlineCheckbox5').get(0).checked = false;
		$('#inlineCheckbox6').get(0).checked = false;
		document.getElementById("audio1").volume = 0;
		document.getElementById("audio2").volume = 0;
		document.getElementById("audio3").volume = 0;
		document.getElementById("audio4").volume = 0;
		document.getElementById("audio5").volume = 0;
	}
});

function verifica_todos() {
	if(document.getElementById('inlineCheckbox2').checked && document.getElementById('inlineCheckbox3').checked && document.getElementById('inlineCheckbox4').checked && document.getElementById('inlineCheckbox5').checked && document.getElementById('inlineCheckbox6').checked){
		$('#inlineCheckbox1').get(0).checked = true;
	}else{
		$('#inlineCheckbox1').get(0).checked = false;
	}
}


$( "#inlineCheckbox2" ).click(function() {
	verifica_todos();
	if(document.getElementById('inlineCheckbox2').checked){
		document.getElementById("audio1").volume =  1;
	}else{
		document.getElementById("audio1").volume = 0;
	}
});

$( "#inlineCheckbox3" ).click(function() {
	verifica_todos();
	if(document.getElementById('inlineCheckbox3').checked){
		document.getElementById("audio2").volume =  1;
	}else{
		document.getElementById("audio2").volume = 0;
	}
});

$( "#inlineCheckbox4" ).click(function() {
	verifica_todos();
	if(document.getElementById('inlineCheckbox4').checked){
		document.getElementById("audio3").volume =  1;
	}else{
		document.getElementById("audio3").volume = 0;
	}
});

$( "#inlineCheckbox5" ).click(function() {
	verifica_todos();
	if(document.getElementById('inlineCheckbox5').checked){
		document.getElementById("audio4").volume =  1;
	}else{
		document.getElementById("audio4").volume = 0;
	}
});

$( "#inlineCheckbox6" ).click(function() {
	verifica_todos();
	if(document.getElementById('inlineCheckbox6').checked){
		document.getElementById("audio5").volume =  1;
	}else{
		document.getElementById("audio5").volume = 0;
	}
});


		function prender_check(var_chek){

			if(document.getElementById(var_chek).checked){
				if(var_chek == 'inlineCheckbox1'){
					
					$('#inlineCheckbox2').get(0).checked = false; 
					$('#inlineCheckbox3').get(0).checked = false;
					$('#inlineCheckbox4').get(0).checked = false;
					$('#inlineCheckbox5').get(0).checked = false;
					$('#inlineCheckbox6').get(0).checked = false;
					document.getElementById("audio1").volume = 0;
					document.getElementById("audio2").volume = 0;
					document.getElementById("audio3").volume = 0;
					document.getElementById("audio4").volume = 0;
					document.getElementById("audio5").volume = 0;
					
				}else{	
					if(var_chek =='inlineCheckbox2'){
						document.getElementById("audio1").volume = 0;
					}else if(var_chek =='inlineCheckbox3'){
						document.getElementById("audio2").volume = 0;
					}else if(var_chek =='inlineCheckbox4'){
						document.getElementById("audio3").volume = 0;
					}else if(var_chek =='inlineCheckbox5'){
						document.getElementById("audio4").volume = 0;
					}else if(var_chek =='inlineCheckbox6'){
						document.getElementById("audio5").volume = 0;
					}
					$('#'+var_chek).get(0).checked = false; 
				}

			}else{

				if(var_chek == 'inlineCheckbox1'){
					
					$('#inlineCheckbox2').get(0).checked = true; 
					$('#inlineCheckbox3').get(0).checked = true;
					$('#inlineCheckbox4').get(0).checked = true;
					$('#inlineCheckbox5').get(0).checked = true;
					$('#inlineCheckbox6').get(0).checked = true;
					document.getElementById("audio1").volume =  1;
					document.getElementById("audio2").volume =  1;
					document.getElementById("audio3").volume =  1;
					document.getElementById("audio4").volume =  1;
					document.getElementById("audio5").volume =  1;
					
				}else{
					if(var_chek =='inlineCheckbox2'){
						document.getElementById("audio1").volume =  1;
					}else if(var_chek =='inlineCheckbox3'){
						document.getElementById("audio2").volume =  1;
					}else if(var_chek =='inlineCheckbox4'){
						document.getElementById("audio3").volume =  1;
					}else if(var_chek =='inlineCheckbox5'){
						document.getElementById("audio4").volume =  1;
					}else if(var_chek =='inlineCheckbox6'){
						document.getElementById("audio5").volume =  1;
					}
					$('#'+var_chek).get(0).checked = true; 
				}	
			}
			verifica_todos();
	}


//Gl0bal variable dispositivo
var navInfo = window.navigator.appVersion.toLowerCase();

if(navInfo.indexOf('ipad') != -1 || navInfo.indexOf('iphone') != -1 || navInfo.indexOf('ipod') != -1){	
	
	//Global variable to track current file name        
			var currentFile = "";

			//display and update progress bar
			function progressBar() { 
					var oAudio = document.getElementById('myaudio'); 
					//get current time in seconds
					var elapsedTime = Math.round(oAudio.currentTime);
					//update the progress bar
					 if (canvas.getContext) {
								var ctx = canvas.getContext("2d");
								//clear canvas before painting
								ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
								ctx.fillStyle = "rgb(255,255,255,255)";
								var fWidth = (elapsedTime / oAudio.duration) * (canvas.clientWidth);
								if (fWidth > 0) {
									ctx.fillRect(0, 0, fWidth, canvas.clientHeight);
								}
					 }

			}
 
            //Play and pause function 
            function playAudio(variables) {
                try {
                    //return objects we need to work with 
                    var oAudio = document.getElementById('myaudio'); 
                    var btn = document.getElementById('play');
                    var audioURL = document.getElementById('audiofile');               

                    //Skip loading if current file hasn't changed.
                    if (audioURL.value !== currentFile) {
                        oAudio.src = audioURL.value;
                        currentFile = audioURL.value;                        
                    }
					var tiempotranscurrido = oAudio.currentTime;

                    //Tests the paused attribute and set state. 
					 if(variables=='apaga_todos' && !oAudio.paused){
						 $('.audio').each(function () {
								$(this)[0].currentTime = tiempotranscurrido;
								$(this)[0].play();
						 });
					 }
					if(variables=='enciende_todos' && !oAudio.paused){
						 $('.audio').each(function () {
								$(this)[0].pause();
						 });
					}
				   //Tests the paused attribute and set state. 
				   if(variables=='#inlineCheckbox2' && !oAudio.paused){
					   if(document.getElementById('inlineCheckbox2').checked){
						    $('#audio1').each(function () {
								$(this)[0].pause();
							});
						    $( "#audio1" ).removeClass( "audio" );
						    
					    }else{
							$( "#audio1" ).addClass( "audio" );
							$('.audio').each(function () {
								$(this)[0].currentTime = tiempotranscurrido;
								$(this)[0].play();
							});
							
						}
				   }
				   if(variables=='#inlineCheckbox3'&& !oAudio.paused){
					   if(document.getElementById('inlineCheckbox3').checked){
						    $('#audio2').each(function () {
								$(this)[0].pause();
							});
						    $( "#audio2" ).removeClass( "audio" );
						    
					    }else{
							$( "#audio2" ).addClass( "audio" );
							$('.audio').each(function () {
								$(this)[0].currentTime = tiempotranscurrido;
								$(this)[0].play();
							});
							
						}
				   }
				   if(variables=='#inlineCheckbox4' && !oAudio.paused){
					   if(document.getElementById('inlineCheckbox4').checked){
						    $('#audio3').each(function () {
								$(this)[0].pause();
							});
						   $( "#audio3" ).removeClass( "audio" );   
					    }else{
							$( "#audio3" ).addClass( "audio" );
							$('.audio').each(function () {
								$(this)[0].currentTime = tiempotranscurrido;
								$(this)[0].play();
							});
						}
				   }
				   if(variables=='#inlineCheckbox5' && !oAudio.paused){
					   if(document.getElementById('inlineCheckbox5').checked){
						    $('#audio4').each(function () {
								$(this)[0].pause();
							});
						    $( "#audio4" ).removeClass( "audio" );  
					    }else{
							$( "#audio4" ).addClass( "audio" );
							$('.audio').each(function () {
								$(this)[0].currentTime = tiempotranscurrido;
								$(this)[0].play();
							});
						}
				   }
				   if(variables=='#inlineCheckbox6' && !oAudio.paused){
					   if(document.getElementById('inlineCheckbox6').checked){
						    $('#audio5').each(function () {
								$(this)[0].pause();
							});
						    $( "#audio5" ).removeClass( "audio" ); 
					    }else{
							$( "#audio5" ).addClass( "audio" );
							$('.audio').each(function () {
								$(this)[0].currentTime = tiempotranscurrido;
								$(this)[0].play();
							});
						}
				  }
				    //Tests the paused attribute and set state.
				   if(variables=='inicio'){
                    if (oAudio.paused) {
                          
						     if(!document.getElementById('inlineCheckbox2').checked){
								   $( "#audio1" ).removeClass( "audio" );
							 }else{
								   $( "#audio1" ).addClass( "audio" );
							 }
							 if(!document.getElementById('inlineCheckbox3').checked){
								   $( "#audio2" ).removeClass( "audio" );
							 }else{
								   $( "#audio2" ).addClass( "audio" );
							 }
							if(!document.getElementById('inlineCheckbox4').checked){
								   $( "#audio3" ).removeClass( "audio" );
							 }else{
								   $( "#audio3" ).addClass( "audio" );
							 }
							if(!document.getElementById('inlineCheckbox5').checked){
								   $( "#audio4" ).removeClass( "audio" );
							 }else{
								   $( "#audio4" ).addClass( "audio" );
							 }
							if(!document.getElementById('inlineCheckbox6').checked){
								   $( "#audio5" ).removeClass( "audio" );
							 }else{
								   $( "#audio5" ).addClass( "audio" );
							 }

					
						    $('.audio').each(function () {
								 oAudio.play();
								 $(this)[0].currentTime = tiempotranscurrido;
								 $(this)[0].play();
								 //alert(tiempotranscurrido);
							});
						
						  
						$('#contenido_play').html('<img src="../images/botones/boton_stop.png" class="fadeIn">');
                    }
                    else {
						$( "#audio1" ).addClass( "audio" );
						$( "#audio2" ).addClass( "audio" );
						$( "#audio3" ).addClass( "audio" );
						$( "#audio4" ).addClass( "audio" );
						$( "#audio5" ).addClass( "audio" );
                       
						$('.audio').each(function () { 
							oAudio.pause();
							$(this)[0].pause();
						});

						$('#contenido_play').html('<img src="../images/botones/boton_play.png" class="fadeIn">');
                    }
				 }
                }
                catch (e) {
                    // Fail silently but show in F12 developer tools console
                    if (window.console && console.error("Error:" + e));
                }
            }

            //Restart the audio file to the beginning.

            function restartAudio() {
                try {
                    var oAudio = document.getElementById('myaudio');
                    oAudio.currentTime = 0;
					$('.audio').each(function () {
							$(this)[0].currentTime = 0;
					});
                }
                catch (e) {
                    // Fail silently but show in F12 developer tools console
                    if (window.console && console.error("Error:" + e));
                }
            }

            
		
	   $( "#inlineCheckbox1" ).click(function() {
			if($('#inlineCheckbox1').get(0).checked){
				$('#inlineCheckbox2').get(0).checked = true; 
				$('#inlineCheckbox3').get(0).checked = true;
				$('#inlineCheckbox4').get(0).checked = true;
				$('#inlineCheckbox5').get(0).checked = true;
				$('#inlineCheckbox6').get(0).checked = true;
				playAudio('enciende_todos');
			}else{
				$('#inlineCheckbox2').get(0).checked = false; 
				$('#inlineCheckbox3').get(0).checked = false;
				$('#inlineCheckbox4').get(0).checked = false;
				$('#inlineCheckbox5').get(0).checked = false;
				$('#inlineCheckbox6').get(0).checked = false;
				playAudio('apaga_todos');
			}
		});

		function verifica_todos() {
			if(document.getElementById('inlineCheckbox2').checked && document.getElementById('inlineCheckbox3').checked && document.getElementById('inlineCheckbox4').checked && document.getElementById('inlineCheckbox5').checked && document.getElementById('inlineCheckbox6').checked){
				$('#inlineCheckbox1').get(0).checked = true;
			}else{
				$('#inlineCheckbox1').get(0).checked = false;
			}
		}

		function prender_check(var_chek){
			

			if(document.getElementById(var_chek).checked){
				if(var_chek == 'inlineCheckbox1'){
					$('#inlineCheckbox2').get(0).checked = false; 
					$('#inlineCheckbox3').get(0).checked = false;
					$('#inlineCheckbox4').get(0).checked = false;
					$('#inlineCheckbox5').get(0).checked = false;
					$('#inlineCheckbox6').get(0).checked = false;
					playAudio('enciende_todos');
				}else{
					playAudio('#'+var_chek);
					$('#'+var_chek).get(0).checked = false; 
				}

			}else{

				if(var_chek == 'inlineCheckbox1'){
					$('#inlineCheckbox2').get(0).checked = true; 
					$('#inlineCheckbox3').get(0).checked = true;
					$('#inlineCheckbox4').get(0).checked = true;
					$('#inlineCheckbox5').get(0).checked = true;
					$('#inlineCheckbox6').get(0).checked = true;
					playAudio('apaga_todos');
				}else{
					playAudio('#'+var_chek);
					$('#'+var_chek).get(0).checked = true; 
				}	
			}
			verifica_todos();
		}


		$( "#inlineCheckbox2, #inlineCheckbox3, #inlineCheckbox4, #inlineCheckbox5, #inlineCheckbox6" ).click(function() {
			playAudio('#'+this.id);
			verifica_todos();
		});

	
	
}

