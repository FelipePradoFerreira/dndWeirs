function carregarListaFeats() {
    const container = document.getElementById('feats-container');
    
    featsData.forEach(feat => {
        const card = document.createElement('div');
        card.className = 'feat-card';
        card.onclick = () => mostrarDetalhesFeat(feat.id);
        
        const requisitos = feat.niveis ? `Nível ${feat.niveis[0].nivel} - ${feat.niveis[0].requisitos}` : feat.requisitos;
        
        card.innerHTML = `
            <h3>${feat.nome}</h3>
            <div class="requisitos">${requisitos}</div>
        `;
        
        container.appendChild(card);
    });
    
    // Verifica se há um talento específico para abrir
    const talentoParaAbrir = localStorage.getItem('talentoParaAbrir');
    if (talentoParaAbrir) {
        mostrarDetalhesFeat(parseInt(talentoParaAbrir));
        localStorage.removeItem('talentoParaAbrir');
    }
}

function mostrarDetalhesFeat(id) {
    const feat = featsData.find(f => f.id === id);
    if (!feat) return;
    
    document.getElementById('lista-feats').style.display = 'none';
    const detalhesSection = document.getElementById('detalhes-feat');
    detalhesSection.style.display = 'block';
    
    let conteudoFeat = '';
    
    if (feat.niveis) {
        // Talento com múltiplos níveis (como Destruidor Entrópico)
        conteudoFeat = feat.niveis.map(nivel => `
            <div class="feat-nivel">
                <div class="feat-nivel-titulo">${feat.nome} (Nível ${nivel.nivel})</div>
                <div class="feat-requisitos"><strong>Requisitos:</strong> ${nivel.requisitos}</div>
                <div class="feat-descricao">${nivel.descricao}</div>
                <div class="feat-info">
                    <h4>Benefícios:</h4>
                    <ul>
                        ${nivel.beneficios.map(beneficio => `<li>${beneficio}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');
    } else {
        // Talento simples
        conteudoFeat = `
            <div class="feat-info">
                <h4>Requisitos:</h4>
                <p>${feat.requisitos}</p>
            </div>
            
            <div class="feat-descricao">
                ${feat.descricao}
            </div>
            
            <div class="feat-info">
                <h4>Benefícios:</h4>
                <ul>
                    ${feat.beneficios.map(beneficio => `<li>${beneficio}</li>`).join('')}
                </ul>
            </div>
            
            ${feat.podeRepetir ? `
            <div class="feat-info">
                <h4>Pode ser escolhido múltiplas vezes:</h4>
                <p>${feat.descricaoRepeticao || 'Cada vez que escolher este talento, ganha benefícios adicionais.'}</p>
            </div>
            ` : ''}
        `;
    }
    
    detalhesSection.innerHTML = `
        <div class="feat-header">
            <h2 class="feat-titulo">${feat.nome}</h2>
            <button class="btn-fechar" onclick="voltarParaListaFeats()">×</button>
        </div>
        
        <div class="feat-conteudo">
            ${conteudoFeat}
        </div>
    `;
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function voltarParaListaFeats() {
    document.getElementById('detalhes-feat').style.display = 'none';
    document.getElementById('lista-feats').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', carregarListaFeats);