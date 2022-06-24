/* 
case sensitive
por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classe: getElementByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('name')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mensagem = document.querySelector('#textarea')

let nomeOk = false
let emailOk = false
let assuntoOk = false
let mensagemOk = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}
function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@' && '.') == -1) {
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Email Válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}
function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Você alcançou o limite de 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}
function validaMensagem() {
    let txtMensagem = document.querySelector('#txtMensagem')
        if(mensagem.value.length >= 500) {
            txtMensagem.innerHTML = 'Você alcançou o limite de 500 caracteres'
            txtMensagem.style.color = 'red'
            txtMensagem.style.display = 'block'
        } else {
            txtMensagem.style.display = 'none'
            mensagemOk = true
        }
}
function enviar() {
    if(nomeOk && emailOk && assuntoOk && mensagemOk == true) {
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preencha o formulário corretamente antes de enviar...')
    }
}
function darkMode() {
    document.body.classList.toggle('dark-theme')
}