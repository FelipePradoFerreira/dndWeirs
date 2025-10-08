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
        id: 2,
        nome: "Ceifador",
        imagemCard: "images/cards/Temporario.jpg",
        imagemVertical: "images/classes/Ceifador.jpg",
        descricaoCurta: "Assassinos mágicos que obtêm poder através de Pactos de Sangue com forças obscuras",
        arte: "Riccardo Moscatello",
        paginaartista: "https://www.artstation.com/riccardo",
        tituloDeSubclasse: "Ritos de Darb",

        secoes: [
            {
                tipo: "descricao",
                conteudo: [
                    `"Nas profundezas onde a luz não ousa chegar, onde os segredos são selados com sangue e os desejos mais sombrios tomam forma, ergue-se a Conclave. Seus membros são os 
                    Ceifadores, assassinos de almas atormentadas que negociam sua humanidade em troca de poder absoluto. Ligados por pactos de sangue, eles são a manifestação do perigo que 
                    espreita à meia-luz, mestres da lâmina e da persuasão, temidos até mesmo por aqueles que os contratam."`
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
                    "Habilidade Primária": `Destreza`,
                    "Dados de Vida": "d10 por nível de classe",
                    "Proficiência de Salvaguarda": `Constituição e Destreza`,
                    "Proficiência em Habilidades": `Escolha 2: Acrobacia, Furtividade, Percepção, Medicina, Enganação, Intimidação, Sobrevivência e Arcanismo`,
                    "Proficiência com Armas": `Foices, Adagas e Dardos`,
                    "Proficiência com Armaduras": `Leves, Médias, Escudos`,
                    "Proficiência com Ferramentas": `Ferramentas de Ladrão, Kit de Veneno`,
                    "Equipamento Inicial": `Escolha A ou B: (A) Uma foice de guerra ou uma foice simples e uma adaga, uma armadura de couro batido e um escudo ou uma cota de malha, um conjunto 
                    de ferramentas de ladrão ou um kit de envenenador, um pacote de aventureiro, 20 dardos, uma Al-Qadim e 10 GP; ou (B) 50 GP`
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
                        caracteristicas: `Aspectos de Sangue, Al-Qadim`, 
                        aspectosdesangue: 1
                    },
                    { 
                        nivel: 2, 
                        bonusdeproficiencia: "+2", 
                        caracteristicas: `Ação Ardilosa, Rito de Darb`, 
                        aspectosdesangue: 1
                    },
                    { 
                        nivel: 3, 
                        bonusdeproficiencia: "+2", 
                        caracteristicas: `Colheita de Damm`, 
                        aspectosdesangue: 2
                    },
                    { 
                        nivel: 4, 
                        bonusdeproficiencia: "+2", 
                        caracteristicas: `Incremento de Habilidade`, 
                        aspectosdesangue: 2
                    },
                    { 
                        nivel: 5, 
                        bonusdeproficiencia: "+3", 
                        caracteristicas: `Ataque Extra`, 
                        aspectosdesangue: 2
                    },
                    { 
                        nivel: 6, 
                        bonusdeproficiencia: "+3", 
                        caracteristicas: `Rito de Darb, Maldição de Sangue`, 
                        aspectosdesangue: 3
                    },
                    { 
                        nivel: 7, 
                        bonusdeproficiencia: "+3", 
                        caracteristicas: `Psicometria Macabra`, 
                        aspectosdesangue: 3
                    },
                    { 
                        nivel: 8, 
                        bonusdeproficiencia: "+4", 
                        caracteristicas: `Incremento de Habilidade`, 
                        aspectosdesangue: 3
                    },
                    { 
                        nivel: 9, 
                        bonusdeproficiencia: "+4", 
                        caracteristicas: `Augmentação Sombria`, 
                        aspectosdesangue: 4
                    },
                    { 
                        nivel: 10, 
                        bonusdeproficiencia: "+4", 
                        caracteristicas: `Rito de Darb`, 
                        aspectosdesangue: 4
                    },
                    { 
                        nivel: 11, 
                        bonusdeproficiencia: "+4", 
                        caracteristicas: `Comunhão Damm-Qadim`, 
                        aspectosdesangue: 4
                    },
                    { 
                        nivel: 12, 
                        bonusdeproficiencia: "+5", 
                        caracteristicas: `Incremento de Habilidade`, 
                        aspectosdesangue: 5
                    },
                    { 
                        nivel: 13, 
                        bonusdeproficiencia: "+5", 
                        caracteristicas: `Agilidade Macabra`, 
                        aspectosdesangue: 5
                    },
                    { 
                        nivel: 14, 
                        bonusdeproficiencia: "+5", 
                        caracteristicas: `Alma Amaldiçoada`, 
                        aspectosdesangue: 5
                    },
                    { 
                        nivel: 15, 
                        bonusdeproficiencia: "+5", 
                        caracteristicas: `Rito de Darb`, 
                        aspectosdesangue: 6
                    },
                    { 
                        nivel: 16, 
                        bonusdeproficiencia: "+5", 
                        caracteristicas: `Incremento de Habilidade`, 
                        aspectosdesangue: 6
                    },
                    { 
                        nivel: 17, 
                        bonusdeproficiencia: "+6", 
                        caracteristicas: `Suspiro Espectral`, 
                        aspectosdesangue: 6
                    },
                    { 
                        nivel: 18, 
                        bonusdeproficiencia: "+6", 
                        caracteristicas: `Alta Conclave`, 
                        aspectosdesangue: 7
                    },
                    { 
                        nivel: 19, 
                        bonusdeproficiencia: "+6", 
                        caracteristicas: `Incremento de Habilidade`, 
                        aspectosdesangue: 7
                    },
                    { 
                        nivel: 20, 
                        bonusdeproficiencia: "+6", 
                        caracteristicas: `Aspecto Encarnado`, 
                        aspectosdesangue: 8
                    }
                ]
            },
            {
                tipo: "caracteristicasDetalhadas",
                titulo: "Características Detalhadas",
                caracteristicas: [
                    {
                        nivel: 1,
                        titulo: "Aspectos de Sangue",
                        descricao: `Os Aspectos de Sangue são poderes mágicos inerentes à natureza da Conclave dos Ceifadores. Através de um pacto de sangue com uma divindade desconhecida, eles 
                        adquirem habilidades excepcionais relacionadas ao uso do sangue. Cada Ceifador é capaz de usar os Aspectos de Sangue de maneiras diferentes, mas todos têm em comum a 
                        capacidade de sacrificar seu próprio sangue para invocar habilidades sobrenaturais.
                        <br><b>Celeridade de Sangue:</b> O ceifador pode gastar um aspecto de sangue para ativar a Celeridade de Sangue por um turno. No início do turno, como uma ação livre, role 
                        um d6. Você sacrifica o resultado em pontos de vida. Durante esse turno, o ceifador pode fazer duas ações ao invés de uma e pode se mover até seu deslocamento máximo como 
                        uma ação bônus adicional. Além disso, o ceifador pode se mover através de espaços ameaçados por inimigos sem provocar ataques de oportunidade.
                        <br><b>Toque de Sangue:</b> Quando acerta um ataque corpo-a-corpo, o ceifador pode gastar um aspecto de sangue ou mais para causar dano adicional igual ao número de aspectos 
                        de sangue de d6 do tipo necrótico. O alvo também deve fazer um teste de resistência de Constituição com CD igual a 8 + modificador de proficiência do ceifador + seu 
                        modificador de constituição. Em caso de falha, o alvo sofre a condição Envenenado por 1 minuto.
                        <br>O dano adicional aumenta em 2d6 por aspecto de sangue usado quando o ceifador atinge os níveis 5, 3d6 quando atinge o nível 11 e 4d6 quando atinge o nível 17. A condição 
                        Envenenado dura por mais tempo a cada aumento de nível: 10 minutos no nível 5, 1 hora no nível 11 e 8 horas no nível 17.
                        <br><b>Fúria de Sangue:</b> A habilidade que permite ao Ceifador entrar em um estado de frenesi devido à sua conexão com o sangue. Para ativar, gaste 1 aspecto de sangue 
                        como ação livre ao reduzir uma criatura a 0 pontos de vida com uma foice. Quando ativada, o personagem ganha os seguintes benefícios por 1 minuto:
                        <br>• +2 em (a)Força ou (b)Destreza e (a)Constituição.
                        <br>• Ataques corpo a corpo causam +2 de dano adicional.
                        <br>• Vantagem em testes de resistência de Força, Destreza e Constituição.
                        <br>No entanto, a Fúria de Sangue tem um custo. O Ceifador perde a capacidade de distinguir aliados de inimigos e deve ser bem sucedido em um teste de resistência de 
                        sabedoria cd 12 ao realizar a ação de ataque, numa falha, ele deve atacar o alvo mais próximo. Além disso, após o efeito da habilidade acabar, o personagem sofre uma 
                        penalidade de -2 em Força e Constituição durante 1 minuto e não pode usar a habilidade novamente até terminar um descanso curto ou longo.
                        <br><b>Manto de Sangue:</b> Como uma ação bônus, a habilidade permite aos ceifadores canalizarem seu sangue em uma armadura etérea ao redor de seus corpos, aumentando sua 
                        resistência ao dano e dando-lhes uma aparência assustadora. Enquanto ativada, o ceifador pode adicionar seu modificador de Constituição ao seu valor de CA e usar o 
                        modificador em testes de intimidação ao invés de Carisma.
                        <br>Além disso, o Manto de Sangue concede resistência a qualquer tipo de dano (exceto dano radiante) em ataques corpo a corpo e imunidade a doenças e venenos.
                        <br>A utilização do Manto de Sangue requer que o ceifador gaste um aspecto de sangue para a ativação e 2d4 de pontos de vida ao final de cada turno que o ceifador optar por 
                        manter a habilidade ativa. A habilidade também requer que o ceifador concentre-se por toda a duração.
                        `
                    },
                    {
                        nivel: 1,
                        titulo: "Al-Qadim",
                        descricao: `As Al-Qadim são máscaras arcanas produzidas com uma técnica antiga e misteriosa e são a fonte dos poderes de sangue dos ceifadores. É feita de um material 
                        desconhecido e sua aparência muda de acordo com o portador. Quando um ceifador é iniciado na Conclave, a máscara é colocada em seu rosto e uma ligação mágica é criada entre 
                        eles e a entidade misteriosa que dá os poderes da classe.

                        <br>Se um ceifador morre, sua alma é sugada para a máscara, onde permanece guardada até que seu corpo possa ser restaurado através de um ritual. Durante este processo, a 
                        máscara é magicamente ligada novamente ao corpo do ceifador, permitindo-lhe continuar usando seus poderes.

                        <br>A Al-Qadim é extremamente poderosa e a remoção da máscara é um processo perigoso. Só pode ser retirada por meio de outro ritual guardado a sete chaves pela conclave ou 
                        por meio de lesão física extrema, que normalmente causa a morte do portador. Se a máscara for removida, o vínculo com a entidade misteriosa é quebrado, resultando na perda de todos os poderes de sangue do ceifador.`
                    },
                    {
                        nivel: 2,
                        titulo: "Ação Ardilosa",
                        descricao: `Você pode utilizar as ações Esconder, Disparar ou Desengajar como uma ação bônus.`
                    },
                    {
                        nivel: 2,
                        titulo: "Rito de Darb",
                        descricao: `Os Ritos de Darb são rituais ancestrais que cada ceifador deve passar para aprimorar seus poderes de sangue e receber novas habilidades. Cada Rito é realizado em 
                        um local sagrado e envolve uma série de rituais de meditação e domínio dos aspectos de sangue. Os ceifadores são encorajados a escolher um Rito que se alinhe com seus 
                        interesses e estilo de luta, já que cada um oferece diferentes habilidades e técnicas. Uma vez que um ceifador completa um Rito, ele é considerado um mestre daquela técnica 
                        específica e pode utilizar suas habilidades com maior eficácia.`
                    },
                    {
                        nivel: 3,
                        titulo: "Colheita de Damm",
                        descricao: `Damm significa sangue em um dialeto aelorio antigo e é o nome de uma técnica de aspecto de sangue ancestral usada por ceifadores mais experientes. Como uma ação 
                        bônus, você pode gastar dois aspectos de sangue para recuperar uma quantidade de pontos de vida igual ao dano causado por um ataque corpo a corpo realizado no mesmo turno.`
                    },
                    {
                        nivel: 4,
                        titulo: "Incremento de Habilidade",
                        descricao: `Você ganha o talento Incremento de Habilidade ou outro talento de sua escolha para o qual você se qualifica. Você ganha essa característica novamente nos níveis 
                        8, 12, 16 e 19.`
                    },
                    {
                        nivel: 5,
                        titulo: "Ataque Extra",
                        descricao: `Você pode realizar dois ataques ao invés de um, sempre que realizar a ação de Ataque em seu turno.`
                    },
                    {
                        nivel: 6,
                        titulo: "Maldição de Sangue",
                        descricao: `Você é capaz de amaldiçoar seu inimigo com uma marca de sangue, que o faz sofrer dor cada vez que tenta agir contra você.
                        <br>Como uma ação bônus, você pode escolher um inimigo que possa ver a até 9 metros de você e usar dois aspectos de sangue para ativar a habilidade. O alvo deve ser bem 
                        sucedido em um teste de resistência de Constituição (CD = 8 + seu modificador de proficiência + seu modificador de Constituição) ou sofrerá dano psíquico igual ao seu 
                        modificador de Constituição sempre que for atacar você e uma criatura a sua escolha. A marca de sangue permanece até que o alvo receba qualquer cura mágica ou até você usar 
                        essa habilidade em outro alvo.`
                    },
                    {
                        nivel: 7,
                        titulo: "Psicometria Macabra",
                        descricao: `Você adquire um talento sobrenatural para discernir os segredos que cercam relíquias misteriosas ou lugares tocados pelo mal. Sempre que fizer um teste de 
                        Inteligência (História) para lembrar informações sobre a história sinistra ou trágica de um objeto que está tocando ou do seu local atual, você tem vantagem no teste. A 
                        critério do DM, uma rolagem suficientemente alta pode fazer com que seu personagem experimente visões breves do passado conectadas ao objeto ou localização.`
                    },
                    {
                        nivel: 9,
                        titulo: "Augmentação Sombria",
                        descricao: `A magia da Al-Qadim permeia seu corpo para reforçar permanentemente sua resistência. Sua velocidade aumenta em 5 pés e você recebe um bônus em testes de 
                        resistência de Força, Destreza e Constituição igual ao seu modificador de Constituição (mínimo de +1).`
                    },
                    {
                        nivel: 11,
                        titulo: "Comunhão Damm-Qadim",
                        descricao: `Você se conecta com os antigos ceifadores e adquire a sabedoria deles. Você pode lançar o feitiço "Commune" uma vez por dia sem gastar um espaço de magia. 
                        Quando você conjura este feitiço, sua pergunta é direcionada para os ceifadores ancestrais e você recebe uma resposta verdadeira, curta e objetiva para a pergunta. Além 
                        disso, você pode adicionar seu modificador de constituição (mínimo de +1) para as jogadas de ataque de ataques corpo a corpo que você realiza com foices ou adagas.`
                    },
                    {
                        nivel: 13,
                        titulo: "Agilidade Macabra",
                        descricao: `Quando você reduz um inimigo a 0 pontos de vida, você pode usar uma ação bônus para realizar um ataque adicional contra outro inimigo que esteja ao alcance. 
                        Esse ataque extra só pode ser feito com uma arma corpo a corpo ou com uma arma de ataque à distância que você esteja segurando no momento.`
                    },
                    {
                        nivel: 14,
                        titulo: "Alma Amaldiçoada",
                        descricao: `Você tem vantagem em testes de resistência contra ser encantado e amedrontado.`
                    },
                    {
                        nivel: 17,
                        titulo: "Suspiro Espectral",
                        descricao: `Sua conexão com a Al-Qadim lhe permite gastar uma ação para se dissociar e acessar o plano etéreo por um número de minutos igual a quantidade de aspectos de 
                        sangue utilizados.`
                    },
                    {
                        nivel: 18,
                        titulo: "Alta Conclave",
                        descricao: `Você alcançou o mais alto grau de domínio dos poderes de sangue e adquiriu acesso aos segredos mais profundos da Conclave. Você pode criar novas Al-Qadim usando 
                        o conhecimento que adquiriu, além de desbloquear outros benefícios:
                        <br>Você ganha resistência a dano necrótico e dano de veneno.
                        <br>Você pode escolher uma das seguintes opções para aprimorar ainda mais sua Al-Qadim:
                        • A Al-Qadim concede a você um traço adicional de Rito de Darb. Você não pode escolher o mesmo traço duas vezes.
                        • A Al-Qadim pode se ligar a uma foice, fazendo com que ela seja transformada em uma arma mágica, concedendo um bônus mágico de +2 em ataques e dano.
                        • A Al-Qadim pode ser aprimorada para permitir que você execute um ritual especial de ressurreição uma vez por semana, que permite que você traga um personagem morto de 
                        volta à vida, desde que você tenha acesso a uma quantidade suficiente de sangue.`
                    },
                    {
                        nivel: 20,
                        titulo: "Aspecto Encarnado",
                        descricao: `Seu domínio dos aspectos de sangue é tão vasto que você consegue recuperar dois usos no início de cada combate, ou 4 caso você não tenha 
                        nenhum restante quando o combate começar.`
                    }
                ]
            }
        ]
    },
// Engenheiro Ki-Tech ID 3
    {
        id: 3,
        nome: "Engenheiro Ki-Tech",
        imagemCard: "images/cards/Temporario.jpg",
        imagemVertical: "images/classes/EngenheiroKitech.jpg",
        descricaoCurta: "Descrição curta da classe",
        arte: "Mike Jordana",
        paginaartista: "https://www.artstation.com/mikejordana",
        tituloDeSubclasse: "Núcleo de Pesquisa",
        descricaoSubclasse: `Escolha o Núcleo que melhor represente suas habilidades, filosofia e treino do seu Engenheiro Ki-Tech: O Núcleo da Robótica ou o Núcleo da Artilharia.`, 
        secoes: [
            {
                tipo: "descricao",
                conteudo: [
                    `“Na fronteira onde a força vital encontra o avanço tecnológico, surgem os visionários que fundem o espírito com a matéria. Esses são os Engenheiros Ki-Tech, artífices da 
                    energia interior, capazes de forjar dispositivos milagrosos que convertem a própria essência do ser em poder arcano. Suas criações não são meras ferramentas, mas extensões 
                    de sua vontade, capazes de desafiar as leis convencionais da realidade.”`
                ],
                descricaoObjetiva: [
                    `Através de estudo rigoroso e intuição técnica, os Engenheiros Ki-Tech aprendem a canalizar seu ki para alimentar e comandar uma variedade de dispositivos inventados por 
                    eles mesmos, que permitem ao engenheiro converter energia espiritual em efeitos mágicos programáveis, concedendo-lhes uma versatilidade impressionante. Eles podem amplificar 
                    suas habilidades marciais, conceder proteções, manipular o campo de batalha e até mesmo conjurar feitiços, tornando-se uma fusão singular de inventor, lutador e conjurador.`
                ]
            },
            {
                tipo: "tracosPrincipais",
                titulo: "Principais Traços de classe",
                tracos: {
                    "Habilidade Primária": "Inteligência",
                    "Dados de Vida": "d6 por nível de Engenheiro Ki-Tech",
                    "Proficiência de Salvaguarda": "Inteligência e Constituição",
                    "Proficiência em Habilidades": "Escolha 3: Prestidigitação, Intuição, Percepção, Medicina, História, Investigação, Sobrevivência e Arcanismo",
                    "Proficiência com Armas": "Armas simples",
                    "Proficiência com Armaduras": "Armaduras Médias, Leves e Escudos",
                    "Proficiência com Ferramentas": "Ferramentas de Ladrão, Ferramentas de Carpintaria e outro Kit de Ferramentas de Artesanato a sua escolha",
                    "Equipamento Inicial": "Escolha A ou B: (A) Duas armas simples, uma besta leve e 20 virotes, uma armadura de couro batido ou uma cota de placas, um kit de ferramentas de ladrão e um kit de explorador, um foco arcano de ki-tech e 10 GP; ou (B) 50 GP"
                }
            },
            {
                tipo: "tabelaNiveis",
                titulo: "Características do classe",
                descricao: "Como um classe, você ganha as seguintes características de classe quando atinge os níveis específicos.",
                colunas: ["Nível", "Bônus de Proficiência", "Características", "Infusões", "Truques Conhecidos", "Slots de Magia<br>1° 2° 3° 4° 5° 6° 7° 8° 9°"],
                linhas: [
                    { 
                        nivel: 1, 
                        bonusdeproficiencia: "+2", 
                        caracteristicas: "Conjuração, Construção Espiritual", 
                        infusoes: 0, 
                        truquesconhecidos: 1, 
                        slotsdemagiabr123456789: "2 - - - - - - - -" 
                    },
                    { 
                        nivel: 2, 
                        bonusdeproficiencia: "+2", 
                        caracteristicas: "Influir Ki", 
                        infusoes: 1, 
                        truquesconhecidos: 2, 
                        slotsdemagiabr123456789: "3 - - - - - - - -" 
                    },
                    { 
                        nivel: 3, 
                        bonusdeproficiencia: "+2", 
                        caracteristicas: "Núcleo de Pesquisa, Artesão de Ferramentas", 
                        infusoes: 1, 
                        truquesconhecidos: 3, 
                        slotsdemagiabr123456789: "4 2 - - - - - - -" 
                    },
                    { 
                        nivel: 4, 
                        bonusdeproficiencia: "+2", 
                        caracteristicas: "Incremento de Habilidade", 
                        infusoes: 2, 
                        truquesconhecidos: 3, 
                        slotsdemagiabr123456789: "4 3 - - - - - - -" 
                    },
                    { 
                        nivel: 5, 
                        bonusdeproficiencia: "+3", 
                        caracteristicas: "Característica de Núcleo", 
                        infusoes: 2, 
                        truquesconhecidos: 4, 
                        slotsdemagiabr123456789: "4 3 2 - - - - - -" 
                    },
                    { 
                        nivel: 6, 
                        bonusdeproficiencia: "+3", 
                        caracteristicas: "Codificação de Ki", 
                        infusoes: 3, 
                        truquesconhecidos: 4, 
                        slotsdemagiabr123456789: "4 3 3 - - - - - -" 
                    },
                    { 
                        nivel: 7, 
                        bonusdeproficiencia: "+3", 
                        caracteristicas: "Marca Registrada", 
                        infusoes: 3, 
                        truquesconhecidos: 4, 
                        slotsdemagiabr123456789: "4 3 3 1 - - - - -" 
                    },
                    { 
                        nivel: 8, 
                        bonusdeproficiencia: "+3", 
                        caracteristicas: "Incremento de Habilidade", 
                        infusoes: 4, 
                        truquesconhecidos: 4, 
                        slotsdemagiabr123456789: "4 3 3 2 - - - - -" 
                    },
                    { 
                        nivel: 9, 
                        bonusdeproficiencia: "+4", 
                        caracteristicas: "Característica de Núcleo", 
                        infusoes: 4, 
                        truquesconhecidos: 4, 
                        slotsdemagiabr123456789: "4 3 3 3 1 - - - -" 
                    },
                    { 
                        nivel: 10, 
                        bonusdeproficiencia: "+4", 
                        caracteristicas: "Infusor Nato", 
                        infusoes: 5, 
                        truquesconhecidos: 5, 
                        slotsdemagiabr123456789: "4 3 3 3 2 - - - -" 
                    },
                    { 
                        nivel: 11, 
                        bonusdeproficiencia: "+4", 
                        caracteristicas: "Conjuração Sincronizada", 
                        infusoes: 5, 
                        truquesconhecidos: 5, 
                        slotsdemagiabr123456789: "4 3 3 3 2 1 - - -" 
                    },
                    { 
                        nivel: 12, 
                        bonusdeproficiencia: "+4", 
                        caracteristicas: "Incremento de Habilidade", 
                        infusoes: 5, 
                        truquesconhecidos: 5, 
                        slotsdemagiabr123456789: "4 3 3 3 2 1 - - -" 
                    },
                    { 
                        nivel: 13, 
                        bonusdeproficiencia: "+5", 
                        caracteristicas: "Característica de Núcleo", 
                        infusoes: 6, 
                        truquesconhecidos: 5, 
                        slotsdemagiabr123456789: "4 3 3 3 2 1 1 - -" 
                    },
                    { 
                        nivel: 14, 
                        bonusdeproficiencia: "+5", 
                        caracteristicas: "Gênio da Infusão", 
                        infusoes: 6, 
                        truquesconhecidos: 6, 
                        slotsdemagiabr123456789: "4 3 3 3 2 1 1 - -" 
                    },
                    { 
                        nivel: 15, 
                        bonusdeproficiencia: "+5", 
                        caracteristicas: "", 
                        infusoes: 6, 
                        truquesconhecidos: 6, 
                        slotsdemagiabr123456789: "4 3 3 3 2 1 1 1 -" 
                    },
                    { 
                        nivel: 16, 
                        bonusdeproficiencia: "+5", 
                        caracteristicas: "Incremento de Habilidade", 
                        infusoes: 7, 
                        truquesconhecidos: 6, 
                        slotsdemagiabr123456789: "4 3 3 3 2 1 1 1 -" 
                    },
                    { 
                        nivel: 17, 
                        bonusdeproficiencia: "+6", 
                        caracteristicas: "Característica de Núcleo", 
                        infusoes: 7, 
                        truquesconhecidos: 7, 
                        slotsdemagiabr123456789: "4 3 3 3 2 1 1 1 1" 
                    },
                    { 
                        nivel: 18, 
                        bonusdeproficiencia: "+6", 
                        caracteristicas: "", 
                        infusoes: 7, 
                        truquesconhecidos: 8, 
                        slotsdemagiabr123456789: "4 3 3 3 3 1 1 1 1" 
                    },
                    { 
                        nivel: 19, 
                        bonusdeproficiencia: "+6", 
                        caracteristicas: "Incremento de Habilidade", 
                        infusoes: 7, 
                        truquesconhecidos: 8, 
                        slotsdemagiabr123456789: "4 3 3 3 3 2 1 1 1" 
                    },
                    { 
                        nivel: 20, 
                        bonusdeproficiencia: "+6", 
                        caracteristicas: "Alma Tecnológica", 
                        infusoes: 8, 
                        truquesconhecidos: 9, 
                        slotsdemagiabr123456789: "4 3 3 3 3 2 1 1 1" 
                    }
                ]
            },
            {
                tipo: "caracteristicasDetalhadas",
                titulo: "Características Detalhadas",
                caracteristicas: [
                    {
                        nivel: 1,
                        titulo: "Conjuração",
                        descricao: `O estudo da tecnologia do ki permitiu a criação de focos arcanos tecnologicos que são capazes de converter a energia espiritual em energia arcana.
                        <br><b>Foco Requerido.</b> Os engenheiros ki-tech não têm domínio pleno do arcano, portanto não são capazes de conjurar magias sem o foco em mãos, mesmo que a magia não 
                        tenha componentes materiais.
                        <br><b>Truques (Magias de Nível 0).</b> No primeiro nível você sabe os códigos de 3 truques da lista de truques de artificer. Conforme avança os níveis, você pode 
                        aprender mais truques como mostrado na tabela de Engenheiro Ki-Tech. A partir do nível 10, você pode escolher entre os truques da lista de truques de mago também.
                        <br><b>Preparando e Conjurando Magias.</b> No primeiro nível você pode preparar o código de um número de magias da lista de magias de artificer igual ao seu modificador 
                        de inteligência + seu bônus de proficiência. Você pode ter um número de códigos anotados igual ao seu nível de engenheiro ki-tech + seu bônus de proficiência. Por 
                        exemplo, se você é um engenheiro ki-tech de nível 5 com 18 de inteligência, você pode ter anotados os códigos de 7 magias e ter até 6 delas preparadas. Você pode trocar 
                        um dos códigos que tem preparado por outra magia da lista de magias de artificer ao final de um descanso longo. A partir do 10° nível você pode escolher entre as magias 
                        da lista de magias de mago também.
                        <br><b>Habilidade de Conjuração.</b> Inteligência é sua habilidade de conjuração para suas magias; sua compreensão da teoria por trás da magia permite que você manipule 
                        essas magias com habilidade superior. Você usa sua Inteligência sempre que uma magiase referir à sua habilidade de conjuração. Além disso, você utiliza seu modificador 
                        de Inteligência ao definir a CD de resistência para uma magia que você conjura e ao fazer uma rolagem de ataque com ela.
                        <br><b>Conjuração de Ritual.</b> Você pode conjurar magias como ritual se elas tiverem a tag indicando a possibilidade.
                        <br><br><b>Salvaguarda de Magia = 8 + seu bônus de proficiência + seu modificador de inteligência</b>
                        <br><b>Modificador de Ataque Mágico = seu bônus de proficiência + seu modificador de inteligência</b>`
                    },
                    {
                        nivel: 1,
                        titulo: "Construção Espiritual",
                        descricao: `Você aprendeu como infundir um toque de energia ki em objetos mundanos. Para usar essa habilidade, você deve ter ferramentas de ladrão ou ferramentas de 
                        artesão em mãos. Em seguida, como uma ação, você toca um objeto Pequeno não mágico e concede a ele uma das seguintes propriedades ki à sua escolha:
                        
                        <br><br>• O objeto emite uma luz brilhante em um raio de 5 pés e luz fraca por mais 5 pés.
                        <br>• Sempre que tocado por uma criatura, o objeto emite uma mensagem gravada que pode ser ouvida a até 10 pés de distância. Você profere a mensagem quando concede essa 
                        propriedade ao objeto, e a gravação não pode ter mais de 6 segundos de duração.
                        <br>• O objeto emite continuamente a sua escolha de um odor ou um som não verbal (vento, ondas, cantos de pássaros e coisas do tipo). O fenômeno escolhido pode ser 
                        percebido a até 10 pés de distância.
                        <br>• Um efeito visual estático aparece em uma das superfícies do objeto. Esse efeito pode ser uma imagem, até 25 palavras de texto, linhas e formas, ou uma mistura 
                        desses elementos, como você preferir.
                        <br><br>A propriedade escolhida dura indefinidamente. Como uma ação, você pode tocar o objeto e encerrar a propriedade antecipadamente.
                        <br>Você pode infundir ki em vários objetos, tocando um objeto cada vez que usar essa característica, embora um único objeto possa ter apenas uma propriedade por vez. O 
                        número máximo de objetos que você pode afetar com essa característica de uma vez é igual ao seu modificador de Inteligência (mínimo de um objeto). Se você tentar exceder 
                        seu limite máximo, a propriedade mais antiga é encerrada imediatamente e, em seguida, a nova propriedade se aplica.
                        `
                    },
                    {
                        nivel: 3,
                        titulo: "Núcleo de Pesquisa",
                        descricao: `Você direciona seus estudos para uma área especifica do ki-tech que vão te dar benefícios em níveis específicos dessa classe. Os núcleos de pesquisa 
                        Robótica e Artilharia estão detalhados no final da descrição dessa classe. Seu núvleo concede a você características no 3° nível e novamente no 5°, 9°, 13° e 17° nível.`
                    },
                    {
                        nivel: 3,
                        titulo: "Artesão de Ferramentas",
                        descricao: `Você aprendeu a criar exatamente a ferramenta de que precisa: com as ferramentas de ladrão ou as ferramentas de artesão em mãos, você pode criar magicamente 
                        um conjunto de ferramentas à sua escolha em um espaço desocupado dentro de 5 pés de você. Essa criação requer 1 hora de trabalho ininterrupto, que pode coincidir com 
                        um descanso curto ou longo. Como são produto de ki, as ferramentas são mágicas e você pode adicionar seu bônus de proficiência ao resultado de rolagens de ferramentas 
                        que não tenha proficiência. Se você já tiver proficiência, ela se torna especialidade. As ferramentas perdem a função quando você usa essa característica novamente.`
                    },
                    {
                        nivel: 4,
                        titulo: "Incremento de Habilidade",
                        descricao: `Você ganha o talento Incremento de Habilidade (veja a página Talentos) ou outro talento de sua escolha para o qual você se qualifica. Você ganha essa 
                        característica novamente nos níveis 8, 12, 16 e 19.`
                    },
                    {
                        nivel: 6,
                        titulo: "Codificação de Ki",
                        descricao: `Você aprende a adaptar o seu foco arcano para abranger uma gama maior de utilidades. Você ganha um dos seguintes benefícios:
                        <br>• Seus itens infundidos são mais resistentes. Qualquer jogada que tente te desarmar ou destruir um item infundido é feita em desvantagem.
                        <br>• O seu foco influencia magicamente suas ferramentas enquanto você as utiliza. Se você falhar em um teste de habilidade de ferramenta por 5 ou mais, você pode refazer a 
                        jogada e ficar com o novo resultado.`
                    },
                    {
                        nivel: 7,
                        titulo: "Marca Registrada",
                        descricao: `Você pode aprimorar seus itens infundidos com uma Marca Registrada única. Essa marca confere benefícios adicionais ao item, aumentando suas capacidades e poder.
                        <br>Ao infundir um item, você pode escolher uma Marca Registrada para ele. Você pode ter um item com Marca Registrada por vez. Você pode trocar o item ao fim de um descanso 
                        longo. Abaixo estão algumas sugestões de melhorias:
                        <br>• Aumento de Dano: O item recebe um bônus de dano de força adicional igual ao seu modificador de inteligência quando usado em ataques.
                        <br>• Resistência a Danos: O item confere resistência a um tipo específico de dano.
                        <br>• Aprimoramento de Atributos: O item aumenta por 1d10 dias um atributo do usuário em 1 ponto.
                        <br>• Resiliência: O item é especialmente difícil de ser destruído. O item não é afetado por efeitos de dano em área e tem uma CA de 25 e 100 pontos de vida.
                        <br>• Proteção Adicional: O item oferece um aumento de 1 na CA do usuário por 1d10 dias.`
                    },
                    {
                        nivel: 10,
                        titulo: "Infusor Nato",
                        descricao: `Você adquire acesso às infusões de poder médio da tabela de infusões. Além disso, você também pode escolher suas magias da lista de magias de mago.`
                    },
                    {
                        nivel: 11,
                        titulo: "Conjuração Sincronizada",
                        descricao: `Agora você pode armazenar uma magia em um objeto. Ao terminar um descanso longo, você pode tocar em uma arma simples ou marcial ou em um item que possa ser usado 
                        como foco de conjuração, e armazenar uma magia nele, escolhendo uma magia de 1º ou 2º nível da lista de magias do artífice que requer 1 ação para ser conjurada (não é 
                        necessário tê-la preparada).
                        <br>Enquanto estiver segurando o objeto, uma criatura pode usar uma ação para produzir o efeito da magia a partir dele, utilizando o modificador de habilidade de conjuração. 
                        Se a magia exigir concentração, a criatura deve se concentrar. A magia permanece no objeto até que tenha sido utilizada um número de vezes igual ao dobro do seu modificador 
                        de Inteligência (mínimo de duas vezes) ou até que você utilize novamente essa característica para armazenar uma magia em um objeto.`
                    },
                    {
                        nivel: 14,
                        titulo: "Gênio da Infusão",
                        descricao: `Você tem acesso às infusões de poder alta da tabela de infusões.`
                    },
                    {
                        nivel: 20,
                        titulo: "Alma Tecnológica",
                        descricao: `Você desenvolve uma conexão mística com a sua criação, a qual você pode se valer para proteção:
                        <br>• Você ganha um bônus de +1 em todos os testes de resistência para cada item mágico ao qual você está atualmente sintonizado.
                        <br>• Se você for reduzido a 0 pontos de vida, mas não for morto imediatamente, você pode usar sua reação para encerrar uma de suas infusões, fazendo com que você caia 
                        para 1 ponto de vida em vez de 0.`
                    }
                ]
            },
            {
                tipo: "tabelaExtra",
                titulo: "Infusões de Ki",
                descricao: "O Engenheiro Ki-Tech pode aprender as seguintes infusões de ki. O nível de poder das infusões aumenta nos níveis 10 e 14.",
                colunas: ["Nível de Poder", "Infusões"],
                linhas: [
                    { 
                        niveldepoder: "Básico", 
                        infusoes: "Reforço Vital, Arma Encantada, Escudo Arcanizado" 
                    },
                    { 
                        niveldepoder: "Médio", 
                        infusoes: "Luva Celerizada, Chip Elemental, Ectoarmadura" 
                    },
                    { 
                        niveldepoder: "Alto", 
                        infusoes: "Luva Sônica, Botas Propulsoras, Lâmina Oculta de Ki" 
                    }
                ],
                detalhes: [
                    {
                        id: "infusao-1",
                        titulo: "Reforço Vital",
                        requisito: "Infusão de Poder Básico (alguma peça de roupa)",
                        descricao: `
                            Você infunde uma peça de roupa com ki, fortalecendo-a e concedendo benefícios adicionais ao usuário. A peça de roupa escolhida deve ser feita de tecido ou material 
                            similar.
                            <br>Enquanto estiver usando essa peça de roupa infundida, o usuário ganha dois dos seguintes benefícios:
                            <br>
                            <br>• Resistência Vital: O usuário recebe um bônus de +1 na classe de armadura quando estiver usando essa peça de roupa.
                            <br>• Regeneração Energética: O usuário recupera 1 ponto de ki ou spell slot adicional ao final de cada descanso curto.
                            <br>• Proteção do Ki: O usuário tem imunidade a dano de veneno e vantagem em testes de resistência contra efeitos que causem exaustão ou dano por envenenamento.
                            <br>
                            <br>Esses benefícios permanecem ativos enquanto o usuário estiver vestindo a peça de roupa infundida. Você pode infundir múltiplas peças de roupa com essa infusão, 
                            mas cada uma delas requer uma ação separada de infusão. Se você aplicar essa infusão em uma nova peça de roupa, a anterior perde seus efeitos.
                        `
                    },
                    {
                        id: "infusao-2", 
                        titulo: "Arma Encantada",
                        requisito: "Infusão de Poder Básico (alguma arma simples ou marcial)",
                        descricao: `
                            Você infunde uma arma simples ou marcial com ki, conferindo-lhe um poder místico adicional. A arma escolhida deve ser feita de metal ou material adequado para 
                            receber essa infusão.
                            <br>Enquanto estiver usando essa arma infundida, o usuário ganha dois dos seguintes benefícios:
                            <br>
                            <br>• Arma mágica: A arma ganha um aumento de +1 no acerto e no dano e é considerada uma arma mágica.
                            <br>• Precisão Aprimorada: O usuário tem vantagem em um ataque com essa arma uma vez por descanso curto.
                            <br>• Golpe Desestabilizador: Quando o usuário acerta um ataque com essa arma, ele pode escolher perturbar o ki do alvo. Se optar por usar esse recurso, o alvo deve 
                            fazer um teste de resistência de Constituição (CD igual a 8 + modificador de proficiência + modificador de Inteligência) para evitar ter sua energia espiritual 
                            drenada. O alvo perde 1d4 pontos de ki ou 1d6 spell slots (contando a partir do nível mais baixo disponível). Esse recurso pode ser utilizado uma vez por descanso 
                            longo.
                            <br><br>Esses benefícios permanecem ativos enquanto o usuário estiver empunhando a arma infundida. Se você aplicar essa infusão em uma nova arma, a anterior perde 
                            seus efeitos.
                        `
                    },
                    {
                        id: "infusao-3", 
                        titulo: "Escudo Arcanizado",
                        requisito: "Infusão de Poder Básico (um escudo)",
                        descricao: `
                            Você infunde um escudo com ki, conferindo-lhe um poder místico adicional. O escudo deve ser de metal ou madeira para receber a infusão.
                            <br>
                            <br>Enquanto estiver utilizando o escudo, o usuário ganha +1 em sua CA e pode adicionar dois recursos especiais ao escudo. O usuário pode utilizar um recurso especial a cada descanso curto
                            <br>
                            <br>• Escudo Arcano: Como uma reação, o usuário pode conjurar a magia escudo arcano caso esteja com o escudo em mãos.
                            <br>• Luz Purificadora: Role um d10 e some o seu modificador de inteligência e seu bônus de proficiência. Durante um número de minutos igual ao resultado, o escudo emite luz plena em um raio de 60 ft e penumbra em um raio de 30 ft adicionais. Você pode ativar e desativar a luz do escudo como uma ação bônus e o tempo da habilidade só é descontado enquanto ela estiver ativa. Além disso, criaturas do tipo fiend, morto-vivo ou aberração não conseguem se aproximar a uma distância menor que 5 ft do escudo enquanto a luz estiver ativada.
                        `
                    },
                    {
                        id: "infusao-4", 
                        titulo: "Luva Cerelizada",
                        requisito: "Infusão de Poder Médio (uma luva)",
                        descricao: `
                            Você infunde uma luva com ki, conferindo-lhe uma agilidade mística que fica disponível a quem utilizar. A luva pode ser de qualquer material, mas ao realizar a 
                            infusão você precisa anexar fios de metal.
                            <br>Enquanto estiver usando essas luvas infundidas, o usuário ganha dois dos seguintes benefícios:
                            <br>
                            <br>• Aumento de Destreza: O usuário recebe um bônus de +2 em testes de resistência e de habilidade de Destreza (Acrobacia e Furtividade).
                            <br>• Ataque Adicional: O usuário pode fazer um ataque corpo-a-corpo extra como uma ação bônus no seu turno com a mão que estiver utilizando a luva.
                            <br>• Movimento Acelerado: O usuário ganha um aumento de velocidade de +10 pés enquanto estiver usando as luvas infundidas.
                            <br>
                            <br>Esses benefícios permanecem ativos enquanto o usuário estiver usando as luvas infundidas. Se você aplicar essa infusão em um novo par de luvas, o anterior 
                            perde seus efeitos.
                        `
                    },
                    {
                        id: "infusao-5", 
                        titulo: "Chip Elemental",
                        requisito: "Infusão de Poder Médio (um pedaço minúsculo de metal)",
                        descricao: `
                            Você infunde um pequeno pedaço de metal com ki, permitindo que ele acesse a energia elemental de Tholus. Para que o chip seja utilizado, ele deve ser inserido sob 
                            a pele de uma criatura voluntária. Enquanto estiver com os chips elementais inseridos, o usuário ganha um dos seguintes benefícios:
                            <br>
                            <br>•Resistência Elemental: O usuário escolhe dois tipo de dano elemental (fogo, gelo, eletricidade, ácido, trovão, veneno, radiante ou necrótico). Ele ganha 
                            resistência a um desses tipo de dano e imunidade ao outro.
                            <br>•Ataque Elemental: O usuário pode usar uma ação bônus para liberar a energia elemental dos chips ao acertar um ataque corpo-a-corpo, adicionando dano elemental
                            igual a 3d4. Para determinar o tipo de dano, role 1d8 (1:fogo, 2:gelo, 3:eletricidade, 4:ácido, 5:trovão ou 6:veneno, 7:radiante, 8:necrótico).
                            <br>
                            <br>Esses benefícios permanecem ativos enquanto os chips elementais estiverem inseridos na pele do usuário. A infusão permite a aplicação de até três chips elementais 
                            em diferentes áreas do corpo. Cada chip requer uma ação separada de infusão.
                        `
                    },
                    {
                        id: "infusao-6", 
                        titulo: "Ectoarmadura",
                        requisito: "Infusão de Poder Médio (uma peça de armadura como um capacete ou um torso)",
                        descricao: `
                            Você infunde uma peça de armadura com ki, aumentando a durabilidade e resistência dela, bem como lhe confere atributos especiais.
                            <br>Ao ativar a infusão, o usuário é envolto em um campo de energia ectoplásmica que forma uma armadura ao seu redor. A armadura fornece uma proteção adicional ao /
                            usuário, aumentando sua classe de armadura em +2. Além disso, a armadura também concede resistência a um tipo de dano básico (cortante, perfurante ou concussivo) 
                            até o fim da duração da infusão.
                        `
                    },
                    {
                        id: "infusao-7", 
                        titulo: "Luva Sônica",
                        requisito: "Infusão de Poder Alto (uma luva)",
                        descricao: `
                            Você infunde uma luva com ki, conferindo acesso a um recurso exclusivo a ela. A luva pode ser de qualquer material, mas ao realizar a infusão você deve anexar uma 
                            placa de metal ou madeira a sua palma.
                            <br>Enquanto estiver utilizando a luva em uma mão livre, o usuário pode utilizar uma ação para fazer um ataque a distância contra uma criatura em até 90 ft com a 
                            luva. Os ataques feitos dessa forma são críticos se a jogada for 19 ou 20 e você pode escolher um segundo alvo em até 10 ft do alvo original em caso de crítico. O 
                            ataque usa o modificador da habilidade de conjuração e o bônus de proficiência. Em um acerto, o alvo recebe 3d10 + modificador de habilidade de conjuração de dano 
                            de força.
                        `
                    },
                    {
                        id: "infusao-8", 
                        titulo: "Botas Propulsoras",
                        requisito: "Infusão de Poder Alto (um par de botas)",
                        descricao: `
                            Você infunde um par de botas com ki, dando a eles a capacidade de impulsionar o usuário pelos ares. O par de botas deve ser de couro ou de metal para a infusão 
                            funcionar.
                            <br>Enquanto estiver usando as botas, o usuário ganha uma velocidade de vôo de 30 ft, com a capacidade de planar no mesmo lugar.
                        `
                    },
                    {
                        id: "infusao-9", 
                        titulo: "Lâmina Oculta de Ki",
                        requisito: "Infusão de Poder Alto (uma luva, uma bota ou algum outro acessório utilizado próximo aos pés ou as mãos)",
                        descricao: `
                            Você infunde uma luva, uma bota ou algum outro acessório utilizado próximo aos pés ou as mãos com ki, dando a ele a capacidade de materializar uma lâmina de ki 
                            como uma ação bônus.
                            <br>A lâmina é indetectável até ser ativada e tem um alcance de 5 ft, utilizando o modificador de habilidade de conjuração e o bônus de proficiência em rolagens de 
                            ataque. A lâmina de ki tem um dano de força de 3d10 que pode ser aumentado utilizando o ki ou energia arcana do usuário. Ao acertar um ataque, o usuário pode 
                            escolher gastar pontos de ki referentes ao número de d10 que aumentarão o dano ou escolher um nível de spell slot referente ao número de d10 que o dano aumentará.
                        `
                    }
                ]
            }
        ],
        subclasses: [
            {
                id: 1,
                nome: "Robótica",
                descricao: `Engenheiros especializados no núcleo da robótica focam na criação de familiares mecânicos que lhes auxiliam em diversas tarefas.`,
                caracteristicas: [
                    {
                        nivel: 3,
                        titulo: "Auxiliar Robótico",
                        descricao: `Ao selecionar esse núcleo de pesquisa, você ganha a capacidade de construir um constructo familiar a partir de peças metálicas ou de madeira. Ao se 
                        concentrar por 1 hora e utilizar 100 peças de ouro em materiais, você gera um auxiliar robótico que te obedece da melhor maneira que pode. O auxiliar não fala, 
                        porém compreende os mesmos idiomas que você. O auxiliar fica ativo até você construir outro ou desativa-lo temporariamente como uma ação bônus. Se o auxiliar for 
                        reduzido a 0 oontos de vida você pode reconstruí-lo por 20 peças de ouro de equipamentos caso consiga reunir as peças do antigo.`,
                        fichaCriatura: {
                            nome: "Auxiliar Robótico",
                            descricaoCurta: "Constructo minúsculo, sem alinhamento.",
                            ca: "15 (armadura natural)",
                            pv: "12 (3d4 + 3)",
                            deslocamento: "40 ft., 40 ft. de vôo (se forem utilizadas 10 peças de ouro adicionais na construção)",
                            atributos: {
                                for: "12 (+1)",
                                des: "14 (+2)",
                                con: "12 (+1)",
                                int: "10 (+0)",
                                sab: "10 (+0)",
                                car: "6 (-2)"
                            },
                            imunidades: "Encantado, amedrontado, cego, surdo",
                            resistencia: "Veneno",
                            sentidos: "Visão no escuro 60 ft",
                            idiomas: "Compreende as línguas do construtor",
                            descricaoDetalhada: `
                            <b>Construção Resistente.</b> O auxiliar tem vantagem em testes de resistência contra veneno e resistência a dano por veneno.
                            <br><b>Auxílio Robótico.</b> O auxiliar pode utilizar a ação de Auxílio para conceder vantagem a um teste de habilidade ou ataque de um aliado a 5 pés de distância.
                            <br><b>Leitura Espiritual.</b> Quando o auxiliar ataca uma criatura, o engenheiro tem vantagem em ataques contra ela até que o auxiliar seja incapacitado. Se o 
                            auxiliar atacar uma criatura diferente antes do efeito da Leitura Espiritual acabar, a anterior é livrada dos efeitos. O engenheiro também pode gastar uma ação 
                            bônus em seu turno para ceder a vantagem a um aliado que esteja em até 15 ft de distância.
                            `,
                            acoes: [
                                {
                                    nome: "Grave Manual",
                                    descricao: `Melee Weapon Attack: +4 to hit, reach 5ft., one target. Hit 5 dano de força(1d4 + 2)`
                                },
                                {
                                    nome: "Zunido", 
                                    descricao: `Melee Weapon Attack: +4 to hit, reach 5ft., one target. Hit 1 dano de força e o alvo deve ser bem sucedido em um teste de constituição cd 10 ou 
                                    tem desvantagem em ataques por 1 turno.`
                                }
                            ]
                        }
                    },
                    {
                        nivel: 5,
                        titulo: "Peças Arcanizadas",
                        descricao: `Você ganha os seguintes benefícios:
                        <br>• Quando você conjura uma magia que cure pontos de vida, você pode direciona-la a um constructo.
                        <br>• Seu Auxiliar Robótico passa a ter seu máximo de pontos de vida definido pela fórmula 5d4+5(20).
                        <br>• O dano do ataque Grave Manual é aumentado para 3d4+2. O dano do ataque Zunido é aumentado para 5 e a cd do teste de resistência para 12.`
                    },
                    {
                        nivel: 9,
                        titulo: "Tecnologia Arcana",
                        descricao: `Você ganha os seguintes benefícios:
                        <br>• Seu auxiliar robótico ganha a capacidade de falar os mesmos idiomas que você.
                        <br>• Você pode conjurar magias a partir do seu Auxiliar.
                        <br>• A vida do seu Auxiliar passa a ser definida pela fórmula 9d4+9(36).
                        <br>• O alcance do ataque zunido é aumentado para 15 ft e a cd do teste de resistência para 14.`
                    },
                    {
                        nivel: 13,
                        titulo: "Obra Prima",
                        descricao: `Você ganha os seguintes benefícios:
                        <br>• Seu auxiliar robótico pode soltar peças para atrapalhar adversários. Com o custo de 10 pontos de vida, o Auxiliar pode conjurar silvery barbs em algum oponente 
                        no alcance da magia. O auxiliar não pode agir no turno em que usar essa reação.
                        <br>• Seu Auxiliar Robótico ganha +2 em todos os atributos.
                        <br>• A vida do seu Auxiliar Robótico passa a ser definida pela fórmula 13d4+26(65)
                        <br>• Como uma ação, você pode ordenar que o seu auxiliar se sacrifique em uma explosão. Qualquer criatura em até 15 ft do auxiliar deve ser bem sucedido em um teste 
                        de resistência de destreza cd 16. Em uma falha, criaturas sofrem 60(20d4) de dano de força. Uma criatura que for bem sucedida no teste de resistência evita o dano 
                        completamente. Ao utilizar esse traço, o seu auxiliar tem seus pontos de vida reduzido pela metade. Se a sua vida já estiver abaixo de 30, ele é reduzido a 0 pontos de
                        vida`
                    },
                    {
                        nivel: 17,
                        titulo: "Mestre da Robótica",
                        descricao: `Você ganha os seguintes benefícios:
                        <br>• Se o seu auxiliar for reduzido a 0 pontos de vida, você pode reconstruí-lo em 10 minutos sem custos adicionais.
                        <br>• Você pode direcionar dano do seu Auxiliar para você ou de você para o seu Auxiliar.
                        <br>• Quando seu auxiliar utiliza a explosão da Obra Prima, seus pontos de vida só são reduzidos a 0 caso estejam abaixo de 15.
                        <br>• O ataque grave manual é aumentado para +8 e o dano para 6d4+4. O alcance do ataque zunido é aumentado para 20 ft e a cd para 17.`
                    }
                ]
            },
            {
                id: 2,
                nome: "Artilharia",
                descricao: `Engenheiros especializados no núcleo de artilharia focam em utilizar sua energia para aprimorar armas de longo alcance.`,
                caracteristicas: [
                    {
                        nivel: 3,
                        titulo: "Projéteis Arcanos",
                        descricao: `Ao escolher esse núcleo de especialização você tem munição infinita de algum tipo de arma a distância a sua escolha. Você pode mudar a arma escolhida após 
                        um descanso longo.`
                    },
                    {
                        nivel: 5,
                        titulo: "Controle Avançado",
                        descricao: `Seu domínio da artilharia ki tech te permite repetir um acerto com arma à distância no caso de erro ou explodir o projétil em até 5 ft do alvo, forçando 
                        todas as criaturas em um raio de 10 ft a realizarem um teste de resistência de destreza contra sua cd de magia ou sofrerão o dano do ataque. Após utilizar esse traço, 
                        você precisa realizar um descanso longo antes de utiliza-lo novamente. Você pode, porém, utilizar novamente o traço utilizando um slot de magia.`
                    },
                    {
                        nivel: 9,
                        titulo: "Disparo Focado",
                        descricao: `Você pode obter vantagem em um acerto de ataque a distância caso seu deslocamento seja 0 no turno corrente.`
                    },
                    {
                        nivel: 13,
                        titulo: "Projéteis Arcanos Poderosos",
                        descricao: `Você dobra o dado de dano referente ao projétil escolhido como o seu Projétil Arcano.`
                    },
                    {
                        nivel: 17,
                        titulo: "Mestre da Artilharia",
                        descricao: `Sempre que utilizar a ação de ataque com seu Projétil Arcano você pode escolher uma segunda criatura e fazer um ataque adicional como parte da ação. Esse 
                        traço ignora a característica recarga.`
                    },
                    
                ]
            }
        ]
    },
// Guardião ID 4
    {
        id: 4,
        nome: "Guardião",
        imagemCard: "images/cards/Temporario.jpg",
        imagemVertical: "images/classes/Guardiao.jpg",
        descricaoCurta: "Descrição curta da classe",
        arte: "Ksenia Kiseleva",
        paginaartista: "https://www.artstation.com/faavesa",
        tituloDeSubclasse: "Domínio Ordenado",
        descricaoSubclasse: `Escolha o Domínio que melhor represente suas habilidades, filosofia e treino do seu Guardião: O Domínio do Corpo e o Domínio dos Segredos.`,
        secoes: [
            {
                tipo: "descricao",
                conteudo: [
                    `“Desde os primórdios do mundo, quando as sombras eram mais profundas e os perigos, incontáveis, ergueu-se uma sentinela silenciosa. São os Guardiões, protetores jurados 
                    do equilíbrio, cuja linhagem se perde na névoa do tempo. Armados com sabedoria arcana ancestral e uma coragem inabalável, eles são a barreira entre a civilização e as 
                    ameaças que buscam corromper a fundação da realidade. Suas intervenções são raras, mas tão decisivas que se tornam lendas que ecoam por eras.”`
                ],
                descricaoObjetiva: [
                    `Os Guardiões são membros de uma ordem milenar dedicada à preservação da paz e ao combate de ameaças existenciais. São mestres das artes arcanas e guerreiros disciplinados, 
                    treinados para enfrentar perigos que outros considerariam impossíveis. Seu conhecimento é acumulado e passado através de gerações, concedendo-lhes acesso a técnicas de 
                    combate, rituais poderosos e artefatos antigos. Apesar de sua história estar entrelaçada com feitos heroicos que muitas vezes são confundidos com mitos, os Guardiões 
                    permanecem vigilantes nos bastidores, agindo com precisão quando a estabilidade do mundo está em jogo. Sua presença é discreta, mas seu impacto é eterno.`
                ]
            },
            {
                tipo: "tracosPrincipais",
                titulo: "Principais Traços de classe",
                tracos: {
                    "Habilidade Primária": `Sabedoria`,
                    "Dados de Vida": "d8 por nível de Guardião",
                    "Proficiência de Salvaguarda": `Sabedoria e Carisma`,
                    "Proficiência em Habilidades": `Escolha 2: Percepção, Medicina, História, Arcanismo, Intuição, Natureza, Sobrevivência e Religião`,
                    "Proficiência com Armas": `Armas Simples`,
                    "Proficiência com Armaduras": `Armadura Leve e Escudos`,
                    "Proficiência com Ferramentas": `Kit de Herbalista`,
                    "Equipamento Inicial": `Escolha A ou B: (A) Uma arma simples, um escudo, uma armadura de couro, um tomo da Ordem, um kit de padre ou um kit de explorador e 10 GP; ou (B) 50 GP`
                }
            },
            {
                tipo: "tabelaNiveis",
                titulo: "Características do classe",
                descricao: "Como um classe, você ganha as seguintes características de classe quando atinge os níveis específicos.",
                colunas: ["Nível", "Bônus de<br>Proficiência", "Características", "Pontos de Vita", "Truques<br>Conhecidos", "Slots de Magia<br>1° 2° 3° 4° 5° 6° 7° 8° 9°"],
                linhas: [
                    { 
                        nivel: 1, 
                        bonusdebrproficiencia: "+2", 
                        caracteristicas: `Conjuração, Domínio Ordenado`,
                        pontosdevita: 1, 
                        truquesbrconhecidos: 3, 
                        slotsdemagiabr123456789: "2 - - - - - - - -" 
                    },{ 
                        nivel: 2, 
                        bonusdebrproficiencia: "+2", 
                        caracteristicas: `Ler Ki, Traço de Domínio`, 
                        pontosdevita: 3, 
                        truquesbrconhecidos: 3, 
                        slotsdemagiabr123456789: "3 - - - - - - - -" 
                    },{ 
                        nivel: 3, 
                        bonusdebrproficiencia: "+2", 
                        caracteristicas: ``,
                        pontosdevita: 3,  
                        truquesbrconhecidos: 4, 
                        slotsdemagiabr123456789: "4 2 - - - - - - -" 
                    },{ 
                        nivel: 4, 
                        bonusdebrproficiencia: "+2", 
                        caracteristicas: `Incremento de Habilidade`,
                        pontosdevita: 4,  
                        truquesbrconhecidos: 4, 
                        slotsdemagiabr123456789: "4 3 2 - - - - - -" 
                    },{ 
                        nivel: 5, 
                        bonusdebrproficiencia: "+3", 
                        caracteristicas: `Ordenar Caos`, 
                        pontosdevita: 5, 
                        truquesbrconhecidos: 5, 
                        slotsdemagiabr123456789: "4 3 3 - - - - - -" 
                    },{ 
                        nivel: 6, 
                        bonusdebrproficiencia: "+3", 
                        caracteristicas: `Barreira Harmoniosa, Traço de Domínio`, 
                        pontosdevita: 5, 
                        truquesbrconhecidos: 6, 
                        slotsdemagiabr123456789: "4 3 3 - - - - - -" 
                    },{ 
                        nivel: 7, 
                        bonusdebrproficiencia: "+3", 
                        caracteristicas: ``, 
                        pontosdevita: 6, 
                        truquesbrconhecidos: 6, 
                        slotsdemagiabr123456789: "4 3 3 1 - - - - -" 
                    },{ 
                        nivel: 8, 
                        bonusdebrproficiencia: "+3", 
                        caracteristicas: `Incremento de Habilidade, Traço de Domínio`, 
                        pontosdevita: 6,
                        truquesbrconhecidos: 6, 
                        slotsdemagiabr123456789: "4 3 3 2 - - - - -" 
                    },{ 
                        nivel: 9, 
                        bonusdebrproficiencia: "+4", 
                        caracteristicas: ``, 
                        pontosdevita: 6,
                        truquesbrconhecidos: 6, 
                        slotsdemagiabr123456789: "4 3 3 3 1 - - - -" 
                    },{ 
                        nivel: 10, 
                        bonusdebrproficiencia: "+4", 
                        caracteristicas: `Manifestação de Ordo`, 
                        pontosdevita: 7,
                        truquesbrconhecidos: 6, 
                        slotsdemagiabr123456789: "4 3 3 3 2 - - - -" 
                    },{ 
                        nivel: 11, 
                        bonusdebrproficiencia: "+4", 
                        caracteristicas: `Ordenar Caos Avançado`, 
                        pontosdevita: 7,
                        truquesbrconhecidos: 6, 
                        slotsdemagiabr123456789: "4 3 3 3 2 1 - - -" 
                    },{ 
                        nivel: 12, 
                        bonusdebrproficiencia: "+4", 
                        caracteristicas: `Incremento de Habilidade`, 
                        pontosdevita: 8,
                        truquesbrconhecidos: 7, 
                        slotsdemagiabr123456789: "4 3 3 3 2 1 - - -" 
                    },{ 
                        nivel: 13, 
                        bonusdebrproficiencia: "+5", 
                        caracteristicas: ``, 
                        pontosdevita: 8,
                        truquesbrconhecidos: 7, 
                        slotsdemagiabr123456789: "4 3 3 3 2 1 1 - -" 
                    },{ 
                        nivel: 14, 
                        bonusdebrproficiencia: "+5", 
                        caracteristicas: `Conhecimento Eterno`, 
                        pontosdevita: 9,
                        truquesbrconhecidos: 8, 
                        slotsdemagiabr123456789: "4 3 3 3 2 1 1 - -" 
                    },{ 
                        nivel: 15, 
                        bonusdebrproficiencia: "+5", 
                        caracteristicas: ``, 
                        pontosdevita: 9,
                        truquesbrconhecidos: 9, 
                        slotsdemagiabr123456789: "4 3 3 3 2 1 1 1 -" 
                    },{ 
                        nivel: 16, 
                        bonusdebrproficiencia: "+5", 
                        caracteristicas: `Incremento de Habilidade`, 
                        pontosdevita: 9,
                        truquesbrconhecidos: 10, 
                        slotsdemagiabr123456789: "4 3 3 3 3 1 1 1 -" 
                    },{ 
                        nivel: 17, 
                        bonusdebrproficiencia: "+6", 
                        caracteristicas: `Traço de Domínio`, 
                        pontosdevita: 10,
                        truquesbrconhecidos: 10, 
                        slotsdemagiabr123456789: "4 3 3 3 3 1 1 1 1" 
                    },{ 
                        nivel: 18, 
                        bonusdebrproficiencia: "+6", 
                        caracteristicas: `Manifestação Divina`, 
                        pontosdevita: 10,
                        truquesbrconhecidos: 10, 
                        slotsdemagiabr123456789: "4 3 3 3 3 1 1 1 1" 
                    },{ 
                        nivel: 19, 
                        bonusdebrproficiencia: "+6", 
                        caracteristicas: `Incremento de Habilidade`, 
                        pontosdevita: 10,
                        truquesbrconhecidos: 10, 
                        slotsdemagiabr123456789: "4 3 3 3 3 2 1 1 1" 
                    },{ 
                        nivel: 20, 
                        bonusdebrproficiencia: "+6", 
                        caracteristicas: `Ordenar Caos Perfeito`, 
                        pontosdevita: 12,
                        truquesbrconhecidos: 10, 
                        slotsdemagiabr123456789: "4 3 3 3 3 2 2 1 1" 
                    },
                ]
            },
            {
                tipo: "caracteristicasDetalhadas",
                titulo: "Características Detalhadas",
                caracteristicas: [
                    {
                        nivel: 1,
                        titulo: "Conjuração",
                        descricao: `Você consegue arcanizar elementos naturais do ambiente alinhando suas energias a bel prazer. Essa manipulação é feita em forma de magias.
                        <br><b>Truques (Magias de Nível 0).</b> No primeiro nível você conhece três truques da lista de magias de Clérigo.
                        <br><b>Preparando e Conjurando Magias.</b> No primeiro nível e também nos seguintes, você conhece um número de magias da lista de magias de clérigo igual ao seu nível 
                        de guardião + seu bônus de sabedoria.
                        <br><b>Habilidade de Conjuração.</b> Sabedoria é sua habilidade de conjuração para suas magias; sua compreensão da teoria por trás da magia permite que você manipule 
                        essas magias com habilidade superior. Você usa sua Sabedoria sempre que uma magias e referir à sua habilidade de conjuração. Além disso, você utiliza seu modificador 
                        de Sabedoria ao definir a CD de resistência para uma magia que você conjura e ao fazer uma rolagem de ataque com ela.
                        <br><b>Conjuração de Ritual.</b> Você pode conjurar magias como ritual se elas tiverem a tag indicando a possibilidade.
                        <br><br><b>Salvaguarda de Magia = 10 + seu modificador de Sabedoria + seu bônus de proficiência</b>
                        <br><b>Modificador de Ataque Mágico = seu modificador de Sabedoria + seu bônus de proficiência</b>`
                    },
                    {
                        nivel: 1,
                        titulo: "Domínio Ordenado",
                        descricao: `Os Guardiões devem escolher um “Domínio Ordenado”. Esse domínio permite que eles acessem recursos exclusivos e habilidades relacionadas a um dos diversos 
                        domínios da Ordem dos Guardiões. Essa escolha define a especialização do Guardião, conferindo-lhes vantagens específicas de acordo com o domínio selecionado.`
                    },
                    {
                        nivel: 2,
                        titulo: "Ler Espírito",
                        descricao: `Você pode gastar uma ação bônus para se concentrar em uma criatura que você possa ver e esteja em até 60 ft e determinar se ele é capaz de controlar a 
                        própria energia espiritual. O alvo deve ser bem sucedido em um teste de resistência de sabedoria (o alvo pode escolher falhar) com a CD dos seus recursos de vita. 
                        Caso o alvo falhe, você pode determinar quantos pontos de vita ele tem restantes.
                        <br>Em adição, a partir do 3° nível, você pode gastar 1 a 3 pontos de vita. Após fazer isso, você detecta a presença de criaturas em um raio de 60 pés multiplicado 
                        pelo número de pontos de vida gastos. Você sabe a quantidade de criaturas na área e se alguma delas é poderosa. Essa habilidade não revela a localização exata das 
                        criaturas, apenas sua direção geral.` 
                    },
                    {
                        nivel: 4,
                        titulo: "Incremento de Habilidade",
                        descricao: `Você ganha o talento Incremento de Habilidade (veja a página Talentos) ou outro talento de sua escolha para o qual você se qualifica. Você ganha essa 
                        característica novamente nos níveis 8, 12, 16 e 19.`
                    },
                    {
                        nivel: 5,
                        titulo: "Ordenar Caos",
                        descricao: `Você dominou a habilidade de controlar e canalizar a energia caótica ao seu redor, trazendo ordem e estabilidade para o caos. Quando você usa a habilidade 
                        “Ordenar o Caos”, você é capaz de gastar 2 pontos de ki para direcionar o fluxo de energia caótica em uma área específica e restaurar o equilíbrio.
                        <br>Ao ativar “Ordenar o Caos”, você cria uma zona de estabilidade ao seu redor, com um raio de 30 pés. Durante a duração da habilidade, que dura 1 minuto, os efeitos 
                        caóticos e imprevisíveis são suprimidos nessa área. Isso significa que testes de resistência contra efeitos que causem desvantagem a aliados ou vantagem a oponentes são 
                        rolados em vantagem ou desvantagem respectivamente.
                        <br>Além disso, aliados dentro da área da habilidade recebem um bônus de 1d4 em todos os testes de resistência e podem rolar novamente caso uma rolagem de d20 resulte 
                        em 5 ou menos.`
                    },
                    {
                        nivel: 6,
                        titulo: "Barreira Harmoniosa",
                        descricao: `Você é capaz de conjurar um escudo etéreo de energia harmoniosa para proteção. com o custo de 3 pontos de ki, você pode criar um escudo em um aliado que 
                        concede mais 2 pontos de ca e resistência a um tipo de dano à sua escolha por 1 minuto. O escudo também proporciona imunidade a condições negativas relacionadas à 
                        energia correspondente ao tipo de dano escolhido. Você pode utilizar esse traço um número de vezes igual ao seu bônus de proficiência. Se esse traço estiver ativo e 
                        você utiliza-lo novamente, o aliado beneficiado anteriormente perde o efeito. Você recarrega os usos ao fim de um descanso longo.`
                    },
                    {
                        nivel: 10,
                        titulo: "Manifestação de Ordo",
                        descricao: `Sua ligação com o plano da ordem te permite manipular as probabilidades. Se você rolar um 1 em um d20, você pode refazer a jogada como uma reação e ficar 
                        com o novo resultado. Se a nova jogada resultar em um sucesso, você pode conceder vantagem à um aliado em até 30 ft de distância em sua próxima jogada de ataque ou 
                        perícia.`
                    },
                    {
                        nivel: 11,
                        titulo: "Ordenar Caos Avançado",
                        descricao: `Ao utilizar o Ordenar Caos,o alcance da sua zona de estabilidade aumenta para 40 ft. Além disso, criaturas do tipo morto-vivo, fiend, ou aberração têm 
                        desvantagem em ataques contra você e não podem direcionar magias ou efeitos mágicos de alcance toque ou uma criatura no alcance contra você enquanto a aura estiver 
                        ativa.`
                    },
                    {
                        nivel: 14,
                        titulo: "Conhecimento Eterno",
                        descricao: `Você ganha acesso aos segredos da Ordem dos Guardiões. Ao realizar um descanso curto, você repara metade do máximo de espaços de magia de cada nível que 
                        tiver disponível, arredondado para baixo (mín. 0). Além disso, você pode escolher uma magia de nível 3 ou menos para conjurar sem utilizar espaços de magia.`
                    },
                    {
                        nivel: 18,
                        titulo: "Manifestação Divina",
                        descricao: `Você estabelece uma conexão intensa e rápida com sua divindade. Como uma ação, você pode escolher até 5 aliados que estejam até 40 ft de você. Some os 
                        pontos de vida de todas as criaturas e divida pelo número de criaturas afetadas. Se uma criatura atingir o máximo de pontos de vida com esse efeito, você pode 
                        redirecionar os pontos de vida que ultrapassem o máximo para outro aliado afetado. Imediatamente depois, como uma ação bônus, você pode curar uma criatura afetada em 
                        4d8+ seu bônus de Sabedoria.`
                    },
                    {
                        nivel: 20,
                        titulo: "Ordenar Caos Perfeito",
                        descricao: `No 20° nível você sempre está com o traço Ordenar Caos ativo.`
                    }
                ]
            }
        ],
        subclasses: [
            {
                id: 1,
                nome: "Domínio do Corpo",
                descricao: `O “Domínio do Corpo” é um setor especializado da Ordem dos Guardiões que se dedica ao aprimoramento e regeneração do corpo físico. Seus membros são especialistas 
                em técnicas de cura, resistência e fortalecimento corporal. Eles dominam poderosas habilidades de regeneração, aumentando sua durabilidade e capacidade de suportar ferimentos 
                graves. Além disso, são capazes de fortalecer seus ataques físicos e se adaptar a diferentes situações de combate. O Domínio do Corpo valoriza a disciplina física e a maestria 
                sobre o corpo.`,
                caracteristicas: [
                    {
                        nivel: 1,
                        titulo: "Toque Curativo",
                        descricao: `Os guardiões do Domínio do Corpo possuem um talento inato para a cura. Eles são capazes de canalizar energia vital através de suas mãos, permitindo-lhes
                        realizar toques curativos que aceleram a regeneração de tecidos danificados. Mesmo no nível mais básico, eles podem proporcionar alívio e cura para pequenos ferimentos 
                        e lesões. Com o custo de 1 ponto de ki, você pode conjurar a magia “curar ferimentos”, adicionando o seu bônus de proficiência na cura. Você pode gastar pontos de ki 
                        adicionais para conjurar a magia em níveis superiores.`
                    },
                    {
                        nivel: 2,
                        titulo: "Forma Implacável",
                        descricao: `Os guardiões do Domínio do Corpo desenvolvem uma habilidade excepcional em resistir a danos físicos, permitindo-lhes suportar ferimentos mais graves e 
                        prolongar sua capacidade de luta. Você tem vantagem em testes de resistência contra a morte e ganha resistência a um tipo de dano a sua escolha. Você pode alterar o 
                        tipo de dano ao qual é resistente se passar 1 hora em meditação com esse foco.`
                    }
                    ,
                    {
                        nivel: 6,
                        titulo: "Toque Curativo Aprimorado",
                        descricao: `Sua habilidade de curar com o ki chega a níveis impressionantes. Quando utilizar o Toque Curativo, você pode se mover até 10 ft como uma reação e utilizar o 
                        traço em uma criatura adicional. Você não gasta pontos de ki para utilizar o traço dessa forma e o movimento é descontado da sua velocidade.`
                    }
                    ,
                    {
                        nivel: 8,
                        titulo: "Mãos Divinas",
                        descricao: `Você pode manipular as probabilidades da arcanização de sua cura. Sempre que rolar um 1 em um dado de cura quando utilizando o traço Toque Curativo, você 
                        pode rolar novamente e ficar com o novo resultado.`
                    }
                    ,
                    {
                        nivel: 17,
                        titulo: "Agente Celeste",
                        descricao: `Suas habilidades de cura se tornam imparáveis. Você conjura curar ferimentos com dois níveis de espaço de magia por ponto de ki gasto e tem a cura 
                        maximizada se você for um dos alvos. Além disso, o traço de Mãos Divinas vale para qualquer magia de cura que você conjure.`
                    }
                ]
            },
            {
                id: 2,
                nome: "Domínio dos Segredos",
                descricao: `Guardiões do domínio dos segredos são treinados em técnicas de investigação e obtenção de conhecimento que por algum motivo seja mantido oculto. O serviço desse 
                domínio é essencial para que a Ordem possa ter uma noção mais próxima a realidade dos problemas de Tholus.`,
                caracteristicas: [
                    {
                        nivel: 1,
                        titulo: "Espirito Enganador",
                        descricao: `Você aprende o truque ilusão menor. Esse truque não conta no seu máximo de truques conhecidos. Além disso, você pode gastar 1 ponto de ki para obter 
                        vantagem em testes de percepção ou investigação, os quais você utiliza o modificador de sabedoria.`
                    },
                    {
                        nivel: 2,
                        titulo: "Tráfico de Influência",
                        descricao: `Você tem vantagem em testes de persuasão para obter informações e utiliza o seu modificador de sabedoria nessas jogadas ao invés do de carisma. Além disso, 
                        você pode gastar 1 ponto de ki para se concentrar por 10 minutos e determinar se aconteceram eventos significativos de natureza política, violenta ou histórica em uma 
                        área de 100 ft ao redor de você.`
                    },
                    {
                        nivel: 6,
                        titulo: " Engano Arcano",
                        descricao: `Seu uso do Espírito Enganador é aprimorado. Testes de investigação para determinar se suas ilusões são reais são feitos em desvantagem. Além disso, você 
                        aprende a magia ilusão maior e pode conjura-la com 3 pontos de ki. Essa magia não conta no seu máximo de magias conhecidas.`
                    },
                    {
                        nivel: 8,
                        titulo: "Ilusão Materializada",
                        descricao: `Suas ilusões são tão reais que geram efeitos hipnóticos em quem as observa. Suas ilusões passam inspeção física mesmo que seja dito no texto da magia que não.`
                    },
                    {
                        nivel: 17,
                        titulo: "Domínio Ilusório",
                        descricao: `Você aprende a magia miragem arcana e pode conjurar ela uma vez por descanso longo sem gastar slotes de magia. Essa magia não conta no seu máximo de magias 
                        conhecidas.`
                    },
                ]
            }
        ]
    },



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
        descricaoSubclasse: ``,
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
                descricao: `Descrição da subclasse`,
                caracteristicas: [
                    {
                        nivel: 3,
                        titulo: "Característica de Nível 3",
                        descricao: `Descrição detalhada da característica de nível 3.`
                    }
                ]
            }
        ]
    },
*/
];