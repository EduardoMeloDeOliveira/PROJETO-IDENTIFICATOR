// CRIANDO AS VARIAVEIS
var $btnVerificar = document.getElementsByTagName('button')[0]
var h2Resultante = document.getElementById('resultadoFinal')
var $content = document.getElementsByClassName('content')[0]
var $imgResultante = document.getElementById('results')
var $entrada = document.getElementsByClassName('entradas')[0]
var $seletor = document.getElementsByClassName('seletor')[0]
var $resultado = document.getElementsByClassName('resultado')[0]
var $btnVoltar = document.getElementsByTagName('button')[1]




// CRIANDO OS EVENTOS 
$btnVerificar.addEventListener('click', verificar)
$btnVoltar.addEventListener('click', voltar)


function verificar() {
    // CRIAÇÃO DAS VARIAVEIS DENTRO DA FUNCTION

    var SexoBiologioco = sexo_biologico.value
    var nomeUser = nome_ipt.value
    var dataNascimento = Number(ano_nascimento_ipt.value)
    var dataAtual = new Date()
    var ano = dataAtual.getFullYear()
    var resultante = ano - dataNascimento

    // TESTE DO VALOR DAS VARIAVEIS

    console.log(ano)
    console.log(SexoBiologioco)
    console.log(nomeUser)
    console.log(resultante)


    $content.classList.add('hide')
    $content.classList.add('hide')
    $resultado.classList.remove('hide')


    // CRIAÇÃO DE CONDIÇÕES

    if (dataNascimento <= ano && dataNascimento != "") {


        if (SexoBiologioco = "masculino") {





            if (resultante >= 0 && resultante <= 10) {
                h2Resultante.innerHTML = `Olá ${nomeUser},você ainda é uma criança o que esta fazendo aqui?, sua idade é de ${resultante} anos`
                $imgResultante.innerHTML = ` <img src="assets/kid.png" alt="">`



            } else if (resultante > 10 && resultante <= 18) {
                h2Resultante.innerHTML = `Olá ${nomeUser},tá ficando velhaco, sua idade é de ${resultante} anos`
                $imgResultante.innerHTML = ` <img src="assets/jovem.jpg" alt="">`



            } else if (resultante > 18 && resultante <= 45) {
                h2Resultante.innerHTML = `Olá ${nomeUser},já tá velhaco,sua idade é de ${resultante} anos`
                $imgResultante.innerHTML = ` <img src="assets/adulto.jpeg" alt="">`
            } else {
                h2Resultante.innerHTML = `Olá ${nomeUser},tá com um pé na cova e outro no sabonete,sua idade é de ${resultante} anos`
                $imgResultante.innerHTML = ` <img src="assets/velhote.jpg" alt="">`
            }


        }



    } else if (dataNascimento > ano) {
        alert('Insira um ano de nascimento válido')
    }






}



function voltar() {

    $content.classList.remove('hide')
    $content.classList.remove('hide')
    $resultado.classList.add('hide')

    document.getElementById('nome_ipt').value = ""
    document.getElementById('dataNascimento').value = ""






}