
i = 0

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

document.querySelector("#ContentPlaceHolder2_ddlControleEstoque").value = document.querySelector("#ContentPlaceHolder2_ddlControleEstoque > option:nth-child(3)").value
document.querySelector("#ContentPlaceHolder2_btnPesquisar").click()
	
while (i < 200){

	await delay(2.5)
	document.querySelector("#ContentPlaceHolder2_rptAnuncios_btnAssociarManualmente_0").click()

	await delay(1.5)
	document.querySelector("#ContentPlaceHolder2_txtDescricao").value = document.querySelector("#ContentPlaceHolder2_rptAnuncios_txtDescricaoAnuncioAlterar_0").innerText.trim().toLowerCase()
	document.querySelector("#ContentPlaceHolder2_btnPesquisarProduto").click()

	await delay(1.5)
	if (document.querySelector("#ContentPlaceHolder2_Repeater1_lblProdutoDescricao_0").innerText.toLowerCase().trim() == document.querySelector("#ContentPlaceHolder2_rptAnuncios_txtDescricaoAnuncioAlterar_0").innerText.trim().toLowerCase()) {
		//Btn Sincroniza
		document.querySelector("#ContentPlaceHolder2_Repeater1_btnSelecionar_0").click()
	}
	else if(document.querySelector("#ContentPlaceHolder2_Repeater1_lblProdutoDescricao_1").innerText.toLowerCase().trim() == document.querySelector("#ContentPlaceHolder2_rptAnuncios_txtDescricaoAnuncioAlterar_0").innerText.trim().toLowerCase()) {
		//Btn Sincroniza
		document.querySelector("#ContentPlaceHolder2_Repeater1_btnSelecionar_1").click()
	}
	else if(document.querySelector("#ContentPlaceHolder2_Repeater1_lblProdutoDescricao_2").innerText.toLowerCase().trim() == document.querySelector("#ContentPlaceHolder2_rptAnuncios_txtDescricaoAnuncioAlterar_0").innerText.trim().toLowerCase()) {
		//Btn Sincroniza
		document.querySelector("#ContentPlaceHolder2_Repeater1_btnSelecionar_2").click()
	}

	document.querySelector("#ContentPlaceHolder2_btnAssociar").click()

	i++
}

//Btn Sincroniza
document.querySelector("#ContentPlaceHolder2_Repeater1_btnSelecionar_0").click()
//Titulo do produto
document.querySelector("#ContentPlaceHolder2_rptAnuncios_txtDescricaoAnuncioAlterar_0").innerText.trim().toLowerCase()
//valor do produto
document.querySelector("#ContentPlaceHolder2_rptAnuncios_txtPrecoAlterar_0").value