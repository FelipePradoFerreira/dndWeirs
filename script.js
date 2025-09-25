// Dados estáticos (simulando um "banco de dados" básico)
const classes = [
    { nome: "Caçador Arcano", descricao: "Um híbrido de ranger e mago" },
    { nome: "Lutador Psíquico", descricao: "Combate corpo a corpo com poderes mentais" }
];

const racas = [
    { nome: "Draconato Lunar", descricao: "Descendentes de dragões da lua" },
    { nome: "Sylvanos", descricao: "Seres feitos de matéria vegetal animada" }
];

// Função para exibir os dados
function carregarDados() {
    const listaClasses = document.getElementById('lista-classes');
    const listaRacas = document.getElementById('lista-racas');
    
    classes.forEach(classe => {
        listaClasses.innerHTML += `
            <div class="item">
                <h3>${classe.nome}</h3>
                <p>${classe.descricao}</p>
            </div>
        `;
    });
    
    racas.forEach(raca => {
        listaRacas.innerHTML += `
            <div class="item">
                <h3>${raca.nome}</h3>
                <p>${raca.descricao}</p>
            </div>
        `;
    });
}

// Carrega os dados quando a página abre
document.addEventListener('DOMContentLoaded', carregarDados);