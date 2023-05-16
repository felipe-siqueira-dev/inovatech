function pesquisa(event){
    event.preventDefault();//interrompe o comportamento padrão que seria o de direcionar para outra página

    let nomeRemedio = document.getElementById("barra-pesquisa").value;
    if(nomeRemedio.trim() === ""){//verfica se a barra de pesquisa foi preenchida
        alert("Preencha o campo de pesquisa");
    }else{
        window.location.href = "resultadoPesquisa.html?nomeRemedio=" + encodeURIComponent(nomeRemedio);
    }
}