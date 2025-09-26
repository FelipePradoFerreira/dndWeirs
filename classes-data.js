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
            { nivel: 1, proficiencia: "+2", caracteristicas: "Pontos de Vita, Meditação Marcial", pontosVita: 2 },
            { nivel: 2, proficiencia: "+2", caracteristicas: "Estilo de Combate, Fluxo Espiritual", pontosVita: 3 },
            { nivel: 3, proficiencia: "+2", caracteristicas: "Caminho Espiritual", pontosVita: 4 },
            { nivel: 4, proficiencia: "+2", caracteristicas: "Incremento de Habilidade", pontosVita: 5 },
            { nivel: 5, proficiencia: "+3", caracteristicas: "Ataque Extra", pontosVita: 6 }
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
        
        tabelaNiveis: [
            { 
                nivel: 1, 
                proficiencia: "+2", 
                caracteristicas: "Magia do Caos", 
                recursoClasse: 0,
                truques: 2,
                slotsMagia: [2, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            { 
                nivel: 2, 
                proficiencia: "+2", 
                caracteristicas: "Traço Caótico", 
                recursoClasse: 1,
                truques: 3,
                slotsMagia: [3, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            { 
                nivel: 3, 
                proficiencia: "+2", 
                caracteristicas: "Metamagia Caótica", 
                recursoClasse: 2,
                truques: 3,
                slotsMagia: [4, 2, 0, 0, 0, 0, 0, 0, 0]
            }
        ],
        
        caracteristicas: [
            {
                nivel: 1,
                titulo: "Magia do Caos",
                descricao: "Você conhece truques e pode lançar magias usando espaços de magia."
            }
        ]
    },
    {
        id: 3,
        nome: "Feiticeiro Sombrio",
        tipoTabela: "conjurador-sem-recurso",
        imagemCard: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        imagemWide: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        
        descricaoCurta: "Conjuradores das sombras e da noite eterna",
        
        descricaoLonga: [
            "Feiticeiros Sombrios canalizam o poder das trevas, manipulando as sombras para seus propósitos.",
            "Mestres da magia oculta e do desconhecido, eles caminham entre a luz e as trevas."
        ],
        
        tracosPrincipais: {
            habilidadePrimaria: "Carisma",
            dadosVida: "d6 por nível",
            proficienciaSalvaguarda: "Carisma e Constituição",
            proficienciaHabilidades: "Escolha 2: Intimidação, Enganação, Arcanismo, Religião",
            proficienciaArmas: "Armas Simples",
            proficienciaArmaduras: "Nenhuma",
            proficienciaFerramentas: "Nenhuma",
            equipamentoInicial: "Foco arcano, componente de magia, 10 GP"
        },
        
        tabelaNiveis: [
            { 
                nivel: 1, 
                proficiencia: "+2", 
                caracteristicas: "Magia das Sombras", 
                truques: 3,
                slotsMagia: [2, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            { 
                nivel: 2, 
                proficiencia: "+2", 
                caracteristicas: "Visão no Escuro Aprimorada", 
                truques: 3,
                slotsMagia: [3, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            { 
                nivel: 3, 
                proficiencia: "+2", 
                caracteristicas: "Invocação Sombria", 
                truques: 4,
                slotsMagia: [4, 2, 0, 0, 0, 0, 0, 0, 0]
            }
        ],
        
        caracteristicas: [
            {
                nivel: 1,
                titulo: "Magia das Sombras",
                descricao: "Você pode lançar magias da escola de ilusão e necromancia com maior eficiência."
            }
        ]
    },
    {
        id: 4,
        nome: "Mestre das Lâminas",
        tipoTabela: "combatente-sem-recurso",
        imagemCard: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        imagemWide: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        
        descricaoCurta: "Especialista em combate com armas brancas",
        
        descricaoLonga: [
            "Mestres das Lâminas são combatentes que dedicaram suas vidas ao domínio das armas.",
            "Cada movimento é calculado, cada golpe é preciso. Eles são a personificação da eficiência marcial."
        ],
        
        tracosPrincipais: {
            habilidadePrimaria: "Força",
            dadosVida: "d10 por nível",
            proficienciaSalvaguarda: "Força e Constituição",
            proficienciaHabilidades: "Escolha 2: Atletismo, Intimidação, Sobrevivência, Percepção",
            proficienciaArmas: "Todas as armas",
            proficienciaArmaduras: "Todas as armaduras e escudos",
            proficienciaFerramentas: "Kit de reparo de armas",
            equipamentoInicial: "Arma marcial, armadura de cota de malha, 15 GP"
        },
        
        tabelaNiveis: [
            { nivel: 1, proficiencia: "+2", caracteristicas: "Estilo de Duas Armas, Ataque Preciso" },
            { nivel: 2, proficiencia: "+2", caracteristicas: "Ataque Extra, Defesa Ativa" },
            { nivel: 3, proficiencia: "+2", caracteristicas: "Especialização em Arma, Contra-ataque" },
            { nivel: 4, proficiencia: "+2", caracteristicas: "Incremento de Habilidade" },
            { nivel: 5, proficiencia: "+3", caracteristicas: "Ataque Multiplo, Mestre de Armas" }
        ],
        
        caracteristicas: [
            {
                nivel: 1,
                titulo: "Estilo de Duas Armas",
                descricao: "Você pode lutar com duas armas sem penalidade no ataque bônus."
            }
        ]
    },
    {
        id: 5,
        nome: "Ladino Astuto",
        tipoTabela: "ladino-com-recurso",
        imagemCard: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        imagemWide: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        
        descricaoCurta: "Mestre da furtividade e da astúcia",
        
        descricaoLonga: [
            "Ladinos Astutos são especialistas em se mover nas sombras e atacar onde menos se espera.",
            "Sua inteligência e planejamento são suas maiores armas, tornando-os adversários imprevisíveis."
        ],
        
        tracosPrincipais: {
            habilidadePrimaria: "Destreza",
            dadosVida: "d8 por nível",
            proficienciaSalvaguarda: "Destreza e Inteligência",
            proficienciaHabilidades: "Escolha 4: Furtividade, Acrobacia, Prestidigitação, Intuição, Persuasão, Enganação",
            proficienciaArmas: "Armas Simples, bestas de mão, espadas curtas",
            proficienciaArmaduras: "Armaduras leves",
            proficienciaFerramentas: "Ferramentas de ladrão",
            equipamentoInicial: "Espada curta, arco curto, armadura de couro, 20 GP"
        },
        
        tabelaNiveis: [
            { 
                nivel: 1, 
                proficiencia: "+2", 
                caracteristicas: "Ataque Furtivo, Perícia", 
                recursoClasse: 1,
                ataqueFurtivo: "1d6"
            },
            { 
                nivel: 2, 
                proficiencia: "+2", 
                caracteristicas: "Esquiva Ágil, Ação Sorrateira", 
                recursoClasse: 2,
                ataqueFurtivo: "1d6"
            },
            { 
                nivel: 3, 
                proficiencia: "+2", 
                caracteristicas: "Arquétipo Ladino", 
                recursoClasse: 3,
                ataqueFurtivo: "2d6"
            },
            { 
                nivel: 4, 
                proficiencia: "+2", 
                caracteristicas: "Incremento de Habilidade", 
                recursoClasse: 3,
                ataqueFurtivo: "2d6"
            },
            { 
                nivel: 5, 
                proficiencia: "+3", 
                caracteristicas: "Golpe Traiçoeiro", 
                recursoClasse: 4,
                ataqueFurtivo: "3d6"
            }
        ],
        
        caracteristicas: [
            {
                nivel: 1,
                titulo: "Ataque Furtivo",
                descricao: "Uma vez por turno, você pode causar dano extra a uma criatura que não pode ver você."
            }
        ]
    },
    {
        id: 6,
        nome: "Ladino Ágil",
        tipoTabela: "ladino-sem-recurso",
        imagemCard: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        imagemWide: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        
        descricaoCurta: "Especialista em mobilidade e agilidade",
        
        descricaoLonga: [
            "Ladinos Ágeis focam na velocidade e na capacidade de se mover rapidamente pelo campo de batalha.",
            "Sua agilidade é lendária, permitindo-lhes evitar perigos e alcançar posições vantajosas."
        ],
        
        tracosPrincipais: {
            habilidadePrimaria: "Destreza",
            dadosVida: "d8 por nível",
            proficienciaSalvaguarda: "Destreza e Sabedoria",
            proficienciaHabilidades: "Escolha 3: Acrobacia, Atletismo, Furtividade, Percepção",
            proficienciaArmas: "Armas Simples",
            proficienciaArmaduras: "Armaduras leves",
            proficienciaFerramentas: "Kit de escalada",
            equipamentoInicial: "Duas adagas, armadura de couro, 15 GP"
        },
        
        tabelaNiveis: [
            { 
                nivel: 1, 
                proficiencia: "+2", 
                caracteristicas: "Ataque Furtivo, Movimento Ágil", 
                ataqueFurtivo: "1d6"
            },
            { 
                nivel: 2, 
                proficiencia: "+2", 
                caracteristicas: "Esquiva Rápida, Ação Corrida", 
                ataqueFurtivo: "1d6"
            },
            { 
                nivel: 3, 
                proficiencia: "+2", 
                caracteristicas: "Especialização em Mobilidade", 
                ataqueFurtivo: "2d6"
            },
            { 
                nivel: 4, 
                proficiencia: "+2", 
                caracteristicas: "Incremento de Habilidade", 
                ataqueFurtivo: "2d6"
            },
            { 
                nivel: 5, 
                proficiencia: "+3", 
                caracteristicas: "Ataque Relâmpago", 
                ataqueFurtivo: "3d6"
            }
        ],
        
        caracteristicas: [
            {
                nivel: 1,
                titulo: "Movimento Ágil",
                descricao: "Seu deslocamento aumenta em 3m quando você não está usando armadura pesada."
            }
        ]
    },
    {
        id: 7,
        nome: "Invocador do Pacto",
        tipoTabela: "semi-conjurador",
        imagemCard: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        imagemWide: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        
        descricaoCurta: "Conjurador que faz pactos com entidades superiores",
        
        descricaoLonga: [
            "Invocadores do Pacto obtêm seu poder através de acordos com seres de outros planos.",
            "Seu poder é concedido, não estudado, tornando-os conjuradores únicos e imprevisíveis."
        ],
        
        tracosPrincipais: {
            habilidadePrimaria: "Carisma",
            dadosVida: "d8 por nível",
            proficienciaSalvaguarda: "Sabedoria e Carisma",
            proficienciaHabilidades: "Escolha 2: Intimidação, Enganação, Arcanismo, Religião",
            proficienciaArmas: "Armas Simples",
            proficienciaArmaduras: "Armaduras leves",
            proficienciaFerramentas: "Nenhuma",
            equipamentoInicial: "Foco arcano, arma simples, 10 GP"
        },
        
        tabelaNiveis: [
            { 
                nivel: 1, 
                proficiencia: "+2", 
                caracteristicas: "Magia de Pacto, Benção do Patrono", 
                truques: 2,
                magias: 2,
                slotsMagia: 1,
                nivelSlots: "1°",
                recursoClasse: 3
            },
            { 
                nivel: 2, 
                proficiencia: "+2", 
                caracteristicas: "Invocação do Pacto, Característica do Patrono", 
                truques: 2,
                magias: 3,
                slotsMagia: 2,
                nivelSlots: "1°",
                recursoClasse: 3
            },
            { 
                nivel: 3, 
                proficiencia: "+2", 
                caracteristicas: "Pacto Boon, Magias de Patrono", 
                truques: 2,
                magias: 4,
                slotsMagia: 2,
                nivelSlots: "2°",
                recursoClasse: 4
            },
            { 
                nivel: 4, 
                proficiencia: "+2", 
                caracteristicas: "Incremento de Habilidade", 
                truques: 3,
                magias: 5,
                slotsMagia: 2,
                nivelSlots: "2°",
                recursoClasse: 4
            },
            { 
                nivel: 5, 
                proficiencia: "+3", 
                caracteristicas: "Invocação Poderosa", 
                truques: 3,
                magias: 6,
                slotsMagia: 2,
                nivelSlots: "3°",
                recursoClasse: 5
            }
        ],
        
        caracteristicas: [
            {
                nivel: 1,
                titulo: "Magia de Pacto",
                descricao: "Você conhece truques e pode lançar magias através do poder concedido pelo seu patrono."
            }
        ]
    }
];