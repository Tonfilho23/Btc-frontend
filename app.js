const express = require('express');
const app = express();
const port = 5000;

app.get('/api/', (req, res) => {
    res.json({ message: "API funcionando corretamente!" });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

