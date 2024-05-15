import express from "express";
import path from path;

const porta = 3000;
const host = '0.0.0.0';

const app = express();
var listaAlunos = [];

app.use(express.static(path.join(process.cwd(), 'public')));

app.use('/cadastrarAluno', (req,resp)=>{
    const nome = req.query.nome;
    const cpf = req.query.cpf;
    const data = req.query.data;
    const nomemae = req.query.nomemae;
    const telefone = req.query.telefone;
    const email = req.query.email;

    listaAlunos.push({
        nome: nome,
        cpf: cpf,
        data: data,
        nomemae: nomemae,
        telefone: telefone,
        email: email,
    });
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<title>Resultado da pré matrícula</title>');
    resp.write('<meta charset="utf-8">');
    resp.write('</head>');
    resp.write('<body>');
    resp.write(`<h1>Aluno ${nome} pré-matriculado com sucesso!</h1>`);
    resp.write('<a href="/cadastroAluno.html"> Continuar matriculando... </a> </br>');
    resp.write('<a href="/listarAlunos">Listar pré matriculas </a> </br> </br>');
    resp.write('<a href="/">Página Inicial </a>');
    resp.write("</body>");
    resp.write('</html>')
    resp.end();
})

app.use('/listarAlunos', (req,resp)=>{
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<title>Relação das pré-matriculas</title>');
    resp.write('<meta charset="utf-8">');
    resp.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">')
    resp.write('</head>');
    resp.write('<body>');
    resp.write('<h1>Lista de Alunos</h1>');
    resp.write('<table class="table table-striped">');
    resp.write('<tr>');
    resp.write('<th>Nome</th>');
    resp.write('<th>CPF</th>');
    resp.write('<th>Nascimento</th>');
    resp.write('<th>Nome da mãe</th>');
    resp.write('<th>Telefone</th>');
    resp.write('<th>Email</th>');
    resp.write('</tr>');
    for (let i=0; i<listaAlunos.length; i++){
        resp.write('<tr>');
        resp.write(`<td>${listaAlunos[i].nome}`);
        resp.write(`<td>${listaAlunos[i].cpf}`);
        resp.write(`<td>${listaAlunos[i].data}`);
        resp.write(`<td>${listaAlunos[i].nomemae}`);
        resp.write(`<td>${listaAlunos[i].telefone}`);
        resp.write(`<td>${listaAlunos[i].email}`);
        resp.write('</tr>');
    }
    resp.write('</table>');
    resp.write('<a href="/">Voltar</a>');
    resp.write('</body>');
    resp.write('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>')
    resp.write('</html>');
    resp.end();
})

app.listen(porta, host, () => {
    console.log(`Servidor executando na porta http://${host}:${porta}`);
})