// Banco de dados das raças
const racasData = [
    {
        id: 1,
        nome: "Draconato Lunar",
        imagemCard: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        imagemWide: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        descricao: "Descendentes de dragões que habitaram as luas de um mundo distante, os Draconatos Lunares possuem escamas que brilham com a luz do astro noturno e uma conexão innate com a magia arcana.",
        caracteristicas: {
            tipo: "Humanoide (draconato)",
            idade: "Amadurecem aos 15 anos e vivem até 80 anos",
            tamanho: "Médio (1,80m - 2,20m)",
            velocidade: "9m (30ft)",
            linguagem: "Comum e Draconico"
        },
        incrementoHabilidade: "+2 Carisma, +1 Força",
        tracos: [
            {
                nome: "Resistência Lunar",
                descricao: "Você tem resistência a dano de frio e vantagem em testes de resistência contra efeitos que causem sono."
            },
            {
                nome: "Sopro da Lua",
                descricao: "Uma vez por descanso, você pode exalar um sopro de energia lunar num cone de 4,5m. Criaturas na área devem fazer um teste de resistência de Destreza, sofrendo 2d6 de dano de frio em falha ou metade em sucesso."
            },
            {
                nome: "Visão no Escuro",
                descricao: "Você enxerga 18m na penumbra como se fosse luz forte e na escuridão como se fosse penumbra."
            }
        ]
    },
    {
        id: 2,
        nome: "Sylvanos",
        imagemCard: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        imagemWide: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        descricao: "Seres feitos de matéria vegetal animada por espíritos da natureza, os Sylvanos são guardiões das florestas antigas e possuem uma conexão profunda com o mundo natural.",
        caracteristicas: {
            tipo: "Planta",
            idade: "Amadurecem em 10 anos e podem viver séculos",
            tamanho: "Médio (1,70m - 2,00m)",
            velocidade: "9m (30ft)",
            linguagem: "Comum, Silvestre e um idioma próprio"
        },
        incrementoHabilidade: "+2 Sabedoria, +1 Destreza",
        tracos: [
            {
                nome: "Comunicação com Plantas",
                descricao: "Você pode se comunicar com plantas e obter informações simples delas."
            },
            {
                nome: "Fotossíntese",
                descricao: "Você precisa de apenas 4 horas de luz solar por dia em vez de descansar. Ainda precisa dormir, mas não sofre exaustão por falta de descanso completo."
            },
            {
                nome: "Raízes Resilientes",
                descricao: "Quando está com os pés no chão natural, você tem vantagem em testes de resistência para não ser derrubado."
            }
        ]
    },
    {
        id: 3,
        nome: "Nebulino",
        imagemCard: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        imagemWide: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        descricao: "Seres feitos de matéria nebulosa e energia arcana, os Nebulinos podem manipular neblina e se camuflar no ambiente com facilidade.",
        caracteristicas: {
            tipo: "Elemental",
            idade: "Não envelhecem convencionalmente, vivem até 200 anos",
            tamanho: "Médio (1,60m - 1,90m)",
            velocidade: "9m (30ft)",
            linguagem: "Comum e Auran"
        },
        incrementoHabilidade: "+2 Destreza, +1 Inteligência",
        tracos: [
            {
                nome: "Forma Nebulosa",
                descricao: "Uma vez por descanso, você pode se tornar nebuloso por 1 minuto, ganhando resistência a dano não-mágico."
            },
            {
                nome: "Camuflagem Natural",
                descricao: "Você tem vantagem em testes de Furtividade em áreas com neblina ou pouca visibilidade."
            }
        ]
    }
];