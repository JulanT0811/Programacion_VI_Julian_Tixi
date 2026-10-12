// Ejercicio 03: Condicionales y toma de decisiones para tickets de soporte técnico
// Alumno: Julián Oswaldo Tixi Páez

// Condicional simple
let tiempoEsperaHoras: number = 5;
if (tiempoEsperaHoras >= 5) {
    console.log("El ticket de soporte escala a Nivel 2 de atención");
}

// Condicionales dobles (dos caminos: if / else)
if (tiempoEsperaHoras >= 16) {
    console.log("El ticket de soporte escala a Nivel 2 de atención");
} else {
    console.log("El ticket permanece en Nivel 1 de atención");
}

// Condicionales de múltiples caminos (if / else if / else)
if (tiempoEsperaHoras >= 16) {
    console.log("El ticket escala a Nivel 3 (Soporte Especializado)");
} else if (tiempoEsperaHoras >= 8) {
    console.log("El ticket escala a Nivel 2 (Soporte Técnico Intermedio)");
} else {
    console.log("El ticket se atiende en Nivel 1 (Mesa de Ayuda Básica)");
}

// Condicionales anidados
if (tiempoEsperaHoras >= 16) {
    console.log("El ticket escala a Nivel 3 (Soporte Especializado)");
} else {
    if (tiempoEsperaHoras >= 8) {
        console.log("El ticket escala a Nivel 2 (Soporte Técnico Intermedio)");
    } else {
        console.log("El ticket se atiende en Nivel 1 (Mesa de Ayuda Básica)");
    }
}

tiempoEsperaHoras = -20;
let impactoUsuarios: number = 25;

// Condicional if con operadores lógicos AND (&&)
if (tiempoEsperaHoras >= 8 && tiempoEsperaHoras <= 16 && impactoUsuarios >= 20) {
    console.log("El ticket escala a Nivel 2 con alta prioridad");
} else if (tiempoEsperaHoras >= 16) {
    console.log("El ticket escala a Nivel 3 por tiempo crítico de SLA");
} else {
    console.log("El ticket no requiere escalamiento prioritario");
}

tiempoEsperaHoras = 5;
impactoUsuarios = 18;

// Condicional if con operadores lógicos OR (||)
if (tiempoEsperaHoras >= 8 || impactoUsuarios >= 20) {
    console.log("El ticket escala a Nivel 2 por impacto o tiempo acumulado");
} else if (tiempoEsperaHoras >= 16) {
    console.log("El ticket escala a Nivel 3 por vencimiento crítico");
} else {
    console.log("El ticket no requiere escalamiento prioritario");
}
