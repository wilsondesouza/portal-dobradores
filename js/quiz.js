// quiz.js

const startBtn = document.getElementById("start-btn");
const questionScreen = document.getElementById("question-screen");
const startScreen = document.getElementById("start-screen");
const nextBtn = document.getElementById("next-btn");
const resultScreen = document.getElementById("result-screen");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");

let currentQuestionIndex = 0;
let scores = { fogo: 0, agua: 0, terra: 0, ar: 0 };

const questions = [
    {
        text: "Qual ambiente você prefere?",
        answers: [
            { text: "Montanhas", type: "terra" },
            { text: "Praias e oceanos", type: "agua" },
            { text: "Altitudes e liberdade", type: "ar" },
            { text: "Lugares quentes e secos", type: "fogo" }
        ]
    },
    {
        text: "Qual valor te representa mais?",
        answers: [
            { text: "Disciplina", type: "fogo" },
            { text: "Adaptabilidade", type: "agua" },
            { text: "Liberdade", type: "ar" },
            { text: "Resiliência", type: "terra" }
        ]
    },
    {
        text: "Qual habilidade você gostaria de ter?",
        answers: [
            { text: "Curar com água", type: "agua" },
            { text: "Voar com um planador", type: "ar" },
            { text: "Manipular lava", type: "terra" },
            { text: "Soltar raios", type: "fogo" }
        ]
    },
    {
        text: "Como você lida com conflitos?",
        answers: [
            { text: "Enfrento diretamente", type: "fogo" },
            { text: "Procuro soluções pacíficas", type: "agua" },
            { text: "Evito ao máximo", type: "ar" },
            { text: "Aguento firme e reajo se necessário", type: "terra" }
        ]
    },
    {
        text: "O que é mais importante para você?",
        answers: [
            { text: "Liberdade", type: "ar" },
            { text: "Força interior", type: "terra" },
            { text: "Determinação", type: "fogo" },
            { text: "Empatia", type: "agua" }
        ]
    },
    {
        text: "Como você prefere passar seu tempo?",
        answers: [
            { text: "Meditando ou lendo", type: "ar" },
            { text: "Treinando ou se desafiando", type: "fogo" },
            { text: "Ajudando outras pessoas", type: "agua" },
            { text: "Explorando a natureza", type: "terra" }
        ]
    },
    {
        text: "Qual desses animais você teria como companheiro?",
        answers: [
            { text: "Dragão", type: "fogo" },
            { text: "Lontra-foca", type: "agua" },
            { text: "Bisão voador", type: "ar" },
            { text: "Texugo-toupeira", type: "terra" }
        ]
    },
    {
        text: "Qual dessas frases mais se aproxima da sua filosofia?",
        answers: [
            { text: "O mundo está em constante fluxo", type: "agua" },
            { text: "Nada é mais forte que uma base firme", type: "terra" },
            { text: "Liberdade é o maior bem", type: "ar" },
            { text: "Só com força se conquista respeito", type: "fogo" }
        ]
    }

];

startBtn.onclick = () => {
    startScreen.classList.add("hidden");
    questionScreen.classList.remove("hidden");
    showQuestion();
};

nextBtn.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
};

function showQuestion() {
    const current = questions[currentQuestionIndex];
    questionText.textContent = current.text;
    answerButtons.innerHTML = "";
    nextBtn.classList.add("hidden");

    current.answers.forEach(answer => {
        const btn = document.createElement("button");
        btn.textContent = answer.text;
        btn.onclick = () => {
            scores[answer.type]++;
            nextBtn.classList.remove("hidden");
            Array.from(answerButtons.children).forEach(b => b.disabled = true);
        };
        answerButtons.appendChild(btn);
    });
}

function showResult() {
    questionScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    const finalType = Object.entries(scores).reduce((a, b) => (b[1] > a[1] ? b : a))[0];

    const nations = {
        fogo: {
            name: "Nação do Fogo 🔥",
            img: "../assets/icones/fire2.png",
            desc: "Você é impulsivo, determinado e cheio de energia. A Nação do Fogo corre em suas veias!"
        },
        agua: {
            name: "Tribo da Água 💧",
            img: "../assets/icones/water2.png",
            desc: "Você é fluido, adaptável e protetor. A água flui com você."
        },
        terra: {
            name: "Reino da Terra ⛰️",
            img: "../assets/icones/earth2.png",
            desc: "Firme, estável e resiliente. Nada te abala!"
        },
        ar: {
            name: "Nômades do Ar 🌪️",
            img: "../assets/icones/air2.png",
            desc: "Você busca paz, liberdade e equilíbrio espiritual. Você é do vento."
        }
    };

    const nation = nations[finalType];
    document.getElementById("nation-result").textContent = nation.name;
    document.getElementById("nation-image").src = `/assets/${nation.img}`;
    document.getElementById("nation-description").textContent = nation.desc;
}
