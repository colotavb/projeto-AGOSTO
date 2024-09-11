const perguntas = [
    {
        enunciado: "Você saiu da escola, e se depara com um mar de novas oportunidades",
        alternativas: [
            { texto: "Isso é bom!", pontuacao: 10 },
            { texto: "Isso é ruim!", pontuacao: 5 }
        ]
    },
    {
        enunciado: "Você se considera uma pessoa decidida do que quer fazer?",
        alternativas: [
            { texto: "Sim", pontuacao: 7 },
            { texto: "Não", pontuacao: 3 }
        ]
    },
    {
        enunciado: "Considerando as circunstancias, você sabe oque quer fazer de faculdade?",
        alternativas: [
            { texto: "Sim, claro que sei!", pontuacao: 6 },
            { texto: "Não, não faço ideia!", pontuacao: 4 }
        ]
    },
    {
        enunciado: "Você gostaria de estudar a distancia?",
        alternativas: [
            { texto: "Não, não consigo me concentrar", pontuacao: 5 },
            { texto: "Sim, adoraria", pontuacao: 8 }
        ]
    },
    {
        enunciado: "Atualmente, você acha que a tecnologia vem para facilitar o dia a dia?",
        alternativas: [
            { texto: "Sim, com toda certeza!", pontuacao: 7 },
            { texto: "Não, antes tudo era mais fácil", pontuacao: 6 }
        ]
    }
];

let atual = 0;
let pontuacao = 0; // Variável para armazenar a pontuação
let perguntaAtual;
const caixaPerguntas = document.getElementById('caixaPerguntas');
const alternativasContainer = document.getElementById('alternativas');

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa) => {
        const button = document.createElement('button');
        button.textContent = alternativa.texto;
        button.addEventListener('click', () => {
            pontuacao += alternativa.pontuacao; // Incrementa a pontuação com base na alternativa selecionada
            atual++;
            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                exibePontuacaoFinal(); // Chama função para exibir a pontuação final
            }
        });
        alternativasContainer.appendChild(button);
    });
}

function exibePontuacaoFinal() {
    caixaPerguntas.textContent = `Você completou o questionário! Sua pontuação final é: ${pontuacao}`;
    alternativasContainer.innerHTML = ''; // Limpa as alternativas
}

mostraPergunta(); // Inicia o questionário mostrando a primeira pergunta
