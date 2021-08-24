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






 





