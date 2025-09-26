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
    
    // Gerar tabela de níveis dinamicamente baseada no tipo de classe
    const tabelaNiveisHTML = gerarTabelaNiveis(classe);
    
    detalhesSection.innerHTML = `
        <div class="classe-header">
            <h2 class="classe-titulo">${classe.nome}</h2>
            <button class="btn-fechar" onclick="voltarParaLista()">×</button>
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
            <p>Como um ${classe.nome}, você ganha as seguintes características de classe quando atinge os níveis específicos. Essas características estão listadas na tabela abaixo.</p>
            
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

// Função para gerar tabelas de níveis diferentes baseadas no tipo de classe
function gerarTabelaNiveis(classe) {
    if (classe.tipo === 'conjurador') {
        return `
            <div class="tabela-container">
                <table class="tabela-niveis tabela-conjuradores">
                    <thead>
                        <tr>
                            <th>Nível</th>
                            <th>Bônus de Proficiência</th>
                            <th>Características</th>
                            <th>Espaços de Magia</th>
                            <th>Truques</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${classe.tabelaNiveis.map(nivel => `
                            <tr>
                                <td>${nivel.nivel}</td>
                                <td>${nivel.proficiencia}</td>
                                <td>${nivel.caracteristicas}</td>
                                <td>${nivel.espacosMagia.join('/')}</td>
                                <td>${nivel.truques}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    } else {
        return `
            <div class="tabela-container">
                <table class="tabela-niveis">
                    <thead>
                        <tr>
                            <th>Nível</th>
                            <th>Bônus de Proficiência</th>
                            <th>Características e Traços</th>
                            <th>Pontos de Vita</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${classe.tabelaNiveis.map(nivel => `
                            <tr>
                                <td>${nivel.nivel}</td>
                                <td>${nivel.proficiencia}</td>
                                <td>${nivel.caracteristicas}</td>
                                <td>${nivel.pontosVita || '-'}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }
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

document.addEventListener('DOMContentLoaded', carregarListaClasses);