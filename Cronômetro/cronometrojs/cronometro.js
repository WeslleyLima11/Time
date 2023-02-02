var sec = 0
var min = 0
var hr = 0
var intervalo


function start(){
  watch()
    
  intervalo = setInterval (watch,1)
  
  console.log('iniciar')
    
}

function pausa(){

    clearInterval (intervalo)

    console.log('pausado')
    
}

function stop(){

    clearInterval (intervalo)
    sec = 0
    min= 0
    hr= 0
    document.getElementById('relogio'). innerText = '00:00:00'

    console.log('resetado')

}

//quando alguem aperta o botão inciar a função start chama a função watch



function watch(){

    sec++ // variavel pegando o valor dela e colocando +1
    document.getElementById('relogio').innerText = zero(hr) + ':' + zero(min) + ':'+ zero(sec) //innerText muda o texto interno 


    if( sec==60){

        min++
        sec=0
        if(min==60){

            min=0
            hr++
        }
    }
}

function zero(digito){

    if(digito<10){
        return('0'+ digito)
    }
    else{
            return(digito)
    }

}
