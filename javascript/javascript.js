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

  // secondo esercizio //

   // prima soluzione //
  var classe = [
       [{
         nome: "Francesco",
         Cognome: "Galanti",
         eta: ""
       }],
       ["Galanti, Passeri, Dunzioni"]

  ];



  for(var i = 0; i < classe.length; i++){
     console.log("classe " + (i + 1) );
     console.log("nome: " + classe[i]);

     for(var j = 0; j < classe[i].length; j++){
       console.log("cognome: " + classe[i][j].nome.cognome.eta);
     }
  }




















 }); //<-- end here//
