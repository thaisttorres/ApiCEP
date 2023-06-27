async function buscaEndereco(cep){
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = '';
        try{
        const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaConvertida = await consultaCep.json()
        if(consultaConvertida.erro){
            throw Error ('CEP nao existente');
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        var bairro = document.getElementById('bairro');

        cidade.value = consultaConvertida.localidade;
        logradouro.value = consultaConvertida.logradouro;
        estado.value = consultaConvertida.uf;
        bairro.value = consultaConvertida.bairro;

        console.log(consultaConvertida)
        return consultaConvertida;
    } catch (erro){
        mensagemErro.innerHTML = `<p> CEP invalido. Tente novamente. </p>`
        console.log(erro)
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));


