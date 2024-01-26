const express = require('express');
const librosRouter = require('./routes/libros');
const errorHandler = require('./middleware/errorHandler.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/libros', librosRouter);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});

