let personaje = prompt("Ingrese personaje (Luke, Vader, Organa, Han Solo, Yoda):");
let edad = Number(prompt("Ingrese edad del personaje:"));
let fuerza = Number(prompt("Ingrese nivel de fuerza del personaje (0-100):"));

if (personaje === "Luke" || personaje === "Vader" || personaje === "Yoda") {
    if (edad >= 18 && fuerza >= 80) {
        console.log(`${personaje} es un personaje poderoso y adulto.`);
    } else if (edad < 18 && fuerza >= 80) {
        console.log(`${personaje} es un personaje poderoso pero menor de edad.`);
    } else if (edad >= 18 && fuerza < 80) {
        console.log(`${personaje} es un personaje adulto pero no muy fuerte.`);
    } else {
        console.log(`${personaje} es un personaje menor de edad y no muy fuerte.`);
    }
} else {
    console.log("Personaje desconocido.");
}