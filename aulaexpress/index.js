const express = require('express');
const app = express();
const port = 3000;

app.get('/aula', (req,resp) => {
     resp.send('Oi,aula express')
    })

app.listen(port, () => {
    console.log('Aplicação express porta ' + port)
})