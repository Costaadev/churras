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
/*let pessoa = {
    nome: 'Costa',
    idade: 25,
    estaAprovado: true,
    sobrenome : 'souza',
 }*/
/*
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
*/
/*console.log(water);
console.log(fire);
console.log(grass);
*/
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
//operadores de compara????o
//operadores l??gicos
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

//operadores de atribui????o
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
console.log('N??o apto a trabalhar',naoapto);
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
//Trocando Valores de Vari??veis
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
// If ...Else

//Se a hora estiver entre 06:00 at?? 12:00 : Bom dia!
//Se estiver entre 12:00 at?? 18:00 : Boa tarde!
//Caso cotrario : Boa noite !
let hora = 10;

if(hora > 6 && hora < 12){
    console.log('Baum Dia');
}
else if (hora > 12 && hora < 18){
    console.log('Boa Tarde');
}

else {
    console.log('Boa Noite');
}

//switch - case

let permissao; //comum ,gerente ,diretor
permissao = 'gerente';
switch(permissao){
    case 'comum':
        console.log('usuario comum');
        break;
    
    case 'gerente':
        console.log('usuario gerente');
        break;
    
    case 'diretor':
        console.log('usuario gerente');
        break;

    default:
        console.log('usuario invalido');
}

//loop
//1.for
//2.whhile
//3.do..while
//4.for..in
//5.for..of
 //for(let i = 1; i <= 5;i++){
//console.log('Eu sou o rei do beco sem sa??da !',i)
 //}
/* for(let p = ; p >=1; p--){
     if(p % 2 !== 0){
         console.log(p);
     }
 }
 for(let n =1;n <=5;n++){
    if(n % 2 !== 0){
        console.log(n);
    }
}
for(let m = 1;m <= 5;m++){
    console.log(m);
}*/
 
// while loop
/*let n = 5 ;
while (n <= 5){
    if(n % 2 !== 0){
        console.log(n);
    }
    
}*/
let i = 0
do {
    console.log('digitando !', i);
    i++;
} while (i < 10)

let p = 0 
do {
    console.log('katunamatata',p)
    p++;
}while (p <20)

let k = 0 
do{
    console.log('blabla',k);
    k ++;
}while (k <=10);


 const pessoa ={
     nome: 'costa',
     idade: 22
 };

/*for(let chave in pessoa) {
     console.log(chave,pessoa['nome']);
 }
*/
const cores = ['vermelho','azul','rosa'];
/*for (let indice in cores) {
    console.log(indice,cores[indice])
}*/

//for-of
for(let cor of cores){
    console.log(cor);
}

const pokemon = ['charmander','charmeleon','charizard']

for(let pokemons of pokemon){
    console.log(pokemons);
}

const meme = ['ih eu sei la poha','some daqui playboy fdp','num sei'];

for(let memes of meme){
    console.log(memes);
}




/*function max(numero1,numero2){
    if (numero1 > numero2)
    return numero1;
    else return numero2;
}*/
/*let valormaior = max(90,8);
console.log(valormaior);

function max(numero1,numero2){
    if ( numero1 > numero2 )
    return numero1;
    else return numero2;
}
//or 
//numero1 > numero2 ? numero1 : numero2;
*/

//EMITA UM MINI BANCO DE DADOS SOBE OS TIPOS DE POKEMONS E QUAIS SE SOBRESAEM ENTRE SI 

//const types = ['water','fire','grass'];

/*let battle = typeefective();

function typeefective(type1,type2){
    type1 > type2 ? console.log("efective") : console.log("no efective");  
}
*/
let valorMaior = max(5,10);
console.log(valorMaior);


function max(numero1,numero2){
    return numero1 > numero2 ? numero1 : numero2;
}