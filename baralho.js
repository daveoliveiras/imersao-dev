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
        }
    },
    
        { // Objeto carta
        nome: "Neymar Jr.",
        atributos: { // Um novo objeto
            velocidade: 90,
            passe: 100,
            drible: 100
        }
    },
    
        { // Objeto carta
        nome: "Lionel Messi",
        atributos: { // Um novo objeto
            velocidade: 50,
            passe: 20,
            drible: 40
        }
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

    Atributos();
}

function Atributos(){
    var atributos = document.getElementById("atributos");
    var texto;    
    
    for (var atrib in cartaPessoa.atributos){ //NÃO ENTENDI ISSO
        texto += "<input type='radio' name='atributo' value='" + atrib + "'>"+ atrib +"</input>"; // += pra "atualizar"   
    }

    atributos.innerHTML = texto;
}

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

    var pessoa = cartaPessoa.atributos[atributoSelecionado];
    var maquina = cartaMaquina.atributos[atributoSelecionado];

    if(pessoa>maquina)
        resultado.innerHTML = "Ganhou";
    else if (pessoa<maquina)
        resultado.innerHTML = "Perdes-te";
    else    
        resultado.innerHTML = "Empatas-te";

    console.log(cartaMaquina);
}

var cartaMaquina;
var cartaPessoa;