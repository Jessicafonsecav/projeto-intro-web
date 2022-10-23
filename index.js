//Variavéis item 1
const titulo1 = "As Telefonistas"; //Carasterística string
const lancamento1 = 2017;          //Carasterística number
const genero1 = ["Drama", "Telenovela", "Obra de Época"];                //Carasterística Array
const finalizada1 = true;          //Carasterística boolean

// //Variavéis item 2
// const titulo2 = "Friends";         //Carasterística string
// const lancamento2 = 1994;          //Carasterística number
// const genero2 = ["Comédia", "Romance","Sitcom"];                          //Carasterística Array
// const finalizada2 = true;          //Carasterística boolean


//Variavéis item 3
const titulo3 = "Grey's Anatomy";  //Carasterística string
const lancamento3 = 2004;          //Carasterística number
const genero3 = ["Drama", "Romance", "Humoe ácido", "Comédia dramática"];  //Carasterística Array
const finalizada3 = false;         //Carasterística boolean


//Variavéis item 4
const titulo4 = "La Casa de Papel"; //Carasterística string
const lancamento4 = 2017;          //Carasterística number
const genero4 = ["Assalto", "Suspense", "Crime", "Romance"];              //Carasterística Array
const finalizada4 = true;          //Carasterística boolean

const somaLancamento = (lancamento1 + lancamento3 + lancamento4) / 3;  //Aqui somamos as médias e dividimos pela quantidade de itens somados no caso /3.
console.log("A média da soma dos anos de lançamentos é?", somaLancamento);

console.log("As séries estão finalizadas?", finalizada1, finalizada3, finalizada4); //Apenas um console.log para visualizarmos se as caracteristicas boolean são verdadeiras.


//Imprimindo as informações no console.log prefiro usar ${} para sinalizar as variáveis.
const titulo1ToUpperCase = titulo1.toUpperCase();
console.log(`${titulo1ToUpperCase}
Ano de lançamento: ${lancamento1} 
Gênero: ${genero1}
Está finalizada?:${finalizada1}`)

const titulo3ToUpperCase = titulo3.toUpperCase();
console.log(`${titulo3ToUpperCase}
Ano de lançamento: ${lancamento3} 
Gênero: ${genero3}
Está finalizada?:${finalizada3}`)

const titulo4ToUpperCase = titulo4.toUpperCase();
console.log(`${titulo4ToUpperCase}
Ano de lançamento: ${lancamento4} 
Gênero: ${genero4}
Está finalizada?:${finalizada4}`)