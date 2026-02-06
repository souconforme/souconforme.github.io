// Sou Conforme - Hero section animation
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    const canvas = document.getElementById('bg-canvas');
    if (!hero || !canvas) return;

    const ctx = canvas.getContext('2d');
    let cells = [];

    // Compliance keywords
    const words = [
        'NR-1', 'Lei 14.457', 'CIPA', 'Compliance', 'Certificação',
        'Treinamento', 'Segurança', 'Adequação', 'Auditoria', 'PGR',
        'Riscos', 'Psicossociais', 'Assédio', 'Prevenção', 'Selo',
        'Conforme', 'Legal', 'Trabalhista'
    ];

    function setup() {
        // Size to hero section
        canvas.width = hero.offsetWidth;
        canvas.height = hero.offsetHeight;

        cells = [];
        const gapX = 110;
        const gapY = 45;

        for (let y = 30; y < canvas.height; y += gapY) {
            for (let x = 20; x < canvas.width; x += gapX) {
                cells.push({
                    x: x,
                    y: y,
                    text: words[Math.floor(Math.random() * words.length)],
                    lit: Math.random() < 0.2
                });
            }
        }
        render();
    }

    function render() {
        ctx.fillStyle = '#ffffff'; // white
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = '14px JetBrains Mono, monospace';

        cells.forEach(c => {
            ctx.fillStyle = c.lit ? 'rgba(0,79,0,0.15)' : 'rgba(0,0,0,0.05)'; // Verde quando aceso
            ctx.fillText(c.text, c.x, c.y);
        });
    }

    function toggle() {
        const count = Math.max(1, Math.floor(cells.length * 0.05));
        for (let i = 0; i < count; i++) {
            const idx = Math.floor(Math.random() * cells.length);
            cells[idx].lit = !cells[idx].lit;
        }
        render();
    }

    setup();
    window.addEventListener('resize', setup);
    setInterval(toggle, 300);

    // Header scroll
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }
});
