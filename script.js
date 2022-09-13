// Tipagem dinâmica. Não é necessário declarar o tipo da variável, apenas a palavra reservada "var"
// Ponto e vírgula opcional

var nome = "Davi";
var notaPrimeiroBimestre = 9; // Camel case
var notaSegundoBimestre = 9;
var notaTerceiroBimestre = 9;
var notaQuartoBimestre = 9;

var media = (notaPrimeiroBimestre + notaSegundoBimestre + // Melhor não usar acentos em variáveis
    notaTerceiroBimestre + notaQuartoBimestre) / 4;

console.log("Bem-vindo " + nome); // Concatenação

console.log(media.toFixed(1)); // toFixed() serve para definir quantas casas decimais aparecerão

/* //  //  //  //  //  //  //  //  // */

function Converter(){
    /*var moeda = document.getElementById("valor"); // Aqui ele pega o código do input no .html e mostra no console
    console.log(moeda);*/

    var real = document.getElementById("valor");
    var dolar = parseFloat(real.value) * 5;

    console.log(dolar); // Agora sim mostrando o valor digitado no campo como float

    var elementoConvertido = document.getElementById("valorConvertido");
    var valorHtml = "R$ " + dolar;

    elementoConvertido.innerHTML = valorHtml; // Coloca  dentro da tag (entre "<h2>" e "</H2>")
}

/* //  //  //  //  //  //  //  //  // */ // FAZER NÚMERO DE TENTATIVAS

var chuteMaquina = (parseInt(Math.random() * 11)); // Fora da função, pra gerar o número uma vez só

function Chutar(){

    /*var chuteMaquina = (parseInt(Math.random() * 11));
    var resultado = document.getElementById("resultado");*/

    console.log(chuteMaquina);

    var numero = parseInt(document.getElementById("numero").value); // Melhor assim, com o ".value" e o "parse" aqui
    console.log(numero); 

    if(numero == chuteMaquina){ // == para comparação e = para atribuição        
        console.log("Vidente!");
        resultado.innerHTML = "Vidente! " + chuteMaquina;
    }
    else if (numero > 10 || numero < 0){ // || para "ou"
        console.log("Deve ser maior e menor que 10!!");
        resultado.innerHTML = "Deve ser maior e menor que 10!!";
    }
    else{
        console.log("Um país da Europa?");
        resultado.innerHTML = "Um país da Europa?";
    }    
}

/* //  //  //  //  //  //  //  //  // */

var arrayAlbuns = ["Like a Stone", "Doesn't Remind Me", "The Curse"]; // Array
arrayAlbuns.push("Snow"); // Adiciona mais um item ao array

var linhas = arrayAlbuns.length;

/*for(var i = 0; i < linhas; i++){ // Inicialização, condição e expressão final
    document.write("<p>" + arrayAlbuns[i] + "</p>");
}*/

var albuns = ["https://upload.wikimedia.org/wikipedia/pt/3/33/Audioslave_-_Audioslave_%28%C3%A1lbum%29.jpg", 
"https://upload.wikimedia.org/wikipedia/pt/2/27/Red_Hot_Chili_Peppers_-_By_the_Way.jpg", 
"https://upload.wikimedia.org/wikipedia/pt/b/b5/Red_Hot_Chili_Peppers_-_Stadium_Arcadium.jpg"];

var linhas2 = albuns.length;

for(var i = 0; i < linhas2; i++){ // Inicialização, condição e expressão final
    document.write("<img src='" + albuns[i] + "'/>");
}

/*var x = 0;

while(x < linhas){
    document.write("<p>" + arrayAlbuns[x] + "</p>");
    x++;
}*/

/*document.write("<p>" + arrayAlbuns[3] + "</p>");
document.write("<p>" + arrayAlbuns[1] + "</p>");
document.write("<p>" + arrayAlbuns[2] + "</p>");*/
