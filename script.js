var pulsanteGenera = document.getElementById("calcola");
pulsanteGenera.addEventListener("click", function(){
  var nominativo = document.getElementById("nome").value;
  var etaInput = document.getElementById("eta").value;
  var kmInput = document.getElementById("km").value;
  console.log(nominativo);


  // prezzo
  var prezzo = kmInput * 0.21;
  if(etaInput == "Minorenne"){
  prezzo -= prezzo * 0.2;
} if (etaInput == "Over 60"){
  prezzo -= prezzo * 0.4;
}


// stampa

document.getElementById("nome-out").innerHTML = nominativo;
document.getElementById("eta-out").innerHTML = etaInput;
document.getElementById("km-out").innerHTML = kmInput;
document.getElementById("costo").innerHTML = prezzo.toFixed(2);

document.getElementById("dati-out").className = "show";
})
