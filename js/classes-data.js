// Banco de dados das classes
const classesData = [
    // Guerreiro Espiritual ID 1
    {
        id: 1,
        nome: "Guerreiro Espiritual",
        imagemCard: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        imagemVertical: "images/classes/GuerreiroEspiritual.jpg",
        descricaoCurta: "Mestres da energia vital que unem corpo e alma em harmonia",
        arte: "Nome do Artista",
        paginaartista: "https://exemplo.com/artista",
        tituloDeSubclasse: "Trilhas Espirituais",
        secoes: [
            {
                tipo: "descricao",
                conteudo: [
                    `"No equilíbrio entre o corpo e a alma, há aqueles que ouvem o chamado do espírito, que sentem o fluxo invisível que conecta toda a existência. Esses são os 
                    Guerreiros Espirituais, mestres da energia vital, capazes de moldar suas forças interiores em poderosos feitos de habilidade e domínio elementar."`
                ],
                descricaoObjetiva: [
                    `Os Guerreiros Espirituais são indivíduos que transcendem os limites do físico e do metafísico, unindo corpo, mente e alma em uma harmonia singular. Por meio 
                    de meditação e treino implacável, eles canalizam sua energia vital para superar os desafios do mundo, manifestando força sobrenatural, reflexos impecáveis e 
                    poderes que ecoam o ritmo do universo.`
                ]
            },
            {
                tipo: "tracosPrincipais",
                titulo: "Principais Traços do Guerreiro Espiritual",
                tracos: {
                    "Habilidade Primária": "Destreza",
                    "Dados de Vida": "d10 por nível de guerreiro espiritual",
                    "Proficiência de Salvaguarda": "Destreza e Sabedoria",
                    "Proficiência em Habilidades": "Escolha 2: Atletismo, Acrobacia, Percepção, Medicina, História e Intuição",
                    "Proficiência com Armas": "Armas Marciais e Simples",
                    "Proficiência com Armaduras": "Armaduras Leves, Médias e Escudos",
                    "Proficiência com Ferramentas": "Um kit de ferramentas a sua escolha",
                    "Equipamento Inicial": "Escolha A ou B"
                }
            },
            {
                tipo: "tabelaNiveis",
                titulo: "Características do Guerreiro Espiritual",
                descricao: "Como um Guerreiro Espiritual, você ganha as seguintes características de classe quando atinge os níveis específicos.",
                colunas: ["Nível", "Bônus de Proficiência", "Características", "Pontos de Vita"],
                linhas: [
                    { nivel: 1, bonusdeproficiencia: "+2", caracteristicas: "Pontos de Vita, Meditação Marcial", pontosdevita: 2 },
                    { nivel: 2, bonusdeproficiencia: "+2", caracteristicas: "Estilo de Combate, Fluxo Espiritual", pontosdevita: 3 },
                    { nivel: 3, bonusdeproficiencia: "+2", caracteristicas: "Caminho Espiritual", pontosdevita: 4 },
                    { nivel: 4, bonusdeproficiencia: "+2", caracteristicas: "Incremento de Habilidade", pontosdevita: 5 },
                    { nivel: 5, bonusdeproficiencia: "+3", caracteristicas: "Ataque Extra", pontosdevita: 6 }
                ]
            },
            {
                tipo: "caracteristicasDetalhadas",
                titulo: "Características Detalhadas",
                caracteristicas: [
                    {
                        nivel: 1,
                        titulo: "Pontos de Vita",
                        descricao: "Sua conexão com a energia vital é representada pelos Pontos de Vita, que você usa para alimentar suas características. Você começa com 2 Pontos de Vita e ganha mais conforme avança de nível."
                    },
                    {
                        nivel: 2,
                        titulo: "Estilo de Combate",
                        descricao: "Você adota um estilo de combate que reflete sua filosofia espiritual. Escolha entre Estilo da Defesa, Estilo do Ataque ou Estilo do Equilíbrio."
                    }
                ]
            }
        ],
        subclasses: [
            {
                id: 1,
                nome: "Caminho do Equilíbrio",
                descricao: "Mestres do equilíbrio entre ofensa e defesa",
                caracteristicas: [
                    {
                        nivel: 3,
                        titulo: "Equilíbrio Perfeito",
                        descricao: "Você ganha +1 em testes de resistência quando está com pontos de vida acima da metade."
                    },
                    {
                        nivel: 6,
                        titulo: "Harmonia Ofensiva", 
                        descricao: "Seus ataques causam +1d4 de dano quando você usa Pontos de Vita."
                    }
                ]
            }
        ]
    },



/* 
    // Exemplo de classe
    {
        id: 0,
        nome: "Exemplo de Classe",
        imagemCard: "images/cards/Temporario.jpg",
        imagemVertical: "images/classes/Temporario.jpg",
        descricaoCurta: "Descrição curta da classe",
        arte: "Nome do Artista",
        paginaartista: "https://exemplo.com/artista",
        tituloDeSubclasse: "Título das Subclasses",

        secoes: [
            {
                tipo: "descricao",
                conteudo: [
                    `"Descrição lendaria."`
                ],
                descricaoObjetiva: [
                    `Descrição objetiva.`
                ]
            },
            {
                tipo: "tracosPrincipais",
                titulo: "Principais Traços de classe",
                tracos: {
                    "Habilidade Primária": `...`,
                    "Dados de Vida": "dX por nível de classe",
                    "Proficiência de Salvaguarda": `...`,
                    "Proficiência em Habilidades": `Escolha X: ...`,
                    "Proficiência com Armas": `...`,
                    "Proficiência com Armaduras": `...`,
                    "Proficiência com Ferramentas": `...`,
                    "Equipamento Inicial": `Escolha A ou B: (A) ... ou; (B) 50 PO`
                }
            },
            {
                tipo: "tabelaNiveis",
                titulo: "Características do classe",
                descricao: "Como um classe, você ganha as seguintes características de classe quando atinge os níveis específicos.",
                colunas: ["Nível", "Bônus de Proficiência", "Características", "Recursos", "Truques Conhecidos", "Slots de Magia<br>1° 2° 3° 4° 5° 6° 7° 8° 9°"],
                linhas: [
                    { 
                        nivel: 1, 
                        bonusdeproficiencia: "+2", 
                        caracteristicas: "Característica...", 
                        recursos: 2, 
                        truquesconhecidos: 2, 
                        slotsdemagiabr123456789: "1 - - - - - - - -" 
                    },
                    { 
                        nivel: 2, 
                        bonusdeproficiencia: "+2", 
                        caracteristicas: "Característica...", 
                        recursos: 2, 
                        truquesconhecidos: 2, 
                        slotsdemagiabr123456789: "2 1 - - - - - - -" 
                    }
                ]
            },
            {
                tipo: "caracteristicasDetalhadas",
                titulo: "Características Detalhadas",
                caracteristicas: [
                    {
                        nivel: 1,
                        titulo: "Carcterística de Nível 1",
                        descricao: `Descrição detalhada da característica de nível 1.`
                    },
                    {
                        nivel: 2,
                        titulo: "Carcterística de Nível 2",
                        descricao: `Descrição detalhada da característica de nível 2.`
                    }
                ]
            }
        ],
        subclasses: [
            {
                id: 1,
                nome: "Nome da Subclasse",
                descricao: "Descrição da subclasse",
                caracteristicas: [
                    {
                        nivel: 3,
                        titulo: "Característica de Nível 3",
                        descricao: "Descrição detalhada da característica de nível 3."
                    }
                ]
            }
        ]
    }
*/
];