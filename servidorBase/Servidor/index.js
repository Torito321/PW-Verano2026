const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

const PORT = 3000;

let peliculas = [
    {
        id: 1,
        titulo: "Interestelar",
        director: "Cristopher Nolan",
        año: 2014
    },
    {
        id: 2,
        titulo: "Titanic",
        director: "Roberto",
        año: 2010
    }
]

let idActual = peliculas.length + 1;



// Obtener todas las peliculas
app.get("/peliculas",(req, res) => {

    console.log("Hola");

    res.json(peliculas);


});



// Obtener una pelicula por ID
app.get("/peliculas/:id",(req, res) => {
    const id = Number(req.params.id);
    const pelicula = peliculas.find(
        pelicula => pelicula.id == id
    );
    if(!pelicula){
        return res.status(404).json({
            mensaje: "Pelicula no encontrada"
        });
    }
    res.json(pelicula);
});

// Registrar pelicula
app.post("/peliculas",(req, res) => {
    const { titulo, director, año} = req.body;
    if(!titulo || !director || !año){
        return res.status(400).json({
            mensaje: "Faltan datos de la pelicula"
        });
    };

    const nuevaPelicula = {
        id: idActual++,
        titulo: titulo,
        director: director,
        año: Number(año)
    };

    peliculas.push(nuevaPelicula);
    res.status(201).json({
        mensaje: "Pelicula registrada con exito",
        pelicula: nuevaPelicula
    });
});

// Actualizar una pelicula
app.put("/peliculas/:id", (req, res) => {
    const id = Number(req.params.id);
    const {titulo, director, año} = req.body;

    if(!titulo || !director || !año) {
        return res.status(400).json({
            mensaje: "Faltan datos de la pelicula"
        });
    }
    const indice = peliculas.findIndex(
        pelicula => pelicula.id === id
    );

    if(indice === -1){
        return res.status(400).json({
            mensaje: "Pelicula no encontrada"
        });
    }

    peliculas[indice] = {
        id: id,
        titulo: titulo,
        director: director,
        año: Number(año)
    }

    res.json({
        mensaje: "Pelicula actualizado correctamente",
        pelicula: peliculas[indice]
    });
});

app.delete("/peliculas/:id", (req, res) =>{
    const id = Number(req.params.id);
    const indice = peliculas.findIndex(
        pelicula => pelicula.id === id
    );

    if(indice === -1){
        return res.status(404).json({
            mensaje: "Pelicula no encontrada"
        })
    }

    const peliculaEliminada = peliculas[indice];

    peliculas.splice(indice, 1);

    res.json({
        mensaje: "Pelicula eliminada correctamente",
        pelicula: peliculaEliminada
    });
});



app.listen(PORT, () => {
    console.log("Servidor iniciado en http://localhost:" + PORT);
});

app.get("/", (req, res) => {
    res.send("Bienvenido a mi primer servidor con express");
});

app.get("/saludo/:nombre", (req, res) => {
    const nombre = req.params.nombre;
    res.send("Hola " + nombre);
});


app.get("/pagina", (req, res) => {
    res.send(`
        <style>
            h1 {color: red;}
        </style>
        <h1> Mi pagina </h1>
        <p> Creada con Express </p>
    `);
});

//Actividad
app.get("/par/:NUMERO", (req, res) => {
    const NUMERO = Number(req.params.NUMERO);

    if (NUMERO % 2 === 0) {
        res.send("El número " + NUMERO + " es par.");
    } else {
        res.send("El número " + NUMERO + " es impar.");
    }
});


app.get("/edad/:edad", (req, res) => {
    const edad = Number(req.params.edad);

    if (edad >= 18) {
        res.send("Eres mayor de edad");
    } else {
        res.send("Eres menor de edad");
    }
});


app.get("/calculadora/:operacion/:a/:b", (req, res) => {
    const operacion = req.params.operacion;
    const a = Number(req.params.a);
    const b = Number(req.params.b);

    switch (operacion) {
        case "suma": res.send("Resultado: " + (a + b)); break;
        case "resta": res.send("Resultado: " + (a - b)); break;
        case "multiplicacion": res.send("Resultado: " + (a * b)); break;
        case "division": res.send("Resultado: " + (a / b)); break;
    }
});


app.get("/tabla/:numero", (req, res) => {
    const numero = Number(req.params.numero);
    let resultado = "";

    for (let i = 1; i <= 10; i++) {

        resultado += numero + " X " + i + " = " + (numero * i) + "<br>";
    }

    res.send(resultado);
});

app.get("/calificacion/:nota", (req, res) => {
    const nota = Number(req.params.nota);
    switch (true) {
        case
            (nota >= 90): res.send(nota + " >= 90 -> Excelente");
            break;

        case
            (nota >= 80): res.send(nota + " >= 80 -> Muy bien");
            break;

        case
            (nota >= 70): res.send(nota + " >= 70 -> Aprobado");
            break;

        case
            (nota < 70): res.send(nota + " < 70 -> Reprobado");
            break;
    }
});