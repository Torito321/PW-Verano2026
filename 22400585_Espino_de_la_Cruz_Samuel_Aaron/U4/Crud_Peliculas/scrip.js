let peliculas = [];
let siguienteId = 1;

const formulario = document.getElementById("formulario");
const id = document.getElementById("id");
const titulo = document.getElementById("Titulo");
const director = document.getElementById("Director");
const an = document.getElementById("an");
const tabla = document.getElementById("tabla_peliculas");

function mostrarPeliculas() {

    tabla.innerHTML = "";

    for (let i = 0; i < peliculas.length; i++) {

        tabla.innerHTML += `
        <tr>
            <td>${peliculas[i].id}</td>
            <td>${peliculas[i].titulo}</td>
            <td>${peliculas[i].director}</td>
            <td>${peliculas[i].an}</td>
            <td>
                <button onclick="editar(${peliculas[i].id})">Editar</button>
                <button onclick="eliminar(${peliculas[i].id})">Eliminar</button>
            </td>
        </tr>
        `;
    }
}

formulario.addEventListener("submit", guardar);

function guardar(e) {

    e.preventDefault();

    if (id.value == "") {

        peliculas.push({
            id: siguienteId,
            titulo: titulo.value,
            director: director.value,
            an: an.value
        });

        siguienteId++;

    } else {

        let pelicula = peliculas.find(p => p.id == id.value);

        pelicula.titulo = titulo.value;
        pelicula.director = director.value;
        pelicula.an = an.value;
    }

    formulario.reset();
    id.value = "";

    mostrarPeliculas();
}

function editar(idPelicula) {

    let pelicula = peliculas.find(p => p.id == idPelicula);

    id.value = pelicula.id;
    titulo.value = pelicula.titulo;
    director.value = pelicula.director;
    an.value = pelicula.an;
}

function eliminar(idPelicula) {

    peliculas = peliculas.filter(p => p.id != idPelicula);

    mostrarPeliculas();
}   