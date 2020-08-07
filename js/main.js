/*

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.vestibularfatec.com.br/home/"); //Abre uma nova janela
    //window.location.href = "https://www.vestibularfatec.com.br/home/"; //Abre na mesma janela
}

function trocar(elemento){
   // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChance(elemento){
    console.log(elemento.value)
}
*/


/*
function soma(n1, n2){
    return n1+n2;
}
*/

/* VAriáveis Globais e Locais de funções
var validar; // var Global fora da função
function validaIdade(idade){
    //var validar; var local dentro da função
    if (idade >=18){
        validar = true
    }else{
        validar =false
    }
    return validar;
}
var idade = prompt("Qual é a sua idade?!");
console.log(validaIdade(idade));
*/



//alert(soma(5,10));

//Trabalhando com datas
/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
//alert(d);
*/

//Laços de repetição com for
/*
var count;
for(count=0; count <=5; count++){
    alert(count);
}
*/

//Laços de repetição com while
/*
var count = 0;
while (count <= 5 ){
    console.log(count);
    alert(count);
    count++;
    //count = count + 1;
}
*/

//Comparação com prompt e com if else
/*
var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("Maior de idade!");
}else{
    alert("Menor de idade!");
}
*/

//Lista de dicionários
/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva",  cor:"roxa"}]
console.log(frutas)
alert(frutas[1].nome);
*/

//Dicionário
/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//Lista
/*
var lista = ["maça", "pêra", "laranja"];
lista.push("uva");
console.log(lista);
console.log(lista.toString());
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join(" - "));
lista.pop();
console.log(lista.length)
console.log(lista.reverse());
alert(lista[1]);
*/


/*
var nome = "Wagner de Souza França";
var idade = 38;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo!";
alert( nome + " tem " + idade + " anos!");
alert(idade + idade2);
console.log(nome);
console.log(idade * idade2);
console.log(frase.toUpperCase());
console.log(frase.replace("Japão", "Brasil"));
alert(frase.replace("Japão", "Brasil"));
*/