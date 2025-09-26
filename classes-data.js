// Banco de dados das classes com sistema flexível de tabelas
const classesData = [
    {
        id: 1,
        nome: "Guerreiro Espiritual",
        tipoTabela: "combatente-recurso", // Novo sistema
        imagemCard: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        imagemWide: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        
        // ... resto dos dados permanece igual
        
        tabelaNiveis: [
            { 
                nivel: 1, 
                proficiencia: "+2", 
                caracteristicas: "Pontos de Vita, Meditação Marcial", 
                pontosVita: 2 
            },
            // ... mais níveis
        ]
    },
    {
        id: 2,
        nome: "Arcanista do Caos",
        tipoTabela: "conjurador-completo", // Exemplo 2
        imagemCard: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        imagemWide: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        
        tabelaNiveis: [
            { 
                nivel: 1, 
                proficiencia: "+2", 
                caracteristicas: "Magia do Caos", 
                recursoClasse: 0,
                truques: 2,
                slotsMagia: [2, 0, 0, 0, 0, 0, 0, 0, 0] // slots por nível [1st, 2nd, ... 9th]
            },
            { 
                nivel: 2, 
                proficiencia: "+2", 
                caracteristicas: "Traço Caótico", 
                recursoClasse: 1,
                truques: 3,
                slotsMagia: [3, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 3,
        nome: "Feiticeiro Sombrio",
        tipoTabela: "conjurador-sem-recurso", // Exemplo 3
        imagemCard: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        imagemWide: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        
        tabelaNiveis: [
            { 
                nivel: 1, 
                proficiencia: "+2", 
                caracteristicas: "Magia das Sombras", 
                truques: 3,
                slotsMagia: [2, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        ]
    },
    {
        id: 4,
        nome: "Mestre das Lâminas",
        tipoTabela: "combatente-sem-recurso", // Exemplo 4
        imagemCard: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        imagemWide: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        
        tabelaNiveis: [
            { 
                nivel: 1, 
                proficiencia: "+2", 
                caracteristicas: "Estilo de Duas Armas" 
            }
        ]
    },
    {
        id: 5,
        nome: "Ladino Astuto",
        tipoTabela: "ladino-com-recurso", // Exemplo 5
        imagemCard: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        imagemWide: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        
        tabelaNabelaNiveis: [
            { 
                nivel: 1, 
                proficiencia: "+2", 
                caracteristicas: "Ataque Furtivo, Perícia", 
                recursoClasse: 1,
                ataqueFurtivo: "1d6"
            }
        ]
    },
    {
        id: 6,
        nome: "Ladino Ágil",
        tipoTabela: "ladino-sem-recurso", // Exemplo 6
        imagemCard: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        imagemWide: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        
        tabelaNiveis: [
            { 
                nivel: 1, 
                proficiencia: "+2", 
                caracteristicas: "Ataque Furtivo", 
                ataqueFurtivo: "1d6"
            }
        ]
    },
    {
        id: 7,
        nome: "Invocador do Pacto",
        tipoTabela: "semi-conjurador", // Exemplo 7
        imagemCard: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        imagemWide: "https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg",
        
        tabelaNiveis: [
            { 
                nivel: 1, 
                proficiencia: "+2", 
                caracteristicas: "Magia de Pacto", 
                truques: 2,
                magias: 2,
                slotsMagia: 1,
                nivelSlots: "1°",
                recursoClasse: 3
            }
        ]
    }
];