const planosData = {
    terra: "Terra",
    tenebris: "Tenebris"
};

// Banco de dados das raças
const racasData = [
/* #region Raças da Terra (ID 1 a 100) */
    //Humanos ID 1
    {
        id: 1,
        nome: "Humano",
        plano: planosData.terra,
        imagemCard: "images/cards/Humano.jpg",
        imagemWide: "images/banner/Humano.jpg",
        descrição: `Desde os primórdios da civilização, os humanos têm se destacado por sua adaptabilidade e resiliência. Com uma diversidade cultural rica e uma capacidade inata de inovação, 
        eles são encontrados em quase todos os cantos do mundo, moldando a história com suas conquistas e desafios.<br> Seus feitos notáveis incluem a construção de vastos impérios, avanços 
        tecnológicos e artísticos, e uma influência duradoura nas sociedades ao redor do globo. <br> Hoje, são vistos como mediadores, cuidando para que a ordem se mantenha em um mundo repleto 
        de mistérios a serem desvendados. <br> Apesar de sua adaptabilidade, os humanos enfrentam desafios únicos na forma de mutações que não afetam as demais espécies, como os mutantes Tyinen 
        e os Escamados, que são humanos transformados de maneira irreversível por poderes externos. Ainda que surjam desafios na convivência dessa nova realidade, os humanos transformam esse 
        poder em vantagem, retaliando com força total contra aqueles que ameaçam sua existência.`,
        arte: "Imad Awan",
        paginaartista: "https://www.artstation.com/imadawan",
        caracteristicas: {
            tipo: "Humanoide",
            idade: "Humanos atingem a maioridade aos 18 anos e podem viver até cerca de um século.",
            tamanho: "Médio (1,50m - 1,80m)",
            velocidade: "9m (30ft)",
            linguagem: "Comum e dois a sua escolha"
        },
        subRacas: [
            {
                tipo: "semDescricao",
                nome: "Humano Tradicional",
                incrementoHabilidade: "Escolha entre aumentar três atributos em um ponto ou aumentar um atributo em dois pontos e outro em um.",
                tracos: [{
                    nome: "Curiosidade Humana",
                    descrição: `Os humanos de Weirs tem culturas diferentes que moldam seus talentos e habilidades desde o nascimento. Escolha um talento e uma perícia relacionados ao seu 
                    local de nascimento.`
                }]
            },
            {
                tipo: "comDescricao",
                nome: "Tyinen",
                descrição: `Após a recente descoberta e implementação dos Cristais Arcanos no dia-dia do continente, foi descoberto que esse recurso mágico valioso produz efeitos inusitados 
                no corpo de humanos que ficam em contato com o composto. Na maior parte dos casos o triste fim é o envenenamento arcano que leva a sequelas físicas severas e em alguns casos até 
                a morte. Alguns humanos conseguem sobreviver ao envenenamento arcano e estes podem desenvolver habilidades sobrehumanas depois do contato.",
                incrementoHabilidade: "Escolha dois atributos e aumente cada um em dois pontos.`,
                tracos: [
                    {
                        nome: "Fagulha Arcana",
                        descrição: `Apesar de ter sobrevivido ao envenenamento arcano essa experiência mudou a sua fisiologia de uma forma irreversível. Você tem acesso a uma Fagulha Arcana, 
                        uma habilidade de raça única causada pela influência dos Cristais Arcanos no seu corpo. Os poderes e habilidades adquiridos através de fagulha arcana são variados, 
                        combine com o seu mestre uma habilidade que ele julgue ser balanceada e adequada.`
                    },
                    {
                        nome: "Persona Non Grata",
                        descrição: `A existência dos Tyinens é um fenômeno recente e ainda encarado com resistência pela maioria das nações do continente. A conduta varia de acordo com o 
                        território, desde atitudes mais radicais como o aprisionamento em campos de concentração que ocorre com os mutantes encontrados em Arindel, até a livre circulação como 
                        acontece no Reino Comunal das Quatro Espécies.`
                    }
                ]
            },
            {
                tipo: "comDescricao",
                nome: "Escamado",
                descrição: "Humanos marcados de forma irreversível por um poder celestial ou abissal.",
                tracos: [
                    {
                        nome: "Corpo Marcado",
                        descrição: `Sua forma física foi alterada de forma que remeta à entidade que maculou seu corpo. Você ganha um dos seguintes traços: Anfíbio, Ágil (nimble), Tática de 
                        Matilha ou Ancestral Feérico.`
                    },
                    {
                        nome: "Maldição",
                        descrição: `Você pode entrar em acordo com sua nova realidade e usar sua maldição para sua vantagem. Como já está amaldiçoado, você se torna imune a novos efeitos de 
                        maldição.`
                    },
                    {
                        nome: "Conhecimento Proibido",
                        descrição: `Estar ligado a forças ancestrais te dá acesso ao saber que não é acessível por todos. Escolha 2 perícias em que não tenha proficiência para adquirir. 
                        Adicionalmente, escolha uma perícia em que já tenha proficiência para adquirir especialização.`
                    }
                ]
            }
        ]
    },
    //Taurinos ID 2
    {
        id: 2,
        nome: "Taurino",
        plano: planosData.terra,
        imagemCard: "images/cards/Taurino.jpg",
        imagemWide: "images/banner/Taurino.jpg",
        arte: "Martin Paz",
        paginaartista: "https://www.artstation.com/martin_paz",
        descrição: `A raça taurina é conhecida por sua aparência de meio homem, meio touro, com chifres imponentes e uma musculatura robusta. Desde a Singularidade, em que além da mudança 
        física, o domínio magia e a tecnologia foram desbloqueados na mente dos taurinos, eles se dedicaram ao desenvolvimento do conhecimento em áreas como ciência, ki-tech e arcanismo. 
        Como uma sociedade altamente organizada e respeitada, os taurinos são geralmente vistos como pacíficos e intelectuais, valorizando a educação e a diplomacia acima de tudo.`,
        caracteristicas: {
            tipo: "Humanoide",
            idade: "Taurinos tem um ciclo lento de vida, com gestações demoradas, e atingem a maioridade aos 30 anos, podendo viver até dois séculos.",
            tamanho: "Taurinos no geral tem a musculatura mais desenvolvida em comparação a humanos e ossos mais densos. A altura média da espécie varia entre 1,7m e 2m. Seu tamanho é Medio.",
            velocidade: "Você tem um deslocamento base de 30 ft.",
            linguagem: "Sua capacidade mental ampliada te permite aprender idiomas mais facilmente. Você domina o idioma bovino e outros dois a sua escolha."
        },
        incrementoHabilidade: "Escolha dois atributos entre: Força, Constituição, Sabedoria e Inteligência. Você ganha dois pontos em cada uma das duas escolhas.",
        tracosComuns: [
            {
                nome: "Visão no Escuro",
                descrição: "Você consegue enxergar até 60 ft na penumbra como se fosse luz plena e no escuro como se fosse penumbra. Você não consegue discernir cores no escuro."
            },
            {
                nome: "Mente Ordenada",
                descrição: `Desde a singularidade a sua espécie é vinculada a divindade Senso, que representa a Ordem em Weirs. Escolha duas perícias entre: História, Arcanismo, Sobrevivência, 
                Natureza, Religião e Percepção. Você ganha proficiência nas duas perícias escolhidas e no nível 6 você ganha aptidão em ambas.`
            },
            {
                nome: "Cornos de Touro",
                descrição: `Você possui cornos de touro resistente que podem ser usados como armas, mas que não nascem novamente caso se quebrem. Os seus chifres são uma arma natural e você é 
                proficiente com eles. Use o modificador de Força no ataque e no dano. O ataque causa um dano de 1d10 enquanto o indivíduo ainda possuir os dois cornos e de 1d6 caso fique 
                reduzido a 1. O dano é perfurante.`
            },
            {
                nome: "Fagulha da Singularidade",
                descrição: `A fagulha da singularidade presente nos Taurinos dá a eles uma conexão natural com a dimensão de bolso de Senso e permite que eles usem essa energia para produzir 
                efeitos arcanos limitados. Você sabe o truque Prestidigitação. Quando atinge o nível 3, você aprende a magia Silvery Barbs e pode utiliza-la 1x ao dia através desse traço. 
                Quando atinge o nível 5, você aprende a magia Tranca Arcana e pode utiliza-la 1x ao dia através desse traço. Quando atinge o nível 10 você pode utilizar cada magia limitada do 
                traço 3 vezes ao dia.`
            }
        ]
    },
    //Dracônidos ID 3
    {
        id: 3,
        nome: "Dracônido",
        plano: planosData.terra,
        imagemCard: "images/cards/Dracônido.jpg",
        imagemWide: "images/banner/Dracônido.jpg",
        descrição: `Os dracônicos são uma raça antiga de humanoides com características de dragão. Eles podem possuir escamas em seu corpo, uma cauda reptiliana, ou asas membranosas que lhes 
        permitem voar. Os dracônicos possuem um forte senso de honra e lealdade, sendo conhecidos por sua disciplina e habilidades em combate. Eles também possuem uma longa vida, podendo viver 
        por vários séculos. <br> Os dracônicos são uma raça muito reservada e guardam seus segredos com grande zelo, o que os torna uma das raças mais misteriosas do mundo. Sua cultura é 
        fortemente baseada em tradições e rituais, incluindo um rigoroso código de conduta para os guerreiros e um complexo sistema de herança para a nobreza. <br> Os dracônicos possuem uma 
        habilidade natural para a magia, especialmente para a magia elemental. Eles são conhecidos por suas habilidades em conjurar chamas, relâmpagos e ventos poderosos. No entanto, essa 
        habilidade também é vista com desconfiança e temor por outras raças, muitas vezes levando a tensões e conflitos.`,
        arte: "Jay Walczyk",
        paginaartista: "https://www.artstation.com/swiftend",
        caracteristicas: {
            tipo: "Humanoide",
            idade: "Dracônidos tem um ciclo breve de vida, com gestações curtas, e atingem a maioridade aos 10 anos, podendo viver até cerca de 70.",
            tamanho: "Dracônidos variam muito de constituição de acordo com a subespécie, mas a maioria mede entre 1,6 e 1,9m",
            velocidade: "Você tem um deslocamento base de 40 ft.",
            linguagem: "Você domina Drakar, Eridano e Comum.",
        },
        incrementoHabilidade: "Escolha dois atributos entre: Força, Constituição, Destreza e Carisma. Você ganha dois pontos em cada uma das duas escolhas.",
        tracosComuns: [
            {
                nome: "Visão no Escuro Superior",
                descrição: "Você consegue enxergar até 120 ft na penumbra como se fosse luz plena e no escuro como se fosse penumbra. Você consegue discernir cores no escuro."
            },
            {
                nome: "Mente Caótica",
                descrição: `Escolha duas perícias entre: Atletismo, Acrobacia, Intimidação, Performance, Persuasão e Enganação. Você ganha proficiência nas duas perícias escolhidas e no nível 6 
                você ganha aptidão em ambas.`
            },
            {
                nome: "Garras",
                descrição: `Você possui garras que podem ser usadas como armas. Suas garras arma naturais que podem ser utilizadas se você estiver com uma mão livre e você é proficiente com 
                elas. Use o modificador de Força ou Destreza no ataque e no dano. O ataque causa um dano de 1d10 enquanto o indivíduo tiver duas mãos livres e 1d6 se for uma. O dano é cortante.`
            }
        ],
        subRacas: [
            {
                tipo: "comDescricao",
                nome: "Teído",
                descrição: `A subespécie de casta mais baixa na sociedade drakonia, os teídos tem a musculatura bem desenvolvida e tem a pele enrijecida e organizada em escamas em algumas partes 
                do corpo.`,
                tracos: [
                    {
                        nome: "Escamoso",
                        descrição: `Você tem escamas espalhadas por algumas partes de seu corpo. Isso lhe confere uma ca de 18 se não tiver usando armadura. Suas escamas são duras o suficiente 
                        para produzir armas.`
                    },
                    {
                        nome: "Afinidade Mineral",
                        descrição: `Como um Teído, sua afinidade elemental é com o elemento terra. Você ganha um controle limitado de minerais, e consegue utilizar esse traço uma vez ao dia 
                        para aumentar a sua ca para 20 e ganhar resistência aos danos cortante e perfurante por 1 minuto caso esteja em uma área com forte incidencia de minérios ou metais.`
                    }
                ]
            },
            {
                tipo: "comDescricao",
                nome: "Pagona",
                descrição: "Considerados intermediários entre a nobreza e os camponeses, os Pogona tem peles de cores quentes e um rabo reptiliano musculoso com a capacidade de autotomia.",
                tracos: [
                    {
                        nome: "Cauda de Dragão",
                        descrição: `Você ganha um ataque de rabo, que pode ser feito como uma ação bônus e usa o modificador de força no ataque e no 1d8 de dano. Além disso você pode soltar a 
                        sua cauda em uma situação de perigo. Quando sofrer um crítico ou falhar em um teste de resistencia que envolva um perigo que você possa ver e que vá te atingir 
                        fisicamente, você pode soltar o rabo e ignorar o dano causado pelo ataque ou efeito. Quando você libera o rabo, você perde o ataque dele até que ele nasça novamente, 
                        o que leva cerca de 1 mês.`
                    },
                    {
                        nome: "Afinidade Elétrica",
                        descrição: `Como um Pogona, a sua afinidade elemental é com o elemento eletricidade. Você ganha a capacidade de usar esse traço uma vez ao dia para embuir a pele da sua 
                        cauda em eletricidade. Durante 1 minuto, ataques com a cauda terão um dano adicional de 1d6 do tipo elétrico.`
                    }
                ]
            },
            {
                tipo: "comDescricao",
                nome: "Volan",
                descrição: "Os mais estimados membros da sociedade drakonia. Volans tem a estatura e a musculatura reduzidas, mas isso otimiza a habilidade única de vôo da subespécie.",
                tracos: [
                    {
                        nome: "Tamanho Reduzido",
                        descrição: "Como um Volan, você mede entre 1m e 1,4m. Você é Pequeno."
                    },
                    {
                        nome: "Asas Membranosas",
                        descrição: "Você ganha um deslocamento de vôo igual ao seu deslocamento de caminhada."
                    },
                    {
                        nome: "Afinidade Ardente",
                        descrição: `Como um Volan, sua afinidade elemental é com o elemento fogo. Você ganha uma arma de sopro que é um cone de 20 ft. (Salvaguarda de DES). A arma de sopro 
                        causa 3d6 de dano de fogo em uma falha e metade em um sucesso. O dano aumenta em 1d6 nos níveis 6, 11 e 16. Você pode usar esse traço duas vezes ao dia.`
                    }
                ]
            }
        ]
    },
    //Fadas ID 4
    {
        id: 4,
        nome: "Fada",
        plano: planosData.terra,
        imagemCard: "images/cards/Fada.jpg",
        imagemWide: "images/banner/Fada.jpg",
        descrição: `As fadas são criaturas humanoides diminutas, medindo apenas cerca de 25 a 40 centímetros de altura. Elas possuem a habilidade de invocar asas de inseto de suas costas, 
        permitindo que elas voam com grande agilidade e destreza. Sua aparência é muito semelhante à dos seres humanos, embora tenham orelhas pontudas e asas. As fadas têm uma forte conexão 
        com a natureza e com o arcano, e são frequentemente vistas dançando em torno de flores e árvores. <br> A cultura das fadas é altamente interligada, apesar de cada núcleo ter 
        individualidades, com cada tribo sendo governada por um conselho de anciãos. Eles têm uma rica tradição oral, transmitida através de canções e histórias, e não costumam escrever 
        egistros escritos. No entanto, eles têm uma boa vontade para criar relações com outras culturas de Tholus desde que entraram em contato, e muitas vezes ajudam a proteger a natureza e 
        a harmonia do mundo. Os anciões são considerados entidades vivas para as fadas e só ficam abaixo das Centelhaflora, a subespécie raríssima de fadas que é vista como um tipo de liderança 
        centralizada para todos os núcleos. <br> As fadas são conhecidas por suas habilidades mágicas, especialmente em relação à manipulação do arcano. Além disso, elas são capazes de se 
        comunicar com os animais e têm a capacidade de se transformar em animais, especialmente pássaros e insetos. Essas habilidades as tornam valiosas para outras culturas que precisam de 
        ajuda para proteger a natureza e manter o equilíbrio do mundo.`,
        arte: "Evyn Fong",
        paginaartista: "https://www.artofmtg.com/artist/evyn-fong/",
        caracteristicas: {
            tipo: "Humanoide",
            idade: `A maioria das fadas vive cerca de um século. As concepções acontecem aleatoriamente e podem ocorrer em machos ou fêmeas. O conceito de maioridade é relativo e varia em 
            cada núcleo.`,
            tamanho: `Fadas tradicionais medem entre 25 e 40 centímetros de altura e costumam ter constituições mais esguias. Você é pequeno.",
            velocidade: "Você tem um deslocamento base de 20 ft e um deslocamento de vôo de 40 ft. Apesar de suas asas terem a capacidade de surgir e desaparecer conforme sua vontade, danos 
            severos causados a elas serão mantidos.`,
            linguagem: "Todas as tribos de Suzana dividem o mesmo idioma, o Silvestre. Além desse idioma, você é proficiente em outras duas linguas Tholenses."
        },
        tracosComuns: [
            {
                nome: "Visão no Escuro",
                descrição: "Você consegue enxergar até 120 ft na penumbra como se fosse luz plena e no escuro como se fosse penumbra. Você consegue discernir cores no escuro."
            }
        ],
        subRacas: [
            {
                tipo: "semDescricao",
                nome: "Fada Tradicional",
                incrementoHabilidade: "Escolha dois atributos entre: Destreza, Inteligência, Sabedoria e Carisma. Você ganha dois pontos em cada uma das duas escolhas.",
                tracos: [
                    {
                        nome: "Sentidos Selvagens",
                        descrição: `Escolha duas perícias entre: Sobrevivência, Natureza, Percepção, Adestrar Animais, Acrobacia, Medicina e Intuição. Você ganha proficiência nas duas. Ao 
                        atingir o nível 10, você ganha aptidão em ambas as escolhas.`
                    },
                    {
                        nome: "Fagulha Natural",
                        descrição: `Sua conexão com a natureza lhe permite usar essa energia de forma arcana de forma limitada. Você sabe o truque Druídismo. 
                        <br> No nível 3, você aprende a magia Fogo Feérico e pode conjura-la uma vez ao dia usando esse traço. 
                        <br> No nível 5, você aprende a magia Aumentar/Reduzir e pode conjura-la uma vez ao dia usando esse traço. 
                        <br> No nível 8, você aprende a magia Dominar Besta e pode conjura-la uma vez ao dia usando esse traço. 
                        <br> No nível 10, você aprende a magia Alterar Aparências e pode conjura-la uma vez ao dia usando esse traço.`
                    }
                ]
            },
            {
                tipo: "comDescricao",
                nome: "CentelhaFlora",
                descrição: `Um tipo de família real matriarcal da ilha das fadas. A família é sempre comandada por uma mulher chamada Suzana, que possui poderes arcanos acima da média. A atual 
                matriarca é a Cacique Suzana XV . Além das suzanas, existem outros CentelhaFlora que vivem de forma nômade seguindo a cacique pela ilha.`,
                incrementoHabilidade: "Escolha dois atributos entre: Destreza, Inteligência, Sabedoria e Carisma. Você ganha dois pontos em uma das duas escolhas e um na outra.",
                tracos: [
                    {
                        nome: "Tamanho Aumentado",
                        descrição: "CentelhaFloras são maiores que as fadas tradicionais e possuem estaturas semelhantes as de humanos. Você é Médio."
                    },
                    {
                        nome: "Forma Selvagem",
                        descrição: `Com uma conexão sobrenatural com a natureza, as fadas da 'família real' conseguem utilizar o traço Forma Selvagem como se fossem druídas. Consulte o mestre 
                        sobre melhoras nesse traço caso o possua por outra fonte.`
                    }
                ]
            }
        ]
    },
    //Acquos ID 5
    {
        id: 5,
        nome: "Acquo",
        plano: planosData.terra,
        imagemCard: "images/cards/Acquo.jpg",
        imagemWide: "images/banner/Acquo.jpg",
        descrição: "Os Acquos são humanoides aquáticos que habitam as profundezas e recifes esquecidos dos mares do plano material. Sua aparência mescla traços humanos com as formas de criaturas marinhas, variando conforme sua subespécie. Entre eles existem três linhagens distintas: os Selakroi, de pele áspera e dentes serrilhados, temidos por sua força e instinto predatório; os Ostelis, mais comuns e variados, com escamas coloridas e grande adaptabilidade aos diferentes habitats; e os Nautilum, de corpos mais flexíveis e olhos brilhantes, conhecidos por seus tentáculos.",
        arte: "Conor Burke",
        paginaartista: "https://www.artstation.com/conorburke",
        caracteristicas: {
            tipo: "Humanoide",
            idade: `Acquos tem um ciclo rápido de vida na maioria dos casos, com ovoposições fartas, e atingem a maioridade aos 10 anos, podendo viver até 60 anos. Selakrois tem um ciclo de 
            vida mais longos, com gestação. Atingem a maioridade aos 25 anos e podem viver até dois séculos.`,
            tamanho: `Acquos no geral tem a fisiologia adaptada para a vida aquática, com fenótipos diferentes entre as subespécies. A altura média da espécie varia entre 1,5m e 2m. Seu 
            tamanho é Medio.`,
            velocidade: "Você tem um deslocamento base de 30 ft e um deslocamento de nado de 40 ft.",
            linguagem: "Você domina o idioma acquos e outro a sua escolha.",
        },
        tracosComuns: [
            {
                nome: "Anfíbio Limitado",
                descrição: "Acquos podem respirar ar ou água mas precisam ficar submersos ao menos 1 hora por dia."
            },
            {
                nome: "Visão no Escuro",
                descrição: "Você pode enxergar em até 60 ft na escuridão não mágica. Você não consegue distinguir cores no escuro."
            }
        ],
        subRacas: [
            {
                tipo: "semDescricao",
                nome: "Selakroi",
                incermentoHabilidade: "Escolha dois atributos entre: Força, Constituição e Destreza. Você ganha dois pontos em cada uma das duas escolhas.",
                tracos: [
                    {
                        nome: "Ampolas de Lorenzini",
                        descrição: `Você tem órgãos sensitivos especiais que te permitem sentir o campo magnético de seres vivos. Voce tem visão verdadeira em um raio de 5 ft em ambientes 
                        secos e de 30 ft quando submerso.`
                    },
                    {
                        nome: "Arma Natural",
                        descrição: `A sua mordida é poderosa o suficiente para ser considerada uma arma. Voce usa a sua força nos ataques e no dano. Voce é proficiente com a mordida. O dano 
                        é 1d8 do tipo perfurante.`
                    }
                ]
            },
            {
                tipo: "semDescricao",
                nome: "Ostelis",
                incrementoHabilidade: "Escolha dois atributos entre: Constituição, Destreza ou Carisma. Você ganha dois pontos em cada uma das duas escolhas.",
                tracos: [
                    {
                        nome: "Efeito Cardume",
                        descrição: `Enquanto engajado em combate, se houverem 2 ou mais aliados engajados a até 10 ft de distancia, ataques contra você sofrem desvantagem.`
                    },
                    {
                        nome: "Disparo de Água",
                        descrição: `Se tiver acesso a uma fonte de água, você pode disparar água pela boca usando mudança de pressão. Faça um ataque a distância contra uma criatura que esteja 
                        a até 30 ft. Se acertar, a criatura sofre 1d4 de dano concussivo e perde a capacidade de realizar reações até o fim do seu próximo turno.`
                    }
                ]
            },
            {
                tipo: "semDescricao",
                nome: "Nautilum",
                incrementoHabilidade: "Escolha dois atributos entre: Constituição, Destreza, Carisma ou Inteligência. Você ganha dois pontos em cada uma das duas escolhas.",
                tracos: [
                    {
                        nome: "Bolsa de Tinta",
                        descrição: `Você possui uma glândula produtora de tinta e uma bolsa natural para armazena-la. Caso esteja submerso, você pode utilizar uma ação bônus para criar uma 
                        área de escuridão de 15 ft de raio ao seu redor. Caso esteja em terra seca, pode utilizar uma reação ao ser acertado por um ataque corpo-a-corpo para disparar tinta 
                        no oponente. Um oponente atingido deve ser bem sucedido em um teste de resistência de constituição cd 12 ou ficará cego até o final do próximo turno dele. Você pode 
                        utilizar esse traço um número duas vezes e recupera os usos ao fim de um descanso longo.`
                    },
                    {
                        nome: "Camuflagem",
                        descrição: `Caso não tenha se movido no último turno, você pode utilizar uma ação bônus para ativar os cromatóforos de sua pele e se camuflar, te permitindo utilizar 
                        a ação esconder. Quando você se esconde dessa maneira, você pode optar por não rolar o dado e obter o resultado automático 15. Adicionalmente, estar sendo diretamente 
                        observado não te impede de se esconder através desse traço.`
                    },
                    {
                        nome: "Apêndice",
                        descrição: `Você possui uma dessas formas de apêndice de molusco no lugar de alguma parte do corpo.
                        <br><b>Tentáculos.</b> Seus braços são tentáculos de cefalópode. Você tem vantagem em jogadas de agarrão e em testes de habilidade que impeçam que objetos sejam tirados 
                        de suas “mãos”. Seu alcance é de 10 ft.
                        <br><b>Pé Muscular.</b> Suas pernas são um grande pé muscular de gastrópode. Sua velocidade em terra é reduzida em 10 ft, porém você pode escalar superfícies verticais 
                        sem utilizar as mãos e pode ignorar terreno difícil.
                        <br><b>Sifão.</b> Parte de suas costas é moldada em um sifão muscular capaz de expelir água ou ar. Enquanto submerso, sua velocidade de movimento aumenta para 50 ft. 
                        Enquanto em terra firme, sua distância e altura de salto são dobradas e você pode utilizar a ação de disparada como ação bonus.
                        `
                    }
                ]
            }
        ]
    },
    //Aslarianos ID 6
    {
        id: 6,
        nome: "Aslariano",
        plano: planosData.terra,
        imagemCard: "images/cards/Aslariano.jpg",
        imagemWide: "images/banner/Aslariano.jpg",
        descrição: `Os Aslarianos são leões humanoides orgulhosos, de presença imponente e espírito indomável. Embora vivam em populações pequenas e dispersas, sua influência se espalha por 
        muitos cantos do mundo. Cada comunidade desenvolve sua própria cultura, mas quase todas compartilham uma reverência pela batalha como parte essencial da vida, seja como meio de defesa, 
        de honra ou de transcendência espiritual. Entre caçadas rituais, duelos de prova e campanhas de conquista, os Aslarianos veem o combate não apenas como sobrevivência, mas como o fio 
        que entrelaça seu destino coletivo.`,
        arte: "Rudy Siswanto",
        paginaartista: "https://www.artstation.com/crutz",
        caracteristicas: {
            tipo: "Humanoide",
            idade: `Aslarianos possuem um ciclo de vida similar ao dos humanos, atingindo a maioridade aos 20 anos e vivendo por volta de um século.`,
            tamanho: `Aslarianos possuem músculos bem desenvolvidos nos membros superiores e inferiores. Os ossos são densos e largos. A média de altura é de 2 metros e o seu tamanho é médio.`,
            velocidade: `Você tem um deslocamento base de 30 ft.`,
            linguagem: `Você domina o idioma comum e outro a sua escolha.`,
        },
        incrementoHabilidade: "Escolha dois atributos entre: Força, Destreza ou Carisma. Você ganha dois pontos em cada uma das duas escolhas.",
        tracosComuns: [
            {
                nome: "Armas Naturais",
                descrição: `Suas presas e suas garras funcionam como armas naturais. Elas causam 1d6 de dano perfurante ou cortante, respectivamente. Você é proficiente com suas armas naturais.`
            },
            {
                nome: "Orgulho de Batalha",
                descrição: `Quando seus pontos de vida forem reduzidos a 0 em combate, você pode utilizar uma reação para fazer com que sejam reduzidos a 1 ao invés disso. Você pode usar esse 
                traço uma vez e recupera o uso ao terminar um descanso longo.`
            },
            {
                nome: "Ataque Descuidado",
                descrição: `Como uma ação bônus, você é capaz de canalizar o espírito da batalha em seu corpo e lutar por puro instinto. Durante 1 min. ou até o efeito ser encerrado por uma 
                ação, ataques corpo-a-corpo feitos por você e contra você ganham vantagem.`
            },
            {
                nome: "Visão no Escuro",
                descrição: `Você pode enxergar em até 60 ft na escuridão não mágica. Você não consegue distinguir cores no escuro.`
            }

        ]
    },
    //Luminaris ID 7
    {
        id: 7,
        nome: "Luminari",
        plano: planosData.terra,
        imagemCard: "images/cards/Temporario.jpg",
        imagemWide: "images/banner/Temporario.jpg",
        descrição: `Os Luminaris são humanoides pequenos e raros, de pele esverdeada marcada por linhas bioluminescentes que brilham em diferentes cores conforme suas emoções. Reclusos por 
        natureza, vivem em pequenas comunidades isoladas em florestas densas ou cavernas cristalinas, preferindo observar o mundo à distância em vez de se envolver nele diretamente. Para eles, 
        cada cor de luz é um reflexo da alma, tornando impossível esconder seus sentimentos mais profundos. Muitos povos consideram os Luminaris seres místicos, guardiões de segredos antigos ou 
        mensageiros de presságios.`,
        arte: "Nome do Artista",
        paginaartista: "Link do Artista",
        caracteristicas: {
            tipo: "Humanoide",
            idade: `Luminaris possuem um ciclo de vida longo, atingindo a maioridade aos 40 anos e vivendo por volta de três séculos.`,
            tamanho: `Luminaris são seres esguios e baixos quando comparados a humanos. A média de altura é de 1 metro e o seu tamanho é médio ou pequeno.`,
            velocidade: `Você tem um deslocamento base de 25 ft.`,
            linguagem: `Você domina o idioma luminari e outro a sua escolha.`,
        },
        incrementoHabilidade: "Escolha dois atributos entre: Destreza, Carisma, Sabedoria ou Inteligência. Você ganha dois pontos em cada uma das duas escolhas.",
        tracosComuns: [
            {
                nome: "Empata Arcano",
                descrição: `Você pode sentir as emoções de criaturas voluntárias.`
            },
            {
                nome: "Presença Luminosa",
                descrição: `Como uma ação bonus você consegue ativar suas linhas bioluminescentes. Ao fazer isso, você emite luz fraca num raio de 15 ft por 1 minuto. A cor muda conforme suas 
                emoções, podendo ser ocultada com esforço (ação bônus para suprimir). Além de iluminar, pode conceder vantagem em testes de Carisma (Intimidação ou Persuasão) ao realçar sua 
                emoção no momento.`
            },
            {
                nome: "Brilho Catalisador",
                descrição: `Como uma ação bônus você pode extinguir temporariamente o brilho de suas linhas bioluminescentes para concentrar essa energia restaurando um aliado. Você pode 
                restaurar pontos de vida iguais a 2d4 de um aliado que possa tocar com o custo de não poder mais utilizar a presença luminosa até completar um descanso curto ou longo.`
            }
        ]
    },
    //Arcanuros ID 8
    {
        id: 8,
        nome: "Arcanuro",
        plano: planosData.terra,
        imagemCard: "images/cards/Arcanuros.jpg",
        imagemWide: "images/banner/Arcanuros.jpg",
        descrição: `Os Arcanuros são sapos humanoides de pele úmida e olhos esbugalhados que carregam uma aura arcana natural. Diferem dos anfíbios comuns por sua postura ereta, membros mais 
        longos e a estranha marca de nascença que quase todos possuem: linhas e manchas que brilham suavemente quando entram em contato com magia.
        <br>Vivem em pântanos, florestas úmidas e regiões ribeirinhas, geralmente em pequenos clãs, mas têm fama de andarilhos curiosos, sempre em busca de segredos místicos ou novos mestres. 
        Muitos acreditam que os Arcanuros descendem de uma linhagem antiga de anfíbios expostos a uma convergência mágica, o que explicaria sua facilidade natural em lidar com feitiços, 
        símbolos e rituais.
        <br>Apesar de sua aparência simplória e seu jeito lento e observador, os Arcanuros são profundos pensadores espirituais. Em comunidades místicas, costumam ocupar papéis de conselheiros 
        ou iniciados. Em combate, confiam mais em sua intuição mágica e na leitura da energia espiritual dos outros do que em força bruta.`,
        arte: "Simon Dominic",
        paginaartista: "https://www.artofmtg.com/artist/simon-dominic/",
        caracteristicas: {
            tipo: "Humanoide",
            idade: `Arcanuros possuem um ciclo de vida curto, atingindo a maioridade aos 10 anos e vivendo por volta de 50.`,
            tamanho: `Arcanuros são geralmente baixos quando comparados a humanos. A média de altura é de 1 metro e o seu tamanho é médio ou pequeno.`,
            velocidade: `Você tem um deslocamento base de 30 ft e um deslocamento de nado de 25 ft. Suas distâncias ou alturas de saltos são dobradas.`,
            linguagem: `Você domina o idioma comum e outro a sua escolha.`,
        },
        incrementoHabilidade: 'Escolha dois atributos entre: Destreza, Sabedoria ou Constituição. Você ganha dois pontos em cada uma das duas escolhas.',
        tracosComuns: [
            {
                nome: "Anfíbio",
                descrição: `Você pode respirar no ar ou na água.`
            },
            {
                nome: "Um Com o Meio",
                descrição: `Se estiver próximo ou em meio ao bioma em que nasceu você tem um número de pontos de vida temporários iguais ao seu nível + seu modificador de constituição. 
                Você recupera esses pontos de vida temporários ao terminar um descanso longo.`
            }
        ],
        subRacas: [
            {
                tipo: "comDescricao",
                nome: "Arcanuros de Mantra",
                descrição: `Conhecidos assim pelo fato do maior número de seus representantes estar localizado na ilha de Mantra, em Véspera, essa subespécie se diferencia culturalmente e 
                fisiologicamente. Mais retraídos de interações com outras espécies e ainda mais conectados com a natureza, os arcanuros de mantra trocam a disciplina pela liberdade.`,
                tracos: [
                    {
                        nome: "Conjuração Natural",
                        descrição: `Habilidade atingida apenas pelos arcanuros com menos preocupações e maior comunhão com o ambiente. Você é capaz de canalizar a energia mágica natural em 
                        seu corpo sem esforço. Você conhece o truque Thorn Whip, que conjura utilizando a língua. Adicionalmente, você conhece as magias Jump e Fog Cloud e pode conjura-las 
                        sem custos 1 vez por descanso longo. Essas magias não ocupam espaço em sua lista de magias e truques conhecidos.`
                    }
                ]
            }
        ]
    },
    //Protóides ID 9
    {
        id: 9,
        nome: "Protóide",
        plano: planosData.terra,
        imagemCard: "images/cards/Protoides.jpg",
        imagemWide: "images/banner/Protoides.jpg",
        descrição: `Os Protoides são uma raça telepática de humanoides amorfos, descendentes de antigas formas de vida primordiais moldadas pela própria essência arcana do mundo. Seu corpo é 
        composto por uma carne viscosa e flexível, capaz de assumir contornos vagamente humanoides, embora raramente perfeitos. Cada linhagem Protoide possui tonalidades distintas, do cinzento 
        opaco ao translúcido iridescente, refletindo tanto sua herança quanto sua condição emocional.
        <br>Eles são considerados os primeiros experimentos da magia da criação, seres que caminham na fronteira entre o biológico e o arcano. Muitos eruditos os veem como “ecos vivos” daquilo 
        que poderia ter se tornado outras espécies, mas que permaneceu instável e adaptável.
        <br>Culturalmente, os Protoides não têm reinos ou grandes cidades. Vivem em grupos pequenos e nômades, ou se misturam a outras sociedades, onde muitas vezes despertam desconfiança e 
        fascínio. Sua visão de mundo é profundamente prática: para eles, a forma é apenas um estado temporário, e a mudança é a única constante.`,
        arte: "Nome do Artista",
        paginaartista: "Link do Artista",
        caracteristicas: {
            tipo: "Humanoide",
            idade: `Protóides possuem um ciclo de vida variado dependendo da alimentação, atingindo a maioridade aos 15 anos e vivendo por volta de 70.`,
            tamanho: `Protóides são geralmente baixos quando comparados a humanos. A média de altura é de 1 metro e meio o seu tamanho é médio.`,
            velocidade: `Você tem um deslocamento base de 25 ft e um deslocamento de escalada de de 25 ft.`,
            linguagem: `Você domina o idioma comum e outro a sua escolha.`,
        },
        incrementoHabilidade: "Escolha dois atributos entre: Inteligência, Sabedoria ou Constituição. Você ganha dois pontos em cada uma das duas escolhas.",
        tracosComuns: [
            {
                nome: "Telepata Obrigatório",
                descrição: `Você só consegue se comunicar por telepatia com humanóides que toquem o seu muco.`
            },
            {
                nome: 'Revestimento Mucoso',
                descrição: `Seu corpo é naturalmente recoberto por uma camada viscosa que dificulta ataques precisos contra você. Enquanto não estiver usando armadura pesada, você recebe +1 
                na CA. Além disso, qualquer criatura que tente agarrar você sofre desvantagem no teste de Força (Atletismo).`
            },
            {
                nome: "Amorfo",
                descrição: `Você pode comprimir seu corpo para passar por espaços de até 2,5 centímetros de largura sem precisar se espremer. Além disso, você tem vantagem em testes para 
                escapar de ser agarrado ou contido.`
            },
            {
                nome: "Visão no Escuro",
                descrição: `Você pode enxergar em até 60 ft na escuridão não mágica. Você não consegue distinguir cores no escuro.`
            }
        ],
        subRacas: [
            {
                tipo: "comDescricao",
                nome: "Protóides Azuis",
                descrição: `Entre as variações da espécie, os protóides azuis são os mais sociáveis e cooperativos. De natureza curiosa e adaptável, eles preferem viver em comunidades 
                organizadas em câmaras multipropósito — vastos salões gelatinosos onde tudo acontece ao mesmo tempo: descanso, trocas de objetos, partilha de alimento e até rituais arcanos.`,
                tracos: [
                    {
                        nome: "Terceiro Pseudopode",
                        descrição: `Enquanto você estiver a até 9 metros (30 pés) de um aliado, você pode manifestar um terceiro pseudópode. Esse pseudópode pode realizar ataques desarmados ou 
                        com armas leves, ou manipular objetos, como se fosse uma mão extra, usando sua ação bônus.`
                    }
                ]
            }
        ]
    },
    //Lagomos ID 10
    {
        id: 10,
        nome: "Lagomos",
        plano: planosData.terra,
        imagemCard: "images/cards/Lagomo.jpg",
        imagemWide: "images/banner/Lagomo.jpg",
        descrição: `Os Lagomos são coelhos humanoides adaptados a climas frios e extremos, vivendo em pequenas comunidades isoladas. Possuem pelagem espessa que varia de tons acinzentados a 
        marrons avermelhados, protegendo-os das geadas e ventos cortantes. Suas orelhas longas e sensíveis lhes permitem perceber perigos à distância, enquanto suas pernas fortes facilitam 
        saltos ágeis em terrenos nevados ou rochosos.
        <br>Socialmente, os Lagomos são unidos e cautelosos, formando lares coletivos que priorizam a sobrevivência e a cooperação. Apesar da vida dura, valorizam histórias, tradições e o cuidado 
        com os mais jovens, transmitindo conhecimento e habilidades essenciais para a vida no frio extremo.
        <br>Fisicamente pequenos, mas ágeis e resistentes, os Lagomos são mestres em mobilidade, furtividade e estratégias de sobrevivência, tornando-os adversários e aliados imprevisíveis em 
        qualquer terreno gelado.`,
        arte: "Tao He",
        paginaartista: "https://www.artstation.com/jijiefeng",
        caracteristicas: {
            tipo: "Humanoide",
            idade: `Lagomos possuem um ciclo de vida parecido com o de humanos, atingindo a maioridade aos 15 anos e vivendo por volta de 80.`,
            tamanho: `Lagomos são geralmente baixos quando comparados a humanos. A média de altura é de 1 metro e 20. O seu tamanho é médio.`,
            velocidade: `Você tem um deslocamento base de 30 ft. Seus saltos em distância ou altura são dobrados.`,
            linguagem: `Você domina o idioma comum e outro a sua escolha.`,
        },
        incrementoHabilidade: "Escolha dois atributos entre: Destreza, Sabedoria ou Carisma. Você ganha dois pontos em cada uma das duas escolhas.",
        tracosComuns: [
            {
                nome: "Pernas Ágeis",
                descrição: `Sua estrutura atlética concede destreza incomum em movimentos. Você pode usar sua reação para se deslocar até metade do seu deslocamento sem provocar ataques de 
                oportunidade quando uma criatura maior que você tenta te empurrar, agarrar ou te atacar.Você pode usar esse traço uma vez por descanso longo.`
            },
            {
                nome: "Salto Poderoso",
                descrição: `Você pode realizar um salto extraordinário de até 15 pés horizontal ou verticalmente sem precisar considerar seu deslocamento. Você pode usar esse salto uma vez 
                por descanso longo.`
            },
            {
                nome: "Pelagem Grossa",
                descrição: `Você é adaptado a climas extremamente frios e sofre metade do dano por frio.`
            },
            {
                nome: "Visão no Escuro",
                descrição: `Você pode enxergar em até 60 ft na escuridão não mágica. Você não consegue distinguir cores no escuro.`
            }
        ]
    },
    //Elfos ID 11
    {
        id: 11,
        nome: "Elfo",
        plano: planosData.terra,
        imagemCard: "images/cards/Elfo.jpg",
        imagemWide: "images/banner/Elfo.jpg",
        descrição: `Os Elfos são seres altamente intelectuais e curiosos, de pele azulada, orelhas longas e pontudas, e porte esbelto e elegante. Suas feições refinadas e olhos expressivos 
        refletem uma vida dedicada ao estudo, à arte e à magia.
        <br>Culturalmente, os Elfos valorizam conhecimento, disciplina e inovação, passando gerações aprimorando técnicas arcanas, artesanais e científicas. Apesar de sua aparência delicada, 
        são resistentes e ágeis, capazes de sobreviver em ambientes desafiadores, e suas sociedades tendem a ser organizadas em cidades e academias de aprendizado, onde o intelecto é tão 
        valorizado quanto a força.`,
        arte: "Chris Rahn",
        paginaartista: "https://www.artofmtg.com/artist/chris-rahn/",
        caracteristicas: {
            tipo: "Humanoide",
            idade: `Embora os elfos atinjam a maturidade física aproximadamente na mesma idade que os humanos, a compreensão élfica da vida adulta vai além do crescimento físico, abrangendo a 
            experiência mundana. Um elfo normalmente assume a idade adulta e um nome de adulto por volta dos 100 anos e pode viver até os 750 anos.`,
            tamanho: `Elfos geralmente medem entre 1,6m e 1,75m e possuem o corpo esguio. Seu tamanho é médio`,
            velocidade: `Você tem um deslocamento base de 30 ft.`,
            linguagem: `Você domina o idioma élfico e outros dois a sua escolha.`,
        },
        incrementoHabilidade: "Escolha dois atributos entre: Destreza, Sabedoria, Inteligência ou Carisma. Você ganha dois pontos em cada uma das duas escolhas.",
        tracosComuns: [
            {
                nome: "Ancestralidade Feérica",
                descrição: `Você tem vantagem em testes de resistência contra encantamentos, e magia não pode fazer você dormir.`
            },
            {
                nome: "Transe",
                descrição: `Elfos não dormem. Em vez disso, meditam profundamente, permanecendo semiconscientes, durante 4 horas por dia. A palavra comum para essa meditação é “transe”. 
                Enquanto medita, você sonha de certa forma; esses sonhos são, na verdade, exercícios mentais que se tornaram reflexos após anos de prática. Após descansar dessa forma, você 
                obtém o mesmo benefício que um humano obteria com 8 horas de sono.`
            },
            {
                nome: "Sentidos Aguçados",
                descrição: `Você tem proficiência na perícia Percepção.`
            },
            {
                nome: "Conjuração Natural",
                descrição: `Você conhece um truque de sua escolha da lista de magias de Mago. Inteligência é sua habilidade de conjuração para ele.`
            },
            {
                nome: "Treinamento com Armas Élficas",
                descrição: `Você tem proficiência com espada longa, espada curta, arco curto e arco longo.`
            },
            {
                nome: "Visão no Escuro",
                descrição: `Você pode enxergar em até 60 ft na escuridão não mágica. Você não consegue distinguir cores no escuro.`
            },
        ]
    },
    //Meio-Elfos ID 12
    {
        id: 12,
        nome: "Meio-Elfo",
        plano: planosData.terra,
        imagemCard: "images/cards/MeioElfo.jpg",
        imagemWide: "images/banner/MeioElfo.jpg",
        descrição: `Caminhando em dois mundos, mas não pertencendo a nenhum deles, os meio-elfos combinam o que alguns dizem ser as melhores qualidades de seus pais elfos e humanos: 
        curiosidade humana, inventividade e ambição temperadas pelos sentidos refinados, amor pela natureza e gosto artístico dos elfos.`,
        arte: "Justine Cruz",
        paginaartista: "https://www.artstation.com/justinecruzart",
        caracteristicas: {
            tipo: "Humanoide",
            idade: `Meio-elfos envelhecem na mesma proporção que os humanos, atingindo a idade adulta aos 20 anos. No entanto, eles vivem muito mais que os humanos, muitas vezes 
            ultrapassando os 180 anos.`,
            tamanho: `Meio-Elfos geralmente medem entre 1,6m e 1,75m e possuem o corpo esguio. Seu tamanho é médio`,
            velocidade: `Você tem um deslocamento base de 30 ft.`,
            linguagem: `Você domina o idioma élfico e outros dois a sua escolha.`,
        },
        incrementoHabilidade: "Escolha dois atributos entre: Destreza, Sabedoria, Inteligência ou Carisma. Você ganha dois pontos em cada uma das duas escolhas.",
        tracosComuns: [
            {
                nome: "Ancestralidade Feérica",
                descrição: `Você tem vantagem em testes de resistência contra encantamentos, e magia não pode fazer você dormir.`
            },
            {
                nome: "Treinamento com Armas Élficas",
                descrição: `Você tem proficiência com espada longa, espada curta, arco curto e arco longo.`
            },
            {
                nome: "Visão no Escuro",
                descrição: `Você pode enxergar em até 60 ft na escuridão não mágica. Você não consegue distinguir cores no escuro.`
            },
            {
                nome: "Versatilidade Feérica",
                descrição: `Escolha uma das seguintes características:
                <br><b>Versatilidade de Perícia.</b> Você ganha proficiência em duas perícias à sua escolha..
                <br><b>Conjuração Natural.</b> Você conhece um truque à sua escolha da lista de magias de mago. Inteligência é sua habilidade de conjuração para ele.
                <br><b>Pés Velozes.</b> Seu deslocamento base aumenta para 35 pés.
                <br><b>Máscara da Natureza.</b> Você pode tentar se esconder mesmo quando estiver apenas levemente obscurecido por folhagens, chuva forte, neve caindo, névoa e outros 
                fenômenos naturais.`
            }
        ]
    },
    //Cranoris ID 13
    {
        id: 13,
        nome: "Cranori",
        plano: planosData.terra,
        imagemCard: "images/cards/Cranori.jpg",
        imagemWide: "images/banner/Cranori.jpg",
        descrição: `Os Cranori são humanoides de porte maior e mais robusto que os humanos, marcados por uma característica única: placas ósseas externas que se formam ao longo do corpo, cobrindo 
        regiões distintas em cada indivíduo. Alguns exibem ombros revestidos de carapaça natural, outros têm costelas ou antebraços endurecidos como armaduras vivas. Essas placas não apenas 
        reforçam sua aparência intimidadora, como também lhes garantem uma proteção natural em combate.
        <br>Culturalmente, os Cranori são guiados pelos prazeres intensos da vida. Batalhas, banquetes, paixões carnais e competições de resistência são vistos como expressões do próprio vigor da 
        existência. Para eles, viver plenamente significa mergulhar sem reservas no que o corpo e o espírito podem experimentar. Essa filosofia os torna ao mesmo tempo temidos e respeitados: 
        companheiros leais em celebrações e combates, mas perigosos quando inflamados pela raiva ou desejo.`,
        arte: "JohnnyD",
        paginaartista: "https://www.artstation.com/johnnyzzz",
        caracteristicas: {
            tipo: "Humanoide",
            idade: `Cranoris envelhecem de modo similar aos humanos, atingindo maioridade aos 18 anos e vivendo por cerca de um século.`,
            tamanho: `Cranoris geralmente medem entre 1,75m e 1,9m e possuem o corpo robusto. Seu tamanho é médio.`,
            velocidade: `Você tem um deslocamento base de 30 ft.`,
            linguagem: `Você domina o idioma Comum e outro de sua escolha.`,
        },
        incrementoHabilidade: "Escolha dois atributos entre: Força, Destreza, Constituição ou Carisma. Você ganha dois pontos em cada uma das duas escolhas.",
        tracosComuns: [
            {
                nome: "Carapaça Protetora",
                descrição: `Você tem desvantagem em todas as armaduras, independentemente dos benefícios de sua classe. Enquanto você não estiver vestindo armadura, sua Classe de Armadura é 
                igual a 13 + seu modificador de Constituição. Você pode usar um escudo e ainda assim ganhar este benefício.`
            },
            {
                nome: "Troféu Letal",
                descrição: `Você transformou as placas ósseas de um oponente cranori superado em batalha em sua nova arma. Escolha uma arma que você tenha proficiência. Você pode criá-la com 
                a estrutura óssea, dando-a os seguintes benefícios:
                <br>• A arma ganha +1 nas rolagens de acerto.
                <br>• Você garante acertos críticos com rolagens de 19 ou 20 usando essa arma.`
            },
            {
                nome: "Celebração Sangrenta",
                descrição: `Imediatamente após você reduzir uma criatura hostil de tamanho Médio ou Maior a 0 pontos de vida, você pode usar sua reação para realizar um grito triunfante, 
                ganhando pontos de vida igual a metade do seu nível (mínimo 1, arredondado para cima) + seu modificador de constituição. Você só pode usar esse traço uma vez por descanso curto.`
            }
        ]
    },
    //Curvibicos ID 14
    {
        id: 14,
        nome: "Curvibico (Incompleto)",
        plano: planosData.terra,
        imagemCard: "images/cards/Curvibico.jpg",
        imagemWide: "images/banner/Curvibico.jpg",
        descrição: `Texto`,
        arte: "Nome do Artista",
        paginaartista: "Link do Artista",
        caracteristicas: {
            tipo: "Humanoide",
            idade: `Texto`,
            tamanho: `Texto`,
            velocidade: `Texto`,
            linguagem: `Texto`,
        },
        tracosComuns: [
            {
                nome: "Traço Comum Exemplo",
                descrição: `Texto`
            }
        ],
        subRacas: [
            {
                tipo: "semDescricao",
                nome: "Subraça Sem Descrição Exemplo",
                tracos: [
                    {
                        nome: "Nome do Traço",
                        descrição: `Texto`
                    }
                ]
            },
            {
                tipo: "comDescricao",
                nome: "Subraça Com Descrição Exemplo",
                descrição: `Texto`,
                tracos: [
                    {
                        nome: "Nome do Traço",
                        descrição: `Texto`
                    }
                ]
            }
        ]
    },
/* #endregion */

/* #region Raças de Tenebris (ID 101 a 200) */
    //Cambion ID 101
    {
        id: 101,
        nome: "Cambion",
        plano: planosData.tenebris,
        imagemCard: "images/cards/Cambion.jpg",
        imagemWide: "images/banner/Cambion.jpg",
        descrição: `Texto`,
        arte: "Nome do Artista",
        paginaartista: "Link do Artista",
        caracteristicas: {
            tipo: "Humanoide",
            idade: `Texto`,
            tamanho: `Texto`,
            velocidade: `Texto`,
            linguagem: `Texto`,
        },
        tracosComuns: [
            {
                nome: "Traço Comum Exemplo",
                descrição: `Texto`
            }
        ],
        subRacas: [
            {
                tipo: "semDescricao",
                nome: "Subraça Sem Descrição Exemplo",
                tracos: [
                    {
                        nome: "Nome do Traço",
                        descrição: `Texto`
                    }
                ]
            },
            {
                tipo: "comDescricao",
                nome: "Subraça Com Descrição Exemplo",
                descrição: `Texto`,
                tracos: [
                    {
                        nome: "Nome do Traço",
                        descrição: `Texto`
                    }
                ]
            }
        ]
    },
    //Daeva ID 102
    {
        id: 102,
        nome: "Daeva",
        plano: planosData.tenebris,
        imagemCard: "images/cards/Daeva.jpg",
        imagemWide: "images/banner/Daeva.jpg",
        descrição: `Texto`,
        arte: "Nome do Artista",
        paginaartista: "Link do Artista",
        caracteristicas: {
            tipo: "Humanoide",
            idade: `Texto`,
            tamanho: `Texto`,
            velocidade: `Texto`,
            linguagem: `Texto`,
        },
        tracosComuns: [
            {
                nome: "Traço Comum Exemplo",
                descrição: `Texto`
            }
        ],
        subRacas: [
            {
                tipo: "semDescricao",
                nome: "Subraça Sem Descrição Exemplo",
                tracos: [
                    {
                        nome: "Nome do Traço",
                        descrição: `Texto`
                    }
                ]
            },
            {
                tipo: "comDescricao",
                nome: "Subraça Com Descrição Exemplo",
                descrição: `Texto`,
                tracos: [
                    {
                        nome: "Nome do Traço",
                        descrição: `Texto`
                    }
                ]
            }
        ]
    },
    //Barghest ID 103
    {
        id: 103,
        nome: "Barghest",
        plano: planosData.tenebris,
        imagemCard: "images/cards/Barghest.jpg",
        imagemWide: "images/banner/Barghest.jpg",
        descrição: `Texto`,
        arte: "Nome do Artista",
        paginaartista: "Link do Artista",
        caracteristicas: {
            tipo: "Humanoide",
            idade: `Texto`,
            tamanho: `Texto`,
            velocidade: `Texto`,
            linguagem: `Texto`,
        },
        tracosComuns: [
            {
                nome: "Traço Comum Exemplo",
                descrição: `Texto`
            }
        ],
        subRacas: [
            {
                tipo: "semDescricao",
                nome: "Subraça Sem Descrição Exemplo",
                tracos: [
                    {
                        nome: "Nome do Traço",
                        descrição: `Texto`
                    }
                ]
            },
            {
                tipo: "comDescricao",
                nome: "Subraça Com Descrição Exemplo",
                descrição: `Texto`,
                tracos: [
                    {
                        nome: "Nome do Traço",
                        descrição: `Texto`
                    }
                ]
            }
        ]
    },
    //Manticora ID 104
    {
        id: 104,
        nome: "Manticora",
        plano: planosData.tenebris,
        imagemCard: "images/cards/Manticora.jpg",
        imagemWide: "images/banner/Manticora.jpg",
        descrição: `Texto`,
        arte: "Nome do Artista",
        paginaartista: "Link do Artista",
        caracteristicas: {
            tipo: "Humanoide",
            idade: `Texto`,
            tamanho: `Texto`,
            velocidade: `Texto`,
            linguagem: `Texto`,
        },
        tracosComuns: [
            {
                nome: "Traço Comum Exemplo",
                descrição: `Texto`
            }
        ],
        subRacas: [
            {
                tipo: "semDescricao",
                nome: "Subraça Sem Descrição Exemplo",
                tracos: [
                    {
                        nome: "Nome do Traço",
                        descrição: `Texto`
                    }
                ]
            },
            {
                tipo: "comDescricao",
                nome: "Subraça Com Descrição Exemplo",
                descrição: `Texto`,
                tracos: [
                    {
                        nome: "Nome do Traço",
                        descrição: `Texto`
                    }
                ]
            }
        ]
    },
    //Basilisco ID 105
    {
        id: 105,
        nome: "Basilisco",
        plano: planosData.tenebris,
        imagemCard: "images/cards/Basilisco.jpg",
        imagemWide: "images/banner/Basilisco.jpg",
        descrição: `Texto`,
        arte: "Nome do Artista",
        paginaartista: "Link do Artista",
        caracteristicas: {
            tipo: "Humanoide",
            idade: `Texto`,
            tamanho: `Texto`,
            velocidade: `Texto`,
            linguagem: `Texto`,
        },
        tracosComuns: [
            {
                nome: "Traço Comum Exemplo",
                descrição: `Texto`
            }
        ],
        subRacas: [
            {
                tipo: "semDescricao",
                nome: "Subraça Sem Descrição Exemplo",
                tracos: [
                    {
                        nome: "Nome do Traço",
                        descrição: `Texto`
                    }
                ]
            },
            {
                tipo: "comDescricao",
                nome: "Subraça Com Descrição Exemplo",
                descrição: `Texto`,
                tracos: [
                    {
                        nome: "Nome do Traço",
                        descrição: `Texto`
                    }
                ]
            }
        ]
    },
    //Daemon ID 106
    {
        id: 106,
        nome: "Daemon",
        plano: planosData.tenebris,
        imagemCard: "images/cards/Daemon.jpg",
        imagemWide: "images/banner/Daemon.jpg",
        descrição: `Texto`,
        arte: "Nome do Artista",
        paginaartista: "Link do Artista",
        caracteristicas: {
            tipo: "Humanoide",
            idade: `Texto`,
            tamanho: `Texto`,
            velocidade: `Texto`,
            linguagem: `Texto`,
        },
        tracosComuns: [
            {
                nome: "Traço Comum Exemplo",
                descrição: `Texto`
            }
        ],
        subRacas: [
            {
                tipo: "semDescricao",
                nome: "Subraça Sem Descrição Exemplo",
                tracos: [
                    {
                        nome: "Nome do Traço",
                        descrição: `Texto`
                    }
                ]
            },
            {
                tipo: "comDescricao",
                nome: "Subraça Com Descrição Exemplo",
                descrição: `Texto`,
                tracos: [
                    {
                        nome: "Nome do Traço",
                        descrição: `Texto`
                    }
                ]
            }
        ]
    },
/* #endregion */

//Outros    
    /* 
    //Exemplo de Raça
    {
        id: 0,
        nome: "Exemplo de Raça",
        plano: planosData.terra,
        imagemCard: "images/cards/Temporario.jpg",
        imagemWide: "images/banner/Temporario.jpg",
        descrição: `Texto`,
        arte: "Nome do Artista",
        paginaartista: "Link do Artista",
        caracteristicas: {
            tipo: "Humanoide",
            idade: `Texto`,
            tamanho: `Texto`,
            velocidade: `Texto`,
            linguagem: `Texto`,
        },
        tracosComuns: [
            {
                nome: "Traço Comum Exemplo",
                descrição: `Texto`
            }
        ],
        subRacas: [
            {
                tipo: "semDescricao",
                nome: "Subraça Sem Descrição Exemplo",
                tracos: [
                    {
                        nome: "Nome do Traço",
                        descrição: `Texto`
                    }
                ]
            },
            {
                tipo: "comDescricao",
                nome: "Subraça Com Descrição Exemplo",
                descrição: `Texto`,
                tracos: [
                    {
                        nome: "Nome do Traço",
                        descrição: `Texto`
                    }
                ]
            }
        ]
    }
    */
];