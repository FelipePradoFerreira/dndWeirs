const classesData = [
    {
        id: 1,
        nome: "Guerreiro Espiritual",
        imagemCard: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        imagemVertical: "images/classes/GuerreiroEspiritual.jpg",
        descricaoCurta: "Mestres da energia vital que unem corpo e alma em harmonia",
        arte: "Nome do Artista",
        paginaartista: "https://exemplo.com/artista",

        secoes: [
            {
                tipo: "descricao",
                subtitulo: "A Lenda do Guerreiro Espiritual",
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
                    { nivel: 1, proficiencia: "+2", caracteristicas: "Pontos de Vita, Meditação Marcial", pontosVita: 2 },
                    { nivel: 2, proficiencia: "+2", caracteristicas: "Estilo de Combate, Fluxo Espiritual", pontosVita: 3 },
                    { nivel: 3, proficiencia: "+2", caracteristicas: "Caminho Espiritual", pontosVita: 4 },
                    { nivel: 4, proficiencia: "+2", caracteristicas: "Incremento de Habilidade", pontosVita: 5 },
                    { nivel: 5, proficiencia: "+3", caracteristicas: "Ataque Extra", pontosVita: 6 }
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
        ]
    }
];