var loginPag = document.querySelector(".login");
var cadastroPag = document.querySelector(".cadastro");
var meio = document.querySelector("#meio1")
var MEIO = document.querySelector('#meio2')
var conta = document.querySelector('.conta')
function Pag(){
    if(loginPag.style.display === "none"){
        loginPag.style.animation = 'abrindoUm 0.5s'
        loginPag.style.display = "block";
        cadastroPag.style.display = 'none'
    }else{
        while(loginPag.style.display === 'none'){
            loginPag.style.animation = 'fechandoUm 0.5s'
            loginPag.style.display = 'none';
        }
    }
}
function pag(){
    if(cadastroPag.style.display === 'none'){
        cadastroPag.style.animation = 'abrindoDois 0.5s'
        cadastroPag.style.display = 'block';
        loginPag.style.display = "none"
    }else{
        while(cadastroPag.style.display === 'block'){
            cadastroPag.style.animation = 'fechandoDois 0.5s'
            cadastroPag.style.display = 'none';
        }
    }
}
function saturn(){
    const hame = document.querySelector(".hame")
    if(hame.style.display === "none"){
        hame.style.display = "block"
        hame.style.animation = "hame 1s"
        loginPag.style.display = 'none'
        cadastroPag.style.display = 'none'
        
    }else{
        hame.style.display = "none"
        loginPag.style.display = 'none'
        cadastroPag.style.display = 'none'
        hame.style.animation = "fechamento 1s"
    } 
}