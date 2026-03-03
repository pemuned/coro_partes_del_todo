var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


var acc = document.getElementsByClassName("accordion-u2");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
  
	this.classList.toggle("active-u2");
	  
	if(this.id == 'acor1'){
		$( "#acor2" ).removeClass( "active-u2" );
		$( "#pacor2" ).css({'display':'none'}); 
		$( "#acor3" ).removeClass( "active-u2" );
		$( "#pacor3" ).css({'display':'none'}); 
		altoventana = $('#pacor1').eq(0).css("height");
	}
	if(this.id == 'acor2'){
		$( "#acor1" ).removeClass( "active-u2" );
		$( "#pacor1" ).css({'display':'none'}); 
		$( "#acor3" ).removeClass( "active-u2" );
		$( "#pacor3" ).css({'display':'none'}); 
		 altoventana = $('#pacor2').eq(0).css("height");
	}
	
	if(this.id == 'acor3'){
		$( "#acor2" ).removeClass( "active-u2" );
		$( "#pacor2" ).css({'display':'none'}); 
		$( "#acor1" ).removeClass( "active-u2" );
		$( "#pacor1" ).css({'display':'none'}); 
		 altoventana = $('#pacor3').eq(0).css("height");
	}
	  
	var altow = $(window).height();
	if((altow*1)<1100){ altow=1100;}
	$( "#body9" ).css({'min-height':altow+'px'}); 

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
	  $( "#body9" ).css({'min-height':'600px'}); 
    } else {
      panel.style.display = "block";
    }
  });
}



//CUANDO EL DOCUMENTO ESTA CARGADO
$( document ).ready(function() {

	var URLactual = jQuery(location).attr('href');
	var cuales = URLactual.split('#');
	var altow = $(window).height();
	if((altow*1)<1100){ altow=1100;}
	$( "#body9" ).css({'min-height':altow+'px'}); 

	if(cuales[1]=='practica'){
		$( "#acor1" ).addClass( "active-u2" );
		$( "#pacor1" ).css({'display':'block'}); 
	} else if(cuales[1]=='produccion'){
		$( "#acor2" ).addClass( "active-u2" );
		$( "#pacor2" ).css({'display':'block'}); 
	}else if(cuales[1]=='vocalizos'){
		$( "#acor3" ).addClass( "active-u2" );
		$( "#pacor3" ).css({'display':'block'}); 
	}
	

});
