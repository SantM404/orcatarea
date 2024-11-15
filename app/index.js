const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

// Sirve archivos estáticos como el CSS
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sitio Web orquestado con MySql, Redis y Node.js</title>
        <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
        <div class="container">
            <header>
                <h1>HOLA MUNDO</h1>
            </header>
            <main>
                <p>¡Sitio web funcional!</p>
                <p>Servicio básico con Node.js y Express.</p>
            </main>
            <footer>
            </footer>
        </div>
    </body>
    </html>
  `);
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
