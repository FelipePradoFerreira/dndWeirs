// Sistema de geração de tabelas flexível
function gerarTabelaNiveis(classe) {
    const tabelaConfigs = {
        // Exemplo 1: Combatente com recurso
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
        
        // Exemplo 2: Conjurador com recurso
        'conjurador-completo': {
            colunas: ['Nível', 'Bônus de Proficiência', 'Características', 'Recurso', 'Truques', 'Slots de Magia por Nível de Magia'],
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
                    ${classe.tipoTabela === 'conjurador-completo' || classe.tipoTabela === 'conjurador-sem-recurso' ? `
                    <tr>
                        <th colspan="5"></th>
                        <th style="font-size: 0.8rem; padding: 0.3rem;">
                            ${[1,2,3,4,5,6,7,8,9].map(n => `<span style="display: inline-block; width: 20px; text-align: center;">${n}</span>`).join('')}
                        </th>
                    </tr>
                    ` : ''}
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

// Adicione estilos CSS para os diferentes tipos de tabela