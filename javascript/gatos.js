import PromptSync from "prompt-sync";
const prompt = PromptSync();

let gatos = [];

function cadastrarGatos() {
    let qntdGatos = prompt('Quantos gatos você possui: ');
    let numeroGatos = parseInt(qntdGatos);
    
    for (let i = 0; i < numeroGatos; i++) {
        gatos[i] = prompt(`Qual a idade do gatinho ${i + 1}: `);
    }

    gatos.forEach((gato, index) => {
        console.log(`Gato ${index + 1}: ${gato}`);
    })    
}

cadastrarGatos();