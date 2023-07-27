const express = require('express');
const connection = require('./config/connection');
const User = require('./model/user');
const app = express();
app.use(express.json())
const port = process.env.PORT || 5475;

app.listen(port, () => { console.log(`Run server...${port}`) });



app.get('/', (req, res) => {
    res.send("Api - USER");
})

app.post('/user', (req, res) => {
    const { name, email, password } = req.body;
    User.create({
        name: name,
        email: email,
        password: password
    }).then(() => {
        res.json('Cadastro de usuário realizado com sucesso!');
        console.log('Cadastro de usuário realizado com sucesso!');
    }).catch((erro) => {
        console.log(`Ops, deu erro: ${erro}`);
    })
})