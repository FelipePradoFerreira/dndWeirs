// Função para carregar a lista de raças
function carregarListaRacas() {
    const container = document.getElementById('cards-container');
    
    racasData.forEach(raca => {
        const card = document.createElement('div');
        card.className = 'raca-card';
        card.onclick = () => mostrarDetalhesRaca(raca.id);
        
        card.innerHTML = `
            <div class="raca-card-image">
                <img src="${raca.imagemCard}" alt="${raca.nome}" class="raca-card-img">
            </div>
            <div class="raca-card-content">
                <h3>${raca.nome}</h3>
                <p>${raca.descrição.substring(0, 100)}...</p>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Função para mostrar detalhes da raça
function mostrarDetalhesRaca(id) {
    const raca = racasData.find(r => r.id === id);
    if (!raca) return;
    
    // Esconde a lista e mostra os detalhes
    document.getElementById('lista-racas').style.display = 'none';
    const detalhesSection = document.getElementById('detalhes-raca');
    detalhesSection.style.display = 'block';
    
    // Verifica se tem sub-raças ou traços comuns
    const temSubRacas = raca.subRacas && raca.subRacas.length > 0;
    const temTracosComuns = raca.tracosComuns && raca.tracosComuns.length > 0;
    const temTracosNormais = raca.tracos && raca.tracos.length > 0;
    
    // Preenche os detalhes
    detalhesSection.innerHTML = `
        <div class="raca-header">
            <h2 class="raca-titulo">${raca.nome}</h2>
            <button class="btn-fechar" onclick="voltarParaLista()">×</button>
        </div>
        
        <div class="raca-imagem-wide">
            <img src="${raca.imagemWide}" alt="${raca.nome}">
        </div>
        
        <div class="raca-conteudo">
            <div class="raca-coluna">
                <div class="artista-credito">
                    <a href="${raca.paginaartista}" target="_blank">Arte por: ${raca.arte}</a>
                </div>

                <div class="raca-descrição">
                    ${raca.descrição}
                </div>
                
                <div class="raca-secao">
                    <h3>Características dos ${raca.nome}</h3>
                    <div class="raca-caracteristica">
                        <strong>Tipo de criatura:</strong> ${raca.caracteristicas.tipo}
                    </div>
                    <div class="raca-caracteristica">
                        <strong>Idade:</strong> ${raca.caracteristicas.idade}
                    </div>
                    <div class="raca-caracteristica">
                        <strong>Tamanho:</strong> ${raca.caracteristicas.tamanho}
                    </div>
                    <div class="raca-caracteristica">
                        <strong>Velocidade:</strong> ${raca.caracteristicas.velocidade}
                    </div>
                    <div class="raca-caracteristica">
                        <strong>Linguagem:</strong> ${raca.caracteristicas.linguagem}
                    </div>
                    ${raca.incrementoHabilidade ? `
                    <div class="raca-caracteristica">
                        <strong>Incremento de Habilidade:</strong> ${raca.incrementoHabilidade}
                    </div>
                    ` : ''}
                </div>
            </div>
            
            <div class="raca-coluna">
                ${!temSubRacas && temTracosNormais ? `
                <!-- Raças sem sub-raças (como Taurino) -->
                <div class="raca-secao">
                    <h3>Como ${raca.nome}, você tem esses traços especiais:</h3>
                    <div class="raca-traços">
                        ${raca.tracos.map(traco => `
                            <div class="raca-traço">
                                <strong>${traco.nome}.</strong> ${traco.descrição}
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : `
                <!-- Raças com sub-raças -->
                <div class="raca-secao">
                    <h3>Como ${raca.nome}, você tem esses traços especiais:</h3>
                    
                    ${temTracosComuns ? `
                        <div class="raca-traços">
                            ${raca.tracosComuns.map(traco => `
                                <div class="raca-traço">
                                    <strong>${traco.nome}.</strong> ${traco.descrição}
                                </div>
                            `).join('')}
                    ` : ''}
                    
                    <!-- Renderiza cada sub-raça -->
                    ${temSubRacas ? raca.subRacas.map(subRaca => `
                        <div class="sub-raca">
                            <h4>${subRaca.nome}</h4>
                            ${subRaca.descrição ? `
                                <div class="raca-descrição">
                                    ${subRaca.descrição}
                                </div>
                            ` : ''}
                            ${subRaca.incrementoHabilidade ? `
                                <div class="raca-caracteristica">
                                    <strong>Incremento de Habilidade:</strong> ${subRaca.incrementoHabilidade}
                                </div>
                            ` : ''}
                            <div class="raca-traços">
                                ${subRaca.tracos.map(traco => `
                                    <div class="raca-traço">
                                        <strong>${traco.nome}.</strong> ${traco.descrição}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('') : ''}
                </div>
                `}
            </div>
        </div>
    `;
    
    // Rolagem suave para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função para voltar à lista
function voltarParaLista() {
    document.getElementById('detalhes-raca').style.display = 'none';
    document.getElementById('lista-racas').style.display = 'block';
}

// Configura o clique fora da área de detalhes para fechar
document.addEventListener('click', function(event) {
    const detalhesSection = document.getElementById('detalhes-raca');
    const listaRacas = document.getElementById('lista-racas');
    
    // Se a seção de detalhes está visível E o clique foi fora dela
    // E não foi em um card da lista
    if (detalhesSection.style.display === 'block' && 
        !detalhesSection.contains(event.target) &&
        !event.target.closest('.raca-card')) {
        voltarParaLista();
    }
});

// Carrega a lista quando a página abre
document.addEventListener('DOMContentLoaded', carregarListaRacas);