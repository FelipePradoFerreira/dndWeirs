const featsData = [
    {
        id: 1,
        nome: "Estudioso",
        requisitos: "Antecedente Sábio",
        descricao: "Seu tempo dedicado aos estudos lhe concedeu conhecimentos especializados.",
        podeRepetir: false,
        beneficios: [
            "Você tem vantagem em testes de Inteligência relacionados ao seu campo de estudo",
            "Escolha duas perícias de Inteligência para ganhar proficiência",
            "Uma vez por dia, pode relembrar uma informação crucial que normalmente não saberia"
        ]
    },
    {
        id: 2,
        nome: "Veterano de Guerra",
        requisitos: "Antecedente Soldado",
        descricao: "Suas experiências em batalha lhe ensinaram lições valiosas sobre sobrevivência.",
        podeRepetir: false,
        beneficios: [
            "Você tem vantagem em testes de Sabedoria para perceber emboscadas",
            "Ganha proficiência com armas marciais",
            "Uma vez por combate, pode usar uma reação para reduzir dano recebido pela metade"
        ]
    },
    {
        id: 3,
        nome: "Mãos Leves",
        requisitos: "Antecedente Ladrão",
        descricao: "Sua habilidade com as mãos é excepcional, permitindo proezas impressionantes.",
        podeRepetir: false,
        beneficios: [
            "Vantagem em testes de Destreza para furtividade e prestidigitação",
            "Pode tentar pegar itens de criaturas hostis como ação bônus",
            "Seu movimento não provoca ataques de oportunidade"
        ]
    },
    {
        id: 4,
        nome: "Iniciado em Magia",
        requisitos: "Nenhum",
        descricao: "Você aprendeu os fundamentos da magia através de estudo ou talento natural.",
        podeRepetir: true,
        descricaoRepeticao: "Escolha uma lista de feitiços diferente cada vez que pegar este talento",
        beneficios: [
            "Aprende dois truques da lista de Clérigo, Druida ou Mago",
            "Aprende um feitiço de 1º nível da mesma lista",
            "Pode lançar o feitiço de 1º nível uma vez por descanso longo sem usar slot",
            "Inteligência, Sabedoria ou Carisma é sua habilidade de conjuração (escolha ao pegar o talento)"
        ]
    },
    {
        id: 5,
        nome: "Destruidor Entrópico",
        requisitos: "Antecedente Filho do Caos",
        podeRepetir: true,
        niveis: [
            {
                nivel: 1,
                requisitos: "Antecedente Filho do Caos",
                descricao: "A energia do caos é sua força vital e corruptora, alterando aspectos naturais com os quais você interage.",
                beneficios: [
                    "Desvantagem em testes de resistência de Inteligência",
                    "Vulnerável a dano Psíquico",
                    "Proteção mental contra invasores (CD 8 + Sab + Prof)",
                    "Conhece um truque da lista de magias do mago",
                    "Pode alterar tipo de dano para Necrótico ou Psíquico"
                ]
            },
            {
                nivel: 4,
                requisitos: "Destruidor Entrópico (Nível 1)",
                descricao: "Seu controle sobre as energias caóticas aumenta, permitindo manipulações mais complexas.",
                beneficios: [
                    "+1 em um atributo à escolha (máx 20)",
                    "Conhece Misty Step (1x por descanso curto)",
                    "Pode marcar uma arma com energia caótica"
                ]
            },
            {
                nivel: 8,
                requisitos: "Destruidor Entrópico (Nível 4)",
                descricao: "O caos flui através de você com intensidade crescente.",
                beneficios: [
                    "+1 em um atributo à escolha (máx 20)",
                    "Pode marcar duas armas",
                    "Armas marcadas causam +1d6 de dano",
                    "Cura 3d8 + Constituição uma vez por dia"
                ]
            },
            {
                nivel: 12,
                requisitos: "Destruidor Entrópico (Nível 8)",
                descricao: "Sua conexão com o caos atinge níveis transcendentais.",
                beneficios: [
                    "+1 em um atributo à escolha (máx 20)",
                    "Misty Step adicional por descanso",
                    "Conhece Banishment (1x por descanso curto)",
                    "Banishment causa 2d8 de dano extra"
                ]
            },
            {
                nivel: 16,
                requisitos: "Destruidor Entrópico (Nível 12)",
                descricao: "Você se torna uma manifestação viva da entropia.",
                beneficios: [
                    "+1 em um atributo à escolha (máx 20)",
                    "Dano de armas marcadas aumenta para 2d6",
                    "Armas marcadas são indestrutíveis"
                ]
            },
            {
                nivel: 19,
                requisitos: "Destruidor Entrópico (Nível 16)",
                descricao: "Domínio completo sobre as forças do caos.",
                beneficios: [
                    "+1 em um atributo à escolha (máx 20)",
                    "Remove desvantagem em testes de Inteligência",
                    "Remove vulnerabilidade a dano Psíquico",
                    "Pode causar dano de Força",
                    "Dano de armas marcadas: 3d6",
                    "Dano do Banishment: 3d8",
                    "Efeito de obliteração em criaturas banidas"
                ]
            }
        ]
    }
];