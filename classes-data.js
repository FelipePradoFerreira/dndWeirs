// Banco de dados das classes com sistema flexível de tabelas
const classesData = [
    {
        id: 1,
        nome: "Guerreiro Espiritual",
        tipoTabela: "combatente-recurso",
        imagemCard: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        imagemWide: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        
        descricaoCurta: "Mestres da energia vital que unem corpo e alma em harmonia",
        
        descricaoLonga: [
            "No equilíbrio entre o corpo e a alma, há aqueles que ouvem o chamado do espírito, que sentem o fluxo invisível que conecta toda a existência. Esses são os Guerreiros Espirituais, mestres da energia vital, capazes de moldar suas forças interiores em poderosos feitos de habilidade e domínio elementar.",
            "Os Guerreiros Espirituais são indivíduos que transcendem os limites do físico e do metafísico, unindo corpo, mente e alma em uma harmonia singular. Por meio de meditação e treino implacável, eles canalizam sua energia vital para superar os desafios do mundo, manifestando força sobrenatural, reflexos impecáveis e poderes que ecoam o ritmo do universo."
        ],
        
        tracosPrincipais: {
            habilidadePrimaria: "Destreza",
            dadosVida: "d10 por nível de guerreiro espiritual",
            proficienciaSalvaguarda: "Destreza e Sabedoria",
            proficienciaHabilidades: "Escolha 2: Atletismo, Acrobacia, Percepção, Medicina, História e Intuição",
            proficienciaArmas: "Armas Marciais e Simples",
            proficienciaArmaduras: "Armaduras Leves, Médias e Escudos",
            proficienciaFerramentas: "Um kit de ferramentas a sua escolha",
            equipamentoInicial: "Escolha A ou B: (A) Uma arma marcial, duas adagas, um escudo, um arco curto e 20 flechas, uma armadura média ou uma armadura leve, um kit de ferramentas a sua escolha e 10 GP; ou (B) 50 GP"
        },
        
        tabelaNiveis: [
            { 
                nivel: 1, 
                proficiencia: "+2", 
                caracteristicas: "Pontos de Vita, Meditação Marcial", 
                pontosVita: 2 
            },
            { 
                nivel: 2, 
                proficiencia: "+2", 
                caracteristicas: "Estilo de Combate, Fluxo Espiritual", 
                pontosVita: 3 
            }
        ],
        
        caracteristicas: [
            {
                nivel: 1,
                titulo: "Pontos de Vita",
                descricao: "Sua conexão com a energia vital é representada pelos Pontos de Vita, que você usa para alimentar suas características. Você começa com 2 Pontos de Vita e ganha mais conforme avança de nível."
            }
        ]
    },
    {
        id: 2,
        nome: "Arcanista do Caos",
        tipoTabela: "conjurador-completo",
        imagemCard: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        imagemWide: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        
        descricaoCurta: "Conjuradores que manipulam as energias caóticas do universo",
        descricaoLonga: ["Descrição do Arcanista do Caos..."],
        
        tracosPrincipais: {
            habilidadePrimaria: "Inteligência",
            dadosVida: "d6 por nível",
            proficienciaSalvaguarda: "Inteligência e Carisma",
            proficienciaHabilidades: "Escolha 2 habilidades",
            proficienciaArmas: "Armas Simples",
            proficienciaArmaduras: "Nenhuma",
            proficienciaFerramentas: "Kit de escriba",
            equipamentoInicial: "Equipamento básico"
        },
        
        tabelaNiveis: [
            { 
                nivel: 1, 
                proficiencia: "+2", 
                caracteristicas: "Magia do Caos", 
                recursoClasse: 0,
                truques: 2,
                slotsMagia: [2, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        ],
        
        caracteristicas: [
            {
                nivel: 1,
                titulo: "Magia do Caos",
                descricao: "Você conhece truques e pode lançar magias."
            }
        ]
    }
    // Adicione outras classes depois que esta funcionar
];