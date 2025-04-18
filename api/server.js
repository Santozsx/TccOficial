const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');

app.use(express.json()); //permite ler  JSON do corpo de  requisições
app.use('/auth', authRoutes); //usa Rotas de autenticação

const port = 3306;
app.listen(port, () => {
    console.log("Servidor rodando na porta ${port}");
});



//express.json() permite que o servidor entenda os dados enviados no corpo das requisições.

//As rotas de autenticação são carregadas com o prefixo /auth.

