// Template configurations
const templates = [
    {
        id: 'romantic-rose',
        name: '🌹 Romantic Rose',
        bg: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
        particles: 'rose',
        music: 'piano'
    },
    {
        id: 'starry-night',
        name: '⭐ Starry Night',
        bg: 'linear-gradient(135deg, #0f0f23 0%, #2d1b69 50%, #1e3c72 100%)',
        particles: 'stars',
        music: 'violin'
    },
    {
        id: 'sakura',
        name: '🌸 Sakura Love',
        bg: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 50%, #ff8fab 100%)',
        particles: 'sakura',
        music: 'guitar'
    },
    {
        id: 'heart-rain',
        name: '💖 Heart Rain',
        bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        particles: 'hearts',
        music: 'piano'
    },
    {
        id: 'vintage',
        name: '📜 Vintage Love',
        bg: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
        particles: 'notes',
        music: 'guitar'
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    generateTemplates();
});

// Generate template cards
function generateTemplates() {
    const grid = document.getElementById('templatesGrid');
    templates.forEach(template => {
        const card = document.createElement('div');
        card.className = 'template-card';
        card.onclick = () => selectTemplate(template.id);
        card.innerHTML = `
            <h3>${template.name}</h3>
            <div class="demo" style="background: ${template.bg}"></div>
            <p>Penuh animasi romantis dan elemen lucu 💕</p>
        `;
        grid.appendChild(card);
    });
}

// Select template
function selectTemplate(templateId) {
    document.getElementById('templatesGrid').style.display = 'none';
    document.getElementById('editorSection').style.display = 'block';
    
    // Set default values
    document.getElementById('templateSelect').value = templateId;
    document.getElementById('letterTitle').value = 'Kepada Cintaku...';
    document.getElementById('letterContent').value = 'Halo sayangku,\n\nHari ini aku ingin mengatakan betapa aku mencintaimu. Setiap detik bersamamu adalah kebahagiaan terbesarku...\n\n';
    document.getElementById('signature').value = 'Dari: [Nama Kamu]';
    
    updateLivePreview();
}

// Show templates
function showTemplates() {
    document.getElementById('editorSection').style.display = 'none';
    document.getElementById('templatesGrid').style.display = 'grid';
}

// Change template
function changeTemplate() {
    updateLivePreview();
}

// AI Generate Romantic Text (OpenRouter API)
async function generateRomanticText() {
    const aiBtn = document.querySelector('.ai-btn');
    aiBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> AI Berpikir...';
    aiBtn.disabled = true;

    try {
        // Ganti dengan API Key OpenRouter kamu
        const apiKey = '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
