const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ~¬¢£¥©®±×÷§¶µ•°¼½¾‰ΩΣ∞≈≠≤≥∆∑√∫░▒▓█▌▐▀▄";
const lettersLength = letters.length;

let interval = null;

// Función que aplica el efecto glitch y cambia al nuevo texto
function applyGlitchEffect(element, entity = entities[0]) {
	let iteration = 0;
	const originalText = element.dataset.value;

	// Actualizamos el valor del texto nuevo en el dataset
	element.dataset.value = entity;
  
	// Determinamos la longitud máxima para manejar cambios de longitud
	const maxLength = Math.max(originalText.length, entity.length);
  
	clearInterval(interval);
  
	interval = setInterval(() => {
		element.innerText = Array.from({ length: maxLength }, (_, index) => {
			if (index < iteration) {
				return entity[index] || ""; // Si el nuevo texto es más corto, devolvemos vacío
			}
			return letters[Math.floor(Math.random() * lettersLength)];
		}).join("");
    
		if (iteration >= maxLength) { 
			clearInterval(interval);
		}
    
		iteration += 1 / 3; // Incremento suave
	}, 30);

	entitiesTurn = (entitiesTurn + 1) % entitiesLength;
	if (entitiesTurn === 0) {
		entities = shuffle(entities);
	}
}

const shuffle = (array) => { 
	for (let i = array.length - 1; i > 0; i--) { 
		const j = Math.floor(Math.random() * (i + 1)); 
		[array[i], array[j]] = [array[j], array[i]]; 
	} 
	return array; 
}; 

let entities = [
	"World", 
	"Life", 
	"Pioneer",
	"Creator",
	"Journeyman",
	"Dreamer",
	"Earthling",
	"Error on line 45",
	"Reality",
	"Void",
]
let entitiesTurn = 1
const entitiesLength = entities.length