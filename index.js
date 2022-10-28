//As os itens que possuiam variáveis foram transformados em objetos.
//Trabalhando com os 4 itens.


array = [{
    titulo : "As Telefonistas",
    lancamento : 2017,
    genero : ["Drama", "Telenovela", "Obra de Época"]
    finalizada : true,
},

    {
    titulo : "Friends",
    lancamento : 1994,
    genero : ["Comédia", "Romance","Sitcom"]
    finalizada : true,
},

    {
    titulo : "Grey's Anatomy",
    lancamento : 2004,
    genero : ["Drama", "Romance", "Humoe ácido", "Comédia dramática"]
    finalizada : false,
},

    {
    titulo : "La Casa de Papel",
    lancamento : 2017,
    genero : ["Assalto", "Suspense", "Crime", "Romance"],
    finalizada : true,
}]

//Criei um Array que no momento está vazia, mas tem a finalidade de guardar os objetos.
const novoArray= []
      for (let i in array){
          if(array[i].finalizada){
            novoArray.push(array[i])
          }else{
            alert(`${array[i].titulo} Não está finalizada!`)
        }
 }

for(let i in array){
    array[i].genero = array[i].genero.toString()
    console.log(array[i])

}

 function obj (objeto){
    return objeto.titulo 
}

function buscar (array,string){
    for(let i in array){
        if(array[i.titulo === string]){
            return array[i]
        }
    }
     return alert(`Lamentamos, ${string}, não foi encontrada`)
}


