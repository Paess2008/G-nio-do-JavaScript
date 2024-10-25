const lampada = document.getElementById("lampada");
// Estamos guardando na variavel lampada uma tag
// Documente acessa a tag pelo ID
//console.log(lampada)

const button = document.getElementById("btn")
//console.log(button)

let lampOn = false;
//false ou true é um dado boleano

//() => {}; arrow function
button.addEventListener("click", () => {
  lampOn = !lampOn;
  lampada.src = lampOn
   ? "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true"
   : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true";
})
//Operador ternario -condicional