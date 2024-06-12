const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

app.listen('3000',()=>{
    console.log('Servidor rodando na porta 3000');
});

//Body Parser
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

//Conexão com o banco
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'node'
    });

db.connect(function(err){
    if(err){
        console.log('Erro ao conectar ao banco de dados!');
    }
});

app.get('/',function(req,res){
    let query = db.query("SELECT * FROM clientes",function(err,results){
        res.render('index',{lista:results});
    })
    
});

app.get('/registrar',function(req,res){
    res.render('cadastro',{});
});

app.post('/registrar',function(req,res){
    console.log("Cadastro realizado com sucesso!");
    let nome = req.body.nome;
    let sobrenome = req.body.sobrenome;
    let empresa = req.body.empresa;
    db.query("INSERT INTO clientes (nome,sobrenome,empresa) VALUES (?,?,?)",[nome,sobrenome,empresa],function(err,results){})
    res.render('cadastro',{});
});



