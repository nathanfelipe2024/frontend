// console.log(typeof 5)
// console.log(typeof -5.2)
// console.log(typeof '')
// console.log(2**3) // potência
// console.log(4/2)
// console.log(2*2)
// console.log(2-2)
// console.log(2/2)

// operações básicas cpom strings
// concatenação
// console.log('Hello World')
// console.log('Hello' + 'World');

// interpolação
// console.log(`A soma de 2 + 2 = ${1+1}`)

// comparações
// console.log(5 > 2 );
// console.log(2 > 5 );
// console.log(2 === '2' ); // igual idêntico ou absoluto
// console.log(3 != 3);
// console.log(3 !== '3');;
//console.log(3 > 2 && 2 > 1); && (AND)
// console.log(3 > 2 && 2 < 1); 
// console.log(3 > 2 || 2 < 1); // || (OR)
//console.log(true)

// variáveis
var a = 2;
let b = 3;
const c = 4;

if (true) {
//    console.log(a)
//    console.log(b)
//    console.log(c)
//
//    var d = 5;
//    let e = 6; // não pode ser acessada de fora deste bloco
//   const f = 7; // não pode ser acessada de fora deste bloco
 }
 //console.log(e);

// declaração mútipla

// Declaração múltipla
// const g = 10, h = 20, i = 30;
// console.log(g,h,i);

// if-else
const user = 'Nathan';
if(user ==='Nathan'){
   // console.log('Usuário autenticado');
} else {
   // console.log('Usuário inexistente');
}

// operador ternário
// false === 'Nathan' ? console.log('Usuário autenticado') : console.log('Usuário inexistente');
//const curso = 'ENC'
//switch(curso) {
//    case 'ENC':
//   console.log('Engenharia de Computação');
//    break;
//case 'ESW':
//    console.log('Engenharia de Software');
//    break;
//case 'ENC':
//    console.log('Engenharia Mecatrônica');
//    break;
//default:
   // console.log('Curso Inexistente');
//}

// laços de repetição

let j = 0
// while(j < 10){
//    console.log('indice:' , j);
    j++;
// }

//let k = 0;
//do {
//   console.log('indice: ', k)
//   k++;
//} while(k < 10);

//for (let i = 0; i < 10; i++) {
//    console.log('indice: ',i);

// arrays
const nomes = ('rodrigo', 'maria', 'joão');
// console.log(nomes);
// console.log(nomes[0]);
// console.log(nomes.length); // propriedade
nomes[0] = 'pedro';
// console.log(nomes);

// métodos
nomes.push('ana'); // insere no final
nomes.unshift('tairine'); // insere no inicio
// console.log(nomes);
// nomes.pop(); // remove do final
// console.log(nomes);  

