

// assets/app.js — small JS: search, mobile init, charts (Chart.js)
document.addEventListener('DOMContentLoaded', function () {
    // Materialize init
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);

    // Simple client-side search (title + excerpt)
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const q = this.value.toLowerCase();
            document.querySelectorAll('.article-card').forEach(card => {
                const text = (card.dataset.title + ' ' + card.dataset.excerpt).toLowerCase();
                card.style.display = text.includes(q) ? '' : 'none';
            });
        });
    }

    // Charts (if present)
    if (document.getElementById('chart-hydration')) {
        const ctx = document.getElementById('chart-hydration').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Water', 'Orange Juice', 'Apple Juice', 'Smoothie'],
                datasets: [{
                    label: 'Hydration factor (per 250ml)',
                    data: [100, 90, 88, 80],
                    borderWidth: 1
                }]
            },
            options: { plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }
        });
    }

    if (document.getElementById('chart-nutrients')) {
        const ctx = document.getElementById('chart-nutrients').getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Vitamin C', 'Sugar (g)', 'Potassium', 'Fiber (g)'],
                datasets: [{ data: [45, 30, 15, 10] }]
            },
            options: { plugins: { legend: { position: 'bottom' } } }
        });
    }

});



