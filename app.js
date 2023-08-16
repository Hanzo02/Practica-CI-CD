const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hellouda, haciendo pruebas'); 
});

// Escucha en un puerto específico
const port = process.env.PORT || 3000;
if (!module.parent) {
    app.listen(port, () => {
        console.log(`La aplicación está escuchando en el puerto ${port}`);
    });
}
module.exports = app; // Exporta el objeto app