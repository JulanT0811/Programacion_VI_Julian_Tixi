"use strict";
// Ejercicio 09: Tipos personalizados, uniones, tuplas e interfaces en soporte técnico
// Alumno: Julián Oswaldo Tixi Páez

const estadoBaseServidor = { usoCpuPorcentaje: 18, memoriaRamEnUsoGb: 16 };
const idTicketNumerico = 1042;
const idTicketAlfanumerico = "TCK-RED-901";

const reporteServidor = {
    usoCpuPorcentaje: 45,
    memoriaRamEnUsoGb: 32,
    temperaturaGrados: 52
};

const usuario1 = {
    id: 1,
    nombre: "Ana Morales",
    email: "ana.morales@empresa.com"
};

const usuario2 = {
    id: 2,
    nombre: "Luis Andrade",
    email: "luis.andrade@empresa.com",
    telefonoContacto: "+593 99 123 4567"
};

console.log("Métricas del servidor:", estadoBaseServidor);
console.log("Ticket numérico:", idTicketNumerico);
console.log("Ticket alfanumérico:", idTicketAlfanumerico);
console.log("Diagnóstico completo:", reporteServidor);
console.log("Usuario solicitante 1:", usuario1);
console.log("Usuario solicitante 2:", usuario2);

const tecnicoResponsable = {
    id: 101,
    nombre: "Pedro Gómez",
    email: "pedro.gomez@soporte.com",
    cargo: "Ingeniero de Soporte Nivel 2",
    especialidad: "Infraestructura y Redes"
};

console.log("Técnico asignado:", tecnicoResponsable);
