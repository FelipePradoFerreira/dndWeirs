function carregarListaRacas() {
    const container = document.getElementById('cards-container');
    if (!container) {
        console.error('Container de raças não encontrado');
        return;
    }
    
    container.innerHTML = '';
    
    const racasPorPlano = {};
    
    racasData.forEach(raca => {
        if (raca.plano) {
            if (!racasPorPlano[raca.plano]) {
                racasPorPlano[raca.plano] = [];
            }
            racasPorPlano[raca.plano].push(raca);
        }
    });
    
    const planos = Object.keys(racasPorPlano);
    if (planos.length === 0) {
        container.innerHTML = '<p>Nenhuma raça encontrada.</p>';
        return;
    }
    
    planos.forEach(planoKey => {
        const racasDoPlano = racasPorPlano[planoKey];
        const nomePlano = planoKey.charAt(0).toUpperCase() + planoKey.slice(1);
        
        // Cria container principal do plano
        const planoContainer = document.createElement('div');
        planoContainer.className = 'plano-container';
        
        // Cria cabeçalho do plano
        const planoHeader = document.createElement('div');
        planoHeader.className = 'plano-header';
        planoHeader.innerHTML = `<h2>${nomePlano}</h2>`;
        planoContainer.appendChild(planoHeader);
        
        // Cria container para os cards
        const cardsContainer = document.createElement('div');
        cardsContainer.className = 'plano-cards-container';
        cardsContainer.id = `cards-${planoKey}`;
        
        // Determina se precisa do sistema de expandir (APENAS se tiver MAIS de 6 raças)
        const precisaExpandir = racasDoPlano.length > 6;
        
        // Se precisa expandir, aplica a classe limitado e mostra 6 raças
        if (precisaExpandir) {
            cardsContainer.classList.add('limitado');
            // Mostra as primeiras 6 raças
            const racasParaMostrar = racasDoPlano.slice(0, 6);
            racasParaMostrar.forEach(raca => {
                const card = criarCardRaca(raca);
                cardsContainer.appendChild(card);
            });
        } else {
            // Mostra TODAS as raças (6 ou menos)
            racasDoPlano.forEach(raca => {
                const card = criarCardRaca(raca);
                cardsContainer.appendChild(card);
            });
        }
        
        planoContainer.appendChild(cardsContainer);
        
        // Adiciona botão de expandir APENAS se tiver MAIS de 6 raças
        if (precisaExpandir) {
            const expandirSection = document.createElement('div');
            expandirSection.className = 'plano-expandir';
            
            const btnExpandir = document.createElement('button');
            btnExpandir.className = 'btn-expandir';
            btnExpandir.innerHTML = '↓';
            btnExpandir.setAttribute('aria-label', `Expandir raças de ${nomePlano}`);
            
            const contador = document.createElement('div');
            contador.className = 'contador-raças';
            contador.textContent = `+${racasDoPlano.length - 6} raças restantes`;
            
            btnExpandir.addEventListener('click', () => {
                toggleExpansaoPlano(planoKey, cardsContainer, btnExpandir, contador, racasDoPlano);
            });
            
            expandirSection.appendChild(btnExpandir);
            expandirSection.appendChild(contador);
            planoContainer.appendChild(expandirSection);
        }
        
        container.appendChild(planoContainer);
    });
}

// Função auxiliar para criar cards de raça
function criarCardRaca(raca) {
    const card = document.createElement('div');
    card.className = 'raca-card';
    card.onclick = () => mostrarDetalhesRaca(raca.id);
    card.tabIndex = 0;
    
    card.innerHTML = `
        <div class="raca-card-image">
            <img src="${raca.imagemCard}" alt="${raca.nome}" class="raca-card-img">
        </div>
        <div class="raca-card-content">
            <h3>${raca.nome}</h3>
            <p>${raca.descrição.substring(0, 100)}...</p>
        </div>
    `;
    
    card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            mostrarDetalhesRaca(raca.id);
        }
    });
    
    return card;
}

// Função para expandir/recolher plano
function toggleExpansaoPlano(planoKey, cardsContainer, btnExpandir, contador, todasRacas) {
    const estaExpandido = !cardsContainer.classList.contains('limitado');
    
    if (estaExpandido) {
        // Recolher - mostra apenas 6 primeiras
        cardsContainer.classList.add('limitado');
        btnExpandir.classList.remove('expandido');
        contador.textContent = `+${todasRacas.length - 6} raças restantes`;
        contador.style.display = 'block';
        
        // Remove cards extras (mantém apenas os 6 primeiros)
        const cards = cardsContainer.querySelectorAll('.raca-card');
        cards.forEach((card, index) => {
            if (index >= 6) {
                card.remove();
            }
        });
        
        // Rola suavemente para a seção do plano
        cardsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        // Expandir - mostra todas as raças
        cardsContainer.classList.remove('limitado');
        btnExpandir.classList.add('expandido');
        contador.style.display = 'none';
        
        // Adiciona TODAS as raças restantes
        const cardsAtuais = cardsContainer.querySelectorAll('.raca-card').length;
        if (cardsAtuais < todasRacas.length) {
            const racasRestantes = todasRacas.slice(cardsAtuais);
            racasRestantes.forEach(raca => {
                const card = criarCardRaca(raca);
                cardsContainer.appendChild(card);
            });
        }
    }
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