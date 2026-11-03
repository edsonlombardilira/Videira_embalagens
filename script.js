/**
 * Videira Embalagens (Rua dos Missionários) - JS Alegre & Interativo
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Rolagem suave
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    console.log('Novo Site Festivo Videira Embalagens Carregado com Sucesso!');
});
