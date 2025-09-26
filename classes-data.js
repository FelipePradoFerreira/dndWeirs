// Banco de dados das classes
const classesData = [
    {
        id: 1,
        nome: "Guerreiro Espiritual",
        tipo: "combate", // 'combate'
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
            { nivel: 1, proficiencia: "+2", caracteristicas: "Pontos de Vita, Meditação Marcial", pontosVita: 2 },
            { nivel: 2, proficiencia: "+2", caracteristicas: "Estilo de Combate, Fluxo Espiritual", pontosVita: 3 },
            { nivel: 3, proficiencia: "+2", caracteristicas: "Caminho Espiritual", pontosVita: 4 },
            { nivel: 4, proficiencia: "+2", caracteristicas: "Incremento de Habilidade", pontosVita: 5 },
            { nivel: 5, proficiencia: "+3", caracteristicas: "Ataque Extra", pontosVita: 6 }
            // ... continuar até nível 20
        ],
        
        caracteristicas: [
            {
                nivel: 1,
                titulo: "Pontos de Vita",
                descricao: "Sua conexão com a energia vital é representada pelos Pontos de Vita, que você usa para alimentar suas características. Você começa com 2 Pontos de Vita e ganha mais conforme avança de nível."
            },
            {
                nivel: 1,
                titulo: "Meditação Marcial",
                descricao: "Você pode gastar 10 minutos em meditação para recuperar todos os seus Pontos de Vita. Você pode usar esta característica uma vez por descanso longo."
            },
            {
                nivel: 2,
                titulo: "Fluxo Espiritual",
                descricao: "Como ação bônus, você pode gastar 1 Ponto de Vita para dobrar sua velocidade de movimento até o final do seu turno."
            }
        ]
    },
    {
        id: 2,
        nome: "Arcanista do Caos",
        tipo: "conjurador",
        imagemCard: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        imagemWide: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        
        descricaoCurta: "Conjuradores que manipulam as energias caóticas do universo",
        
        descricaoLonga: [
            "Os Arcanistas do Caos são magos que abraçaram a aleatoriedade e o imprevisível, canalizando energias caóticas que desafiam as leis convencionais da magia.",
            "Eles veem a ordem como uma limitação e encontram poder na entropia pura."
        ],
        
        tracosPrincipais: {
            habilidadePrimaria: "Inteligência",
            dadosVida: "d6 por nível de arcanista",
            proficienciaSalvaguarda: "Inteligência e Carisma",
            proficienciaHabilidades: "Escolha 2: Arcanismo, Enganação, Investigação, História, Natureza",
            proficienciaArmas: "Armas Simples",
            proficienciaArmaduras: "Nenhuma",
            proficienciaFerramentas: "Kit de escriba",
            equipamentoInicial: "Um foco arcano, um grimório, um kit de estudiosos e 15 GP"
        },
        
        // Exemplo de tabela diferente para conjuradores
        tabelaNiveis: [
            { 
                nivel: 1, 
                proficiencia: "+2", 
                caracteristicas: "Magia do Caos", 
                espacosMagia: [2], 
                truques: 3 
            },
            { 
                nivel: 2, 
                proficiencia: "+2", 
                caracteristicas: "Traço Caótico", 
                espacosMagia: [3], 
                truques: 3 
            }
        ],
        
        caracteristicas: [
            {
                nivel: 1,
                titulo: "Magia do Caos",
                descricao: "Você conhece truques e pode lançar magias usando espaços de magia."
            }
        ]
    }
];