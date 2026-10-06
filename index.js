require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>¡Backend Node.js desplegado con éxito!</h1><p>Laboratorio 08 - Web Avanzado</p>');
});

app.listen(PORT, () => {
    console.log(`[OK] Servidor escuchando en el puerto ${PORT}`);
});
