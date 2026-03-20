//CUANDO EL DOCUMENTO ESTA CARGADO
$( document ).ready(function() {
	var alto = $(window).height();
	alto = (alto*1);
	$('body').css({'height':alto+'px'});
	
	var alto_especial = $('.contenedor_texto_creditos').height();
	alto_especial = (alto_especial*1) + 400;
	$('#body7').css({'min-height':alto_especial+'px'});

});

//CAMBIA TAMANNO PANTALLA
$(window).on('resize', function(){
	var alto = $(window).height();
	alto = (alto*1);
	$('body').css({'height':alto+'px'});
	
	var alto_especial = $('.contenedor_texto_creditos').height();
	alto_especial = (alto_especial*1) + 400;
	$('#body7').css({'min-height':alto_especial+'px'});
});



$( "#botonmenu" ).click(function() {
	var valordisplay = $('.contenedor_menu').eq(0).css("display");
	if(valordisplay=='none'){
		$(".contenedor_menu").fadeIn(800);
	}
});

$( "#botonmenu" ).click(function() {
	var valordisplay = $('.contenedor_menu').eq(0).css("display");
	if(valordisplay=='none'){
		$(".contenedor_menu").fadeIn(800);
	}
});

$( "#botonsalir" ).click(function() {
	var valordisplay = $('.contenedor_menu').eq(0).css("display");
	if(valordisplay=='block'){
		$(".contenedor_menu").fadeOut(800);
	}
});

$( "#item_1, #item_2, #item_3, #item_4, #item_5, #item_6, #item_7, #item_8, #item_9, #item_10, #item_11, #item_12, #item_13, #item_14, #item_15, #item_16, #item_17, #item_18, #item_19, #item_20" ).hover(function() {
    $('.item img').css({'background-color':'transparent'}); 
	$('#'+this.id+' img').css({'background-color':'rgba(255,255,255,0.10)'}); 
});

$( "#item_1, #item_2, #item_3, #item_4, #item_5, #item_6, #item_7, #item_8, #item_9, #item_10, #item_11, #item_12, #item_13, #item_14, #item_15, #item_16, #item_17, #item_18, #item_19, #item_20" ).mouseleave(function() {
    $('.item img').css({'background-color':'transparent'}); 
});




function abre_ventana(datos){
		var res = datos.split("_");	
	    var cancion = res[0];
		var contenido = res[1];
	    $('#carga_contenido_v').html(''); 
	
		$('.audio').each(function () {
			$(this)[0].pause();
		});
	
		$('#myaudio').each(function () {
			$(this)[0].pause();
		});

	//descargas
	if(cancion=='cancion1' && contenido=='descarga'){
		$('#carga_contenido_v').html('<p class="texto_especial">Usted puede descargar la versión instrumental, o bien, una versión completa con todas las voces incluidas de El burro e´chilo. Para hacerlo seleccione la versión que desea y dele "clic" o presione el ícono respectivo.</p><div class="boton_descarga" id="boton_descarga1"><a href="../canciones/cancion1/instrumental.mp3" download="El_burro_e_chilo_instrumental.mp3"><img src="../images/botones/boton_bajar_musica.png" class="fadeIn"></a></div><div class="boton_descarga" id="boton_descarga2"><a href="../canciones/cancion1/todo.mp3" download="El_burro_e_chilo.mp3"><img src="../images/botones/boton_bajar_musica_coro.png" class="fadeIn"></a></div>'); 
	}
	if(cancion=='cancion2' && contenido=='descarga'){
		$('#carga_contenido_v').html('<p class="texto_especial">Usted puede descargar la versión instrumental, o bien, una versión completa con todas las voces incluidas de Luna liberiana. Para hacerlo seleccione la versión que desea y dele "clic" o presione el ícono respectivo.</p><div class="boton_descarga" id="boton_descarga1"><a href="../canciones/cancion2/instrumental.mp3" download="Luna_liberiana_instrumental.mp3"><img src="../images/botones/boton_bajar_musica.png" class="fadeIn"></a></div><div class="boton_descarga" id="boton_descarga2"><a href="../canciones/cancion2/todo.mp3" download="Luna_liberiana.mp3"><img src="../images/botones/boton_bajar_musica_coro.png" class="fadeIn"></a></div>'); 
	}
	if(cancion=='cancion3' && contenido=='descarga'){
		$('#carga_contenido_v').html('<p class="texto_especial">Usted puede descargar la versión instrumental, o bien, una versión completa con todas las voces incluidas de Nayuribe. Para hacerlo seleccione la versión que desea y dele "clic" o presione el ícono respectivo.</p><div class="boton_descarga" id="boton_descarga1"><a href="../canciones/cancion3/instrumental.mp3" download="Nayuribe_instrumental.mp3"><img src="../images/botones/boton_bajar_musica.png" class="fadeIn"></a></div><div class="boton_descarga" id="boton_descarga2"><a href="../canciones/cancion3/todo.mp3" download="Nayuribe.mp3"><img src="../images/botones/boton_bajar_musica_coro.png" class="fadeIn"></a></div>'); 
	}
	if(cancion=='cancion4' && contenido=='descarga'){
		$('#carga_contenido_v').html('<p class="texto_especial">Usted puede descargar la versión instrumental, o bien, una versión completa con todas las voces incluidas de Luna Herediana. Para hacerlo seleccione la versión que desea y dele "clic" o presione el ícono respectivo.</p><div class="boton_descarga" id="boton_descarga1"><a href="../canciones/cancion4/instrumental.mp3" download="Luna_herediana_instrumental.mp3"><img src="../images/botones/boton_bajar_musica.png" class="fadeIn"></a></div><div class="boton_descarga" id="boton_descarga2"><a href="../canciones/cancion4/todo.mp3" download="Luna_herediana.mp3"><img src="../images/botones/boton_bajar_musica_coro.png" class="fadeIn"></a></div>'); 
	}
	if(cancion=='cancion5' && contenido=='descarga'){
		$('#carga_contenido_v').html('<p class="texto_especial">Usted puede descargar la versión instrumental, o bien, una versión completa con todas las voces incluidas de Soy tico. Para hacerlo seleccione la versión que desea y dele "clic" o presione el ícono respectivo.</p><div class="boton_descarga" id="boton_descarga1"><a href="../canciones/cancion5/instrumental.mp3" download="Soy_tico_instrumental.mp3"><img src="../images/botones/boton_bajar_musica.png" class="fadeIn"></a></div><div class="boton_descarga" id="boton_descarga2"><a href="../canciones/cancion5/todo.mp3" download="Soy_tico.mp3"><img src="../images/botones/boton_bajar_musica_coro.png" class="fadeIn"></a></div>'); 
	}
	if(cancion=='cancion6' && contenido=='descarga'){
		$('#carga_contenido_v').html('<p class="texto_especial">Usted puede descargar la versión instrumental, o bien, una versión completa con todas las voces incluidas de Rice and Beans. Para hacerlo seleccione la versión que desea y dele "clic" o presione el ícono respectivo.</p><div class="boton_descarga" id="boton_descarga1"><a href="../canciones/cancion6/instrumental.mp3" download="Rice_and_Beans_instrumental.mp3"><img src="../images/botones/boton_bajar_musica.png" class="fadeIn"></a></div><div class="boton_descarga" id="boton_descarga2"><a href="../canciones/cancion6/todo.mp3" download="Rice_and_Beans.mp3"><img src="../images/botones/boton_bajar_musica_coro.png" class="fadeIn"></a></div>'); 
	}
	if(cancion=='cancion7' && contenido=='descarga'){
		$('#carga_contenido_v').html('<p class="texto_especial">Usted puede descargar la versión instrumental, o bien, una versión completa con todas las voces incluidas de Suite infantil. Para hacerlo seleccione la versión que desea y dele "clic" o presione el ícono respectivo.</p><div class="boton_descarga" id="boton_descarga1"><a href="../canciones/cancion7/instrumental.mp3" download="Suite_infantil_instrumental.mp3"><img src="../images/botones/boton_bajar_musica.png" class="fadeIn"></a></div><div class="boton_descarga" id="boton_descarga2"><a href="../canciones/cancion7/todo.mp3" download="Suite_infantil.mp3"><img src="../images/botones/boton_bajar_musica_coro.png" class="fadeIn"></a></div>'); 
	}
	if(cancion=='cancion8' && contenido=='descarga'){
		$('#carga_contenido_v').html('<p class="texto_especial">Usted puede descargar la versión instrumental, o bien, una versión completa con todas las voces incluidas de Caña Dulce. Para hacerlo seleccione la versión que desea y dele "clic" o presione el ícono respectivo.</p><div class="boton_descarga" id="boton_descarga1"><a href="../canciones/cancion8/instrumental.mp3" download="Canna_Dulce_instrumental.mp3"><img src="../images/botones/boton_bajar_musica.png" class="fadeIn"></a></div><div class="boton_descarga" id="boton_descarga2"><a href="../canciones/cancion8/todo.mp3" download="Canna_Dulce.mp3"><img src="../images/botones/boton_bajar_musica_coro.png" class="fadeIn"></a></div>'); 
	}
	if(cancion=='cancion9' && contenido=='descarga'){
		$('#carga_contenido_v').html('<p class="texto_especial">Usted puede descargar la versión instrumental, o bien, una versión completa con todas las voces incluidas de Pasión. Para hacerlo seleccione la versión que desea y dele "clic" o presione el ícono respectivo.</p><div class="boton_descarga" id="boton_descarga1"><a href="../canciones/cancion9/instrumental.mp3" download="Pasion_instrumental.mp3"><img src="../images/botones/boton_bajar_musica.png" class="fadeIn"></a></div><div class="boton_descarga" id="boton_descarga2"><a href="../canciones/cancion9/todo.mp3" download="Pasion.mp3"><img src="../images/botones/boton_bajar_musica_coro.png" class="fadeIn"></a></div>'); 
	}
	if(cancion=='cancion10' && contenido=='descarga'){
		$('#carga_contenido_v').html('<p class="texto_especial">Usted puede descargar la versión instrumental, o bien, una versión completa con todas las voces incluidas de la Guaria morada. Para hacerlo seleccione la versión que desea y dele "clic" o presione el ícono respectivo.</p><div class="boton_descarga" id="boton_descarga1"><a href="../canciones/cancion10/instrumental.mp3" download="Guaria_morada_instrumental.mp3"><img src="../images/botones/boton_bajar_musica.png" class="fadeIn"></a></div><div class="boton_descarga" id="boton_descarga2"><a href="../canciones/cancion10/todo.mp3" download="Guaria_morada.mp3"><img src="../images/botones/boton_bajar_musica_coro.png" class="fadeIn"></a></div>'); 
	}
	
	//video
	if(cancion=='cancion1' && contenido=='video'){
		$('#carga_contenido_v').html('<!--VIDEO--><div class="resp-container"><iframe class="resp-iframe" src="https://player.vimeo.com/video/359658313" gesture="media"  allow="encrypted-media" allowfullscreen></iframe></div>'); 
	}
	if(cancion=='cancion2' && contenido=='video'){
		$('#carga_contenido_v').html('<!--VIDEO--><div class="resp-container"><iframe class="resp-iframe" src="https://player.vimeo.com/video/359642208" gesture="media"  allow="encrypted-media" allowfullscreen></iframe></div>'); 
	}
	if(cancion=='cancion3' && contenido=='video'){
		$('#carga_contenido_v').html('<!--VIDEO--><div class="resp-container"><iframe class="resp-iframe" src="https://player.vimeo.com/video/362166644" gesture="media"  allow="encrypted-media" allowfullscreen></iframe></div>'); 
	}
	if(cancion=='cancion4' && contenido=='video'){
		$('#carga_contenido_v').html('<!--VIDEO--><div class="resp-container"><iframe class="resp-iframe" src="https://player.vimeo.com/video/468593780" gesture="media"  allow="encrypted-media" allowfullscreen></iframe></div>'); 
	}
	if(cancion=='cancion5' && contenido=='video'){
		$('#carga_contenido_v').html('<!--VIDEO--><div class="resp-container"><iframe class="resp-iframe" src="https://player.vimeo.com/video/640156394" gesture="media"  allow="encrypted-media" allowfullscreen></iframe></div>'); 
	}
	if(cancion=='cancion6' && contenido=='video'){
		$('#carga_contenido_v').html('<!--VIDEO--><div class="resp-container"><iframe class="resp-iframe" src="https://player.vimeo.com/video/640153118" gesture="media"  allow="encrypted-media" allowfullscreen></iframe></div>'); 
	}
	if(cancion=='cancion7' && contenido=='video'){
		$('#carga_contenido_v').html('<!--VIDEO--><div class="resp-container"><iframe class="resp-iframe" src="https://player.vimeo.com/video/641322195" gesture="media"  allow="encrypted-media" allowfullscreen></iframe></div>'); 
	}
	if(cancion=='cancion8' && contenido=='video'){
		$('#carga_contenido_v').html('<!--VIDEO--><div class="resp-container"><iframe class="resp-iframe" src="https://player.vimeo.com/video/1038644043" gesture="media"  allow="encrypted-media" allowfullscreen></iframe></div>'); 
	}
	if(cancion=='cancion9' && contenido=='video'){
		$('#carga_contenido_v').html('<!--VIDEO--><div class="resp-container"><iframe class="resp-iframe" src="https://player.vimeo.com/video/1037928605" gesture="media"  allow="encrypted-media" allowfullscreen></iframe></div>'); 
	}
	if(cancion=='cancion10' && contenido=='video'){
		$('#carga_contenido_v').html('<!--VIDEO--><div class="resp-container"><iframe class="resp-iframe" src="https://player.vimeo.com/video/1173331141" gesture="media"  allow="encrypted-media" allowfullscreen></iframe></div>'); 
	}
	
	//Texto
	if(cancion=='cancion1' && contenido=='texto'){
		$('#carga_contenido_v').html('<!--TEXTO1--><div class="contene_texto"><p class="text-left"><b>Letra y Música: </b>Héctor Zúñiga Robira. (1913-1994)<br><b>Arreglo: </b>Manuel Matarrita.<br><b>Ritmo: </b>Tambito</p><p class="text-left">Esta obra representativa del folklore guanacasteco a ritmo de tambito, género que algunos consideran el ritmo nacional de Costa Rica; fue compuesta por el liberiano Héctor Zúñiga, constituye una declaración de amor en el contexto de la pampa guanacasteca y refleja la sencillez y autenticidad del pueblo de esta provincia costarricense.</p><p class="text-left">Miguel Fajardo plasmó en la placa que permanece en el parque del cantón de Liberia en memoria de la figura del Ing. Héctor Zúñiga Rovira, las siguientes palabras “Cantor cósmico, forjador de conciencia infinita e histórica. Su canto creador es devoción de Guanacastequidad.  Pan eterno, iluminado.  Hijo pródigo de un Guanacaste que piensa”.</p><p class="text-left" style="font-size: 16px;" ><u>Letra:</u></p><p class="text-left">Quiero yo dejar en tu alma,<br>Con letra descomunal.<br>Mi pobre nombre grabado,<br>Como la hoja en el tamal.</p><p class="text-left">Y una vez que quede impreso,<br>Mi nombre en tu corazón.</p><p class="text-left">Quiero yo morir tranquilo,<br>Como el burro e’chilo<br>Sin más ilusión (bis)</p><p class="text-left">Ay morena linda,<br>Sabanero soy.<br>De tu gran hacienda,<br>De campos en flor.</p><p class="text-left">Porque en esta vida,<br>Que todo es dolor.<br>Solamente vivo,<br>Por tu gran amor. (Bis)</p></div>');        
	}	
	if(cancion=='cancion2' && contenido=='texto'){
		$('#carga_contenido_v').html('<!--TEXTO2--><div class="contene_texto"><p class="text-left"><b>Letra y Música: </b>Jesús Bonilla Chavarría. (1911- 1999)<br>Arreglo: </b>Patricio Torres.<br><b>Ritmo: </b>Bolero</p><p class="text-left">Este bolero compuesto por el santacruceño Jesús Bonilla Chavarría y estrenada en 1937 por la Banda Militar de Liberia, constituye una de las canciones del folklore costarricense más reconocidas y queridas. Declarada en 2011 como el himno oficial del cantón de Liberia de la provincia de Guanacaste.</p><p class="text-left">La letra es un poema que describe con sencillez la fascinación que la luna ejerce sobre las personas   “Es un bolero extraordinario; un himno espiritual enraizado en el alma de la luz y el amor, en el fogón estelar de un Guanacaste que piensa, existe y escribe. Escuchar esa pieza crea la hermosa sensación de una melodía forjada para la esplendente ruta de los corazones enamorados de la vida” (Alfaro, 2016, parr. 1).</p><p class="text-left" style="font-size: 16px;" ><u>Letra:</u></p><p class="text-left">¡Oh Luna divina!<br>que ilumina nuestra tierra.<br>Misterio insondable<br>que confunde nuestras almas.</p><p class="text-left">Sale el astro,<br>entre nubes,<br>misteriosas y oscuras<br>¡oh luna divina!<br>que iluminas nuestras almas.</p><p class="text-left">Luna liberiana, luna para amar,<br>misteriosas noches,<br>que embriagan de amor.<br>Es un paraíso<br>que el Creador nos dio<br>de mujeres bellas<br>que saben amar.</p><p class="text-left">Luna liberiana, luna para amar,<br>yo bajo tu manto lloro de placer<br>y en noches calladas<br>cuando todo duerme.<br>Luna liberiana yo velo por ti.</p><p class="text-left">Luna Liberiana<br>luna para amar<br>misteriosas noches<br>que embriagan de amor</p><p class="text-left">Es un paraíso…</p></div>');        
	}	
	if(cancion=='cancion3' && contenido=='texto'){
		$('#carga_contenido_v').html('<!--TEXTO3--><div class="contene_texto"><p class="text-left"><b>Música: </b>Jesús Bonilla Chaverri. (1911- 1999)<br>Letra: </b>José Ramírez Sáizar. (1915- 2001)<br><b>Ritmo: </b>Tambito</p><p class="text-left">Este hermoso poema escrito por José Ramírez Sáizar y musicalizado por Jesús Bonilla Chaverri, se construye alrededor de la simbología de la flor de nayuribe, planta de cuyas flores color morado se extrae un tinte de color rojizo el cual es utilizado en la tintorería.</p><p class="text-left">Nayuribe también representa el nombre de una princesa chorotega, cuya leyenda narra su valor al defender a su pueblo. Al mismo tiempo, la canción evidencia muchas de las tradiciones y costumbres del pueblo guanacasteco.</p><p class="text-left" style="font-size: 16px;" ><u>Letra:</u></p><p class="text-left">Ya la luna se acuesta boca arriba<br>Y con sus cuernos mi tonada escribe<br>Morenita  dormite con la luna<br>Y con el pacholí de Nayuribe.<br>Oíte vos que alegre, la marimba;<br>tocando el punto con aquel quijongo.<br>Morenita dormite en mis regazos,<br>cual se mece en la aguas, se mece en las aguas aquel bongo.<br>Pareces un chutil de cornizuelo<br>Donde la hormiga cachudita vive<br>Ya la luna se fue dormite ahora<br>//Que la noche me … que la noche me huele a Nayuribe.//</p></div>');        
	}
	if(cancion=='cancion4' && contenido=='texto'){
		$('#carga_contenido_v').html('<!--TEXTO4--><div class="contene_texto"><p class="text-left"><b>Música y letra: </b>Juan Carlos Rojas Ramírez<br><b>Arreglo coral: </b>Juan Carlos Rojas Ramírez<br><b>Ritmo: </b>Tambito</p><p class="text-left" style="font-size: 16px;" ><u>Resumen:</u></p><p class="text-left">"Cada pueblo tiene su luna", fue la frase que inspiró al compositor Juan Carlos Rojas para escribirle a Heredia su propia canción, escrita en uno de los ritmos musicales más representativas del país: tambito (6/8), su letra, retoma de forma sencilla algunas de las expresiones más distintivas de la de la provincia.</p><br><p class="text-left" style="font-size: 16px;" ><u>Entrevista con Juan Carlos Rojas:</u></p><audio controls><source src="../canciones/cancion4/Entrevista_JCR_LH.mp3" type="audio/mp3"></audio><br><br><p class="text-left" style="font-size: 16px;" ><u>Letra:</u></p><p class="text-left">La, la, la, la, la, la, la, la, la, la, la, la<br>du ru du du dum, du ru du du dum, a<br>la, la, la, la, la, la, la, la, la, la, la, la<br>du ru du du dum, du ru du du dum, a<br><br>Sales cuando anoche alumbrando en el jardín<br>muchos enamorados se quieren gracias a ti<br>brillas por media calle, eres lucero sin fin<br>haces que mi nostalgia se convierta en día feliz<br><br>Luna herediana<br>está en mis sueños<br>guardas mis penas, mis ilusiones<br>me haces feliz<br><br>Deja en mi alma<br>el fiel recuerdo<br>De aquel momento, que allá en el parque<br>me haces feliz</p></div>');        
	}
	if(cancion=='cancion5' && contenido=='texto'){
		$('#carga_contenido_v').html('<!--TEXTO5--><div class="contene_texto"><p class="text-left"><b>Música y letra: </b>Carlos Guzmán Bermúdez<br><b>Arreglo coral: </b>Carlos Guzmán Bermúdez<br><b>Ritmo: </b>Tambito</p><p class="text-left" style="font-size: 16px;" ><u>Resumen:</u></p><p class="text-left">Nacido en 1957, Carlos Guzmán es compositor, arreglista y productor musical. Funda en 1977 junto a sus hermanas y hermanos el conjunto Gaviota, agrupación con la que produce 19 discos. Sus obras comprenden géneros musicales que abarcan desde los ritmos latinos y baladas populares, hasta obras sinfónicas y de cámara. Don Carlos, ha sido galardonado con el Premio Nacional de cultura en el 2009.<br>En esta ocasión, de su extensa producción musical se presenta una de sus canciones más conocidas y queridas “Soy tico”, canción que nace del profundo amor y orgullo del compositor por su patria.</p><br><p class="text-left" style="font-size: 16px;" ><u>Letra:</u></p><p class="text-left">Soy, tico, porque llevo a Costa Rica en las entrañas.<br>Porque lloro cuando escucho una guitarra,<br>Cuando trema la marimba y con la puesta del sol.<br>Soy tico y si me asomo a la ventana,<br>Me cautiva la montaña y se me alegra el corazón.<br><br>Soy tico, porque siento las canciones de mi tierra.<br>Porque vibro con la Luna Liberiana,<br>Caballito Nicoyano, La Patriótica y Pasión.<br>Soy tico y cuando miro la alborada,<br>El lamento del yigüirro, me acelera la emoción.<br><br>Y cuando caen los fuertes aguaceros,<br>Es como si yo fuera la semilla.<br>Me huele a tierra fértil el sendero:<br>Llenando de ilusión, mi alma sencilla.<br><br>Soy tico, porque cada vez que encuentro<br>A un amigo forastero, le demuestro mi calor.<br>Soy tico, porque vivo enamorado<br>Y orgulloso de la tierra que ha inspirado mi canción.<br><br>Y cuando caen los fuertes aguaceros,<br>Es como si yo fuera la semilla.<br>Me huele a tierra fértil el sendero:<br>Llenando de ilusión, mi alma sencilla.<br><br>Soy tico, porque una guaria morada,<br>Me engalana la mirada, me impresiona de verdad.<br>Soy tico y si eso no te dice nada,<br>Yo te mostraré mi patria, dame la oportunidad.</p></div>'); 
	}
	if(cancion=='cancion6' && contenido=='texto'){
		$('#carga_contenido_v').html('<!--TEXTO6--><div class="contene_texto"><p class="text-left"><b>Música y letra: </b>Rodrigo Rolando Alexander Smith (Chacra)<br><b>Arreglo coral: </b>Allen Torres Castillo<br><b>Ritmo: </b>Calipso limonense</p><p class="text-left" style="font-size: 16px;" ><u>Resumen:</u></p><p class="text-left">La música del Caribe costarricense, a pesar de su vivacidad, riqueza rítmica, melódica y expresividad ha permanecido ignorada por la mayoría del país. Principalmente al carácter guanacasteco y vallecentrista que ha permeado la difusión folclórica nacional.<br>El calypso Rice and beans, compuesto originalmente por un hombre muy humilde que visitaba el mercado Municipal del Centro de Limón, conocido como Billy de Limón, se dedicaba a pasar por los puestos cantando el estribillo para pedir comida.<br>Años más adelante, el calypsonian Rodrigo Rolando Alexander Smith, conocido como Chacra, lo graba y lo hará conocido en todo el país, convirtiéndose en uno de los calipsos más conocidos del género hasta ocupar un lugar en el patrimonio cultural inmaterial del país, según Decreto 374118, en el 2012.<br>De herencia afroantillana, el calipso es un ritmo alegre, generalmente escrito en métrica de 2/4 y en tonalidad mayor, con una sucesión de acordes simple, su riqueza descansa principalmente en sus letras, que buscan narrar la cotidianidad de la cultura caribeña.<br>En esta grabación, se presenta una versión acompañada por los tradicionales ensambles de calyso, constituido por bajo de cajón, banjo y percusión, que unidos a la versión coral y con el típico pregón, ofrecen una mirada peculiar de famoso calpyso limonense.</p><br><p class="text-left" style="font-size: 16px;" ><u>Letra:</u></p><p class="text-left">Give me some a your rice and beans,<br>Give me some a your rice and beans,<br>Give me some a your rice,<br>I want you give me some a your rice and beans.<br>(Pregón)<br>Comiendo al mediodía, rice and beans,<br>Con carnita de pescado, rice and beans.<br>En el centro de Limón.<br>I want your give me some a your rice and beans.</p></div>'); 
	}
	if(cancion=='cancion7' && contenido=='texto'){
		$('#carga_contenido_v').html('<!--TEXTO7--><div class="contene_texto"><p class="text-left"><b>Música y letra: </b>Tradicional<br><b>Arreglo coral: </b>Fabio Martínez Navas</p><p class="text-left" style="font-size: 16px;" ><u>Resumen:</u></p><p class="text-left">La inclusión de esta obra, con arreglo del colombiano Fabio Martínez Navas (1951-), obedece al interés del Proyecto ArtECE, por la promoción de la canción infantil latinoamericana, permitiendo así su difusión y uso para el desarrollo psicomotriz y cognitivo de la población en los ciclos iniciales de formación.<br>La música en la formación integral del estudiantado, supone su uso como herramienta potenciadora de numerosas capacidades actitudinales y aptitudinales que favorecen el proceso de aprendizaje, al tiempo que representa una oportunidad para el desarrollo de experiencias de aprendizaje significativas, lúdicas y estimulantes. Al tiempo que se convierte en una herramienta desde los distintos escenarios educativos, desde la “transmisión oral” de las canciones.<br>La “Suite de canciones infantiles” está escrita a tres voces, presenta una serie de canciones populares latinoamericanas, iniciando con “Rosita era linda” escrita por la colombiana María del Sol Peralta. Seguida de “El barquito chiquito” canción de origen mexicano y una canción tradicional de Argentina titulada “Bajó un ángel del cielo”.<br>Desde ahí el arreglo, inicia un serie de rondas populares infantiles cuyas letras y versiones pueden variar dependiendo de la región, así se presentan a modo de “XXX” . A la rueda, rueda”, Aserrín, aserrán” (originaria de España), “El burrito del teniente”, “El puente está quebrado” y “Tengo una muñeca”, “Arroz con leche”, “El patio de mi casa”, “que llueva, la vieja está en la cueva”.<br>Desde ahí se inicia una coral con una de las canciones más conocidas por las todas las generaciones latinoamericanas “Los pollitos dicen”.<br>Las canciones son bien enlazadas por el arreglista hasta finalizar con el característico “Colorín, colorado” creación del arreglista.<br>En esta ocasión, el Coro de la Escuela de Ciencias de la Educación, ofrece una versión en la que las voces de la cuerda de Tenor, cantan a octavas con las sopranos. Contraltos en la línea de mezzosoprano y los bajos en el sistema indicado para Altos. Posibles montajes en coros de niños, deben hacerse según las indicaciones de su arreglista.</p><br><p class="text-left" style="font-size: 16px;" ><u>Letra:</u></p><p class="text-left">Rosita era linda,<br>Te voy a contar un cuento infantil,<br>con las canciones que de niño canté.<br>Había una vez, un barco chiquitito,<br>Que no podía navegar, sí.<br>Bajó un ángel del cielo, que del cielo bajó.<br>Con sus alas abiertas y en el pecho una flor.<br>Todos los marineros, se pusieron a cantar,<br>y los niños del barco comenzaron a bailar:<br>A la rueda, rueda, de pan y canela,<br>Si no quieres ir, acuéstate a dormir.<br>El puente está quebrado, con qué lo curaremos,<br>Con cáscaras de huevo, burritos al potrero.<br>Tengo una muñeca la llevé a pasear y se me constipó.<br>Arroz con leche, me quiero casar,<br>Con una señorita de la capital.<br>El patio de mi casa, es muy particular,<br>Cuando llueve se moja, igual que los demás.<br>Y así pasaron, una, dos, tres, cuatro, cinco, seis, siete semanas.<br>Que llueva la vieja está en la cueva.<br>Los pollitos dicen, pío, pío, pío,<br>Cuando tienen hambre, cuando tienen frío.<br>La gallina busca el maíz y el trigo,<br>Les da la comida y les presta abrigo.<br>Bajo sus dos añas, acurrucudatitos,<br>hasta el otro día, duermen los pollitos.<br>Y colorín,<br>Este cuento se acabó.<br>Y el cuento al fin, se acabó.<br></p></div>'); 
	}	
	if(cancion=='cancion8' && contenido=='texto'){
		$('#carga_contenido_v').html("<!--TEXTO8-->"+'<div class="contene_texto"><p class="text-left">'+"<b>Música: </b>José Daniel Zúñiga Zeledón (1889-1981)<br><b>Letra: </b>José Joaquín Salas Pérez (1891-1970)<br><b>Arreglo: </b>Roger Wesby<br><b>Ritmo Original: </b>Danza Criolla<br><b>Ritmo de la interpretación: </b>Bolero"+'</p><p class="text-left" style="font-size: 16px;" ><u>Resumen:</u></p><p class="text-left">'+"La canción costarricense “Caña Dulce”, fue escrita por el señor José Joaquín Salas Pérez, quien era escritor, poeta y educador oriundo de la ciudad de San Ramón. Por su parte la música fue escrita en 1926 por el también poeta José Daniel Zúñiga Zeledón.<br><br>La versión original de la canción es una “danza criolla”, género que se considera una versión costarricense de la habanera y la danza andaluza. La obra intenta exponer la identidad costarricense de principios del siglo XX, retratando los ideales de la vida campesina, basada en la adquisición propia de recursos agrícolas que permitieran tener una vida tranquila e independiente y alcanzar la plenitud desde la vida en pareja.<br><br>El arreglo coral que interpreta el Coro de la ECE, fue realizado por el señor Roger Wesby, músico y didacta estadounidense que tuvo una relación estrecha con la enseñanza de la música coral en Costa Rica en la segunda mitad del Siglo XX.<br><br>La canción ha llegado a los tiempos actuales bajo muchas versiones y ritmos, frecuentemente en forma de bolero, que es precisamente el género elegido para esta interpretación, lo que no limita al arreglo a ser interpretado solamente bajo ese estilo, ya que esta partitura es adaptable a múltiples formas de ser ejecutada.</p><br>"+'<p class="text-left" style="font-size: 16px;" ><u>Letra:</u></p><p class="text-left">'+"Caña dulce pa’ moler<br>Cuando tenga mi casita<br>¡Oh, qué suerte tan bonita<br>que pa’ mí tendrá que ser!<br><br>Cuando apunte el verolís<br>y yo viva con mi nena,<br>no tendré ninguna pena<br>y seré siempre feliz.<br><br>Tendré entonces mi casita<br>y una milpa y buenos bueyes<br>y seré como esos reyes<br>que no envidian ya nadita.<br><br>Con mi Dios y mi morena,<br>caña dulce y buen amor,<br>esta vida noble y buena<br>pasaré sin un rencor.</p></div>"); 
	}
	if(cancion=='cancion9' && contenido=='texto'){
		$('#carga_contenido_v').html('<!--TEXTO9--><div class="contene_texto"><p class="text-left"><b>Música: </b>Pasión Acevedo Jácamo<br><b>Letra: </b>Roberto Arce<br><b>Arreglo: </b>Rolando Brenes<br><b>Ritmo Original: </b>Tambito/parrandera</p><p class="text-left" style="font-size: 16px;" ><u>Resumen:</u></p><p class="text-left">La canción costarricense Pasión fue inicialmente compuesta por el músico y marimbista guanacasteco Pasión Acevedo Jácamo, quien tocaba la obra sin letra. Es así como el músico originario de Naranjo de Alajuela Roberto Arce, decide escribirle la letra luego de escuchar al primero tocar la canción en su marimba.<br><br>La mayoría de las fuentes coinciden en fechar su composición en 1934, pero es probable, que la música fuera compuesta mucho tiempo antes.  La obra hace alusión al instrumento de la marimba, en sus orígenes indígenas y su relación directa con la naturaleza al ser creada a partir de madera. De ese modo, la obra  se ha convertido en un elemento identitario de la provincia de Guanacaste y repertorio tradicional de la música folclórica costarricense.<br><br>El ritmo original consiste en un 6/8 latinoamericano, que podría interpretarse en Costa Rica tanto como un tambito, parrandera y danza tradicional. El arreglo original está escrito en un ritmo y tempo constante, contrario a la interpretación del Coro de la ECE que, desde el arreglo de Rolando Brenes Rojas, intercalamos el ritmo de vals con el de tambito para crear un contraste entre las dos partes de la canción, práctica común en este tipo de música en agrupaciones como orquestas folclóricas y cimarronas.</p><br><p class="text-left" style="font-size: 16px;" ><u>Letra:</u></p><p class="text-left">Yo te llevo en el pecho como una perlita gata,<br>que adoraban los indios al nacer la luz del alba.<br>Te encontraron cantando en una rústica cabaña,<br>pues tu padre fue un viejo trovador de la montaña.<br><br>Zumba que zumba marimba en mi corazón<br>Aunque se rompan las teclas que son del fino coyol<br><br>Cuando estaba chiquilla y juguetona allá en el rancho,<br>te mimaban los indios que te querían tanto tanto.<br>tus canciones nacieron en las jícaras del campo,<br>y hoy vagan alegres en el orbe sacrosanto.<br><br>Zumba que zumba marimba en mi corazón<br>Aunque se rompan las teclas que son del fino coyol<br><br>Yo te llevo en el alma princesita soñadora.<br>Te abandonó tu padre cual si fuese pecadora.<br>Te dejó sin bautizo traicionando tu ilusión,<br>Y por eso te han dado el dulce nombre de PASION.<br><br>Zumba que zumba marimba en mi corazón<br>Aunque se rompan las teclas que son del fino coyol.</p></div>'); 
	}
	if(cancion=='cancion10' && contenido=='texto'){
		$('#carga_contenido_v').html('<!--TEXT10--><div class="contene_texto"><p class="text-left"><b>Letra y música: </b>Roberto Gutiérrez Vargas y Carlos López Castro (Los Talolingas)<br><b>Arreglo coral: </b>Marco Dusi<br><b>Adaptación para coro femenino: </b>Margott Piedra Hernández<br></p><p class="text-left" style="font-size: 16px;" ><u>Resumen:</u></p><p class="text-left">Compuesta en 1934, la Guaria Morada es una de las canciones más emblemáticas de la música folclórica y tradicional costarricense, escrita a ritmo de pasillo, revela en su letra el amor del pueblo de Costa Rica por su flor nacional, la cual fue declarada símbolo patrio en 1939.<br><br>Una de las grabaciones más conocidas es la que hiciera los propios compositores, quienes integraban el dúo Folclórico Los Talolingas, también fue interpretada por la Orquesta Billo´s Caracas Boys, esta agrupación modificó el ritmo de la obra adaptándola a danzón; ejecuciones más recientes utilizan esta última versión o incluso en forma de bolero o bolero cha.<br><br>En esta ocasión, la interpretación que realiza el Coro femenino de la ECE, será en su forma tradicional de pasillo, agregando un mayor ímpetu, tal y como se ejecuta el ritmo de pasillo en la actualidad.</p><br><p class="text-left" style="font-size: 16px;" ><u>Letra:</u></p><p class="text-left">Sobre la tapia entejada<br>sus pétalos suaves agita,<br>la linda Guaria Morada<br>flor de esta tierra bendita.<br><br>Se encuentra como un lucero<br>colgadita en la enramada,<br>cuando en lo oscuro el jilguero<br>va enredando su tonada.//<br><br>Por la orilla de los ríos<br>adornando las quebradas,<br>donde son los montes fríos<br>y están las aguas heladas.<br><br>Florecita lindo paje,<br>florecita nazarena,<br>el luto de tu ropaje,<br>es el mismo de mi pena.<br>El jazmín siempre blanquea<br>y sangran las amapolas,<br>sólo en febrero tumbea<br>el amor de tus corolas.<br><br>Florecita veranera<br>de la pampa y de la loma<br>como tú, soy primavera,<br>como tú, no tengo aroma.<br><br>Sobre la tapia entejada<br>en la roca y el raudal,<br>luce la Guaria Morada<br>la linda flor nacional.<br><br>Ella es emblema y es gala<br>que embellece y glorifica,<br>como un celaje hecho ala<br>que protege a Costa Rica.</p></div>'); 
	}
	
	//Partituras
	if(contenido=='partitura'){
		$('#carga_contenido_v').html('<!--PARTITURA-->');  
		$("#contenedor_partituras").fadeIn(0);
	}else{
		$("#contenedor_partituras").fadeOut(0);
	}
	
	
	    $(".contenedor_ventana").fadeIn(400);

		var altobody = $('body').eq(0).css("height");
	    var altobody = altobody.split('px');
	    var altobody = altobody[0];
	
	    if(contenido=='partitura'){
			var altoventana = $('#contenedor_partituras').eq(0).css("height");
			var altoventana = altoventana.split('px');
			var altoventana = (altoventana[0]*1) + 120;
		}else{
			var altoventana = $('#carga_contenido_v').eq(0).css("height");
			var altoventana = altoventana.split('px');
			var altoventana = (altoventana[0]*1) + 120;
		}
	
		if(altobody < altoventana){
			 $( "body" ).css({'min-height':altoventana+'px'}); 
		}
		$('html, body').animate( { scrollTop : 0 }, 800 );
	
}


function cierra_ventana(){
	var altobody = $('body').eq(0).css("min-height");
	var altobody = altobody.split('px');
	var altobody = altobody[0];
	var anchura = $(window).width();

	if(altobody > 600){
		if(anchura< 820){
			$( "body" ).css({'min-height':'800px'});
		}else{
			$( "body" ).css({'min-height':'600px'});
		}	
	}
	$(".contenedor_ventana").fadeOut(400);
	
	var contenido = $('#carga_contenido_v').html();
	var contenido = contenido.split('-->');
	
	if(contenido[0]=='<!--VIDEO'){
		location.reload();	
	}else{
		 $(".contenedor_ventana").fadeOut(400);
	}

	if(contenido[0] == '<!--TEXTO4'){
	 	location.reload();
	}
      
}