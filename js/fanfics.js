// 🔥 Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAOliZchF6RnJblAuDcvNJ5lnpHAATLjkY",
    authDomain: "portal-dobradores.firebaseapp.com",
    projectId: "portal-dobradores",
    storageBucket: "portal-dobradores.firebasestorage.app",
    messagingSenderId: "74372941351",
    appId: "1:74372941351:web:b2065e199b98dc106e7002"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 📚 Fanfic estática para testes
const fanfics = [
    {
        id: "fanfic-1",
        titulo: "A Jornada de Zuko",
        autor: "FogoEterno",
        sinopse: "Zuko parte em busca de redenção...",
        texto: "Após a guerra, Zuko precisou enfrentar o fardo de ser o novo Senhor do Fogo...\nA coroa de ouro ainda era pesada demais para sua cabeça. O trono que antes significava ambição agora representava responsabilidade. As cinzas da guerra mal haviam assentado, e o jovem líder se via cercado por conselheiros que o viam como sombra do pai — e súditos que ainda tremiam ao ouvir o nome “Fogo”.\n\nApesar da vitória do Avatar e da promessa de paz, o mundo estava ferido. E dentro de Zuko, o fogo ainda queimava. Um fogo diferente daquele de Ozai: era o fogo da culpa, da dúvida… e do desejo de fazer o certo.\n\nZuko sabia que governar não bastava. Precisava entender o que seu povo sofrera, o que causara em nome da honra. E então partiu — não como Senhor do Fogo, mas como um homem em busca de redenção.\n\n🌾 Capítulo 1: Os Campos de Jang Hui\n\nA vila de Jang Hui, outrora oprimida por canhoneiras e fumaça, agora florescia com pescadores sorrindo e crianças brincando no cais. Mas quando Zuko chegou, encapuzado, foi recebido com olhares desconfiados. Uma mulher o reconheceu.\n\n— \"Você… você é ele. O príncipe.\"\nZuko abaixou a cabeça.\n— \"Sou. E lamento.\"\n\nO silêncio caiu sobre os presentes como névoa. Até que uma criança se aproximou:\n— \"Você salvou a Toph! Minha avó disse que você ajudou o Avatar.\"\n\nZuko se ajoelhou, surpreso. A avó da criança — a mesma mulher que o acusara — apenas assentiu.\n— \"Palavras não curam feridas. Mas atos… talvez comecem.\"\n\nZuko passou três dias ali, ajudando a reconstruir barcos, pescando ao lado dos homens, e se queimando com panelas improvisadas. Ele não era mais o príncipe intocável. Ele era Zuko.\n\n🌲 Capítulo 2: A Floresta das Vozes\n\nCaminhando ao norte, Zuko adentrou uma floresta densa, onde o vento parecia sussurrar nomes e memórias. Em uma clareira, encontrou um velho.\n\n— \"Se busca perdão, deve encarar suas versões passadas.\"\nZuko cerrou os olhos.\n— \"Minhas cicatrizes são provas disso.\"\n— \"Suas cicatrizes são externas. Mas as internas… essas você ainda evita.\"\n\nNaquela noite, Zuko sonhou com sua mãe. Com Azula. Com Iroh.\nAcordou em lágrimas.\nNão havia resposta simples. Mas havia o caminho.\n\n🌊 Capítulo 3: A Ilha Branca\n\nZuko chegou à Ilha Branca, onde um antigo templo do Fogo fora transformado em orfanato. Crianças de todas as nações ali viviam, sob a guarda de monges e ex-guerreiros.\n\nZuko permaneceu uma semana, sem se apresentar como rei. Ajudava nas refeições, contava histórias junto ao fogo e ria. Ria como não ria desde criança.\n\nUma noite, uma menina perguntou:\n— \"Senhor Zuko, o fogo é mau?\"\n\nZuko respondeu com calma:\n— \"O fogo é vida. É o calor do sol e o brilho das estrelas. Mas pode queimar. Como as pessoas. Depende de como usamos.\"\nEla sorriu.\n— \"Então você é um fogo bom?\"\n— \"Eu… estou tentando ser.\"\n\n⛰️ Capítulo 4: O Retorno\n\nAo retornar à Capital, foi recebido por Mai, por Toph e por Aang. Ele havia partido em silêncio. Mas voltava com propósito.\n\nZuko reuniu o povo em praça pública.\n\n— \"Meu nome é Zuko. Fui inimigo e aliado. Fui perdido e agora me reencontro. A guerra acabou, mas as feridas não. Prometo que essa Nação do Fogo será feita de reconstrução, não de ruína. E que caminharei com vocês. Não acima. Ao lado.\"\n\nHouve silêncio. Depois, aplausos. E pela primeira vez, Zuko sentiu-se não temido… mas respeitado.\n\nE assim, a jornada de redenção de Zuko não terminou com um destino, mas começou com um passo — o mais difícil deles: o de olhar para dentro."

    },
    {
        id: "fanfic-2",
        titulo: "Os Espíritos de Ba Sing Se",
        autor: "Anônimo",
        sinopse: "Algo estranho acontece nas catacumbas...",
        texto: "As lendas falavam de uma criatura que vivia nas profundezas das muralhas...\nA maioria dizia que era invenção de velhos dominadores da Terra para assustar crianças, mas rumores voltaram a circular quando operários começaram a desaparecer durante reparos nas antigas catacumbas de Ba Sing Se.\n\nNão demorou para que Long Feng, mesmo deposto, fosse mencionado. \"O Dai Li ainda guarda segredos sob a cidade\", diziam.\n\n🌒 Capítulo 1: A Investigação\n\nToph foi a primeira a ouvir os rumores em uma carta de uma antiga aluna de sua escola de dominação de metal. Ela levou o assunto ao Avatar. Aang hesitou, mas sabia que a cidade, mesmo após a guerra, ainda tinha feridas escondidas.\n\nKatara, Sokka e Zuko se juntaram à missão.\n\n— \"Eu conheço as paredes dessa cidade melhor do que qualquer um\", disse Toph, batendo o pé no chão.\n— \"E eu conheço bem os segredos que o Dai Li esconde\", completou Zuko.\n\n🌌 Capítulo 2: As Vozes\n\nNo terceiro nível abaixo do palácio, encontraram túneis abandonados. O ar era denso.\n\n— \"Estou ouvindo... cantos?\", disse Aang, franzindo a testa.\n\n— \"Isso é só eco\", rebateu Sokka, nervoso. Mas quando chegaram a uma antiga câmara circular, os ecos se tornaram palavras. Uma voz fraca repetia: \n\n\"A cidade esconde... o que foi deixado...\"\n\nZuko ergueu uma esfera de fogo para iluminar o espaço. Gravuras cobriam as paredes: espíritos antigos, ciclos da lua, e um símbolo da Ordem do Lótus Branco — riscado em sangue seco.\n\n🌑 Capítulo 3: O Guardião\n\nDo centro da sala, o chão tremeu. Uma criatura de pedra e sombra surgiu: sem olhos, com as mãos cobertas de sinos.\n\n— \"Esse... não é um espírito comum\", murmurou Aang, já em posição de defesa.\n\nA batalha foi intensa. O espírito absorvia os golpes físicos. Mas reagia com dor quando Toph pisava forte, fazendo as paredes vibrar.\n\n— \"Ele sente a cidade!\", gritou ela.\n\nAang entrou no Estado Avatar. Entre relâmpagos, água e terra, ele canalizou a energia da câmara. Mas o espírito não atacava — apenas bloqueava o caminho para uma passagem atrás de si.\n\n— \"Ele está... protegendo algo\", percebeu Katara.\n\n🌄 Capítulo 4: O Cofre\n\nApós acalmarem o guardião com energia espiritual, uma passagem foi aberta. Lá dentro: centenas de pergaminhos, máscaras antigas dos Guerreiros Kyoshi, e uma estátua incompleta de um Avatar desconhecido.\n\nUm diário deteriorado trazia uma assinatura: Avatar Szeto. Um nome que Aang mal se lembrava das histórias.\n\n— \"Essa câmara foi selada há séculos. Mas o Dai Li tentou estudar ou controlar isso...\", disse Zuko, lendo os rabiscos.\n\nUm espírito selado. Um conhecimento esquecido. E um aviso: \"O equilíbrio nunca esteve completo em Ba Sing Se.\"\n\n🌕 Epílogo\n\nAang selou novamente a câmara com ajuda de Toph e Katara. O guardião retornou ao centro, como se nunca tivesse se movido.\n\nDo lado de fora, Ba Sing Se parecia tranquila. Mas agora, o time Avatar sabia: nem todas as guerras deixam cicatrizes visíveis. Algumas ficam enterradas — junto aos espíritos que ainda sussurram nos túneis esquecidos."

    }
];

// 🧱 Criação dinâmica dos cards
function renderizarFanfics() {
    const container = document.getElementById("fanfics-container");

    fanfics.forEach((fanfic) => {
        const card = document.createElement("div");
        card.className = "fanfic-card";
        card.innerHTML = `
      <h3>${fanfic.titulo}</h3>
      <p class="autor">👤 ${fanfic.autor}</p>
      <p class="sinopse">${fanfic.sinopse}</p>
      <div class="likes-area">
        <button class="like-btn" onclick="registrarLike('${fanfic.id}')">❤️</button>
        <span id="like-count-${fanfic.id}">0</span>
      </div>
    `;

        card.addEventListener("click", (e) => {
            // Evita que clique no botão de curtir abra o modal
            if (e.target.closest(".like-btn")) return;
            abrirModalFanfic(fanfic);
        });

        container.appendChild(card);
        ouvinteLikes(fanfic.id);
    });
}

// 🧾 Abre modal de leitura
function abrirModalFanfic(fanfic) {
    document.getElementById("modal-titulo").textContent = fanfic.titulo;
    document.getElementById("modal-texto").textContent = fanfic.texto;
    document.getElementById("fanfic-modal").classList.remove("hidden");
}

// ✍️ Abre modal de envio
function abrirModal() {
    document.getElementById("fanficModal").classList.remove("hidden");
}

// 🔕 Fecha ambos os modais
function fecharModal() {
    document.getElementById("fanfic-modal").classList.add("hidden");
    document.getElementById("fanficModal").classList.add("hidden");
}

// 👍 Registra voto único por visitante
function registrarLike(fanficId) {
    const votedKey = `voted-${fanficId}`;
    if (localStorage.getItem(votedKey)) {
        alert("Você já curtiu esta fanfic!");
        return;
    }

    const ref = db.collection("votes").doc(fanficId);

    db.runTransaction(async (tx) => {
        const snap = await tx.get(ref);
        const atual = snap.exists ? snap.data().count : 0;
        tx.set(ref, { count: atual + 1 });
    }).then(() => {
        localStorage.setItem(votedKey, "true");
    });
}

// 👁️ Atualiza likes em tempo real
function ouvinteLikes(fanficId) {
    db.collection("votes").doc(fanficId).onSnapshot((doc) => {
        const count = doc.exists ? doc.data().count : 0;
        document.getElementById(`like-count-${fanficId}`).textContent = `❤️ ${count}`;
    });
}

// 📤 Envia fanfic para Firestore
function enviarFanfic() {
    const titulo = document.getElementById("titulo").value.trim();
    const autor = document.getElementById("autor").value.trim() || "Anônimo";
    const sinopse = document.getElementById("sinopse").value.trim();
    const texto = document.getElementById("texto").value.trim();

    if (!titulo || !sinopse || !texto) {
        alert("Preencha todos os campos obrigatórios.");
        return;
    }

    db.collection("fanfics").add({
        titulo,
        autor,
        sinopse,
        texto,
        dataEnvio: new Date()
    }).then(() => {
        alert("Fanfic enviada com sucesso!");
        fecharModal();
        document.getElementById("titulo").value = "";
        document.getElementById("autor").value = "";
        document.getElementById("sinopse").value = "";
        document.getElementById("texto").value = "";
    }).catch(error => {
        alert("Erro ao enviar fanfic: " + error.message);
    });
}

// 🔄 Executa após carregar o DOM
document.addEventListener("DOMContentLoaded", () => {
    renderizarFanfics();

    // Clique fora do modal de leitura fecha
    const leituraModal = document.getElementById("fanfic-modal");
    leituraModal.addEventListener("click", (e) => {
        if (e.target === leituraModal) {
            fecharModal();
        }
    });

    // Clique fora do modal de envio fecha
    const envioModal = document.getElementById("fanficModal");
    envioModal.addEventListener("click", (e) => {
        if (e.target === envioModal) {
            fecharModal();
        }
    });
});
