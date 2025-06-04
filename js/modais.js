// Abrir modal ao clicar no botão
document.getElementById('btn-air').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('modal-air').classList.add('active');
});
document.getElementById('btn-water').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('modal-water').classList.add('active');
});
document.getElementById('btn-earth').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('modal-earth').classList.add('active');
});
document.getElementById('btn-fire').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('modal-fire').classList.add('active');
});

// Fechar modal ao clicar no X ou fora do conteúdo
document.getElementById('fechar-modal-air').addEventListener('click', function () {
    document.getElementById('modal-air').classList.remove('active');
});
document.getElementById('fechar-modal-water').addEventListener('click', function () {
    document.getElementById('modal-water').classList.remove('active');
});
document.getElementById('fechar-modal-earth').addEventListener('click', function () {
    document.getElementById('modal-earth').classList.remove('active');
});
document.getElementById('fechar-modal-fire').addEventListener('click', function () {
    document.getElementById('modal-fire').classList.remove('active');
});

document.querySelectorAll('.modal').forEach(function (modal) {
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});

