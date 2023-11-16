jQuery(document).ready(listo);  /*es la representacion de toda la web, algunos trabajan con jQuery(document)*/
  /*debemos trabajar con un metodo para que todos los elemntos que estan listos $(document).ready(function); se puede trabajar asi o crear las propias funciones que seran reutilizadas*/

function listo()
{
	jQuery(".hamb").click(function(e){    /*alert("hola mundo"); cuando mi pagina este lista aparecera este mensaje pero un acosa es estar listo y otra que este cargada */
		e.preventDefault();  /*con esta opcion quitamos la funcion de accion por defecto de <a>*/
		jQuery("header .container nav").toggleClass("open"); /*Le vamos a quitar y aumentar un aclase por ejemplo si tiene la quitara y si no la tiene le dara y la que se quitara es la clase open*/		
		jQuery(".hamb i").toggleClass("fa-xmark");	/* en este icono solo copiamos la clase <i class="fa-solid fa-xmark"></i> que es   fa-xmark*/
	});

	jQuery("header .container nav a").click(function(){ /*vamos a trabajar con los elemntos a de manera general es decir que todos tienen numeral aveces tiene un link(investigar),  vamos a imaginar que tods los <a> tienen # en su href ejemplo <a href="#inicio">*/
		
		jQuery("header .container nav").toggleClass("open");
		jQuery(".hamb i").toggleClass("fa-xmark");
		
		var dev = jQuery(this).attr("href")/*voy a crear una variable con cualquier nombre para */
	 	/*alert(dev); vamos a probar si funciona con alert(dev);*/
	 	jQuery("html,body").animate({
	 		"scrollTop": jQuery(dev).offset().top -76/*estoy haciendo referencia a la variable, offset() tiene dos opciones*/
	 	})
	 })
/*jquery tiene un apalabra recervada this y para recuperar un atributo se usa attr()*/

}

/*camal keis cuando dos palabras estan unidas inician con mayuscula*/

