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

/* COMENTADO
for(var i = 0; i < linhas2; i++){ // Inicialização, condição e expressão final
    document.write("<img src='" + albuns[i] + "'/>");
}*/

/*var x = 0;

while(x < linhas){
    document.write("<p>" + arrayAlbuns[x] + "</p>");
    x++;
}*/

/*document.write("<p>" + arrayAlbuns[3] + "</p>");
document.write("<p>" + arrayAlbuns[1] + "</p>");
document.write("<p>" + arrayAlbuns[2] + "</p>");*/

/* //  //  //  //  //  //  //  //  // */

function addAlbum(){

    var caminhoAlbum = document.getElementById("caminhoImg").value;

    if(caminhoAlbum.endsWith(".jpg")) // endsWith, não tem muito o que explicar, mas é legal
        listarAlbums(caminhoAlbum);
    else{
        alert("inválido amigo");
        console.error("inválido amigo"); // .error, não tem muito o que explicar também
    }
    document.getElementById("caminhoImg").value = null; // Limpando o input depois de clicar no botão
}


function listarAlbums(url){ // Função com parâmetro
    var elementoAlbum = "<img src='" + url + "'/>";
    var listaAlbums = document.getElementById("listaAlbums");
    listaAlbums.innerHTML =
        listaAlbums.innerHTML + elementoAlbum; //Aqui é como se fosse um "i++", pra não mostrar apenas 1 filme
}

/* //  //  //  //  //  //  //  //  // */

var camila = { // {} para objetos
    nome: "Camila",
    vitorias:0,
    empates:0,
    derrotas:0,
    pontos:0
}

var davi = {
    nome: "Davi",
    vitorias:0,
    empates:0,
    derrotas:0,
    pontos:0
}

var jogadores = [camila, davi];

function calculaPontos(jogador){
    var pontos = (jogador.vitorias * 3) + (jogador.empates);
    jogador.pontos = pontos;    
}

function addVitoria(indice){
    var jogador = jogadores[indice];
    jogador.vitorias++; // ++ serve aqui também
    calculaPontos(jogador);
    jogadorHtml(jogadores);//Não entendi por que ele atualiza ao invés de acrescentar os jogadores na lista de novo
}

function addEmpate(indice){
    var jogador = jogadores[indice];
    jogador.empates = jogador.empates + 1;
    calculaPontos(jogador);
    jogadorHtml(jogadores);
}

function addDerrota(indice){
    var jogador = jogadores[indice];
    jogador.derrotas = jogador.derrotas + 1;
    calculaPontos(jogador);
    jogadorHtml(jogadores);
}

function jogadorHtml(jogadores){
    var elemento = "";

    for(var i = 0; i < jogadores.length; i++){
        elemento += "<tr>" // += é utilizado para atribuir a uma variável o valor desta variável mais algo .
        elemento +=    "<td>" + jogadores[i].nome + "</td>"
        elemento +=    "<td>" + jogadores[i].vitorias + "</td>"
        elemento +=    "<td>" + jogadores[i].empates + "</td>"
        elemento +=    "<td>" + jogadores[i].derrotas + "</td>"
        elemento +=    "<td>" + jogadores[i].pontos + "</td>"
        elemento +=    "<td><button onclick='addVitoria("+i+")'>V</button></td>"
        elemento +=    "<td><button onclick='addEmpate("+i+")'>E</button></td>"
        elemento +=    "<td><button onclick='addDerrota("+i+")'>D</button></td>"                       
        elemento += "</tr>"
    }

    var ranking = document.getElementById("ranking"); //ID do tbody
    
    ranking.innerHTML = elemento;
    //document.write(elemento);
}

jogadorHtml(jogadores);

/* //  //  //  //  //  //  //  //  // */

