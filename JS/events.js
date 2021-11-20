var botonyes = document.getElementById('yes');
var botonno = document.getElementById('no');
var cerrarpopup = document.getElementById('cerrarpopup');
var cerrarpopup2 = document.getElementById('cerrarpopup2');

botonyes.addEventListener('click', function(){
    overlay.classList.add('active');
});

botonno.addEventListener('click', function(){
    overlay2.classList.add('active');
});

cerrarpopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    overlay2.classList.remove('active');
});

cerrarpopup2.addEventListener('click', function(){
    overlay2.classList.remove('active');
});

const typed = new Typed('.typed',{
    strings: ['¿Te gustaría ser mi novia?',
              'Siempre te daré marandinas',
              'Y muchas sonrisas',
              'No soltaré tu mano',
              'Caminaremos juntos',
              'Te lo preguntaré de nuevo',
    ],
    // stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 70, // Velocidad en mlisegundos para poner una letra,
	startDelay: 350, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 40, // Velocidad en milisegundos para borrrar una letra,
	// smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 4000, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});