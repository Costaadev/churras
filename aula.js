//let idade = 5;
//console.log(idade);
//let altura= 170;
//console.log(altura);
//camelCase

//let water = 'fire';
//let grass = 'water';
//let dragon = 'dragon';

console.log('water');
console.log('grass');
console.log('dragon');

//contantes
const valorIngressoAdulto = 20; 
console.log(valorIngressoAdulto);

//tipos primitivos
let nome = 'Costa'; //string literal
//let idade = 22; // number literal
let estaAprovado = true; //boolean
let sobrenome = undefined //Undefined


//tipagem dinamica
//(...)//

//objetos
let pessoa = {
    nome: 'Costa',
    idade: 25,
    estaAprovado: true,
    sobrenome : 'souza',
 }

let grass = {
    pokemon:'Bulbassaur',
    pokemon2: 'Ivysaur',
    pokemon3 : 'Venossaur',
}

let fire = {
     pokemon4: 'charmand er',
     pokemon5: 'charmeleon',
     pokemon6: 'charizard',
}

let water = {
    pokemon7:'squirtle',
    pokemon8: 'wartortle',
    pokemon9: 'blastoise',
}

console.log(water);
console.log(fire);
console.log(grass);

//arrays

let familia = [
    'joao','honorio','gabriel','alda'
]
console.log(familia);
console.log(familia.length);

let nomeDoAmigo = ['honorio',30,'mogidascruzes'];
console.log(nomeDoAmigo);

//function 
// Verbo + Substantivo

let corSite = "azul";
function resetaCor(cor,tonalidade){
     corSite = cor + ' ' +tonalidade;
}

console.log(corSite);
resetaCor("azul","claro");
console.log(corSite);

let fonteSite = 'arial';
function alteraFonte(fonte){
    fonteSite = fonte;
}

console.log(fonteSite);
alteraFonte('Roboto');
console.log(fonteSite);


let eevee = "pokemon";
function evolveEevee(stone , evolution){
      eevee = stone + ': ' + evolution ;
}

console.log(eevee);
evolveEevee('water stone','Vaporeon');
console.log(eevee);

function restoreEvolve(pokemon){
        eevee = pokemon;
}

console.log(eevee);
restoreEvolve('pokemon');
console.log(eevee);

evolveEevee('fire stone','Flareon');
console.log(eevee);
restoreEvolve('pokemon');
console.log(eevee);

//tipos de funcoes
//realiza uma tarefa, nao devolve nada
 function dizerNome(){
      console.log('Eberetenorio');
 }
dizerNome();

//faz calculo ou operacao e retorna algo
function multiplicarPorSete(valor){
      return valor *7;
}
//console.log(multiplicarPorSete(20));

//let resultado = multiplicarPorSete(367);
//console.log(resultado);

function multiplicarPorDez(valor){
    return valor *10;
}
console.log(multiplicarPorDez(267));

//operadores Aritimeticos(matematicos)
//operadores atribuicao 
//operadores de comparação
//operadores lógicos
//operadores Bitwise

// operadores aritimeticos 
/*let salario = 100;
//  + , - , * , / , **
console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(5 ** 5);*/

// ++ -- 
let idade = 18;

console.log(idade--);
console.log(idade);

//operadores de atribuição
let valorTecladoGamer = 100;
//valorTecladoGamer = valorTecladoGamer + valorTecladoGamer;
//valorTecladoGamer = valorTecladoGamer - valorTecladoGamer;
valorTecladoGamer += valorTecladoGamer;
console.log(valorTecladoGamer);

//operadores de igualdade 
//igualdade estrita
console.log( 1 === 1 );
console.log( '1' === 1);

// Igualdade solta
console.log(1 == 1 );
console.log('1' == 1);

//operador ternario 
 let pontos = 100;
 let tipo = pontos >= 100 ? 'Premium' : 'Comum';
 console.log(tipo);

 let pts = 100;
 let type = pts >99 ? 'viadao' : 'humano';
 console.log(type);
//////////////////////////////////////////////////////////////
//operadores logicos
// operador logico e (&&)
//retorna true se os dois operandos forem true

/*let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
console.log(podeAplicar);*/ 

//operador logico ou (||)
//Retornar true se um dos operandos forem true
let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = false;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
console.log('Pode aplicar: ',podeAplicar);

//operador not (!)
let candidatoRecusado = !podeAplicar;
console.log('Candidato Recusado: ',candidatoRecusado);
//////////////////////////////////////////////////////////////
let conhecimentophp = true;
let conhecimentojs = false;
let apto = conhecimentojs || conhecimentophp;
let naoapto = !apto;
console.log('Apto a trabalhar',apto);
console.log('Não apto a trabalhar',naoapto);
/////////////////////////////////////////////////////////////

//Falsy
//undefined
//null
//0
//false
//''
//NaN - not a number

//Truthy 

let corPersonalizada = 'Laranja';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);
////////////////////////////////////////////////
//Trocando Valores de Variáveis
let a = 'vermelho';
let b = 'azul';
let c = a;
a = b;
b = c;
console.log(a);
console.log(b);

let x = 'green';
let y = 'pink';
let w = x;
x = y;
y = w;
console.log(x);
console.log(y);
////////////////

 








 





