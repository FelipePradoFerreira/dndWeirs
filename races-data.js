// Banco de dados das raças
const racasData = [
    {
        id: 1,
        nome: "Humano",
        imagemCard: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        imagemWide: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        descricao: "Os humanos se espalharam por todos os continentes. Ao longo de séculos de adaptação aos diversos biomas, povos diferentes desenvolveram culturas únicas. Hoje os humanos ainda representam a grande maioria da população.",
        caracteristicas: {
            tipo: "Humanoide",
            idade: "Humanos atingem a maioridade aos 18 anos e podem viver até cerca de um século.",
            tamanho: "Médio (1,50m - 1,80m)",
            velocidade: "9m (30ft)",
            linguagem: "Comum e dois a sua escolha"
        },
        Humano Tradicional: {
            incrementoHabilidade: "Escolha entre aumentar três atributos em um ponto ou aumentar um atributo em dois pontos e outro em um.",
            tracos: [{
                nome: "Curiosidade Humana",
                descricao: "Os humanos de Weirs tem culturas diferentes que moldam seus talentos e habilidades desde o nascimento. Escolha um talento e uma perícia relacionados ao seu local de nascimento."
            }
            ]
        Tyinen: {
            descrição: "Após a recente descoberta e implementação dos Cristais Arcanos no dia-a-dia do continente, foi descoberto que esse recurso mágico valioso produz efeitos inusitados no corpo de humanos que ficam em contato com o composto. Na maior parte dos casos o triste fim é o envenenamento arcano que leva a sequelas físicas severas e em alguns casos até a morte. Alguns humanos conseguem sobreviver ao envenenamento arcano e estes podem desenvolver habilidades sobrehumanas depois do contato.",
            incrementoHabilidade: "Escolha dois atributos e aumente cada um em dois pontos.",
            tracos: [{
                nome: "Fagulha Arcana",
                descricao: "Apesar de ter sobrevivido ao envenenamento arcano essa experiência mudou a sua fisiologia de uma forma irreversível. Você tem acesso a uma Fagulha Arcana, uma habilidade de raça única causada pela influência dos Cristais Arcanos no seu corpo. Os poderes e habilidades adquiridos através de fagulha arcana são variados, combine com o seu mestre uma habilidade que ele julgue ser balanceada e adequada."
                nome: "Persona Non Grata",
                descricao: "A existência dos Tyinens é um fenômeno recente e ainda encarado com resistência pela maioria das nações do continente. A conduta varia de acordo com o território, desde atitudes mais radicais como o aprisionamento em campos de concentração que ocorre com os mutantes encontrados em Arindel, até a livre circulação como acontece no Reino Comunal das Quatro Espécies."
            }
            ]
        Escamados: {
            descrição: "Humanos marcados de forma irreversível por um poder celestial ou abissal.",
            incrementoHabilidade: "Escolha entre aumentar três atributos em um ponto ou aumentar um atributo em dois pontos e outro em um.",
            tracos: [{
                nome: "Corpo Marcado",
                descricao: "Sua forma física foi alterada de forma que remeta a entidade que maculou seu corpo. Você ganha um dos seguintes traços: Anfíbio, Ágil(nimble), Tática de Matilha ou Ancestral Feérico."
                nome: "Malidção",
                descricao: "Você pode entrar em acordo com sua nova realidade e usar sua maldição para sua vantagem. Como já está amaldiçoado, você se torna imune a novos efeitos de maldição."
                nome: "Conhecimento Proibido",
                descricao: "Estar ligado a forças ancestrais te dá acesso ao saber que não é acessível por todos. Escolha 2 perícias em que não tenha proficiência para adquirir. Adicionalmente, escolha uma perícia em que já tenha proficiência para adquirir especialização."
            }
            ]
        }    
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