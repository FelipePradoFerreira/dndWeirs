// Banco de dados das raças
const racasData = [
    {
        id: 1,
        nome: "Humano",
        imagemCard: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        imagemWide: "https://cdnb.artstation.com/p/assets/images/images/012/015/637/large/imx-awan-vikings-finall.jpg?1532578706",
        descrição: "Desde os primórdios da civilização, os humanos têm se destacado por sua adaptabilidade e resiliência. Com uma diversidade cultural rica e uma capacidade inata de inovação, eles são encontrados em quase todos os cantos do mundo, moldando a história com suas conquistas e desafios.<br> Seus feitos notáveis incluem a construção de vastos impérios, avanços tecnológicos e artísticos, e uma influência duradoura nas sociedades ao redor do globo. <br> Hoje, são vistos como mediadores, cuidando para que a ordem se mantenha em um mundo repleto de mistérios a serem desvendados. <br> Apesar de sua adaptabilidade, os humanos enfrentam desafios únicos na forma de mutações que não afetam as demais espécies, como os mutantes Tyinen e os Escamados, que são humanos transformados de maneira irreversível por poderes externos. Ainda que surjam desafios na convivência dessa nova realidade, os humanos transformam esse poder em vantagem, retaliando com força total contra aqueles que ameaçam sua existência.",
        arte: "Imad Awan",
        paginaartista: "https://www.artstation.com/imadawan",
        caracteristicas: {
            tipo: "Humanoide",
            idade: "Humanos atingem a maioridade aos 18 anos e podem viver até cerca de um século.",
            tamanho: "Médio (1,50m - 1,80m)",
            velocidade: "9m (30ft)",
            linguagem: "Comum e dois a sua escolha"
        },
        HumanoTradicional: {
            incrementoHabilidade: "Escolha entre aumentar três atributos em um ponto ou aumentar um atributo em dois pontos e outro em um.",
            tracos: [{
                nome: "Curiosidade Humana",
                descrição: "Os humanos de Weirs tem culturas diferentes que moldam seus talentos e habilidades desde o nascimento. Escolha um talento e uma perícia relacionados ao seu local de nascimento."
            }
            ]
        },
        Tyinen: {
            descrição: "Após a recente descoberta e implementação dos Cristais Arcanos no dia-a-dia do continente, foi descoberto que esse recurso mágico valioso produz efeitos inusitados no corpo de humanos que ficam em contato com o composto. Na maior parte dos casos o triste fim é o envenenamento arcano que leva a sequelas físicas severas e em alguns casos até a morte. Alguns humanos conseguem sobreviver ao envenenamento arcano e estes podem desenvolver habilidades sobrehumanas depois do contato.",
            incrementoHabilidade: "Escolha dois atributos e aumente cada um em dois pontos.",
            tracos: [{
                nome: "Fagulha Arcana",
                descrição: "Apesar de ter sobrevivido ao envenenamento arcano essa experiência mudou a sua fisiologia de uma forma irreversível. Você tem acesso a uma Fagulha Arcana, uma habilidade de raça única causada pela influência dos Cristais Arcanos no seu corpo. Os poderes e habilidades adquiridos através de fagulha arcana são variados, combine com o seu mestre uma habilidade que ele julgue ser balanceada e adequada."
            },
            {
                nome: "Persona Non Grata",
                descrição: "A existência dos Tyinens é um fenômeno recente e ainda encarado com resistência pela maioria das nações do continente. A conduta varia de acordo com o território, desde atitudes mais radicais como o aprisionamento em campos de concentração que ocorre com os mutantes encontrados em Arindel, até a livre circulação como acontece no Reino Comunal das Quatro Espécies."
            }
            ]
        },
        Escamado: {
            descrição: "Humanos marcados de forma irreversível por um poder celestial ou abissal.",
            tracos: [
                {
                    nome: "Corpo Marcado",
                    descrição: "Sua forma física foi alterada de forma que remeta à entidade que maculou seu corpo. Você ganha um dos seguintes traços: Anfíbio, Ágil (nimble), Tática de Matilha ou Ancestral Feérico."
                },
                {
                    nome: "Maldição",
                    descrição: "Você pode entrar em acordo com sua nova realidade e usar sua maldição para sua vantagem. Como já está amaldiçoado, você se torna imune a novos efeitos de maldição."
                },
                {
                    nome: "Conhecimento Proibido",
                    descrição: "Estar ligado a forças ancestrais te dá acesso ao saber que não é acessível por todos. Escolha 2 perícias em que não tenha proficiência para adquirir. Adicionalmente, escolha uma perícia em que já tenha proficiência para adquirir especialização."
                }
            ]
        }
    },
    {
        id: 2,
        nome: "Taurino",
        imagemCard: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        imagemWide: "https://cdna.artstation.com/p/assets/images/images/034/316/876/large/martin-paz-low.jpg?1611965617",
        arte: "Martin Paz",
        paginaartista: "https://www.artstation.com/martin_paz",
        descrição: "A raça taurina é conhecida por sua aparência de meio homem, meio touro, com chifres imponentes e uma musculatura robusta. Desde a Singularidade, em que além da mudança física, o domínio magia e a tecnologia foram desbloqueados na mente dos taurinos, eles se dedicaram ao desenvolvimento do conhecimento em áreas como ciência, ki-tech e arcanismo. Como uma sociedade altamente organizada e respeitada, os taurinos são geralmente vistos como pacíficos e intelectuais, valorizando a educação e a diplomacia acima de tudo.",
        caracteristicas: {
            tipo: "Humanoide",
            idade: "Taurinos tem um ciclo lento de vida, com gestações demoradas, e atingem a maioridade aos 30 anos, podendo viver até dois séculos.",
            tamanho: "Taurinos no geral tem a musculatura mais desenvolvida em comparação a humanos e ossos mais densos. A altura média da espécie varia entre 1,7m e 2m. Seu tamanho é Medio.",
            velocidade: "Você tem um deslocamento base de 30 ft.",
            linguagem: "Sua capacidade mental ampliada te permite aprender idiomas mais facilmente. Você domina o idioma bovino e outros dois a sua escolha."
        },
        incrementoHabilidade: "Escolha dois atributos entre: Força, Constituição, Sabedoria e Inteligência. Você ganha dois pontos em cada uma das duas escolhas.",
        tracos: [
            {
                nome: "Visão no Escuro",
                descrição: "Você consegue enxergar até 60 ft na penumbra como se fosse luz plena e no escuro como se fosse penumbra. Você não consegue discernir cores no escuro."
            },
            {
                nome: "Mente Ordenada",
                descrição: "Desde a singularidade a sua espécie é vinculada a divindade Senso, que representa a Ordem em Weirs. Escolha duas perícias entre: História, Arcanismo, Sobrevivência, Natureza, Religião e Percepção. Você ganha proficiência nas duas perícias escolhidas e no nível 6 você ganha aptidão em ambas."
            },
            {
                nome: "Cornos de Touro",
                descrição: "Você possui cornos de touro resistente que podem ser usados como armas, mas que não nascem novamente caso se quebrem. Os seus chifres são uma arma natural e você é proficiente com eles. Use o modificador de Força no ataque e no dano. O ataque causa um dano de 1d10 enquanto o indivíduo ainda possuir os dois cornos e de 1d6 caso fique reduzido a 1. O dano é perfurante."
            },
            {
                nome: "Fagulha da Singularidade",
                descrição: "A fagulha da singularidade presente nos Taurinos dá a eles uma conexão natural com a dimensão de bolso de Senso e permite que eles usem essa energia para produzir efeitos arcanos limitados. Você sabe o truque Prestidigitação. Quando atinge o nível 3, você aprende a magia Silvery Barbs e pode utiliza-la 1x ao dia através desse traço. Quando atinge o nível 5, você aprende a magia Tranca Arcana e pode utiliza-la 1x ao dia através desse traço. Quando atinge o nível 10 você pode utilizar cada magia limitada do traço 3 vezes ao dia."
            }
        ]
    },
    {
        id: 3,
        nome: "Dracônido",
        imagemCard: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        imagemWide: "https://cdnb.artstation.com/p/assets/images/images/032/099/049/large/jay-walczyk-omen.jpg?1605480433",
        descrição: "Os dracônicos são uma raça antiga de humanoides com características de dragão. Eles podem possuir escamas em seu corpo, uma cauda reptiliana, ou asas membranosas que lhes permitem voar. Os dracônicos possuem um forte senso de honra e lealdade, sendo conhecidos por sua disciplina e habilidades em combate. Eles também possuem uma longa vida, podendo viver por vários séculos. <br> Os dracônicos são uma raça muito reservada e guardam seus segredos com grande zelo, o que os torna uma das raças mais misteriosas do mundo. Sua cultura é fortemente baseada em tradições e rituais, incluindo um rigoroso código de conduta para os guerreiros e um complexo sistema de herança para a nobreza. <br> Os dracônicos possuem uma habilidade natural para a magia, especialmente para a magia elemental. Eles são conhecidos por suas habilidades em conjurar chamas, relâmpagos e ventos poderosos. No entanto, essa habilidade também é vista com desconfiança e temor por outras raças, muitas vezes levando a tensões e conflitos.",
        arte: "Jay Walczyk",
        paginaartista: "https://www.artstation.com/swiftend",
        caracteristicas: {
            tipo: "Humanoide",
            idade: "Dracônidos tem um ciclo breve de vida, com gestações curtas, e atingem a maioridade aos 10 anos, podendo viver até cerca de 70.",
            tamanho: "Dracônidos variam muito de constituição de acordo com a subespécie, mas a maioria mede entre 1,6 e 1,9m",
            velocidade: "Você tem um deslocamento base de 40 ft.",
            linguagem: "Você domina Drakar, Eridano e Comum.",
            
        },
        Resquicios: {
            tracos: [{
                nome: "Visão no Escuro Superior",
                descrição: "Você consegue enxergar até 120 ft na penumbra como se fosse luz plena e no escuro como se fosse penumbra. Você consegue discernir cores no escuro."
            },{
                nome: "Mente Caótica",
                descrição: "Escolha duas perícias entre: Atletismo, Acrobacia, Intimidação, Performance, Persuasão e Enganação. Você ganha proficiência nas duas perícias escolhidas e no nível 6 você ganha aptidão em ambas."
            },{
                nome: "Garras",
                descrição: "Você possui garras que podem ser usadas como armas. Suas garras arma naturais que podem ser utilizadas se você estiver com uma mão livre e você é proficiente com elas. Use o modificador de Força ou Destreza no ataque e no dano. O ataque causa um dano de 1d10 enquanto o indivíduo tiver duas mãos livres e 1d6 se for uma. O dano é cortante."
            }
        ]
        },
        Teido: {
            descrição: "A subespécie de casta mais baixa na sociedade drakonia, os teídos tem a musculatura bem desenvolvida e tem a pele enrijecida e organizada em escamas em algumas partes do corpo.",
            tracos: [{
                nome: "Escamoso",
                descrição: "Você tem escamas espalhadas por algumas partes de seu corpo. Isso lhe confere uma ca de 18 se não tiver usando armadura. Suas escamas são duras o suficiente para produzir armas."
            },{
                nome: "Afinidade Mineral",
                descrição: "Como um Teído, sua afinidade elemental é com o elemento terra. Você ganha um controle limitado de minerais, e consegue utilizar esse traço uma vez ao dia para aumentar a sua ca para 20 e ganhar resistência aos danos cortante e perfurante por 1 minuto caso esteja em uma área com forte incidencia de minérios ou metais."
            }
        ]
        },
        Pagona: {
            descrição: "Considerados intermediários entre a nobreza e os camponeses, os Pogona tem peles de cores quentes e um rabo reptiliano musculoso com a capacidade de autotomia.",
            tracos: [{
                nome: "Cauda de Dragão",
                descrição: "Você ganha um ataque de rabo, que pode ser feito como uma ação bônus e usa o modificador de força no ataque e no 1d8 de dano. Além disso você pode soltar a sua cauda em uma situação de perigo. Quando sofrer um crítico ou falhar em um teste de resistencia que envolva um perigo que você possa ver e que vá te atingir fisicamente, você pode soltar o rabo e ignorar o dano causado pelo ataque ou efeito. Quando você libera o rabo, você perde o ataque dele até que ele nasça novamente, o que leva cerca de 1 mês."
            },{
                nome: "Afinidade Elétrica",
                descrição: "Como um Pogona, a sua afinidade elemental é com o elemento eletricidade. Você ganha a capacidade de usar esse traço uma vez ao dia para embuir a pele da sua cauda em eletricidade. Durante 1 minuto, ataques com a cauda terão um dano adicional de 1d6 do tipo elétrico."
            }
        ]
        }
        ,
        Volan: {
            descrição: "Os mais estimados membros da sociedade drakonia. Volans tem a estatura e a musculatura reduzidas, mas isso otimiza a habilidade única de vôo da subespécie.",
            tracos: [{
                nome: "Tamanho Reduzido",
                descrição: "Como um Volan, você mede entre 1m e 1,4m. Você é Pequeno."
            },{
                nome: "Asas Membranosas",
                descrição: "Você ganha um deslocamento de vôo igual ao seu deslocamento de caminhada."
            },{
                nome: "Afinidade Ardente",
                descrição: "Como um Volan, sua afinidade elemental é com o elemento fogo. Você ganha uma arma de sopro que é um cone de 20 ft. (Salvaguarda de DES). A arma de sopro causa 3d6 de dano de fogo em uma falha e metade em um sucesso. O dano aumenta em 1d6 nos níveis 6, 11 e 16. Você pode usar esse traço duas vezes ao dia."
            }
        ]
        }
    },
    {
        id: 4,
        nome: "Fada",
        imagemCard: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        imagemWide: "https://64.media.tumblr.com/6a56df81ecf388c3973ea2175214c96d/5e1b0108a905993f-60/s2048x3072/8d11bda77fec126de8fd4ee5a49bff6abe97cd5d.jpg",
        descrição: "As fadas são criaturas humanoides diminutas, medindo apenas cerca de 25 a 40 centímetros de altura. Elas possuem a habilidade de invocar asas de inseto de suas costas, permitindo que elas voem com grande agilidade e destreza. Sua aparência é muito semelhante à dos seres humanos, embora tenham orelhas pontudas e asas. As fadas têm uma forte conexão com a natureza e com o arcano, e são frequentemente vistas dançando em torno de flores e árvores. <br> A cultura das fadas é altamente interligada, apesar de cada núcleo ter individualidades, com cada tribo sendo governada por um conselho de anciãos. Eles têm uma rica tradição oral, transmitida através de canções e histórias, e não costumam escrever registros escritos. No entanto, eles têm uma boa vontade para criar relações com outras culturas de Tholus desde que entraram em contato, e muitas vezes ajudam a proteger a natureza e a harmonia do mundo. Os anciões são considerados entidades vivas para as fadas e só ficam abaixo das Centelhaflora, a subespécie raríssima de fadas que é vista como um tipo de liderança centralizada para todos os núcleos. <br> As fadas são conhecidas por suas habilidades mágicas, especialmente em relação à manipulação do arcano. Além disso, elas são capazes de se comunicar com os animais e têm a capacidade de se transformar em animais, especialmente pássaros e insetos. Essas habilidades as tornam valiosas para outras culturas que precisam de ajuda para proteger a natureza e manter o equilíbrio do mundo.",
        arte: "Evyn Fong",
        paginaartista: "https://www.artofmtg.com/artist/evyn-fong/",
        caracteristicas: {
            tipo: "Humanoide",
            idade: "A maioria das fadas vive cerca de um século. As concepções acontecem aleatoriamente e podem ocorrer em machos ou fêmeas. O conceito de maioridade é relativo e varia em cada núcleo.",
            tamanho: "Fadas tradicionais medem entre 25 e 40 centímetros de altura e costumam ter constituições mais esguias. Você é pequeno.",
            velocidade: "Você tem um deslocamento base de 20 ft e um deslocamento de vôo de 40 ft. Apesar de suas asas terem a capacidade de surgir e desaparecer conforme sua vontade, danos severos causados a elas serão mantidos.",
            linguagem: "Todas as tribos de Suzana dividem o mesmo idioma, o Silvestre. Além desse idioma, você é proficiente em outras duas linguas Tholenses."
        },
        Resquicios: {
            tracos: [{
                nome: "Visão no Escuro",
                descrição: "Você consegue enxergar até 120 ft na penumbra como se fosse luz plena e no escuro como se fosse penumbra. Você consegue discernir cores no escuro."
            }
        ]
        },
        FadaTradicional: {
            incrementoHabilidade: "Escolha dois atributos entre: Destreza, Inteligência, Sabedoria e Carisma. Você ganha dois pontos em cada uma das duas escolhas.",
            tracos: [{
                nome: "Sentidos Selvagens",
                descrição: "Escolha duas perícias entre: Sobrevivência, Natureza, Percepção, Adestrar Animais, Acrobacia, Medicina e Intuição. Você ganha proficiência nas duas. Ao atingir o nível 10, você ganha aptidão em ambas as escolhas."
            },{
                nome: "Fagulha Natural",
                descrição: "Sua conexão com a natureza lhe permite usar essa energia de forma arcana de forma limitada. Você sabe o truque Druídismo. <br> No nível 3, você aprende a magia Fogo Feérico e pode conjura-la uma vez ao dia usando esse traço. <br> No nível 5, você aprende a magia Aumentar/Reduzir e pode conjura-la uma vez ao dia usando esse traço. <br> No nível 8, você aprende a magia Dominar Besta e pode conjura-la uma vez ao dia usando esse traço. <br> No nível 10, você aprende a magia Alterar Aparências e pode conjura-la uma vez ao dia usando esse traço."
            },
            ]
        },
        CentelhaFlora: {
            descrição: "Um tipo de família real matriarcal da ilha das fadas. A família é sempre comandada por uma mulher chamada Suzana, que possui poderes arcanos acima da média. A atual matriarca é a Cacique Suzana XV . Além das suzanas, existem outros CentelhaFlora que vivem de forma nômade seguindo a cacique pela ilha.",
            incrementoHabilidade: "Escolha dois atributos entre: Destreza, Inteligência, Sabedoria e Carisma. Você ganha dois pontos em uma das duas escolhas e um na outra.",
            tracos: [{
                nome: "Tamanho Aumentado",
                descrição: "CentelhaFloras são maiores que as fadas tradicionais e possuem estaturas semelhantes as de humanos. Você é Médio."
            },
            {
                nome: "Forma Selvagem",
                descrição: "Com uma conexão sobrenatural com a natureza, as fadas da “família real” conseguem utilizar o traço Forma Selvagem como se fossem druídas. Consulte o mestre sobre melhoras nesse traço caso o possua por outra fonte."
            }
            ]
        }
    }
];