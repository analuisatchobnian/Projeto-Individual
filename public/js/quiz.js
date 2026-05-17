const perguntas = [

    {
        pergunta: "Em uma situação de perigo, você:",

        respostas: [

            {
                texto: "Protege quem ama",
                criatura: "lobisomem"
            },

            {
                texto: "Pensa antes de agir",
                criatura: "kitsune"
            },

            {
                texto: "Parte para o ataque",
                criatura: "coiote"
            },

            {
                texto: "Observa nas sombras",
                criatura: "banshee"
            }

        ]
    },

    {
        pergunta: "Seus amigos te enxergam como:",

        respostas: [

            {
                texto: "Líder",
                criatura: "lobisomem"
            },

            {
                texto: "Conselheiro(a)",
                criatura: "kitsune"
            },

            {
                texto: "Impulsivo(a)",
                criatura: "coiote"
            },

            {
                texto: "Misterioso(a)",
                criatura: "banshee"
            }

        ]
    },
    {
        pergunta: "Você prefere agir:",

        respostas: [

            {
                texto: "Em grupo",
                criatura: "lobisomem"
            },

            {
                texto: "No impulso",
                criatura: "kitsune"
            },

            {
                texto: "Sozinho",
                criatura: "coiote"
            },

            {
                texto: "Apenas quando necessário",
                criatura: "banshee"
            }

        ]
    },
    {
        pergunta: "O que é mais importante?",

        respostas: [

            {
                texto: "Família",
                criatura: "lobisomem"
            },

            {
                texto: "Poder",
                criatura: "kitsune"
            },

            {
                texto: "Liberdade",
                criatura: "coiote"
            },

            {
                texto: "Conhecimento",
                criatura: "banshee"
            }

        ]
    },
    {
        pergunta: "Qual frase combina mais com você?",

        respostas: [

            {
                texto: "“Eu protejo minha alcateia.”",
                criatura: "lobisomem"
            },

            {
                texto: "“Nem tudo é o que parece.”",
                criatura: "kitsune"
            },

            {
                texto: "“O medo torna você forte.”",
                criatura: "coiote"
            },

            {
                texto: "“Conhecimento é poder.”",
                criatura: "banshee"
            }

        ]
    }

];


const perguntaElement = document.getElementById("pergunta");
const respostaButtons = document.getElementById("respostas");
const proximoButton = document.getElementById("proximoBotao");

let questaoAtualIndex = 0;

let pontos = {

    lobisomem: 0,
    kitsune: 0,
    coiote: 0,
    banshee: 0

};

function comecar() {
    document.getElementById("capa_quiz").style.display = "none";

    document.getElementById("pergunta_quiz").style.display = "block";


    questaoAtualIndex = 0;
    pontos = {

        lobisomem: 0,
        kitsune: 0,
        coiote: 0,
        banshee: 0

    };

    mostrarQuestao();

}


function mostrarQuestao() {
    let questaoAtual =
        perguntas[questaoAtualIndex];

    let numeroPergunta =
        questaoAtualIndex + 1;

    perguntaElement.innerHTML =
        numeroPergunta + ". " +
        questaoAtual.pergunta;

    for (let i = 0;
        i < botoesResposta.length;
        i++) {

        botoesResposta[i].innerHTML =
            questaoAtual.respostas[i].texto;

        botoesResposta[i].onclick =
            function () {

                responder(
                    questaoAtual.respostas[i].criatura
                );

            };

    }

}

const botoesResposta =
    document.querySelectorAll(".btn");


function responder(criatura) {

    pontos[criatura]++;

    questaoAtualIndex++;

    console.log(pontos);

    if (questaoAtualIndex < perguntas.length) {

        mostrarQuestao();

    }

    else {

        resultadoFinal();

    }

}




function resultadoFinal() {
    document.getElementById("pergunta_quiz").style.display = "none";

    document.getElementById("resultado_final").style.display = "block";

    let criaturas = [
        "lobisomem",
        "kitsune",
        "coiote",
        "banshee"
    ];


    let maior = "";
    let maiorPontos = 0;

    for (let i = 0; i < criaturas.length; i++) {

        let criaturaAtual = criaturas[i];

        if (pontos[criaturaAtual] > maiorPontos) {

            maiorPontos = pontos[criaturaAtual];

            maior = criaturaAtual;

        }

    }
    alert("Você é: " + maior);
}
