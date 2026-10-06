require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir archivos estáticos desde la carpeta public (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal en la raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`[OK] Servidor de TechPulse Solutions ejecutándose en el puerto ${PORT}`);
});
