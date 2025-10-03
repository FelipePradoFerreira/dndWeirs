// Função para carregar a lista de raças organizada por planos
function carregarListaRacas() {
    const container = document.getElementById('cards-container');
    container.innerHTML = ''; // Limpa o container
    
    // Agrupa raças por plano
    const racasPorPlano = {};
    racasData.forEach(raca => {
        if (!racasPorPlano[raca.plano]) {
            racasPorPlano[raca.plano] = [];
        }
        racasPorPlano[raca.plano].push(raca);
    });
    
    // Cria seções para cada plano
    Object.keys(racasPorPlano).forEach(plano => {
        const racasDoPlano = racasPorPlano[plano];
        
        // Cria o cabeçalho do plano
        const planoHeader = document.createElement('div');
        planoHeader.className = 'plano-header';
        planoHeader.innerHTML = `<h2>${plano}</h2>`;
        container.appendChild(planoHeader);
        
        // Cria container para os cards do plano
        const planoContainer = document.createElement('div');
        planoContainer.className = 'plano-cards-container';
        
        // Adiciona os cards das raças deste plano
        racasDoPlano.forEach(raca => {
            const card = document.createElement('div');
            card.className = 'raca-card';
            card.onclick = () => mostrarDetalhesRaca(raca.id);
            card.tabIndex = 0; // Torna o card focável para acessibilidade
            
            card.innerHTML = `
                <div class="raca-card-image">
                    <img src="${raca.imagemCard}" alt="${raca.nome}" class="raca-card-img">
                </div>
                <div class="raca-card-content">
                    <h3>${raca.nome}</h3>
                    <p>${raca.descrição.substring(0, 100)}...</p>
                </div>
            `;
            
            // Adiciona suporte a Enter/Space para acessibilidade
            card.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    mostrarDetalhesRaca(raca.id);
                }
            });
            
            planoContainer.appendChild(card);
        });
        
        container.appendChild(planoContainer);
    });
}

let scrollPosition = 0;

// Função para mostrar detalhes da raça
function mostrarDetalhesRaca(id) {
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

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
            <button class="btn-fechar" onclick="voltarParaLista()" aria-label="Fechar detalhes">×</button>
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
    
    // Foca no botão de fechar para acessibilidade
    const btnFechar = detalhesSection.querySelector('.btn-fechar');
    if (btnFechar) {
        btnFechar.focus();
    }
    
    // Rolagem suave para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Função para voltar à lista
function voltarParaLista() {
    const detalhesSection = document.getElementById('detalhes-raca');
    const listaRacas = document.getElementById('lista-racas');
    
    if (detalhesSection && listaRacas) {
        detalhesSection.style.display = 'none';
        listaRacas.style.display = 'block';
        
        // Foca no início da lista para acessibilidade
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Função para configurar o evento da tecla Esc
function configurarTeclaEsc() {
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' || event.keyCode === 27) {
            const detalhesSection = document.getElementById('detalhes-raca');
            if (detalhesSection && detalhesSection.style.display === 'block') {
                voltarParaLista();
            }
        }
    });
}

// Configura o clique fora da área de detalhes para fechar
document.addEventListener('click', function(event) {
    const detalhesSection = document.getElementById('detalhes-raca');
    const listaRacas = document.getElementById('lista-racas');
    
    // Se a seção de detalhes está visível E o clique foi fora dela
    // E não foi em um card da lista
    if (detalhesSection && detalhesSection.style.display === 'block' && 
        !detalhesSection.contains(event.target) &&
        !event.target.closest('.raca-card')) {
        voltarParaLista();
    }
});

// Carrega a lista quando a página abre e configura a tecla Esc
document.addEventListener('DOMContentLoaded', function() {
    carregarListaRacas();
    configurarTeclaEsc();
});

function voltarParaLista() {
    const detalhesSection = document.getElementById('detalhes-raca');
    const listaRacas = document.getElementById('lista-racas');
    
    if (detalhesSection && listaRacas) {
        detalhesSection.style.display = 'none';
        listaRacas.style.display = 'block';
        
        // Restaura a posição instantaneamente
        window.scrollTo({ top: scrollPosition, behavior: 'instant' });
    }
}