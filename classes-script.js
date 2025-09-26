// Função para carregar a lista de classes
function carregarListaClasses() {
    const container = document.getElementById('classes-container');
    
    classesData.forEach(classe => {
        const card = document.createElement('div');
        card.className = 'classe-card';
        card.onclick = () => mostrarDetalhesClasse(classe.id);
        
        card.innerHTML = `
            <div class="classe-card-image">
                <img src="${classe.imagemCard}" alt="${classe.nome}" class="classe-card-img">
            </div>
            <div class="classe-card-content">
                <h3>${classe.nome}</h3>
                <p>${classe.descricaoCurta}</p>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Função para mostrar detalhes da classe
function mostrarDetalhesClasse(id) {
    const classe = classesData.find(c => c.id === id);
    if (!classe) return;
    
    document.getElementById('lista-classes').style.display = 'none';
    const detalhesSection = document.getElementById('detalhes-classe');
    detalhesSection.style.display = 'block';
    
    // Gerar tabela de níveis
    const tabelaNiveisHTML = gerarTabelaNiveis(classe);
    
    detalhesSection.innerHTML = `
        <div class="classe-header">
            <h2 class="classe-titulo">${classe.nome}</h2>
            <button class="btn-fechar" onclick="voltarParaLista()">×</button>
        </div>
        
        <div class="classe-imagem-wide">
            <img src="${classe.imagemWide}" alt="${classe.nome}">
        </div>
        
        <div class="classe-conteudo">
            ${classe.descricaoLonga.map(paragrafo => `
                <div class="classe-descricao">${paragrafo}</div>
            `).join('')}
            
            <!-- Tabela de Traços Principais -->
            <div class="tabela-container">
                <table class="tabela-traços">
                    <thead>
                        <tr>
                            <th colspan="2">Principais Traços de ${classe.nome}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${Object.entries(classe.tracosPrincipais).map(([chave, valor]) => `
                            <tr>
                                <td><strong>${formatarChave(chave)}</strong></td>
                                <td>${valor}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            
            <!-- Tabela de Características por Nível -->
            <h3>Características da Classe ${classe.nome}</h3>
            <p>Como um ${classe.nome}, você ganha as seguintes características de classe quando atinge os níveis específicos.</p>
            
            ${tabelaNiveisHTML}
            
            <!-- Características Detalhadas -->
            <div class="caracteristicas-nivel">
                ${classe.caracteristicas.map(carac => `
                    <div class="nivel-secao">
                        <div class="nivel-titulo">Nível ${carac.nivel}: ${carac.titulo}</div>
                        <div class="nivel-descricao">${carac.descricao}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Sistema de geração de tabelas flexível
function gerarTabelaNiveis(classe) {
    const tabelaConfigs = {
        'combatente-recurso': {
            colunas: ['Nível', 'Bônus de Proficiência', 'Características e Traços', 'Pontos de Vita'],
            dados: (nivel) => [
                nivel.nivel,
                nivel.proficiencia,
                nivel.caracteristicas,
                nivel.pontosVita || '-'
            ],
            classeCSS: 'tabela-combatente'
        },
        
        'conjurador-completo': {
            colunas: ['Nível', 'Bônus de Proficiência', 'Características', 'Recurso', 'Truques', 'Slots de Magia por Nível\n1st 2nd 3rd 4th 5th 6th 7th 8th 9th'],
            dados: (nivel) => [
                nivel.nivel,
                nivel.proficiencia,
                nivel.caracteristicas,
                nivel.recursoClasse || '-',
                nivel.truques || '-',
                gerarSlotsMagia(nivel.slotsMagia)
            ],
            classeCSS: 'tabela-conjurador'
        },

        // Exemplo 3: Conjurador sem recurso
        'conjurador-sem-recurso': {
            colunas: ['Nível', 'Bônus de Proficiência', 'Características', 'Truques', 'Slots de Magia por Nível de Magia'],
            dados: (nivel) => [
                nivel.nivel,
                nivel.proficiencia,
                nivel.caracteristicas,
                nivel.truques || '-',
                gerarSlotsMagia(nivel.slotsMagia)
            ],
            classeCSS: 'tabela-conjurador'
        },
        
        // Exemplo 4: Combatente sem recurso
        'combatente-sem-recurso': {
            colunas: ['Nível', 'Bônus de Proficiência', 'Características e Traços'],
            dados: (nivel) => [
                nivel.nivel,
                nivel.proficiencia,
                nivel.caracteristicas
            ],
            classeCSS: 'tabela-combatente'
        },
        
        // Exemplo 5: Ladino com recurso
        'ladino-com-recurso': {
            colunas: ['Nível', 'Bônus de Proficiência', 'Características', 'Recurso', 'Ataque Furtivo'],
            dados: (nivel) => [
                nivel.nivel,
                nivel.proficiencia,
                nivel.caracteristicas,
                nivel.recursoClasse || '-',
                nivel.ataqueFurtivo || '-'
            ],
            classeCSS: 'tabela-ladino'
        },
        
        // Exemplo 6: Ladino sem recurso
        'ladino-sem-recurso': {
            colunas: ['Nível', 'Bônus de Proficiência', 'Características', 'Ataque Furtivo'],
            dados: (nivel) => [
                nivel.nivel,
                nivel.proficiencia,
                nivel.caracteristicas,
                nivel.ataqueFurtivo || '-'
            ],
            classeCSS: 'tabela-ladino'
        },
        
        // Exemplo 7: Semi-conjurador (Warlock style)
        'semi-conjurador': {
            colunas: ['Nível', 'Bônus de Proficiência', 'Características', 'Truques', 'Magias', 'Espaços', 'Nível Espaços', 'Recurso'],
            dados: (nivel) => [
                nivel.nivel,
                nivel.proficiencia,
                nivel.caracteristicas,
                nivel.truques || '-',
                nivel.magias || '-',
                nivel.slotsMagia || '-',
                nivel.nivelSlots || '-',
                nivel.recursoClasse || '-'
            ],
            classeCSS: 'tabela-semi-conjurador'
        }
    };

    const config = tabelaConfigs[classe.tipoTabela] || tabelaConfigs['combatente-recurso'];
    
    return `
        <div class="tabela-container">
            <table class="tabela-niveis ${config.classeCSS}">
                <thead>
                    <tr>
                        ${config.colunas.map(coluna => `<th>${coluna}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${classe.tabelaNiveis.map(nivel => `
                        <tr>
                            ${config.dados(nivel).map(dado => `<td>${dado}</td>`).join('')}
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// Função auxiliar para gerar visualização de slots de magia
function gerarSlotsMagia(slots) {
    if (!slots) return '-';
    return slots.map(qtd => qtd > 0 ? qtd : '-').join(' ');
}

// Função auxiliar para formatar as chaves da tabela
function formatarChave(chave) {
    const formatacoes = {
        'habilidadePrimaria': 'Habilidade Primária',
        'dadosVida': 'Dados de Vida',
        'proficienciaSalvaguarda': 'Proficiência de Salvaguarda',
        'proficienciaHabilidades': 'Proficiência em Habilidades',
        'proficienciaArmas': 'Proficiência com Armas',
        'proficienciaArmaduras': 'Proficiência com Armaduras',
        'proficienciaFerramentas': 'Proficiência com Ferramentas',
        'equipamentoInicial': 'Equipamento Inicial'
    };
    return formatacoes[chave] || chave;
}

function voltarParaLista() {
    document.getElementById('detalhes-classe').style.display = 'none';
    document.getElementById('lista-classes').style.display = 'block';
}

// Carrega a lista quando a página abre
document.addEventListener('DOMContentLoaded', carregarListaClasses);