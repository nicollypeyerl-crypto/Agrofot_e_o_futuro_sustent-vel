document.addEventListener('DOMContentLoaded', () => {
    
    // --- FUNCIONALIDADE 1: MODO ESCURO (DARK MODE) ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Verifica se o usuário já tinha uma preferência salva anteriormente
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            themeToggleBtn.textContent = '☀️ Modo Claro';
        }
    }

    // Escuta o clique no botão de mudar o tema
    themeToggleBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggleBtn.textContent = '🌓 Modo Escuro';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.textContent = '☀️ Modo Claro';
        }
    });


    // --- FUNCIONALIDADE 2: ENVIO DO FORMULÁRIO DE CONTATO ---
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', (e) => {
        // Impede a página de recarregar ao enviar o formulário
        e.preventDefault();

        // Pega os valores preenchidos (pode usar para enviar para uma API futuramente)
        const name = document.getElementById('name').value;

        // Exibe mensagem de sucesso na tela
        formMessage.textContent = `Obrigado pelo contato, ${name}! Sua mensagem sobre o futuro sustentável foi enviada com sucesso.`;
        formMessage.className = 'success'; // Aplica a estilização verde de sucesso
        formMessage.classList.remove('hidden');

        // Limpa os campos do formulário após o envio
        contactForm.reset();
    });
});
