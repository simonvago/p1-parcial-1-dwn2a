class pistas {
    #nombre;
    #duracion;
    constructor(nombre, duracion) {
        this.#nombre = nombre;
        this.#duracion = duracion;
    }

    //dar valor a propiedad nombre

    set nombrepista(nombres) {
        nombres = validarString("Ingrese el nombre de la pista");
        this.#nombre = nombres;
    }

    get devuelvenombre() {
        return this.#nombre;
    }

    //dar valor a propiedad duracion

    set duracionpista(duraciones) {
        // Pedir duracion
        do {
            duraciones = validarNumber("Ingrese la duración");
        if (duraciones < 0 || duraciones > 7200) {
            alert("el valor ingresado está fuera del rango");
        } else {
            this.#duracion = duraciones;
        };
        } while (duraciones < 0 || duraciones > 7200);
    }

    get devuelveduracion() {
        return this.#duracion;
    }

    mostrarpista() {
        // Creo un objeto li
        let linombre = document.createElement("li");
        linombre.innerText = `Nombre: ${this.#nombre} / Duración: `;
        let spanduracion = document.createElement("span");
        spanduracion.innerText = this.#duracion;
        if (this.#duracion >= 180) {
            //metodo que agrega clase a un objeto o etiqueta
            spanduracion.classList.add("rojo");
        }
        linombre.append(spanduracion);
        return linombre;
    }
}

