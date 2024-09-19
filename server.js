const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Servir archivos estáticos (CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Ruta para servir la página principal
app.get("/", (_, res) => {
	res.sendFile(path.join(__dirname, "pages", "index.html"));
});

// Ruta para servir la página de proyectos
app.get("/projects", (_, res) => {
	res.sendFile(path.join(__dirname, "pages", "projects.html"));
});

app.listen(port, () => {
	console.log(`Servidor escuchando en http://localhost:${port}`);
});
