const resultado = [];

sortearNumeros()
function sortearNumeros(){
    //sortear os numeros
    for(i = 0; i < 6; i++){
        
        let numeroSorteado = Math.round(Math.random() * 59 + 1);
        
        //verifica se o numero sorteado existe na lista, se existir ele faz o sorteio dnv
        while(resultado.includes(numeroSorteado)){
            let numeroSorteado = Math.round(Math.random() * 59 + 1);
        }
        resultado.push(numeroSorteado);
    } 
}

//mostrar resultado
  function mostrar(){
    const divResultado = document.getElementById("resultado")
    for(i=0; i < resultado.length; i++){
        divResultado.innerHTML += "<div class='resultadoNumero'>"+ resultado[i] +"</div>";
    }
  }

