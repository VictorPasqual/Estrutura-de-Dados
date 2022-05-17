let dadosSalvosCliente = []

function salvarDados(event) {

    let nome = document.getElementById("nome").value
    let RA = document.getElementById("RA").value
    let idade = document.getElementById("idade").value
    let sexo = document.getElementById("sexo").value
    let resultado = document.getElementById("resultado").value

    let objPessoa = {
        nome: nome,
        RA: RA,
        idade: idade,
        sexo: sexo,
        resultado: resultado
    }
    
    dadosSalvosCliente.push(objPessoa)

    nome = '';RA = '';idade = '';sexo = '';

    event.preventDefault();
}

function pesquisar(event) {
    let tabela = document.getElementById('tabela')

    let nome = document.getElementById("nomePesquisar").value
    let RA = document.getElementById("RAPesquisar").value
    let idade = document.getElementById("idadePesquisar").value


    if (localStorage.getItem('dadosCliente') == null){
        alert('Não há cadastros!')
    } else {
        tabela.innerHTML = `
            <tr>
                <td>Nome</td>
                <td>RA</td>
                <td>Idade</td>
                <td>Sexo</td>
                <td>Resultado</td>
            </ tr>
        `
        
        if (document.getElementById('ordemPesquisar').value == 'A'){
            // A-Z
            let pessoas = dadosSalvosCliente
            
            dadosSalvosCliente = (pessoas.sort(function(a,b) {
                return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
            }));

        } else {
            // Z-A
            let pessoas = dadosSalvosCliente
            
            dadosSalvosCliente = (pessoas.sort(function(a,b) {
                return a.nome > b.nome ? -1 : a.nome > b.nome ? 1 : 0;
            }));
        }

        for(let i=0; i < dadosSalvosCliente.length; i++){
            if( (dadosSalvosCliente[i].nome == nome || nome == '') && (dadosSalvosCliente[i].RA == RA || RA == '') && (dadosSalvosCliente[i].idade == idade || idade == '') ) {
                
                if (document.getElementById('aprovadoPesquisar').checked){
                    if (dadosSalvosCliente[i].resultado == 'A'){
                        addTabela(dadosSalvosCliente[i], tabela)
                    }
                } else {
                    addTabela(dadosSalvosCliente[i], tabela)
                }
                
            }
        }
    

        event.preventDefault();
        
    }

    function addTabela(dados, tabela) {
        tabela.innerHTML += `
            <tr>
                <td>${dados.nome}</td>
                <td>${dados.RA}</td>
                <td>${dados.idade}</td>
                <td>${dados.sexo}</td>
                <td>${dados.resultado}</td>
            </ tr>
        `
    }

}
