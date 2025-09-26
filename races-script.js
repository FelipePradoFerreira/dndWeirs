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
                <p>${raca.descricao.substring(0, 100)}...</p>
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
    
    // Verifica se é uma raça com sub-raças (como Humano)
    const temSubRacas = raca.HumanoTradicional || raca.Tyinen || raca.Escamados;
    
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
                <div class="raca-descricao">
                    "${raca.descricao}"
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
                    ${!temSubRacas ? `
                    <div class="raca-caracteristica">
                        <strong>Incremento de Habilidade:</strong> ${raca.incrementoHabilidade}
                    </div>
                    ` : ''}
                </div>
            </div>
            
            <div class="raca-coluna">
                ${!temSubRacas ? `
                <div class="raca-secao">
                    <h3>Como um ${raca.nome}, você tem esses traços especiais:</h3>
                    <div class="raca-traços">
                        ${raca.tracos.map((traco, index) => `
                            <div class="raca-traço">
                                <strong>${index + 1}. ${traco.nome}:</strong> ${traco.descricao}
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : `
                <!-- Seção para raças com sub-raças -->
                <div class="raca-secao">
                    <h3>Variantes de ${raca.nome}</h3>
                    ${raca.HumanoTradicional ? `
                    <div class="sub-raca">
                        <h4>Humano Tradicional</h4>
                        <div class="raca-caracteristica">
                            <strong>Incremento de Habilidade:</strong> ${raca.HumanoTradicional.incrementoHabilidade}
                        </div>
                        <div class="raca-traços">
                            ${raca.HumanoTradicional.tracos.map((traco, index) => `
                                <div class="raca-traço">
                                    <strong>${index + 1}. ${traco.nome}:</strong> ${traco.descricao}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}
                    
                    ${raca.Tyinen ? `
                    <div class="sub-raca">
                        <h4>Tyinen</h4>
                        <div class="raca-descricao">
                            ${raca.Tyinen.descrição}
                        </div>
                        <div class="raca-caracteristica">
                            <strong>Incremento de Habilidade:</strong> ${raca.Tyinen.incrementoHabilidade}
                        </div>
                        <div class="raca-traços">
                            ${raca.Tyinen.tracos.map((traco, index) => `
                                <div class="raca-traço">
                                    <strong>${index + 1}. ${traco.nome}:</strong> ${traco.descricao}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}
                    
                    ${raca.Escamados ? `
                    <div class="sub-raca">
                        <h4>Escamados</h4>
                        <div class="raca-descricao">
                            ${raca.Escamados.descricao}
                        </div>
                        <div class="raca-caracteristica">
                            <strong>Incremento de Habilidade:</strong> ${raca.Escamados.incrementoHabilidade}
                        </div>
                        <div class="raca-traços">
                            ${raca.Escamados.tracos.map((traco, index) => `
                                <div class="raca-traço">
                                    <strong>${index + 1}. ${traco.nome}:</strong> ${traco.descricao}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}
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

// Carrega a lista quando a página abre
document.addEventListener('DOMContentLoaded', carregarListaRacas);