class discos {
    #nombredisco;
    #autor;
    #codigo;
    #pistas;
    constructor(nombredisco, autor, codigo) {
        this.#nombredisco = nombredisco;
        this.#autor = autor;
        this.#codigo = codigo;
        this.#pistas = [];
    }

    //dar valor a propiedad nombre

    set nombredisco(valor) {
        this.#nombredisco = valor;
    }

    get devuelvenombre() {
        return this.#nombredisco;
    }

    //dar valor a propiedad autor

    set nombreautor(valor) {
        this.#autor = valor;
    }

    get devuelveautor() {
        return this.#autor;
    }

    //dar valor a propiedad autor
    codigoexistente(arraycodigo) {
        let code;
        do {
            // Pido string
            code = parseInt(prompt("ingrese el codigo (1 a 999)"));
            if (arraycodigo.indexOf(code) != -1) {
                alert("el codigo ya existe");
            }else if (isNaN(code) || code == "" || code < 1 || code > 999) {
                alert("verifique que el codigo no este fuera de rango, que sea un numero o de no dejar espacio vacio")
            }
            // Valido que no sea numero 
            //si index of devulve -1 entonces no existe, para ver si existe
        } while (isNaN(code) || code == "" || (arraycodigo.indexOf(code) != -1) || code < 1 || code > 999);
        // Retorno str
        return code;
    }
    set valorcodigo(valor) {
        //ver de que no se repita el codigo REVISARRR
            this.#codigo = valor;
    }

    get devuelvevalorcodigo() {
        return this.#codigo;
    }

    agregarpista(nuevapista) {
        this.#pistas.push(nuevapista);
    }

    mostrardisco() {
        let divdisco = document.createElement("div");
        divdisco.classList.add("divdeldisco");
        let unh3 = document.createElement("h3");
        unh3.innerText = `Nombre: ${this.#nombredisco}`;
        let parrafoautor = document.createElement("p");
        parrafoautor.innerText = `Autor: ${this.#autor}`;
        let parrafocodigo = document.createElement("p");
        parrafocodigo.innerText = `Codigo: ${this.#codigo}`;
        let titulopistas = document.createElement("h4");
        titulopistas.innerText = `Pistas: ${this.#pistas.length}`;
        let ul = document.createElement("ul");
        //recorrer pistas y pedis que traiga el metodo dentro de la clase pista el cual contiene los li
        for (let pista of this.#pistas) {
            ul.append(pista.mostrarpista())
        }
        divdisco.append(unh3, parrafoautor, parrafocodigo,titulopistas, ul);
        return divdisco;
    }
}


