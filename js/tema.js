// Alterar o tema entre claro e escuro
// Switch between light mode and dark mode

// Torna a função de inicialização global para ser chamada após o carregamento da navbar
window.initThemeToggle = function() {
    const themeToggle = document.getElementById('toggle');
    if (!themeToggle) return;

    // Remove event listeners duplicados
    themeToggle.replaceWith(themeToggle.cloneNode(true));
    const newThemeToggle = document.getElementById('toggle');

    newThemeToggle.addEventListener('click', () => {
        const currentTheme = getComputedStyle(document.documentElement).getPropertyValue('--background-light');
        // Tema Escuro
        if (currentTheme.trim() === '#e0e0e0') {
            document.documentElement.style.setProperty('--background-light', '#24262a');
            document.documentElement.style.setProperty('--text-light', '#CECECE');
            document.documentElement.style.setProperty('--background-dark', 'white');
            document.documentElement.style.setProperty('--text-dark', '#24262a');
            document.documentElement.style.setProperty('--colorButton-light-hover', 'white');
            document.documentElement.style.setProperty('--colorButton-dark-hover', '#24262a');
            document.documentElement.style.setProperty('--split-background-white', '#2e3033');
            document.documentElement.style.setProperty('--theme-toggle-white', 'gold');
            document.documentElement.style.setProperty('--navBarColor-dark', 'rgba(255, 255, 255, 0.9)');
        } else {
            // Tema Claro
            document.documentElement.style.setProperty('--background-light', '#e0e0e0');
            document.documentElement.style.setProperty('--text-light', '#24262a');
            document.documentElement.style.setProperty('--background-dark', '#24262a');
            document.documentElement.style.setProperty('--text-dark', '#e0e0e0');
            document.documentElement.style.setProperty('--colorButton-light-hover', '#24262a');
            document.documentElement.style.setProperty('--colorButton-dark-hover', 'white');
            document.documentElement.style.setProperty('--split-background-white', '#ccc9c9');
            document.documentElement.style.setProperty('--theme-toggle-white', 'white');
            document.documentElement.style.setProperty('--navBarColor-dark', 'rgba(36, 38, 42, 0.9)');
        }
    });
};