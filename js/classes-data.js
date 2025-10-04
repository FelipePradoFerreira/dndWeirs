// Banco de dados das classes
const classesData = [
    // Guerreiro Espiritual ID 1
    {
        id: 1,
        nome: "Guerreiro Espiritual",
        imagemCard: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        imagemVertical: "images/classes/GuerreiroEspiritual.jpg",
        descricaoCurta: "Mestres da energia vital que unem corpo e alma em harmonia",
        arte: "Ksenia Kiseleva",
        paginaartista: "https://www.artstation.com/faavesa",
        tituloDeSubclasse: "Trilhas Espirituais",
        descricaoSubclasse: `Escolha a Trilha Espiritual que melhor represente suas habilidades, filosofia e treino do seu Guerreiro Espiritual: a Trilha do Elemento ou a Trilha do Ego.`,
        secoes: [
            {
                tipo: "descricao",
                conteudo: [
                    `"No equilíbrio entre o corpo e a alma, há aqueles que ouvem o chamado do espírito, que sentem o fluxo invisível que conecta toda a existência. Esses são os 
                    Guerreiros Espirituais, mestres da energia vital, capazes de moldar suas forças interiores em poderosos feitos de habilidade e domínio elementar."`
                ],
                descricaoObjetiva: [
                    `Os Guerreiros Espirituais são indivíduos que transcendem os limites do físico e do metafísico, unindo corpo, mente e alma em uma harmonia singular. Por meio de 
                    meditação e treino implacável, eles canalizam sua energia vital para superar os desafios do mundo, manifestando força sobrenatural, reflexos impecáveis e poderes 
                    que ecoam o ritmo do universo. Pacientes e disciplinados, eles se tornam verdadeiras forças da natureza, capazes de alterar o curso de batalhas e inspirar 
                    reverência em aliados e inimigos.`
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
                    "Equipamento Inicial": `Escolha A ou B: (A) Uma arma marcial, duas adagas, um escudo, um arco curto e 20 flechas, uma armadura média ou uma armadura leve, um 
                    kit de ferramentas a sua escolha e 10 GP; ou (B) 50 GP`
                }
            },
            {
                tipo: "tabelaNiveis",
                titulo: "Características do Guerreiro Espiritual",
                descricao: "Como um Guerreiro Espiritual, você ganha as seguintes características de classe quando atinge os níveis específicos.",
                colunas: ["Nível", "Bônus de Proficiência", "Características", "Pontos de Vita"],
                linhas: [
                    { 
                        nivel: 1, 
                        bonusdeproficiencia: "+2", 
                        caracteristicas: "Vita, Movimento Extra, Estilo de Luta", 
                        pontosdevita: 2 },
                    { 
                        nivel: 2, 
                        bonusdeproficiencia: "+2", 
                        caracteristicas: "Arma Dedicada", 
                        pontosdevita: 3 },
                    { 
                        nivel: 3, 
                        bonusdeproficiencia: "+2", 
                        caracteristicas: "Trilha Espiritual, Defletir Projéteis, Golpes Espirituais", 
                        pontosdevita: 5 },
                    { 
                        nivel: 4, 
                        bonusdeproficiencia: "+2", 
                        caracteristicas: "Incremento de Habilidade, Queda Suave", 
                        pontosdevita: 6 },
                    { 
                        nivel: 5, 
                        bonusdeproficiencia: "+3", 
                        caracteristicas: "Ataque Extra, Ler Espírito", 
                        pontosdevita: 7 },
                        { 
                        nivel: 6, 
                        bonusdeproficiencia: "+3", 
                        caracteristicas: "Auto Recuperação, Traço da Trilha Espiritual", 
                        pontosdevita: 8 },
                        { 
                        nivel: 7, 
                        bonusdeproficiencia: "+3", 
                        caracteristicas: "Evasão", 
                        pontosdevita: 9 },
                        { 
                        nivel: 8, 
                        bonusdeproficiencia: "+3", 
                        caracteristicas: "Incremento de Habilidade", 
                        pontosdevita: 10 },
                        { 
                        nivel: 9, 
                        bonusdeproficiencia: "+4", 
                        caracteristicas: "Impulso Espiritual", 
                        pontosdevita: 11 },
                        { 
                        nivel: 10, 
                        bonusdeproficiencia: "+4", 
                        caracteristicas: "Corpo Fechado", 
                        pontosdevita: 13 },
                        { 
                        nivel: 11, 
                        bonusdeproficiencia: "+4", 
                        caracteristicas: "Traço da Trilha Espiritual", 
                        pontosdevita: 14 },
                        { 
                        nivel: 12, 
                        bonusdeproficiencia: "+4", 
                        caracteristicas: "Incremento de Habilidade", 
                        pontosdevita: 15 },
                        { 
                        nivel: 13, 
                        bonusdeproficiencia: "+5", 
                        caracteristicas: "Telepatia", 
                        pontosdevita: 16 },
                        { 
                        nivel: 14, 
                        bonusdeproficiencia: "+5", 
                        caracteristicas: "Espírito de Diamante", 
                        pontosdevita: 18 },
                        { 
                        nivel: 15, 
                        bonusdeproficiencia: "+5", 
                        caracteristicas: "Corpo Atemporal", 
                        pontosdevita: 19 },
                        { 
                        nivel: 16, 
                        bonusdeproficiencia: "+5", 
                        caracteristicas: "Incremento de Habilidade", 
                        pontosdevita: 20 },
                        { 
                        nivel: 17, 
                        bonusdeproficiencia: "+6", 
                        caracteristicas: "Diluir Espírito", 
                        pontosdevita: 21 },
                        { 
                        nivel: 18, 
                        bonusdeproficiencia: "+6", 
                        caracteristicas: "Traço da Trilha Espiritual", 
                        pontosdevita: 22 },
                        { 
                        nivel: 19, 
                        bonusdeproficiencia: "+6", 
                        caracteristicas: "Incremento de Habilidade", 
                        pontosdevita: 23 },
                        { 
                        nivel: 20, 
                        bonusdeproficiencia: "+6", 
                        caracteristicas: "Forma Perfeita", 
                        pontosdevita: 25 }
                ]
            },
            {
                tipo: "caracteristicasDetalhadas",
                titulo: "Características Detalhadas",
                caracteristicas: [
                    {
                        nivel: 1,
                        titulo: "Vita",
                        descricao: `Seu treinamento permite que você aproveite a energia mística do vita. Seu acesso a essa energia é representado por um número de pontos de vita. Seu nível 
                        de Guerreiro Espiritual determina o número de pontos que você tem, como mostrado na coluna Pontos de vita da tabela do Guerreiro Espiritual.
                        <br>Você pode gastar esses pontos para alimentar vários recursos de vita. Você começa conhecendo três recursos: Espírito Forte, Defesa Paciente e Passo do Vento. Você 
                        aprende mais recursos de vita à medida que ganha níveis nesta classe.
                        <br>Quando você gasta um ponto de vita, ele fica indisponível até que você termine um descanso curto ou longo, no final do qual você recupera todos os seus pontos de 
                        vita gastos. Você deve gastar pelo menos 30 minutos meditando durante o descanso para recuperar seus pontos de vita.
                        <br>Alguns dos seus recursos de vita exigem que seu alvo faça um teste de resistência para resistir aos efeitos do recurso.
                        <b>CD de Resistência de vita = 8 + seu bônus de proficiência + seu modificador de Sabedoria</b>.
                        <br><b>Espírito Forte.</b> Você pode gastar 3 pontos de vita para adicionar 5 em um teste de resistência.
                        <br><b>Defesa Paciente.</b> Você pode gastar 1 ponto de vita para realizar a ação Esquivar como uma ação bônus em seu turno.
                        <br><b>Passo do Vento.</b> Você pode gastar 1 ponto de vita para realizar as ações Desengajar ou Disparar como uma ação bônus em seu turno, e sua distância de salto é 
                        dobrada para a rodada.`
                    },
                    {
                        nivel: 1,
                        titulo: "Movimento Extra",
                        descricao: `Seu movimento aumenta em 5 ft. Nos Níveis 5, 10, 15 e 18 são acrescentados 5 ft no aumento. Como uma ação bônus, você pode gastar 1 ponto de vita para 
                        dobrar esse deslocamento até o fim do seu próximo turno.`
                    },
                    {
                        nivel: 1,
                        titulo: "Estilo de Luta",
                        descricao: `Você adota um estilo particular de luta como sua especialidade. Escolha uma das opções apresentadas na página "Estilos de Luta". Você não pode escolher uma 
                        opção de Estilo de Luta mais de uma vez, mesmo que depois você possa escolher novamente.`
                    },
                    {
                        nivel: 2,
                        titulo: "Arma Dedicada",
                        descricao: `Como um Guerreiro Espiritual, você tem a capacidade de se dedicar a uma arma específica, aprendendo seus movimentos e técnicas mais avançadas. Escolha uma 
                        arma de sua escolha, como uma espada longa, uma adaga ou um arco curto. A partir de agora, sempre que usar essa arma, você ganha os seguintes benefícios:
                        <br>• Você adiciona seu bônus de proficiência na rolagem de dano com essa arma.
                        <br>• Se você acertar um ataque com essa arma, pode gastar 1 ponto de vita para causar dano extra. O dano extra é igual ao seu modificador de habilidade.
                        <br>• Quando você atinge o 5º nível, pode gastar 2 pontos de vita para realizar um ataque extra com a arma escolhida, como uma ação bônus.
                        <br>• Quando você atinge o 11º nível, pode gastar 2 pontos de vita para adicionar dano referente ao seu Elemento a um ataque com a arma escolhida. O dano é igual a duas 
                        vezes o seu modificador de sabedoria (mínimo 2).
                        <br>• Quando você atinge o 17º nível, sempre que acerta um ataque com a arma escolhida, pode gastar 4 pontos de vita para causar dano extra do seu tipo de elemento. O 
                        dano extra é igual a 4 vezes o seu bônus de proficiência.
                        `
                    },
                    {
                        nivel: 3,
                        titulo: "Trilha Espiritual",
                        descricao: `Você ganha uma subclasse de sua escolha. A Trilha Elemental e a Trilha do Ego estão detalhadas no final da descrição dessa classe. Sua trilha concede a você 
                        características no 3° nível e novamente no 6°, 11° e 17° nível.`
                    },
                    {
                        nivel: 3,
                        titulo: "Defletir Projéteis",
                        descricao: `Você pode usar sua reação para desviar ou pegar um projétil quando é atingido por um ataque de arma à distância. Quando você faz isso, o dano que você sofre 
                        do ataque é reduzido em 1d10 + seu modificador de Destreza ou Sabedoria + seu nível de Guerreiro Espiritual. Se você reduzir o dano a 0, você pode pegar o projétil se 
                        ele for pequeno o suficiente para segurar em uma mão e você tiver pelo menos uma mão livre. Se você pegar um projétil dessa maneira, pode gastar 1 ponto de vita para 
                        fazer um ataque à distância com alcance de 20/60 pés usando a arma ou munição que acabou de pegar, como parte da mesma reação. Você faz esse ataque com proficiência, 
                        independentemente de suas proficiências em armas, e o projétil tem dano de 1d10 + seu modificador de Sabedoria ou Destreza.`
                    },
                    {
                        nivel: 3,
                        titulo: "Golpes Espirituais",
                        descricao: `Você aprende a canalizar seu vita para desferir ataques mais poderosos que perseguem a energia espiritual de seu alvo. Quando você ativa esse traço, como uma 
                        ação bônus você concentra sua energia espiritual nos seus golpes. Você ganha vantagem em seus ataques por um número de turnos igual a quantidade de pontos de vita que 
                        utilizar. O número máximo de pontos de vita que você pode gastar de uma vez para ativar esse traço é 5.`
                    },
                    {
                        nivel: 4,
                        titulo: "Incremento de Habilidade",
                        descricao: `Você ganha o talento Incremento de Habilidade (veja a página Talentos) ou outro talento de sua escolha para o qual você se qualifica. Você ganha essa característica 
                        novamente nos níveis 8, 12, 16 e 19.`
                    },
                    {
                        nivel: 4,
                        titulo: "Queda Suave",
                        descricao: `Você pode usar sua reação quando cair para reduzir qualquer dano de queda que sofrer em uma quantidade igual a cinco vezes o seu nível de Guerreiro Espiritual.`
                    },
                    {
                        nivel: 5,
                        titulo: "Ler Espírito",
                        descricao: `Você pode gastar uma ação bônus para se concentrar em uma criatura que você possa ver e esteja em até 60 ft e determinar se ele é capaz de controlar a própria 
                        energia espiritual. O alvo deve ser bem sucedido em um teste de resistência de sabedoria (o alvo pode escolher falhar) com a CD dos seus recursos de vita. Caso o alvo 
                        falhe, você pode determinar quantos pontos de vita ele tem restantes.
                        <br>Em adição, a partir do 6° nível, você pode gastar 1 a 3 pontos de vita. Após fazer isso, você detecta a presença de criaturas em um raio de 60 pés multiplicado pelo 
                        número de pontos de vida gastos. Você sabe a quantidade de criaturas na área e se alguma delas é poderosa. Essa habilidade não revela a localização exata das criaturas, 
                        apenas sua direção geral.`
                    },
                    {
                        nivel: 6,
                        titulo: "Auto Recuperação",
                        descricao: `Você pode gastar 2 pontos de vita para se curar em 1d10 + seu nível de Guerreiro Espiritual como uma ação bônus.`
                    },
                    {
                        nivel: 7,
                        titulo: "Evasão",
                        descricao: `Sua agilidade instintiva permite que você se esquive de certos efeitos de área, como o sopro elétrico de um dragão azul ou um feitiço de bola de fogo. 
                        Quando você é submetido a um efeito que permite fazer um teste de resistência de Destreza para sofrer apenas metade do dano, você não sofre dano algum se passar no 
                        teste de resistência e somente metade do dano se falhar.`
                    },
                    {
                        nivel: 9,
                        titulo: "Impulso Espiritual",
                        descricao: `Você pode utilizar 6 pontos de vita para aflorar os músculos do corpo todo utilizando a energia espiritual. Você ganha os efeitos da magia haste enquanto 
                        mantiver a concentração.`
                    },
                    {
                        nivel: 10,
                        titulo: "Corpo Fechado",
                        descricao: `Seu domínio do vita que flui através de você faz com que você seja imune a doenças e venenos.`
                    },
                    {
                        nivel: 13,
                        titulo: "Teletapia",
                        descricao: `Você pode se comunicar telepaticamente com uma criatura que você possa ver a até 60 pés de distância, desde que a criatura também possa entender um idioma. 
                        A comunicação telepática não requer o uso de sua voz ou gestos físicos e não pode ser interceptada por outros meios de comunicação. Você pode usar essa habilidade um 
                        número de vezes igual ao seu modificador de Sabedoria.`
                    },
                    {
                        nivel: 14,
                        titulo: "Espírito de Diamante",
                        descricao: `Sua maestria em vita concede proficiência em todas as jogadas de resistência. Além disso, sempre que você fizer uma jogada de resistência e falhar, pode 
                        gastar 1 ponto de vita para rolar novamente e escolher o segundo resultado.`
                    },
                    {
                        nivel: 15,
                        titulo: "Corpo Atemporal",
                        descricao: `Seu vita sustenta você de forma que você não sofre nenhuma das fraquezas da velhice e não pode ser envelhecido magicamente.`
                    },
                    {
                        nivel: 17,
                        titulo: "Diluir Espírito",
                        descricao: `Você pode usar sua ação para gastar 4 pontos de vita para se tornar invisível por 1 minuto. Durante esse tempo, você também tem resistência a todo tipo de 
                        dano, exceto dano de força.
                        <br>Além disso, você pode se tornar uma manifestação física do seu elemento durante esse período por 1 ponto de ki a mais. Se optar por isso, além dos benefícios citados
                        você fica em um estágio etéreo que permite que ocupe espaços ocupados por objetos ou criaturas. Objetos ou criaturas que comecem o turno no mesmo local que você recebem 
                        1d10 de dano do seu elemento.`
                    },
                    {
                        nivel: 20,
                        titulo: "Forma Perfeita",
                        descricao: `Quando você rolar para iniciativa e não tiver nenhum ponto de vita restante, você recupera 4 pontos de vita. Em adição, você pode escolher um recurso de vita 
                        que não gaste mais do que 3 pontos para utilizar sem gastar os pontos 1 vez a cada descanso curto.`
                    }
                ]
            }
        ],
        subclasses: [
            {
                id: 1,
                nome: "Trilha do Elemento",
                descricao: `Após conquistar a harmonia espiritual de seu próprio vita, observar o fluxo de energia que envolve os elementos moldando a natureza se torna uma tarefa mais fácil. 
                Ao escolher essa trilha, você pode focar em dominar o fluxo de um ou mais elementos usando o seu vita para interferir de forma precisa`,
                caracteristicas: [
                    {
                        nivel: 3,
                        titulo: "Manifestação Elemental",
                        descricao: `Ao escolher essa trilha no 3° nível, você pode gastar 2 pontos de vita e entrar em um estado de harmonia que lhe permite acessar os elementos de forma mais 
                        bruta ou mais trabalhada a depender da necessidade durante 1 minuto. As formas de manipulação são divididas entre rápidas e contínuas, sendo que apenas uma manifestação 
                        contúnua pode ser ativada por vez, escolhida na hora da manifestação. O estado de manifestação elemental se encerra antes se você for reduzido a 0 pontos de vida ou 
                        passar 3 turnos sem usar pontos de vita. Um tipo de manifestação elemental pode ser feita com um elemento diferente do usado na descrição visual contanto que mantenha a 
                        mecânica. Consulte o DM sobre troca de tipo de dano se considerar necessário. No 3° nível, você tem direito a escolher duas manifestações da lista:
                        <br>
                        <br><b>Manipulações Rápidas</b>

                        <br>• <b>Rajada Fulminante:</b> Você lança um raio de eletricidade concentrada em um alvo a até 15 metros. Gaste 2 pontos de vita e, como uma ação bônus, realize um 
                        ataque à distância usando seu bônus de proficiência e o seu modificador de destreza ou sabedoria(sua escolha). Se acertar, o alvo sofre 2d8 de dano elétrico + o 
                        modificador utilizado no ataque e não pode realizar reações até o início do seu próximo turno.

                        <br>• <b>Lufada:</b> Você cria uma poderosa rajada de vento que empurra criaturas e objetos. Você gasta 1 ponto de vita e, como uma ação, todas as criaturas em uma linha 
                        reta de 15 ft devem fazer um teste de resistência de Força (CD14). Em uma falha, são empurradas 10 ft para trás e caem no chão. Objetos leves que não estão sendo 
                        segurados são empurrados automaticamente até 20 ft.

                        <br>• <b>Obscuração:</b> Você infunde suas mãos ou armas com energia sombria e toca um inimigo, drenando sua força vital. Ao realizar um ataque corpo a corpo, você pode 
                        gastar 3 pontos de ki e usar o toque sombrio. Se acertar, o alvo sofre 2d8 de dano necrótico e deve fazer um teste de resistência de Constituição (CD 13). Em uma falha, 
                        sua velocidade é reduzida pela metade até o final do próximo turno. Você recupera pontos de vida iguais à metade do dano causado.

                        <br>• <b>Metamorfose Selvagem:</b> Você rapidamente assume uma forma bestial, ganhando características de uma criatura selvagem para um ataque devastador. Como uma ação 
                        bônus, você pode utilizar 3 pontos de vita para se transformar parcialmente em uma fera ou monstro. Até o final do seu próximo turno, seus ataques corpo a corpo causam 
                        1d6 de dano de força adicional, você tem 1d6 pontos de vida temporária e você ganha +10 pés de movimento. No final do seu próximo turno, você pode manter a metamorfose 
                        por mais um turno a um custo de 1 de ki.
                        <br>
                        <br><b>Manipulações Contínuas</b>

                        <br>• <b>Aura do Equilíbrio:</b>  Você irradia uma luz brilhante que inspira aliados drenando a energia de inimigos. Durante a manifestação elemental, você emite luz 
                        brilhante em um raio de 15 ft e penumbra num raio adicional de 15 ft. Aliados dentro da luz brilhante ganham 1d6 pontos de vida temporários no início de cada um dos 
                        turnos. Inimigos dentro da penumbra devem ser bem sucedidos em um teste de resistência de sabedoria cd 12 ou sofrerão 1d4 de dano radiante no início de cada um dos 
                        turnos. Um oponente que passa no teste de resistência fica imune ao efeito durante a manifestação corrente.

                        <br>• <b>Aura Entrópica:</b> Você gera uma aura de calor intenso ao seu redor. Durante a manifestação elemental, inimigos que começarem seu turno a até 5 ft de você 
                        sofrem 1d6 de dano de fogo.

                        <br>• <b>Criosolidificação:</b> Você se envolve em uma camada protetora de gelo. Durante a manifestação elemental, você ganha +2 de CA e resistência a dano de fogo. 
                        Além disso, qualquer criatura que atacar você corpo a corpo até o fim da manifestação sofre 1d4 de dano de frio.
                        <br>
                        <br>Em cada um dos níveis 6, 11 e 17 você pode escolher mais uma opção.
                        `
                    }
                ]
            },
            {
                id: 2,
                nome: "Trilha do Ego",
                descricao: `A voz do seu interior é gritante, ao ponto de se manifestar na realidade. Essa trilha permite que o Guerreiro Espiritual invoque seu Ego como um auxiliar na 
                batalha. Escolha uma forma fixa para seu Ego que possa representar as peculiaridades do seu personagem. O Ego tem tamanho médio. As funções do Ego variam de usuário para 
                usuário.`,
                caracteristicas: [
                    {
                        nivel: 3,
                        titulo: "Característica de Nível 3",
                        descricao: `Como uma ação bônus, você pode conjurar seu Ego ao gastar 2 pontos de vita, em até 30 pés de distância em um local que você possa ver. A conjuração pode 
                        durar 1 minuto, até você ser incapacitado ou se afastar mais do que 30 pés metros dela. Esse limite de distância aumenta para 60 pés no nível 11. O Ego tem resistência 
                        a todos os tipos de dano, menos dano de força, e tem um total de vida equivalente a metade dos seus pontos de vida totais. O CA do Ego é igual ao seu. A velocidade de
                        deslocamento do seu ego é igual a sua, e seu Ego tem uma velocidade de voo e nado de 30 pés.
                        <br>Com uma ação bônus, você pode fazer seu Ego atacar uma criatura, causando 1d8 + seu modificador de Sabedoria como dano de força. O Ego é proficiente no ataque e 
                        usa seu modificador de Sabedoria para o acerto. Você deve definir se o ego atacará usando golpes corpo a corpo ou a distância (20/90 pés) com rajadas de vita. Se o Ego 
                        for especializado em ataques corpo a corpo, sempre que atacar um inimigo que esteja em até 5 pés de distância de um aliado seu, ele terá vantagem. Se o Ego atacar a 
                        distância, você ganhará 10 pés de deslocamento bônus em seu turno sempre que o Ego acertar uma criatura. O Ego só poderá receber comandos se você for capaz de vê-lo. 
                        Nos níveis 11 e 17 o Ego poderá atacar mais uma vez quando comandado.
                        <br>Escolha dois dos benefícios listados abaixo para fazerem parte das habilidades de seu Ego:
                        <br>
                        <br>• No início de cada um de seus turnos, receba 1d4 + seu modificador de Constituição como vida falsa. O dado de vida falsa aumenta em 1d4 nos níveis 11 e 17.

                        <br>• Cause 1d6 + seu modificador de Sabedoria como dano de força no primeiro ataque que acertar usando sua arma dedicada em seu turno. O dado de dano aumenta em 
                        1d6 nos níveis 6, 11 e 17.
                        
                        <br>• Sempre que derrotar um oponente, absorva parte de sua essência vital e recupere pontos de vita iguais a seu bônus de proficiência. A cura aumenta em +2 nos 
                        níveis 11 e 17.

                        <br>• Seu ego emite uma aura com um raio de 4,5 metros que fortalece o espírito aliados próximos. Criaturas aliadas sobre o efeito ganham 1d4 em testes de resistência. 
                        O dado para os testes aumenta para 1d6 no nível 11 e 1d8 no nível 17.
                        <br>
                        <br>Você poderá escolher mais um dos benefícios nos níveis 11 e 17.`
                    },
                    {
                        nivel: 6,
                        titulo: "Resiliência Astral",
                        descricao: `O aperfeiçoamento de seu espírito fortalece sua mente e corpo. Enquanto o Ego estiver em uma distância de até 60 pés de você, seu CA aumenta em 2 pontos. 
                        Sua percepção passiva é aprimorada por 2 pontos e você tem vantagens em testes para detectar criaturas furtivas.
                        <br>Se seus pontos de vida forem reduzidos a 0, você poderá gastar 2 pontos de vita para suportar mais um turno de pé, ou até receber mais um ataque. Você só poderá usar 
                        essa característica novamente após um descanso longo.`
                    },
                    {
                        nivel: 11,
                        titulo: "Deslocar Alma",
                        descricao: `Você pode gastar 2 pontos de ki a mais sempre que invocar seu Ego. Se optar por isso, criaturas inimigas em um raio de 10 pés do Ego devem realizar um teste 
                        de destreza. Todas as criaturas afetadas recebem 3d8 + seu modificador de Sabedoria como dano de força, ou metade do dano se forem bem-sucedidas no teste.
                        <br>Ao gastar 2 pontos de vita, você pode se teletransportar até 5 pés de distância do seu Ego, ou teletransportar o Ego até 5 pés de distância de você.`
                    },
                    {
                        nivel: 17,
                        titulo: "Aprimoramento do Espírito",
                        descricao: `Com toda a sua dedicação ao aprimoramento de seu controle espiritual, você se torna mais apto ao uso do vita e os custos de seu uso se tornam menores. 
                        Características que exigem um gasto de 3 ou mais pontos de vita tem o custo reduzido em 1 ponto de vita.
                        <br>0Além disso, os efeitos negativos da magia Haste causados pela característica Impulso Espiritual são anulados após a magia se desfazer.`
                    }
                ]
            }
        ]
    },
    // Ceifador ID 2
    {
        id: 0,
        nome: "Ceifador",
        imagemCard: "images/cards/Temporario.jpg",
        imagemVertical: "images/classes/Ceifador.jpg",
        descricaoCurta: "Descrição curta da classe",
        arte: "Nome do Artista",
        paginaartista: "https://exemplo.com/artista",
        tituloDeSubclasse: "Título das Subclasses",

        secoes: [
            {
                tipo: "descricao",
                conteudo: [
                    `“Nas profundezas onde a luz não ousa chegar, onde os segredos são selados com sangue e os desejos mais sombrios tomam forma, ergue-se a Conclave. Seus membros são os 
                    Ceifadores, assassinos de almas atormentadas que negociam sua humanidade em troca de poder absoluto. Ligados por pactos de sangue, eles são a manifestação do perigo que 
                    espreita à meia-luz, mestres da lâmina e da persuasão, temidos até mesmo por aqueles que os contratam.”`
                ],
                descricaoObjetiva: [
                    `Os Ceifadores são uma classe de assassinos mágicos que obtêm seu poder através de um Pacto de Sangue com forças obscuras. Este ritual lhes concede habilidades sobrenaturais, 
                    como teletransporte entre sombras, regeneração acelerada e a capacidade de canalizar energia negra em seus ataques. Especialistas no uso de armas como foices e adagas, eles 
                    combinam precisão mortal com magia sombria para eliminar seus alvos. No entanto, o pacto exige um preço constante: sacrifícios de sangue para manter o poder e uma corrupção 
                    lenta que consome corpo e mente.`
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
                colunas: ["Nível", "Bônus de Proficiência", "Características", "Aspectos de Sangue"],
                linhas: [
                    { 
                        nivel: 1, 
                        bonusdeproficiencia: "+2", 
                        caracteristicas: "Característica...", 
                        aspectosdesangue: 1
                    },
                    { 
                        nivel: 2, 
                        bonusdeproficiencia: "+2", 
                        caracteristicas: "Característica...", 
                        aspectosdesangue: 1
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
        ]
    }


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