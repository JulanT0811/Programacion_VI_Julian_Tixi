// Ejercicio 05: Captura de datos (inputs) para registro de tickets de soporte técnico
// Alumno: Julián Oswaldo Tixi Páez

import promptSync from 'prompt-sync';
const prompt = promptSync();

let departamento = prompt("Ingrese departamento (Hardware, Software, Redes):");
let usuariosAfectados = Number(prompt("Ingrese cantidad de usuarios afectados:"));
let nivelUrgencia = Number(prompt("Ingrese nivel de urgencia del ticket (0-100):"));

if (departamento === "Hardware" || departamento === "Software" || departamento === "Redes") {
    if (usuariosAfectados >= 10 && nivelUrgencia >= 80) {
        console.log(`Ticket de ${departamento}: Incidencia crítica con alto impacto corporativo.`);
    } else if (usuariosAfectados < 10 && nivelUrgencia >= 80) {
        console.log(`Ticket de ${departamento}: Incidencia urgente de atención prioritaria para usuario individual.`);
    } else if (usuariosAfectados >= 10 && nivelUrgencia < 80) {
        console.log(`Ticket de ${departamento}: Incidencia de impacto masivo pero con nivel de urgencia moderado.`);
    } else {
        console.log(`Ticket de ${departamento}: Incidencia rutinaria con baja urgencia e impacto.`);
    }
} else {
    console.log("Departamento o categoría no válida en el sistema de tickets.");
}