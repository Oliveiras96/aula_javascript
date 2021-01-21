
var nome = "Caique Campos";
var idade = 29;


// arrays
var lista = ["maça", "pera", "laranja"];

// console.log(lista[1]);

// Método push adiciona um item no final da lista
lista.push("uva");
// método push remove o último elemento da lista
lista.pop();

// método toString() converte a lista para uma string separando os elementos por ","
// console.log(lista.toString());
// método join retorna uma string separando os elementos separados pelo indicado no método;
// console.log(lista.join(" | "));

// Dicionários
var fruta = {nome: "maçã", cor: "vermelha"};

// podemos ter uma lista de dicionarios
var frutas = [{nome: "Maçã", cor: "vermelha"}, {nome: "uva", cor: "Roxa"}];

// Estruturas condicionais e de repetição

// O prompt permite a entrada de dados por parte do usuário
/* var idade = prompt("Qual sua idade?");

if (idade > 18) {
    alert("Maior de idade");
} else {
    alert("Menor de idade");
} */

// Laços de repetição

/*var count = 0;
while(count < 5) {
    console.log(count);
    count++;
} */

/* for(count = 0; count < 5; count++) {
    console.log(count);
} */

/* Pegando a data atual:
var date = new Date();
// alert(date);
console.log("Hoje é "+ date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() );
// retorna a hora segundo UTC
var hora = (date.getUTCHours() + 13 ) ;
if(hora >= 5 && hora < 12) {
    alert("Bom dia!");
} else if( hora >= 12 && hora < 18) {
    alert("Boa tarde!");
} else if (hora >= 18 && hora < 24) {
    alert("Boa noite!");
} else {
    alert("Boa madrugada!")
}
console.log(hora); */

// Funções:
function soma(n1, n2) {
    return n1 + n2;
}

// Escopo local vs global:
var valida; // Fora da função, a variavel valida tem escopo global
function validaIdade(idade) {
    valida; //dentro da função e com o "var" ela tem escopo local da função
    if(idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

// console.log(valida);
// alert(soma(5, 10));
// var idade = prompt("Qual a sua idade");
// console.log(validaIdade(idade));


// manipulando elementos da página

function botao() {
    var tag = document.getElementById("agradecimento");
    tag.innerHTML = "Obrigado por clicar!";
    console.log(tag.textContent);
    // alert("Obrigado por clicar!")
}


// Redirecionando para sites externos:
function redirecionar() {
    // Abre o site de destino em uma nova aba:
    window.open("https://digitalinnovation.one/");
    // Abre o site de destino na mesma aba:
    // window.location.href = "https://digitalinnovation.one/";
}

function mouseOver(elemento) {
    
    // mouse over quando o mouse está em cima do elemento
    
    // document.getElementById("mouseover").innerHTML = "Obrigado por passar o mouse!";
    
    // Ao usar o elemento, podemos alterar suas propriedades diretamente:
    elemento.innerHTML = "Obrigado por passar o mouse.";
}

function voltar(elemento) {
   
    //  quando o mouse sai de cima do elemento
    // document.getElementById("mouseover").innerHTML = "Passe o mouse aqui!";

    elemento.innerHTML = "Passe o mouse aqui!";
}

// Ao invés de usar o document.getElementById, podemos simplemente passar
// próprio elemento como parâmetro para a função;


function load() {
    alert("Página carregada!");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}
