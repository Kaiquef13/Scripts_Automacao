i = 0
//filtro status ativo
document.querySelector("#ContentPlaceHolder2_cbxStatus").value = document.querySelector("#ContentPlaceHolder2_cbxStatus > option:nth-child(2)").value
//Ordenação texto
document.querySelector("#ContentPlaceHolder2_cbxordenacao").value = document.querySelector("#ContentPlaceHolder2_cbxordenacao > option:nth-child(1)").value
//controle de estoque
document.querySelector("#ContentPlaceHolder2_ddlControleEstoque").value = document.querySelector("#ContentPlaceHolder2_ddlControleEstoque > option:nth-child(3)").value
//Pesquisa com as condiçoes
document.querySelector("#ContentPlaceHolder2_btnPesquisar").click()

	setTimeout(start, 9000)
	function start(){
		//cola o titulo do primeiro anuncio na descrição
		document.querySelector("#ContentPlaceHolder2_txtDescricaoAnuncio").value = document.querySelector("#ContentPlaceHolder2_rptAnuncios_txtDescricaoAnuncioAlterar_0").value
		//Pesquisa com as condiçoes
		document.querySelector("#ContentPlaceHolder2_btnPesquisar").click()
			setTimeout(aftersearch, 7000)
			function aftersearch() {
			  document.querySelector("#cbSelectAll").click()
			  document.querySelector("#ContentPlaceHolder2_lkbImportarAnuncio").click()
				  setTimeout(afterimport, 8000)
				  function afterimport() {
				  	document.querySelector("#rbImportarAssociar").click()
				  	document.querySelector("#ContentPlaceHolder2_btnModalImportarPesquisarProduto").click()
					  	setTimeout(Pesquisar, 5000)
					  	function Pesquisar() {
					  		document.querySelector("#ContentPlaceHolder2_txtCodigoDescricaoItem").value = document.querySelector("#ContentPlaceHolder2_rptAnuncios_txtDescricaoAnuncioAlterar_0").value
					  		document.querySelector("#ContentPlaceHolder2_btnModalPesquisaProdutoPesquisar").click()
					  			setTimeout(selecionar, 8000)
						  		function selecionar(){
						  			document.querySelector("#ContentPlaceHolder2_rptModalPesquisaProdutos_btnSelecionarItem_0").click()
								  		setTimeout(criarestoque, 8000)
								  		function criarestoque() {
								  			document.querySelector("#ContentPlaceHolder2_btnCriarEstoque").click()
								  			setTimeout(reset, 8000)
								  			function reset(){
								  				document.querySelector("#divSelecionados > span > i").click()
								  				document.querySelector("#ContentPlaceHolder2_txtDescricaoAnuncio").value = ""
								  				document.querySelector("#ContentPlaceHolder2_btnPesquisar").click()
								  				i++
							}
						}
			  		}
		  		}
		  	}
		}
	}
