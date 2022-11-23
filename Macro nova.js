//filtro status ativo
document.querySelector("#ContentPlaceHolder2_cbxStatus").value = document.querySelector("#ContentPlaceHolder2_cbxStatus > option:nth-child(2)").value
//Ordenação texto
document.querySelector("#ContentPlaceHolder2_cbxordenacao").value = document.querySelector("#ContentPlaceHolder2_cbxordenacao > option:nth-child(1)").value
//controle de estoque
document.querySelector("#ContentPlaceHolder2_ddlControleEstoque").value = document.querySelector("#ContentPlaceHolder2_ddlControleEstoque > option:nth-child(3)").value
//Pesquisa com as condiçoes
document.querySelector("#ContentPlaceHolder2_btnPesquisar").click()
i=0
function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}


while(i < 1){
	
	await delay(10)
	document.querySelector("#ContentPlaceHolder2_txtDescricaoAnuncio").value = document.querySelector("#ContentPlaceHolder2_rptAnuncios_txtDescricaoAnuncioAlterar_0").value.toUpperCase().trim()
	document.querySelector("#ContentPlaceHolder2_btnPesquisar").click()
			
	await delay(4.5)
	document.querySelector("#cbSelectAll").click()
	document.querySelector("#ContentPlaceHolder2_lkbImportarAnuncio").click()
				
	await delay(3.5)
	document.querySelector("#rbImportarAssociar").click()
	document.querySelector("#ContentPlaceHolder2_btnModalImportarPesquisarProduto").click()

	await delay(4)
	document.querySelector("#ContentPlaceHolder2_txtCodigoDescricaoItem").value = document.querySelector("#ContentPlaceHolder2_rptAnuncios_txtDescricaoAnuncioAlterar_0").value.toUpperCase().trim()
	document.querySelector("#ContentPlaceHolder2_btnModalPesquisaProdutoPesquisar").click()
	await delay(3.5)
	if (document.querySelector("#ContentPlaceHolder2_rptModalPesquisaProdutos_lblItemDescricaoModal_0").innerHTML.toUpperCase().trim() == document.querySelector("#ContentPlaceHolder2_rptAnuncios_txtDescricaoAnuncioAlterar_0").value.toUpperCase().trim()) {
		document.querySelector("#ContentPlaceHolder2_rptModalPesquisaProdutos_btnSelecionarItem_0").click()
	}
	else if (document.querySelector("#ContentPlaceHolder2_rptModalPesquisaProdutos_lblItemDescricaoModal_1").innerHTML.toUpperCase().trim() == document.querySelector("#ContentPlaceHolder2_rptAnuncios_txtDescricaoAnuncioAlterar_0").value.toUpperCase().trim()) {
		document.querySelector("#ContentPlaceHolder2_rptModalPesquisaProdutos_btnSelecionarItem_1").click()
	}
	else if (document.querySelector("#ContentPlaceHolder2_rptModalPesquisaProdutos_lblItemDescricaoModal_2").innerHTML.toUpperCase().trim() == document.querySelector("#ContentPlaceHolder2_rptAnuncios_txtDescricaoAnuncioAlterar_0").value.toUpperCase().trim()) {
		document.querySelector("#ContentPlaceHolder2_rptModalPesquisaProdutos_btnSelecionarItem_2").click()
	}

	await delay(2.5)
	document.querySelector("#ContentPlaceHolder2_btnCriarEstoque").click()
		
	await delay(2)
	document.querySelector("#divSelecionados > span > i").click()
	document.querySelector("#ContentPlaceHolder2_txtDescricaoAnuncio").value = ""
	document.querySelector("#ContentPlaceHolder2_btnPesquisar").click()
	i++
}
