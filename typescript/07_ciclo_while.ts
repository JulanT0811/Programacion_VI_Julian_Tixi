let memoriaDroide = 1024;
let memoriaDroideMaxima = 2048;

while (memoriaDroide < memoriaDroideMaxima){
    console.log("Memoria del droide: ", memoriaDroide);
    memoriaDroide += 256;
}

let nivel = 1;

while (nivel <= 10){
    console.log("Nivel del droide: ", nivel);
    nivel ++;
}

let disparoNave = 0;
let aciertoNave = 0;
while (disparoNave < 10){
    disparoNave++;
    let acierto = Math.random()< 0.5;
    if (acierto) {
        aciertoNave ++;
        console.log(`Disparo ${disparoNave}: !Acierto¡, Total de aciertos: ${aciertoNave}`)
    }else{
        console.log(`Disparo ${disparoNave}: Fallo. Total de aciertos: ${aciertoNave}`)
    }
}

let guerras = 0;
do {
    guerras++;
    console.log(`Guerra número: ${guerras}`);
}while (guerras < 5);



interface Nave {
    nombre: string;
    tipo: string;
    velocidad: number;
}

const navesEscaneadas: Nave[] = [
    { nombre: "X-Wing", tipo: "Caza estelar", velocidad: 1800 },
    { nombre: "TIE Fighter", tipo: "Caza estelar", velocidad: 1200 },
    { nombre: "Millennium Falcon", tipo: "Carguero ligero", velocidad: 900 },
    { nombre: "Star Destroyer", tipo: "Destructor estelar", velocidad: 800 }
];

let indice = 0;
while (indice < navesEscaneadas.length) {
    const nave = navesEscaneadas[indice];
    if (nave?.tipo === "Caza estelar") {
        console.log(`Nave: ${nave.nombre}, Tipo: ${nave.tipo}, Velocidad: ${nave.velocidad}`);
        indice++;
        continue;
    }

    if (nave?.velocidad < 1000) {
        console.log(`Nave: ${nave.nombre}, Tipo: ${nave.tipo}, Velocidad: ${nave.velocidad}`);
        break;
    }

    console.log(`Nave: ${nave.nombre}, Tipo: ${nave.tipo}, Velocidad: ${nave.velocidad}`)
    indice++;
}