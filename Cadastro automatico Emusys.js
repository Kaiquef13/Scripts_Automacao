function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

var Cad_aln = JSON.stringify({
	funcao:"salva",
	argumentos:"",
	_y:"nulo",
	outraCidade:false,
	Atend_Nome:"Kaique Figueiredo Furquim",
	Atend_NomeResponsavel:"Willian José Dos Reis Furquim",
	Indicacao_ID:"",
	Atend_NomeIndicacao:"",
	Atend_Telefone:"(15)991831369",
	Atend_Email:"Kaiquefigueiredo13@gmail.com",
	Cidade_ID:"",
	Instrumento_ID:"2",
	Atend_DataNascimento:"18/08/2004",
	Atend_Observ:"Kaique é aluno do lucas",
	_x:"JVkxgx1",
	_m:"5900845415107151"
});


var Pre_matricula = JSON.stringify({
    "selecionaVersaoDeTabela": 1,
    "novaMatriculaModel": {
        "Atend_ID": 156,
        "alunoNome": "Kaique Figueiredo Furquim",
        "discInfos": [
            {
                "dataPrimeiraAula": "2022-01-04",
                "dataUltimaAula": "2022-07-05",
                "nrDeAulas": 24,
                "Curso_ID": 2,
                "Modalidade_Chave": "S-50",
                "tipo": "Individual",
                "Turma_ID": null,
                "agendamentos": [
                    {
                        "Sala_ID": 2,
                        "timeIntInicio": 780,
                        "diaDaSemana": 2,
                        "duracao": 50,
                        "RegPres_Modo": "presencial",
                        "frequencia": "S"
                    }
                ],
                "Pessoa_ID_Prof": "29",
                "dataInicialBase": null,
                "TabelaDeValores_ID": "1",
                "dealerResult": null,
                "indexamento": null
            }
        ],
        "discIndex": "0",
        "aulaNoFeriadoLetra": "N",
        "CursoForm_ID": "2",
        "CursoMod_ID": "2",
        "Plano_ID": 1,
        "diaVencimento": "5",
        "dataPrimeiraParcela": "2021-12-31",
        "desconto": 0,
        "nrDeParcelas": "4",
        "descontoCond": 30,
        "TipoPagamento_ID": 0,
        "alunoTemBolsa": "0",
        "planoDePagamentoSelecionado": null,
        "planoDePagamentoSelecionadoTabela": null,
        "dealerFaturas": null,
        "taxaDeMatriculaAPagar": 0
    },
    "_r": "1",
    "_x": "JKeoyy1",
    "CursoForm_ID": "2",
    "CursoMod_ID": "2",
    "discIndex": "0",
    "dataPrimeiraAula": "2022-01-04",
    "dataUltimaAula": "2022-07-05",
    "nrDeAulas": "24",
    "diaVencimento": "29",
    "dataPrimeiraParcela": "29/12/2021",
    "Plano_ID": "1",
    "TipoPagamento_ID": "0",
    "nrDeParcelas": "4",
    "Atend_ID": 156,
    "taxaDeMatriculaAPagar": 0,
    "desconto": 0,
    "descontoCond": 30,
    "discInfos": [
        {
            "dataPrimeiraAula": "2022-01-04",
            "dataUltimaAula": "2022-07-05",
            "nrDeAulas": 24,
            "Curso_ID": 2,
            "tipo": "Individual",
            "Turma_ID": null,
            "agendamentos": [
                {
                    "Sala_ID": 2,
                    "timeIntInicio": 780,
                    "diaDaSemana": 2,
                    "duracao": 50,
                    "RegPres_Modo": "presencial",
                    "frequencia": "S"
                }
            ],
            "Pessoa_ID_Prof": "29",
            "dataInicialBase": null,
            "Modalidade_Chave": "S-50",
            "TabelaDeValores_ID": 1
        }
    ],
    "gridlist_1": {
        "ord": {},
        "pag": {
            "rPag": 0,
            "cPag": 0,
            "scrPos": 0
        }
    },
    "_m": "5900845415107151"
});

var Matricula = JSON.stringify({
    "funcao": "save",
    "argumentos": "",
    "_y": "nulo",
    "Atend_ID": 156,
    "Pessoa_ID_JaCadastrado": 109,
    "p1_acao": "N",
    "p1_pessoaTipo": "F",
    "p1_cpfCnpj": "428.787.320-30",
    "Pessoa_ID": 109,
    "p2_PessoaNome": "Willian José Dos Reis Furquim",
    "p2_CPFouCNPJ": "844.861.120-91",
    "p2_RG": "222222222",
    "p2_Sexo": "M",
    "p2_PessoaEmail": "Kaiquefigueiredo13@gmail.com",
    "p2_OutrosTelefones": "(15)991831369",
    "p3_CEP": "18051833",
    "p3_Logradouro": "Rua Silvana Francisca",
    "p3_Numero": "177",
    "p3_Bairro": "Jardim Piazza Di Roma II",
    "p3_UF_ID": "26",
    "p3_Cidade_ID": "3848",
    "index": 4,
    "p4_definicaoDoAluno": "N",
    "p4_PessoaNome": "Kaique Figueiredo Furquim",
    "p4_Sexo": "M",
    "p4_PesGrauDep_ID": "1",
    "p4_DataNascimento": "18/08/2004",
    "Pessoa_ID_Aluno": 110,
    "_x": "KA9SHX1",
    "_m": "5900845415107151"
});

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://sys.emusys.com.br/");
xhr.setRequestHeader("Content-Type", "application/json");

//Cadastro Aluno
xhr.send(Cad_aln);

await delay(1)

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://sys.emusys.com.br/");
xhr.setRequestHeader("Content-Type", "application/json");

//Pré Matricula do aluno
xhr.send(Pre_matricula);

await delay(1)

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://sys.emusys.com.br/");
xhr.setRequestHeader("Content-Type", "application/json");

//Matricula
xhr.send(Matricula);
