let valor = 0;


exibirTextoPrincipal();

function exibirTextoPrincipal(){
    let titulo = document.querySelector('h1');
    titulo.innerHTML = 'Convertedor de moeda';
}

exibirTextoSecundario('p', 'Informe o valor em dolar: ');

function exibirTextoSecundario(tag, texto){
    let subtitulo = document.querySelector(tag);
    subtitulo.innerHTML = texto;
}

function informarValor(){
    valor = document.querySelector('input').value;
    desativarBotao('converter','disabled', true);
    converter(valor);
    ativarBotao('reiniciar','disabled', false);
}


function converter(reais){
    reais = reais * 4.80;
    alert(reais);
    exibirValor(reais);
    exibirValor(reais);

}

function exibirValor(convertido){

    let campo = document.querySelector('input');
    campo.value = convertido;
    exibirTextoSecundario('p', `U$${valor} dolares para reais são:`);
    let campo1 = document.querySelector('input').removeAttribute('disabled');

}

function reiniciar(){
    exibirTextoSecundario('p', 'Informe o valor em dolar');
    let campo = document.querySelector('input');
    campo.value = '';
    ativarBotao('converter','disabled', false);
    desativarBotao('reiniciar', 'disabled', true);
}

function desativarBotao(botao,atributo, estado){
    let btn = document.getElementById(botao).setAttribute(atributo, estado);
}
function ativarBotao(botao,atributo, estado){
    let btn = document.getElementById(botao).removeAttribute(atributo, estado);

}