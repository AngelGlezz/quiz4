
var ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
var ventana_ancho = $(window).width();
var disable=true;
var active_ace=false;
var input_text=false;
var input_text2=false;
var input_goles=false;
var input_radio=false;
var tenis_name="";
var respuestas_array = new Array();
var final_time = 0;
var aciertos = 0;


var maxTime = 30;
var time = maxTime;
var time_out=0;

$('#dial').knob({
  readOnly : true,
  thickness : 0.2,
  max : maxTime,
  width: 45,
  height: 45,
  inputColor: "#fff",
  fgColor: "#fff",
  bgColor: "rgb(48, 103, 165)",
  angleArc: "360",
  rotation: "anticlockwise",
  displayPrevious: true,
  fontWeight: 16,
  
});

var intervalo;

$("#indepth_contador_circle input").css("margin-top",0);

$("#indepth_boton_empezar").on("click",function(){
	$("#indepth_boton_empezar").click(false);
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	 
	 var data = {
				  "preguntas": [
				    {
				      "pregunta": "¿En qué año ganó el Real Madrid su novena Copa de Europa?",
				      "respuestas": [
				        {
				          "respuesta": "1992",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "2002",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "2014",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "2010",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién marcó el único gol del Atlético de Madrid en la final de Champions de 2014?",
				      "respuestas": [
				        {
				          "respuesta": "Koke",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "David Villa",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Griezmann",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Diego Godín",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién era el entrenador del Bayern Múnich cuando ganó su última Champions League?",
				      "respuestas": [
				        {
				          "respuesta": "Pep Guardiola",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Jürgen Klopp",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Jupp Heynckes",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Louis van Gaal",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué jugadores del Manchester City son los máximos goleadores del equipo en esta Champions?",
				      "respuestas": [
				        {
				          "respuesta": "Sergio Agüero y Kevin De Bruyne",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "David Silva y Sergio Agüero",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "David Silva y Jesús Navas",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Kevin De Bruyne y Raheem Sterling",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿En qué año ganó el Bayern Múnich su primera Copa de Europa?",
				      "respuestas": [
				        {
				          "respuesta": "1974",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "1969",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "1975",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "1981",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuántos goles ha marcado Cristiano en todas las Champions League que ha jugado?",
				      "respuestas": [
				        {
				          "respuesta": "94",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "100",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "98",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "82",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién marcó el gol del triunfo para el Bayern en la final de Champions 2012-2013?",
				      "respuestas": [
				        {
				          "respuesta": "Mario Mandzukic",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Arjen Robben",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Thomas Müller",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Philipp Lahm",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuál fue el marcador del último partido entre Manchester City y Real Madrid en Champions?",
				      "respuestas": [
				        {
				          "respuesta": "1 - 1",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "0 - 0",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "2 - 1",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "2 - 2",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿En qué año disputaron la final de la Copa de Europa el Atlético de Madrid y el Bayern Múnich?",
				      "respuestas": [
				        {
				          "respuesta": "1972",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "1986",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "1974",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "1959",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cómo se llama el estadio en el que juega el Manchester City?",
				      "respuestas": [
				        {
				          "respuesta": "Citi Field",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Old Trafford",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "White Heart Lane",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Etihad Stadium",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuántas finales de Champions ha jugado el Atlético de Madrid?",
				      "respuestas": [
				        {
				          "respuesta": "2",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "1",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "3",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "4",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién era el portero titular del Real Madrid cuando ganaron su última Champions?",
				      "respuestas": [
				        {
				          "respuesta": "Keylor Navas",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Iker Casillas",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Diego López",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "José de Jesús Corona",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿De qué nacionalidad es Manuel Pellegrini?",
				      "respuestas": [
				        {
				          "respuesta": "Uruguayo",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Argentino",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Chileno",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Español",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿En qué año llegó Zinedine Zidane al Real Madrid como jugador?",
				      "respuestas": [
				        {
				          "respuesta": "2001",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "1999",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "2000",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "1998",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuál es el apodo de Diego Simeone?",
				      "respuestas": [
				        {
				          "respuesta": "Pibe",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Gaucho",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Toro",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Cholo",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuál ha sido hasta ahora el mayor logro del Manchester City en Champions?",
				      "respuestas": [
				        {
				          "respuesta": "Subcampeón",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Semifinales",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Campeón",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Tercer lugar",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuántas Copas de Europa tiene el Bayern Múnich en sus vitrinas?",
				      "respuestas": [
				        {
				          "respuesta": "3",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "4",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "5",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "8",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cómo se llama el estadio del Bayern Múnich?",
				      "respuestas": [
				        {
				          "respuesta": "Olympiastadion München",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Allianz Arena",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Grünwalder Stadion",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Bonn East Arena",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuántas finales de Champions disputó Simeone como jugador?",
				      "respuestas": [
				        {
				          "respuesta": "2",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "1",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "3",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "0",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿En qué equipo se retiró como jugador Pep Guardiola?",
				      "respuestas": [
				        {
				          "respuesta": "Barcelona",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Manchester City",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Dorados de Sinaloa",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Al-Ahli",
				          "tipo": "false"
				        }
				      ]
				    },
					{
				      "pregunta": "¿Cuántas Champions League ha ganado el Real Madrid?",
				      "respuestas": [
				        {
				          "respuesta": "3",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "10",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "11",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "8",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿En qué estadio ha ganado dos Champions el Barcelona?",
				      "respuestas": [
				        {
				          "respuesta": "Olímpico de Berlín",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Stade de France",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Allianz Arena",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Wembley",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Contra qué equipo ganó la Champions el Barcelona en 2006?",
				      "respuestas": [
				        {
				          "respuesta": "Juventus",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Ajax",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Arsenal",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Manchester United",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuál es la mejor posición conseguida por el Atlético en Champions?",
				      "respuestas": [
				        {
				          "respuesta": "Campeón",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Cuartos de Final",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Subcampeón",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Semifinal",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué equipos protagonizaron la única final de Champions de dos partidos?",
				      "respuestas": [
				        {
				          "respuesta": "Atlético vs Bayern",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Madrid vs Bayern",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Atlético vs Real Madrid",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Bayern vs Barcelona",
				          "tipo": "false"
				        }
				      ]
				    }
				  ]
				};
		  preguntas=data.preguntas;
		 
		 $("#indepth_pregunta_cont").html("");
		 
		 $.each(preguntas, function( i, item ) {
			 
			var div=' <div class="indepth_pregunta_item"><div class="indepth_pregunta">'+(i+1)+'- '+item.pregunta+'</div><div class="indepth_pregunta_main"><div class="indepth_pregunta_img"><img src="'+urlIndepth+'images/preguntas/'+(i+1)+'.jpg" /></div><div class="indepth_respuestas_cont" num="'+i+'">';
				
			var div_items="";
			$.each(item.respuestas, function( j, items ) {
				div_items+='<div class="indepth_respuesta_item active" num="'+j+'">'+items.respuesta+'</div>';
			});						
										
			var div_fin='</div></div></div>';
			 
			 $("#indepth_pregunta_cont").append(div+div_items+div_fin);			 
		 });
		 
		 $("#indepth_page1").css({
			"top":ventana_alto-100,
			"visibility":"visible",
			"height": "auto"
		});
		
		$("#nav-bar-stats,#top-bar-wrapper,#body-wrapper").hide();
		
		$("#indepth_page1").show();
		
		$("#indepth_page1").animate({
			top: 0
		},2000, function(){
			$("#indepth_tiempo_cont").css("position","fixed");
			intervalo=setInterval(function() {
			  if(time<=0){
			  	clearInterval(intervalo);
			  	finish_test();
			 }	
			  time--;
			  $('#dial')
			        .val(time)
			        .trigger('change');
			}, 1000);
		});
		
		$(document).on("click",".indepth_respuesta_item",function(){
				
			var respuesta_cont = $(this).parent();
			var pregunta_num = respuesta_cont.attr("num");
			var respuesta_num = $(this).attr("num");
			var pregunta_obj = preguntas[pregunta_num];
			var respuesta_obj = pregunta_obj.respuestas[respuesta_num];
			
			tipo= (respuesta_obj.tipo === "true");
			
			if(tipo){
				$(this).addClass("bien");
				respuestas_array[pregunta_num]=true;
			}else{
				$(this).addClass("mal");
				respuestas_array[pregunta_num]=false;
			}
			
			respuesta_cont.find('.indepth_respuesta_item').removeClass("active").addClass("disable");
			respuesta_cont.find('.indepth_respuesta_item').click(false);
						
						
						
			if(preguntas.length == respuestas_array.length){
				final_time = time;
				respuestas_num=0;
				
					$.each(respuestas_array, function( i, item ) {
					  	if(item!=undefined)
					  		respuestas_num++;
				  	});
				  	
				 console.log("respuestas " + respuestas_num);
				 console.log(respuestas_num);
				
				if(respuestas_num == preguntas.length){
					clearInterval(intervalo);
					window.setTimeout(finish_test, 700);
				}
				
			}
			
		});
		
		
});


$('#dial')
        .val(99)
        .trigger('change');


function finish_test(){
	
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();;
	var ventana_ancho = $(window).width();
	
	
	
	$("#indepth_resultados").css({
		"visibility": "visible",
		"position":"fixed",
		"top": 0,
		"left": -ventana_ancho
	});
  	
  	$("#indepth_resultados").animate({
	  	"left": 0
  	},2000, function(){
	  	$("html, body, #indepth_page1").css("overflow","hidden");
  	});

  	$.each(respuestas_array, function( i, item ) {
	  	if(item){
		  	aciertos++;
	  	}
  	});
  	
  	aficionado="";
  	msg="";
  	
  	if(aciertos<=10){
	  	aficionado="";
	  	msg="todo Real Madrid está decepcionado… ¿así quieres ser parte de la Undécima?";
  	}

  	if(aciertos>=11 && aciertos<=15){
	  	aficionado="";
	  	msg="hasta el PSG tuvo más oportunidades de avanzar.";
  	}

  	if(aciertos>=16 && aciertos<=20){
	  	aficionado="";
	  	msg="¡Eso es ponerle corazón! Hasta Simeone estaría orgulloso de tenerte en su equipo";
  	}
  	
  	if(aciertos>=21){
	  	aficionado="";
	  	msg="¡Estás más que listo para Milan! Ahora espera a los dos equipos finalistas.";
  	}
  	
  	$("#indepth_aciertos").html(aciertos);
  	$("#indepth_aciertos_text").html(msg);
  	$("#tipo_aficionado").html( aficionado );
  	
}



$('.indepth_num').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}

});

$('.idepth_marcador, .idepth_marcador2').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}
});


$('.indepth_num').keyup(function(event) {
	
	if(parseInt($(".indepth_num").val())>0){
		input_goles=true;
	}else{
		input_goles=false;
	}
	indepth_comprobar();

});


$('.idepth_marcador').keyup(function(event) {
	if($(this).val()!="" ){
		input_text=true;
	}else{
		input_text=false;
	}
	
	indepth_comprobar();
});

$('.idepth_marcador2').keyup(function(event) {
	if($(this).val()!="" ){
		input_text2=true;
	}else{
		input_text2=false;
	}
	
	indepth_comprobar();
});


var indepth_comprobar = function(){
	console.log(input_text + " - " + input_text2 + " - " + input_goles);
	
	if(input_text && input_text2 && input_goles){
		$(".indepth_boton").removeClass("disable");
		disable=false;
	}else{
		$(".indepth_boton").addClass("disable");
		disable=true;
	}
	
	console.log(disable);
}


var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

   
 function loadDisqus(source, identifier, url) {
if (window.DISQUS) {
   jQuery('#disqus_thread').insertAfter(source);
   /** if Disqus exists, call it's reset method with new parameters **/

    DISQUS.reset({
  reload: true,
  config: function () { 
   this.page.identifier = identifier.toString();    //important to convert it to string
   this.page.url = url;
  }
 });
} else {
//insert a wrapper in HTML after the relevant "show comments" link
	source.append('<div id="disqus_thread"></div>');
   //jQuery('<div id="disqus_thread"></div>').insertAfter(source);
   disqus_identifier = identifier; //set the identifier argument
   disqus_url = url; //set the permalink argument
   disqus_per_page=3;
   //append the Disqus embed script to HTML
   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
   dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
   jQuery('head').append(dsq);
}
};


$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();
	
	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	$("#indepth_resultados").css({
		"width":ventana_ancho+"px",
		"height":ventana_alto+"px"
	});

$("#indepth_twittear").click(function(){

	if(!disable){

		
		var text = encodeURIComponent("Mi predicción es: Rayo Vallecano "+$("input[name=goleador]").val()+"-"+$("input[name=goleador2]").val())+ " Real Madrid primer gol al minuto "+$("input[name=goles_anotados]").val()+" @juanfutbol";
		var url = encodeURIComponent("http://juanfutbol.com/indepth/");
		window.open("https://twitter.com/share?text="+text+"&hashtags=juanfutbol&url="+url,"","width=500, height=300");

	}else{
		
		
		
	}
	
	});
	
	$(document).on("click", "#indepth_button_ver" ,function(){
		$.fn.fullpage.moveSectionDown();
	});
});

$(window).on("resize", function(){

	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();

	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	    $("#indepth_resultados").css({
			"width":ventana_ancho+"px",
			"height":ventana_alto+"px"
		});
});


