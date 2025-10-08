// Variável global para armazenar a posição do scroll
let scrollPositionClasses = 0;

// Função para carregar a lista de classes
function carregarListaClasses() {
    const container = document.getElementById('classes-container');
    
    classesData.forEach(classe => {
        const card = document.createElement('div');
        card.className = 'classe-card';
        card.onclick = (event) => {
                mostrarDetalhesClasse(classe.id, event);
            };
        card.tabIndex = 0;
        
        card.innerHTML = `
            <div class="classe-card-image">
                <img src="${classe.imagemCard}" alt="${classe.nome}" class="classe-card-img">
            </div>
            <div class="classe-card-content">
                <h3>${classe.nome}</h3>
                <p>${classe.descricaoCurta}</p>
            </div>
        `;
        
        // Suporte a teclado para acessibilidade
        card.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                mostrarDetalhesClasse(classe.id, event); // ← Passe o evento
            }
        });
        
        container.appendChild(card);
    });
}

// Função para mostrar detalhes da classe
function mostrarDetalhesClasse(id, event) {
    // Se um evento foi passado, previne a propagação
    if (event) {
        event.stopPropagation();
        event.preventDefault();
    }
    
    // Salva a posição do scroll
    scrollPositionClasses = window.pageYOffset || document.documentElement.scrollTop;
    
    const classe = classesData.find(c => c.id === id);
    if (!classe) {
        console.error('Classe não encontrada com ID:', id);
        return;
    }
    
    console.log('Carregando detalhes da classe:', classe);
    
    document.getElementById('lista-classes').style.display = 'none';
    const detalhesSection = document.getElementById('detalhes-classe');
    detalhesSection.style.display = 'block';
    
    // Gera o conteúdo modular baseado nas seções
    const conteudoModular = gerarConteudoModular(classe);
    
    detalhesSection.innerHTML = `
        <div class="classe-header">
            <h2 class="classe-titulo">${classe.nome}</h2>
            <button class="btn-fechar" onclick="voltarParaListaClasses()" aria-label="Fechar detalhes">×</button>
        </div>
        
        <div class="classe-layout-principal">
            ${conteudoModular}
        </div>
    `;
    
    // Foca no botão de fechar para acessibilidade
    const btnFechar = detalhesSection.querySelector('.btn-fechar');
    if (btnFechar) {
        btnFechar.focus();
    }
}


// Função para gerar conteúdo modular baseado nas seções
function gerarConteudoModular(classe) {
    let html = '';
    
    if (!classe.secoes || !Array.isArray(classe.secoes)) {
        console.error('Classe não tem seções definidas:', classe);
        return '<p>Erro: Seções não definidas para esta classe.</p>';
    }
    
    // Encontra as seções específicas
    const secaoDescricao = classe.secoes.find(s => s.tipo === 'descricao');
    const secaoTraços = classe.secoes.find(s => s.tipo === 'tracosPrincipais');
    
    // Gera o layout de três colunas (imagem - espaçamento - conteúdo)
    html += `
        <div class="secao-principal">
            <div class="coluna-imagem">
                <div class="classe-imagem-vertical">
                    <img src="${classe.imagemVertical || classe.imagemCard}" alt="${classe.nome}">
                    <div class="artista-credito">
                        <a href="${classe.paginaartista || '#'}" target="_blank">Arte por: ${classe.arte || 'Artista'}</a>
                    </div>
                </div>
            </div>
            <div class="coluna-espacamento"></div>
            <div class="coluna-conteudo">
                ${secaoDescricao ? gerarSecaoDescricao(secaoDescricao) : ''}
                ${secaoTraços ? gerarSecaoTraçosPrincipais(secaoTraços) : ''}
            </div>
        </div>
    `;
    
    function gerarSecaoTabelaNiveis(secao) {
    if (!secao.linhas || !Array.isArray(secao.linhas)) {
        return `<div class="erro-secao">
                    <p>Tabela de níveis não definida corretamente.</p>
                </div>`;
    }
    
    const colunas = secao.colunas || ['Nível', 'Características'];
    
    return `
        <div class="secao-tabela-niveis">
            <h3>${secao.titulo || 'Progressão da Classe'}</h3>
            ${secao.descricao ? `<p class="tabela-descricao">${secao.descricao}</p>` : ''}
            <div class="tabela-container">
                <table class="tabela-niveis">
                    <thead>
                        <tr>
                            ${colunas.map(coluna => `<th>${coluna}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${secao.linhas.map(linha => `
                            <tr>
                                ${colunas.map(coluna => {
                                    // Tenta várias formas de encontrar a chave
                                    const chaveSimples = coluna.toLowerCase().replace(/[^a-z0-9]/g, '');
                                    const chaveSemAcentos = coluna.toLowerCase()
                                        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
                                        .replace(/[^a-z0-9]/g, '');
                                    
                                    // Tenta encontrar o valor em várias chaves possíveis
                                    let valor = '-';
                                    if (linha[chaveSimples]) valor = linha[chaveSimples];
                                    else if (linha[chaveSemAcentos]) valor = linha[chaveSemAcentos];
                                    else if (linha[coluna.toLowerCase()]) valor = linha[coluna.toLowerCase()];
                                    else if (linha[coluna]) valor = linha[coluna];
                                    
                                    return `<td>${valor}</td>`;
                                }).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

    // Adiciona as outras seções abaixo do layout principal
    const outrasSecoes = classe.secoes.filter(s => s.tipo !== 'descricao' && s.tipo !== 'tracosPrincipais');
    
    outrasSecoes.forEach((secao, index) => {
        try {
            switch(secao.tipo) {
                case 'tabelaNiveis':
                    html += gerarSecaoTabelaNiveis(secao);
                    break;
                case 'caracteristicasDetalhadas':
                    html += gerarSecaoCaracteristicasDetalhadas(secao);
                    break;
                case 'tabelaExtra':
                    html += gerarSecaoTabelaExtra(secao);
                    break;
                default:
                    console.warn('Tipo de seção desconhecido:', secao.tipo);
                    html += gerarSecaoGenerica(secao);
            }
        } catch (error) {
            console.error(`Erro ao processar seção ${index}:`, error);
            html += `<div class="erro-secao">
                        <p>Erro ao carregar seção: ${error.message}</p>
                    </div>`;
        }
    });
    
    // ADICIONE ESTA LINHA PARA INCLUIR SUBCLASSES
    html += gerarSecaoSubclasses(classe);
    
    return html;
}

// Geradores de seções específicas - CORRIGIDOS
function gerarSecaoDescricao(secao) {
    return `
        <div class="secao-descricao">
            ${secao.conteudo ? secao.conteudo.map(paragrafo => `
                <p class="classe-descricao">${paragrafo}</p>
            `).join('') : '<p>Descrição não disponível.</p>'}
            
            ${secao.descricaoObjetiva && Array.isArray(secao.descricaoObjetiva) ? `
                
                    ${secao.descricaoObjetiva.map(paragrafo => `
                        <p class="descricao-objetiva-texto">${paragrafo}</p>
                    `).join('')}
                
            ` : ''}
        </div>
    `;
}

function gerarSecaoTraçosPrincipais(secao) {
    if (!secao.tracos || typeof secao.tracos !== 'object') {
        return `<div class="erro-secao">
                    <p>Traços principais não definidos corretamente.</p>
                </div>`;
    }
    
    return `
        <div class="secao-traços-principais">
            <h3>${secao.titulo || 'Traços Principais'}</h3>
            <div class="tabela-container">
                <table class="tabela-traços">
                    <tbody>
                        ${Object.entries(secao.tracos).map(([chave, valor]) => `
                            <tr>
                                <td><strong>${chave}</strong></td>
                                <td>${valor}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// Adicione esta nova função para gerar subclasses
function gerarSecaoSubclasses(classe) {
    if (!classe.subclasses || !Array.isArray(classe.subclasses) || classe.subclasses.length === 0) {
        return ''; // Retorna vazio se não houver subclasses
    }
    
    return `
        <div class="secao-subclasses">
            <h3>${classe.tituloDeSubclasse || 'Subclasses'}</h3>
            ${classe.descricaoSubclasse ? `<p class="subclasse-descricao">${classe.descricaoSubclasse}</p>` : ''}
            <div class="subclasses-lista">
                ${classe.subclasses.map(subclasse => `
                    <div class="subclasse-item">
                        <div class="subclasse-cabecalho">
                            <h4 class="subclasse-titulo">${subclasse.nome}</h4>
                        </div>
                        <p class="subclasse-descricao">${subclasse.descricao}</p>
                        <div class="subclasse-caracteristicas">
                            ${subclasse.caracteristicas.map(carac => `
                                <div class="subclasse-caracteristica">
                                    <div class="caracteristica-cabecalho">
                                        <span class="caracteristica-nivel">Nível ${carac.nivel}</span>
                                        <h5 class="caracteristica-titulo">${carac.titulo}</h5>
                                    </div>
                                    <div class="caracteristica-descricao">
                                        ${carac.descricao}
                                        <!-- ADICIONE ESTA LINHA PARA INCLUIR A FICHA -->
                                        ${carac.fichaCriatura ? gerarFichaCriatura(carac.fichaCriatura) : ''}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Função para gerar ficha de criatura
function gerarFichaCriatura(ficha) {
    if (!ficha) return '';
    
    return `
        <div class="ficha-criatura">
            <div class="ficha-cabecalho">
                <h5 class="ficha-titulo">${ficha.nome || 'Criatura'}</h5>
                <p class="ficha-descricao-curta">${ficha.descricaoCurta || ''}</p>
            </div>
            
            <div class="ficha-atributos">
                <div class="ficha-atributo">
                    <strong>CA:</strong> ${ficha.ca || '-'}
                </div>
                <div class="ficha-atributo">
                    <strong>PV:</strong> ${ficha.pv || '-'}
                </div>
                <div class="ficha-atributo">
                    <strong>Deslocamento:</strong> ${ficha.deslocamento || '-'}
                </div>
            </div>
            
            ${ficha.atributos ? `
            <div class="ficha-atributos-detlahados">
                <div class="atributos-lista">
                    ${Object.entries(ficha.atributos).map(([atributo, valor]) => `
                        <div class="atributo-item">
                            <strong>${atributo.toUpperCase()}:</strong> ${valor}
                        </div>
                    `).join('')}
                </div>
            </div>
            ` : ''}
            
            ${ficha.descricaoDetalhada ? `
            <div class="ficha-descricao-detalhada">
                <p>${ficha.descricaoDetalhada}</p>
            </div>
            ` : ''}
            
            ${ficha.acoes && ficha.acoes.length > 0 ? `
            <div class="ficha-acoes">
                <h6>Ações</h6>
                ${ficha.acoes.map(acao => `
                    <div class="acao-item">
                        <strong>${acao.nome}:</strong> ${acao.descricao}
                    </div>
                `).join('')}
            </div>
            ` : ''}
        </div>
    `;
}

// Adicione esta nova função para gerar tabelas extras
function gerarSecaoTabelaExtra(secao) {
     console.log('DEBUG - Tabela Extra:'); // ← Adicione esta linha
    console.log('Colunas:', secao.colunas); // ← Adicione esta linha
    console.log('Primeira linha:', secao.linhas[0]); // ← Adicione esta linha
    console.log('Chaves convertidas:', secao.colunas.map(col => col.toLowerCase().replace(/[^a-z0-9]/g, ''))); // ← Adicione esta linha
    if (!secao.linhas || !Array.isArray(secao.linhas)) {
        return `<div class="erro-secao">
                    <p>Tabela extra não definida corretamente.</p>
                </div>`;
    }
    
    const colunas = secao.colunas || ['Categoria', 'Detalhes'];
    
    return `
        <div class="secao-tabela-extra">
            <h3>${secao.titulo || 'Tabela de Características'}</h3>
            ${secao.descricao ? `<p class="tabela-extra-descricao">${secao.descricao}</p>` : ''}
            
            <div class="tabela-container">
                <table class="tabela-infusoes">
                    <thead>
                        <tr>
                            ${colunas.map(coluna => `<th>${coluna}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${secao.linhas.map(linha => `
                            <tr>
                                ${colunas.map(coluna => {
                                    const chave = coluna.toLowerCase().replace(/[^a-z0-9]/g, '');
                                    const valor = linha[chave] || linha[coluna] || '-';
                                    const classeEspecial = chave.includes('nivel') ? 'nivel-poder' : '';
                                    return `<td class="${classeEspecial}">${valor}</td>`;
                                }).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            
            ${secao.detalhes && Array.isArray(secao.detalhes) ? `
                <div class="detalhes-infusoes">
                    <h4>Detalhes das Infusões</h4>
                    ${secao.detalhes.map(detalhe => `
                        <div class="infusao-item" id="${detalhe.id}">
                            <div class="infusao-cabecalho">
                                <h5 class="infusao-titulo">${detalhe.titulo}</h5>
                                ${detalhe.requisito ? `<p class="infusao-requisito">${detalhe.requisito}</p>` : ''}
                            </div>
                            <div class="infusao-descricao">
                                ${detalhe.descricao}
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `;
}

// Adicione esta nova função para gerar tabelas extras - VERSÃO CORRIGIDA
function gerarSecaoTabelaExtra(secao) {
    if (!secao.linhas || !Array.isArray(secao.linhas)) {
        return `<div class="erro-secao">
                    <p>Tabela extra não definida corretamente.</p>
                </div>`;
    }
    
    const colunas = secao.colunas || ['Categoria', 'Detalhes'];
    
    // DEBUG - Adicione para ver o que está acontecendo
    console.log('=== DEBUG TABELA EXTRA ===');
    console.log('Colunas:', colunas);
    console.log('Linhas:', secao.linhas);
    console.log('Primeira linha chaves:', Object.keys(secao.linhas[0]));
    
    return `
        <div class="secao-tabela-extra">
            <h3>${secao.titulo || 'Tabela de Características'}</h3>
            ${secao.descricao ? `<p class="tabela-extra-descricao">${secao.descricao}</p>` : ''}
            
            <div class="tabela-container">
                <table class="tabela-infusoes">
                    <thead>
                        <tr>
                            ${colunas.map(coluna => `<th>${coluna}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${secao.linhas.map(linha => `
                            <tr>
                                ${colunas.map(coluna => {
                                    // Converte o nome da coluna para chave (minúsculo, sem espaços e acentos)
                                    const chaveNormalizada = coluna.toLowerCase()
                                        .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove acentos
                                        .replace(/[^a-z0-9]/g, ''); // Remove caracteres especiais
                                    
                                    console.log(`Procurando chave: "${chaveNormalizada}" em:`, Object.keys(linha)); // DEBUG
                                    
                                    // Tenta várias formas de encontrar o valor
                                    let valor = '-';
                                    
                                    // 1. Tenta pela chave normalizada
                                    if (linha[chaveNormalizada] !== undefined) {
                                        valor = linha[chaveNormalizada];
                                    }
                                    // 2. Tenta pelas chaves existentes no objeto
                                    else {
                                        const chavesExistentes = Object.keys(linha);
                                        for (let chave of chavesExistentes) {
                                            const chaveExistenteNormalizada = chave.toLowerCase()
                                                .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
                                                .replace(/[^a-z0-9]/g, '');
                                            if (chaveExistenteNormalizada === chaveNormalizada) {
                                                valor = linha[chave];
                                                break;
                                            }
                                        }
                                    }
                                    
                                    // 3. Se ainda não encontrou, tenta pelo nome original da coluna
                                    if (valor === '-' && linha[coluna] !== undefined) {
                                        valor = linha[coluna];
                                    }
                                    
                                    const classeEspecial = chaveNormalizada.includes('nivel') ? 'nivel-poder' : '';
                                    return `<td class="${classeEspecial}">${valor}</td>`;
                                }).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            
            ${secao.detalhes && Array.isArray(secao.detalhes) ? `
                <div class="detalhes-infusoes">
                    <h4>Detalhes das Infusões</h4>
                    ${secao.detalhes.map(detalhe => `
                        <div class="infusao-item" id="${detalhe.id}">
                            <div class="infusao-cabecalho">
                                <h5 class="infusao-titulo">${detalhe.titulo}</h5>
                                ${detalhe.requisito ? `<p class="infusao-requisito">${detalhe.requisito}</p>` : ''}
                            </div>
                            <div class="infusao-descricao">
                                ${detalhe.descricao}
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `;
}

function gerarSecaoCaracteristicasDetalhadas(secao) {
    if (!secao.caracteristicas || !Array.isArray(secao.caracteristicas)) {
        return `<div class="erro-secao">
                    <p>Características detalhadas não definidas corretamente.</p>
                </div>`;
    }
    
    return `
        <div class="secao-caracteristicas-detalhadas">

            <div class="caracteristicas-lista">
                ${secao.caracteristicas.map(carac => `
                    <div class="caracteristica-item">
                        <div class="caracteristica-cabecalho">
                            <span class="caracteristica-nivel">Nível ${carac.nivel || '?'}</span>
                            <h4 class="caracteristica-titulo">${carac.titulo || 'Característica'}</h4>
                        </div>
                        <div class="caracteristica-descricao">${carac.descricao || 'Descrição não disponível.'}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function gerarSecaoGenerica(secao) {
    return `
        <div class="secao-generica">
            ${secao.titulo ? `<h3>${secao.titulo}</h3>` : ''}
            ${secao.conteudo ? `<div class="secao-conteudo">${secao.conteudo}</div>` : ''}
        </div>
    `;
}

// Função para voltar à lista
function voltarParaListaClasses() {
    const detalhesSection = document.getElementById('detalhes-classe');
    const listaClasses = document.getElementById('lista-classes');
    
    if (detalhesSection && listaClasses) {
        detalhesSection.style.display = 'none';
        listaClasses.style.display = 'block';
        
        // Restaura a posição do scroll
        window.scrollTo({ top: scrollPositionClasses, behavior: 'instant' });
    }
}

// Configura o evento da tecla Esc
function configurarTeclaEscClasses() {
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' || event.keyCode === 27) {
            const detalhesSection = document.getElementById('detalhes-classe');
            if (detalhesSection && detalhesSection.style.display === 'block') {
                voltarParaListaClasses();
            }
        }
    });
}

// Configura o clique fora da área de detalhes para fechar
document.addEventListener('click', function(event) {
    const detalhesSection = document.getElementById('detalhes-classe');
    
    if (detalhesSection && detalhesSection.style.display === 'block') {
        // Verifica se o clique foi fora da seção de detalhes
        if (!detalhesSection.contains(event.target)) {
            // Pequeno delay para evitar conflito com outros event listeners
            setTimeout(() => {
                voltarParaListaClasses();
            }, 10);
        }
    }
});

// Carrega a lista quando a página abre
document.addEventListener('DOMContentLoaded', function() {
    carregarListaClasses();
    configurarTeclaEscClasses();
});

