/*
var nome = "Romulo Carlos";
var idade = 29;
var idade2 = 10;
var frase = "Brasil é o melhor time do mundo";
alert (nome + " tem " + idade + " anos");
console.log(nome);
console.log(idade+idade2);
console.log(frase.replace ("Brasil" , "Corinthians"));
alert(frase.replace ("Brasil" , "Corinthians"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
*/
/*var lista = ["maça","pera","laranja"];
console.log(lista[0]);
*/

/*//inserir elemento:
lista.push("uva");
//remover o ultimo elemento:
lista.pop();
//tras a lista ao contrario do ultimo para o primeiro:
console.log(lista.reverse());
//mostra o tamanho da lista:
console.log(lista.length);
//transforma a lista em uma String:
console.log (lista.toString());
//transforma a lista em um string e permite mudar o separador:
console.log(lista.join(" -- "));

//dicionario, é como um objeto json:
var fruta = {nome: "maça", cor: "vermelha"}

//lista de dicionario
var frutas = [{nome: "maça", cor: "vermelha"},{nome: "uva", cor: "verde"}];
console.log(frutas[0].nome);
console.log(frutas);
*/
/*
//condições:
var idade3 = prompt ("Qual a sua idade?");
if (idade3>=18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}*/
//laço de repetições:

/*
var cont =0
while(cont <=5){
    console.log(cont);
    cont++;
}

var cont1;
for(cont1=0; cont1<=5; cont1++){
    alert(cont1);
}

var d = new Date();
alert(d.getDate());
alert(d.getHours());
alert(d.getMonth()+1);
*/

/* function soma(n1, n2){
return n1+ n2;
}
var validar;
function validarIdade (idade){
    if (idade>=18){
        validar = true;
    } else{ 
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
validarIdade(idade);
console.log(validar);
*/
function clicou(){
//alert("obrigado por clicar");
//document.getElementById("agradecimento").innerHTML= "<b>Obrigado por clicar</b>";

}
function redirecionar(elemento){

      window.open("https://www.igti.com.br/");
    //window.location.href = "https://www.igti.com.br/";
}

function trocar(elemento){
    elemento.innerHTML= "<b>Obrigado</b>";
}

function voltar(elemento){
    elemento.innerHTML= "Passe o mouse aqui";
}

function load(){
    alert("Pagina Carregada");
}

function funcaoChange(elemento){
console.log(elemento.value);

}