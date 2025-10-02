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
    
    // Verifica se é uma raça com sub-raças (como Humano)
    const temSubRacas = raca.HumanoTradicional || raca.Tyinen || raca.Escamado || raca.Resquicios || raca.Teido || raca.Pagona || raca.Volan || raca.FadaTradicional || raca.CentelhaFlora;
    
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
                    <h3>Como ${raca.nome}, você tem esses traços especiais:</h3>
                    <div class="raca-traços">
                        ${raca.tracos.map((traco, index) => `
                            <div class="raca-traço">
                                <strong>${traco.nome}.</strong> ${traco.descrição}
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : `
                <!-- Seção para raças com sub-raças -->
                <div class="raca-secao">
                    <h3>Como ${raca.nome}, você tem esses traços especiais:</h3>
                    ${raca.HumanoTradicional ? `
                    <div class="sub-raca">
                        <h4>Humano Tradicional</h4>
                        <div class="raca-caracteristica">
                            <strong>Incremento de Habilidade:</strong> ${raca.HumanoTradicional.incrementoHabilidade}
                        </div>
                        <div class="raca-traços">
                            ${raca.HumanoTradicional.tracos.map((traco, index) => `
                                <div class="raca-traço">
                                    <strong>${traco.nome}.</strong> ${traco.descrição}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}

                    ${raca.Resquicios ? `
                        ${raca.Resquicios.tracos.map((traco, index) => `
                            <div class="raca-traço">
                                <strong>${traco.nome}.</strong> ${traco.descrição}
                            </div>
                        `).join('')}
                    ` : ''}
                    
                    ${raca.Tyinen ? `
                    <div class="sub-raca">
                        <h4>Tyinen</h4>
                        <div class="raca-descrição">
                            ${raca.Tyinen.descrição}
                        </div>
                        <div class="raca-caracteristica">
                            <strong>Incremento de Habilidade:</strong> ${raca.Tyinen.incrementoHabilidade}
                        </div>
                        <div class="raca-traços">
                            ${raca.Tyinen.tracos.map((traco, index) => `
                                <div class="raca-traço">
                                    <strong>${traco.nome}.</strong> ${traco.descrição}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}
                    
                    ${raca.Escamado ? `
                    <div class="sub-raca">
                        <h4>Escamado</h4>
                        <div class="raca-descrição">
                            ${raca.Escamado.descrição}
                        </div>
                        <div class="raca-caracteristica">
                            <strong>Incremento de Habilidade:</strong> ${raca.Escamado.incrementoHabilidade}
                        </div>
                        <div class="raca-traços">
                            ${raca.Escamado.tracos.map((traco, index) => `
                                <div class="raca-traço">
                                    <strong>${traco.nome}.</strong> ${traco.descrição}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}

                    ${raca.Teido ? `
                    <div class="sub-raca">
                        <h4>Teído</h4>
                        <div class="raca-descrição">
                            ${raca.Teido.descrição}
                        </div>
                        <div class="raca-traços">
                            ${raca.Teido.tracos.map((traco, index) => `
                                <div class="raca-traço">
                                    <strong>${traco.nome}.</strong> ${traco.descrição}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}

                    ${raca.Pagona ? `
                    <div class="sub-raca">
                        <h4>Pagona</h4>
                        <div class="raca-descrição">
                            ${raca.Pagona.descrição}
                        </div>
                        <div class="raca-traços">
                            ${raca.Pagona.tracos.map((traco, index) => `
                                <div class="raca-traço">
                                    <strong>${traco.nome}.</strong> ${traco.descrição}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}

                    ${raca.Volan ? `
                    <div class="sub-raca">
                        <h4>Volan</h4>
                        <div class="raca-descrição">
                            ${raca.Volan.descrição}
                        </div>
                        <div class="raca-traços">
                            ${raca.Volan.tracos.map((traco, index) => `
                                <div class="raca-traço">
                                    <strong>${traco.nome}.</strong> ${traco.descrição}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}

                    ${raca.FadaTradicional ? `
                    <div class="sub-raca">
                        <h4>Fada Tradicional</h4>
                        <div class="raca-caracteristica">
                            <strong>Incremento de Habilidade:</strong> ${raca.FadaTradicional.incrementoHabilidade}
                        </div>
                        <div class="raca-traços">
                            ${raca.FadaTradicional.tracos.map((traco, index) => `
                                <div class="raca-traço">
                                    <strong>${traco.nome}.</strong> ${traco.descrição}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}

                    ${raca.CentelhaFlora ? `
                    <div class="sub-raca">
                        <h4>CentelhaFlora</h4>
                        <div class="raca-descrição">
                            ${raca.CentelhaFlora.descrição}
                        </div>
                        <div class="raca-caracteristica">
                            <strong><br>Incremento de Habilidade:</strong> ${raca.CentelhaFlora.incrementoHabilidade}
                        </div>
                        <div class="raca-traços">
                            ${raca.CentelhaFlora.tracos.map((traco, index) => `
                                <div class="raca-traço">
                                    <strong>${traco.nome}.</strong> ${traco.descrição}
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