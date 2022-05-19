const express = require('express');
const app = express();

let puerto = 3000;
app.get('/', (req, res) => {
    res.send('Hello world');
})

app.listen(puerto, () => {
    console.log(`Servidor prendido en puerto ${puerto}`);
});