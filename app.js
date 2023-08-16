const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hellouda, haciendo pruebas!'+ "Error hola"); 
});

app.get('/home', (req, res) =>{
    res.status(200).send('Primer cambio!')
})

// Escucha en un puerto específico
const port = process.env.PORT || 3000;
if (!module.parent) {
    app.listen(port, () => {
        console.log(`La aplicación está escuchando en el puerto ${port}`);
    });
}
module.exports = app; // Exporta el objeto app