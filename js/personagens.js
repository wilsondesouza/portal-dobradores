// Lista de personagens com suas informações
const personagens = [
    {
        nome: "Aang",
        curiosidade: "O Avatar mais poderoso e criador da dominação de energia",
        audio: "../assets/sons/aang.mp3"
    },
    {
        nome: "Zuko",
        curiosidade: "Tem o melhor arco de redenção da História",
        audio: "../assets/sons/zuko.mp3"
    },
    {
        nome: "Tio Iroh",
        role: "General aposentado e Dominador da Nação do Fogo",
        curiosidade: "Grande amante de chá e mestre da sabedoria. Pai adotivo de Zuko.",
        audio: "../assets/sons/iroh.mp3"
    },
    {
        nome: "Katara",
        curiosidade: "A última dominadora de água do Sul.",
        fala: "O senhor não me dirruba"
    },
    {
        nome: "Toph",
        curiosidade: "Filha da família Bei Fong e criadora da dominação de metal",
        audio: "../assets/sons/toph.mp3"
    },
    {
        nome: "Azula",
        curiosidade: "Prodígio da dominação de fogo e princesa da Nação do Fogo.",
        fala: "",
    },
    {
        nome: "Sokka",
        curiosidade: "Apesar de não ser dobrador, é um excelente estrategista.",
        fala: "Eu sou só um cara com um bumerangue, e isso é o suficiente!"
    }
];

// Função para criar os cards dos personagens
function criarCardsDePersonagens(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    personagens.forEach((personagem, index) => {
        const uniqueId = `audio-toggle-${index}`;

        const card = document.createElement('div');
        card.className = 'character-card fade-in delay-2';

        card.innerHTML = `
            <h3>${personagem.nome}</h3>
            <input type="checkbox" class="audio-toggle" id="checkboxInput_${uniqueId}">
            <label for="checkboxInput_${uniqueId}" class="toggleSwitch">
                <div class="speaker">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 75 75">
                        <path d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z" style=";stroke-width:5;stroke-linejoin:round;;"></path>
                        <path d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6" style="fill:none;;stroke-width:5;stroke-linecap:round"></path>
                    </svg>
                </div>
            </label>
                <blockquote>${personagem.curiosidade}</blockquote>
        `;

        // Cria elemento de áudio com o src do personagem, se houver
        if (personagem.audio) {
            const audio = document.createElement('audio');
            audio.src = personagem.audio;
            audio.preload = 'auto';
            card.appendChild(audio);

            // Controle do botão de reprodução
            const checkbox = card.querySelector('input[type="checkbox"]');
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    // Pausa todos os outros áudios antes de tocar o atual
                    document.querySelectorAll('.character-card audio').forEach(a => {
                        if (a !== audio) {
                            a.pause();
                            a.currentTime = 0;
                            const otherCheckbox = a.parentElement.querySelector('input[type="checkbox"]');
                            if (otherCheckbox) otherCheckbox.checked = false;
                        }
                    });
                    audio.play();
                    audio.onended = () => {
                        checkbox.checked = false;
                    };
                } else {
                    audio.pause();
                    audio.currentTime = 0;
                }
            });
        }

        // Mostrar/ocultar detalhes ao clicar no card (exceto no toggle)
        card.addEventListener('click', (e) => {
            // Evita conflito com o clique no toggle
            if (
                e.target.classList.contains('audio-toggle') ||
                e.target.classList.contains('toggleSwitch') ||
                e.target.closest('.toggleSwitch')
            ) {
                return;
            }
            const info = card.querySelector('.more-info');
            if (info) info.classList.toggle('hidden');
        });

        container.appendChild(card);
    });
}

// Inicialização automática quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    criarCardsDePersonagens('.character-container');
});