function relogio(){
    
    var data = new Date(); // Classe de dados para o relogio
    
    var hr = data.getHours();
    var min = data.getMinutes();
    var sec = data.getSeconds();

    var tempo_total = hr + ":" + min + ":" + sec; // variavel que juta o tempo total

    var tempo = document.getElementById('hora');
    
    tempo.innerHTML = tempo_total;

    // acessando o id no html para ativar o relogio

    setInterval(relogio, 500);
}

/* Depois de criar a função relogio() é necessário declarar (chamar) ela para fora, para isso utilizamos a função setInterval() */

setInterval(relogio, 500); // 500 é o tempo de 5 milissegundos

console.log ("popopop");