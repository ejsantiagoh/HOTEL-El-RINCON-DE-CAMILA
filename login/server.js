// const bodyParser = require("body-parser");
// const fs = require("fs");
// const path = require("path");


// const PORT = 3000;

// // Middleware para analizar los datos del formulario
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Ruta para guardar datos en db.json
// app.post("/usuarios", (req, res) => {
//   const { nombre, email, telefono } = req.body;

//   const nuevoRegistro = { nombre, email, telefono };

//   fs.readFile(path.join(__dirname, "db.json"), "utf8", (err, data) => {
//     if (err) {
//       return res.status(500).send("Error al leer la base de datos");
//     }

//     let registros = JSON.parse(data);
//     registros.push(nuevoRegistro);

//     fs.writeFile(
//       path.join(__dirname, "db.json"),
//       JSON.stringify(registros, null, 2),
//       "utf8",
//       (err) => {
//         if (err) {
//           return res.status(500).send("Error al guardar el registro");
//         }

//         res.send("Registro guardado correctamente");
//       }
//     );
//   });
// });

// // Ruta para servir la página de inicio
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

// // Servir el archivo db.json
// app.get("/db.json", (req, res) => {
//   res.sendFile(path.join(__dirname, "db.json"));
// });

// // Iniciar el servidor
// app.listen(PORT, () => {
//   console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });


