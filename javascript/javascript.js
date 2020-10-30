/*
**javascript
**/




 // Jquerys //

 $(document).ready(function(){
   // primo esercizio //

  // oggetto studente //
  // var studenti = {
  //   eta: "19",
  //   cognome: "Galanti",
  //   nome: "Francesco"
  // }
  //
  // for(var key in studenti){
  //    console.log(key);
  //    console.log(studenti[key]);
  // };






  var classi = [
        {
            nome: "Francesco",
            cognome: "Galanti",
            eta: "25"
        },

        {
            nome: "Paolo",
            cognome: "Dunzioni",
            eta: "35"
        },
        {
            nome: "Sara",
            cognome: "Passeri",
            eta: "28"
        },
    ];

    for( var i = 0; i < classi.length; i++ ){
        console.log("nome ",classi[i].nome);
        console.log("cognome ",classi[i].cognome);
        console.log("eta " ,classi[i].eta)
    };

    var studente = {

}

classi.push(studente);

studente.nome = prompt("inserisci il tuo nome");
studente.cognome = prompt("inserisci il tuo cognome");
studente.eta = parseInt(prompt("inserisci la tua età"));

console.log(classi);































 }); //<-- end here//
