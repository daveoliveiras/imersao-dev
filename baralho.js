/*var carta1 = { // Objeto carta
    nome: "Cristiano Ronaldo",
    atributos: { // Um novo objeto
        velocidade: 100,
        passe: 90,
        drible: 70
    }
};

var carta2 = { // Objeto carta
    nome: "Neymar Jr.",
    atributos: { // Um novo objeto
        velocidade: 90,
        passe: 100,
        drible: 100
    }
};

var carta3 = { // Objeto carta
    nome: "Lionel Messi",
    atributos: { // Um novo objeto
        velocidade: 50,
        passe: 20,
        drible: 40
    }
};

var cartas = [carta1, carta2, carta3];*/

var cartas = [ // "Modo rápido"
        { // Objeto carta
        nome: "Cristiano Ronaldo",
        atributos: { // Um novo objeto
            velocidade: 100,
            passe: 90,
            drible: 70
        },
        image: 'https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-20/common/ratings/fifa20-grid-tile-full-rating-ronaldo.png'
    },
    
        { // Objeto carta
        nome: "Neymar Jr.",
        atributos: { // Um novo objeto
            velocidade: 90,
            passe: 100,
            drible: 100
        },
        image: 'https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-20/common/ratings/fifa20-grid-tile-full-rating-neymar.png'
    },
    
        { // Objeto carta
        nome: "Lionel Messi",
        atributos: { // Um novo objeto
            velocidade: 50,
            passe: 20,
            drible: 40
        },
        image: 'https://media.contentapi.ea.com/content/dam/ea/fifa/fifa-20/common/ratings/fifa20-grid-tile-full-rating-messi.png'
    }
];

function Sorteio(){
    cartaMaquina = cartas[parseInt(Math.random() * 3)];
    cartaPessoa = cartas[parseInt(Math.random() * 3)];
    //console.log(cartaMaquina);

    while(cartaMaquina == cartaPessoa){ // Loop pra não sortear a mesma carta
        cartaPessoa = cartas[parseInt(Math.random() * 3)];
    }

    console.log(cartaPessoa);

    document.getElementById("sorteio").disabled = true;
    document.getElementById("jogar").disabled = false;

    //Atributos();
    MostrarCartaPessoa();
}



/*function Atributos(){
    var atributos = document.getElementById("atributos");
    var texto;    
    
    for (var atrib in cartaPessoa.atributos){ //NÃO ENTENDI ISSO
        texto += "<input type='radio' name='atributo' value='" + atrib + "'>"+ atrib +"</input>"; // += pra "atualizar"   
    }

    atributos.innerHTML = texto;
}*/

function Selecionar(){
    var radio = document.getElementsByName("atributo");

    for (var i = 0; i < radio.length; i++){
        if(radio[i].checked == true)
            return radio[i].value;
    }
}

function Jogar(){
    var atributoSelecionado = Selecionar();
    var resultado = document.getElementById("resultados");
    var reload = document.getElementById("butao");

    if(atributoSelecionado == null)
        alert("Selecione um atributo");
    else{

        var pessoa = cartaPessoa.atributos[atributoSelecionado];
        var maquina = cartaMaquina.atributos[atributoSelecionado];

        if(pessoa>maquina)
            resultado.innerHTML = "Você ganhou!";
        else if (pessoa<maquina)
            resultado.innerHTML = "Você perdeu!";
        else    
            resultado.innerHTML = "Empate com o JS!";

        console.log(cartaMaquina);
        MostrarCartaMaquina();

        reload.innerHTML = "<input type='button' value='tentar de novo' onclick='recarregaR()'/>";
    }
}

function recarregaR(){
    window.location.reload(true);
};

function MostrarCartaPessoa(){
    var divFotoJogador = document.getElementById("foto");
    var divCartaJogador = document.getElementById("cartaPessoa");
    //divFotoJogador.style.backgroundImage=`url(${cartaPessoa.image})`; //${} -> inserir JS no css (até funcionou)


    var tagHtml = "<div id='atributos' class='carta-status' >";
    
    var texto = ""; // o undefined aparecia por causa dessa droga aqui que nao tava com ""        
    for (var atrib in cartaPessoa.atributos){ //NÃO ENTENDI ISSO
        texto += "<input type='radio' name='atributo' value='" + atrib + "'>"+ atrib + " " + cartaPessoa.atributos[atrib] /*pegando o valor pelo nome*/ + "</input><br/>"; // += pra "atualizar"   
    }

    var nome = `<p class='carta-subtitle'>${cartaPessoa.nome}</p>`;

    divCartaJogador.innerHTML = tagHtml+nome+texto+"</div>";
    var fotoCarta = "<img src ='" + cartaPessoa.image + "'/>";
    divFotoJogador.innerHTML = fotoCarta;
};

function MostrarCartaMaquina(){
    var divFotoMaquina = document.getElementById("cartaMaquina");
    var divCartaJogador = document.getElementById("resultado");
    //divFotoJogador.style.backgroundImage=`url(${cartaPessoa.image})`; //${} -> inserir JS no css (até funcionou)


    var tagHtml = "<div id='atributos' class='carta-status' >";
    
    var texto = ""; // o undefined aparecia por causa dessa droga aqui que nao tava com ""        
    for (var atrib in cartaMaquina.atributos){ //NÃO ENTENDI ISSO
        texto +=  atrib + " " + cartaMaquina.atributos[atrib] /*pegando o valor pelo nome*/ + "<br/>"; // += pra "atualizar"    
    }

    var nome = `<p class='carta-subtitle'>${cartaMaquina.nome}</p>`;

    divCartaJogador.innerHTML = tagHtml+nome+texto+"</div>";
    var fotoCarta = "<img src ='" + cartaMaquina.image + "'/>";
    divFotoMaquina.innerHTML = fotoCarta;
};

var cartaMaquina;
var cartaPessoa;