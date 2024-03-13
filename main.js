let nome_usuário = "";
let elemento = document.querySelector("#nome");

while(nome_usuário == ""){
    nome_usuário = prompt("Qual o seu nome?");
}

if(nome_usuário == null){
    alert('Por que estão tão tímido??')
    elemento.textContent = 'O inominável'
}else {elemento.textContent = nome_usuário}
