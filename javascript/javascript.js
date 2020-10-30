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
            eta: ""
        },

        {
            nome: "Paolo",
            cognome: "Dunzioni",
            eta: ""
        },
        {
            nome: "Sara",
            cognome: "Passeri",
            eta: ""
        },
    ];

    for( var i = 0; i < classi.length; i++ ){
        console.log("nome ",classi[i]["nome"]);
        console.log("cognome ",classi[i]['cognome']);
        classi[i].eta = parseInt(prompt("dimmi la tua eta ?"));
        console.log("eta " ,classi[i]["eta"])
    };

























 }); //<-- end here//
