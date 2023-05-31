'use strict';
/*VAGO, SIMON*/

let arraydiscos = [];
let codigos = [];
let contador = 0;

function validarString(msg) {
	// Variable para dato
	let str;
	do {
		// Pido string
		str = prompt(msg).trim();
		if (!isNaN(str) || str == "") {
			alert("no puede ser un numero y tampoco debe estar vacio");
		}
		// Valido que no sea numero
	} while (!isNaN(str) || str == "");
	// Retorno str
	return str;
}

function validarNumber(msg) {
	// Variable para numero
	let num;
	do {

		// Pido numero
		num = parseInt(prompt(msg));
		if (isNaN(num)) {
			alert("deberia ser un numero");
		}

		// Valido numero
	} while (isNaN(num));
	// Retorno el valor validado
	return num;
}

function cargarDiscos() {
	let disco = new discos();
	// Pedir nombre y validar
	let nombredisco = validarString("Ingrese el nombre del disco");
	//clase.set
	disco.nombredisco = nombredisco;


	// Pedir codigo y validar
	let codigo = disco.codigoexistente(codigos);
	// Agrego al array
	disco.valorcodigo = codigo;
	codigos.push(codigo);


	// Pedir nombre autor y validar
	let autor = validarString("Ingrese el nombre del autor o banda");
	// Agrego
	disco.nombreautor = autor;


	do {
	// Pedir nombre pista
	//FALTA FOR
	//declaro aca uso alla y se las paso al set
	let nombres;
	let duraciones;
	// Agregamos los datos al array de datos
	let nuevapista = new pistas(nombres, duraciones);
	nuevapista.nombrepista = nombres;
	nuevapista.duracionpista = duraciones;
	// Agrego la materia a la clase y al metodo
	disco.agregarpista(nuevapista);
	} while (confirm("desea ingresar otra pista?"));

	//agregar el disco al array de discos
	arraydiscos.push(disco);
	contador++;

	//mostrar
	//limpiamos cada vez que tenemos nueva instancia y contamos cuantas x vuelta que da 
	let div = document.getElementById("info");
	div.innerText = "";
	let parrafo = document.createElement("p");
	parrafo.innerHTML = `Cantidad de discos cargados: ${contador}`;
	div.append(parrafo);
}

function mostrarDiscos() {
    const divPrincipal = document.getElementById('info');
    //LIMPIAR EL DIV
    divPrincipal.innerText = "";
	//mostrar 
	let parrafo = document.createElement("p");
	parrafo.innerHTML = `Cantidad de discos cargados: ${contador}`;
	divPrincipal.append(parrafo);
	for (let disco of arraydiscos) {
		//apendeamos parrafo y metodo de disco donde ya esta apendeado los li de las pistas
		document.getElementById("info").append(disco.mostrardisco());
	}
}


