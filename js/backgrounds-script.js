function carregarListaBackgrounds() {
    const container = document.getElementById('backgrounds-container');
    
    backgroundsData.forEach(background => {
        const card = document.createElement('div');
        card.className = 'background-card';
        card.onclick = () => mostrarDetalhesBackground(background.id);
        
        card.innerHTML = `
            <h3>${background.nome}</h3>
        `;
        
        container.appendChild(card);
    });
}

function mostrarDetalhesBackground(id) {
    const background = backgroundsData.find(b => b.id === id);
    if (!background) return;
    
    document.getElementById('lista-backgrounds').style.display = 'none';
    const detalhesSection = document.getElementById('detalhes-background');
    detalhesSection.style.display = 'block';
    
    detalhesSection.innerHTML = `
        <div class="background-header">
            <h2 class="background-titulo">${background.nome}</h2>
            <button class="btn-fechar" onclick="voltarParaListaBackgrounds()">×</button>
        </div>
        
        <div class="background-conteudo">
            <div class="background-descricao">
                ${background.descricao}
            </div>
            
            <div class="background-info">
                <h4>Talento:</h4>
                <span class="background-talento-link" onclick="abrirTalento(${background.talento.id})">
                    ${background.talento.nome}
                </span>
            </div>
            
            <div class="background-info">
                <h4>Perícias:</h4>
                <p>${background.pericias}</p>
            </div>
            
            <div class="background-info">
                <h4>Proficiência em Ferramentas:</h4>
                <p>${background.proficienciaFerramentas}</p>
            </div>
            
            <div class="background-info">
                <h4>Equipamento:</h4>
                <p>${background.equipamento}</p>
            </div>
        </div>
    `;
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function abrirTalento(talentoId) {
    // Salva o ID do talento para usar na página de talentos
    localStorage.setItem('talentoParaAbrir', talentoId);
    // Redireciona para a página de talentos
    window.location.href = 'feats.html';
}

function voltarParaListaBackgrounds() {
    document.getElementById('detalhes-background').style.display = 'none';
    document.getElementById('lista-backgrounds').style.display = 'block';
}

// Configura o clique fora da área de detalhes para fechar
document.addEventListener('click', function(event) {
    const detalhesSection = document.getElementById('detalhes-background');
    const listaBackgrounds = document.getElementById('lista-backgrounds');
    
    // Se a seção de detalhes está visível E o clique foi fora dela
    // E não foi em um card da lista
    if (detalhesSection.style.display === 'block' && 
        !detalhesSection.contains(event.target) &&
        !event.target.closest('.background-card')) {
        voltarParaListaBackgrounds();
    }
});

document.addEventListener('DOMContentLoaded', carregarListaBackgrounds);