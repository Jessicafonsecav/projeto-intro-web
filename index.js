//As os itens que possuiam variáveis foram transformados em objetos.
//Obs: estou excluindo o objeto 2, pois nos exercíos propostos até aqui só foram usados 3 itens, exclui o 2 pois era o mais antigo essa foi o critério, e coloquei essas 4 séries, pois são minhas preferidas. 

const objeto1 = {
    titulo : "As Telefonistas",
    lancamento : 2017,
    genero : ["Drama", "Telenovela", "Obra de Época"],
    finalizada : true,
}

// const objeto2 = {
//     titulo : "Friends",
//     lancamento : 1994,
//     genero : ["Comédia", "Romance","Sitcom"],
//     finalizada : true,
// }



const objeto3 = {
    titulo : "Grey's Anatomy",
    lancamento : 2004,
    genero : ["Drama", "Romance", "Humoe ácido", "Comédia dramática"],
    finalizada : false,
}



const objeto4 = {
    titulo : "La Casa de Papel",
    lancamento : 2017,
    genero : ["Assalto", "Suspense", "Crime", "Romance"],
    finalizada : true,
}

//Criei um Array que no momento está vazia, mas tem a finalidade de guardar os objetos.
const listaObjeto= []

//Adicionei objetos os objetos a lista vazia criada anteriormente, porém só foram adcionados ao Array os objetos que estão finalizados, ou seja a propriedade booleana TRUE foi a condição aplicada.

if (objeto1.finalizada === true) {
    listaObjeto.push(objeto1)
}else{
    console.log(`Atenção! A Série ${objeto1.titulo} Não está finalizada!`)
};

if (objeto3.finalizada === true) {
    listaObjeto.push(objeto3)
}else{
    console.log(`Atenção! A Série ${objeto3.titulo} Não está finalizada!`)
};

if (objeto4.finalizada === true) {
    listaObjeto.push(objeto4)
}else{
    console.log(`Atenção! A Série ${objeto4.titulo} Não está finalizada!`)
};

console.log("Minhas Séries", listaObjeto);


