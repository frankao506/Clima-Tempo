let chave = "352758c9cd425e551ac61e155d5c8174"



function colocarNaTela(dados) {
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name

    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".Umidade") .innerHTML = " Umidade em " + dados. main.humidity + "%"

    
} 





async function buscarCidade(cidade) {
    let dados = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cidade + '&appid=352758c9cd425e551ac61e155d5c8174&units=metric',)
        .then((resposta) => resposta.json())



    colocarNaTela(dados)

}



function cliqueiNoBotao() {
    let cidade = document.querySelector(".paises-do-mundo-perdido").value


    buscarCidade(cidade)
}

