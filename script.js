function cadastrarLivro(){

    let nome = document.getElementById("nome").value;
    let autor = document.getElementById("autor").value;
    let editora = document.getElementById("editora").value;
    let ano = document.getElementById("ano").value;

    let resultado = document.getElementById("resultado");

    if(nome === "" || autor === "" || editora === "" || ano === ""){
        resultado.innerHTML = "Preencha todos os campos!";
        resultado.style.color = "red";
    }else{
        resultado.innerHTML =
        "Livro cadastrado: " + nome +
        "<br>Autor: " + autor +
        "<br>Editora: " + editora +
        "<br>Ano: " + ano;

        resultado.style.color = "green";
    }
}