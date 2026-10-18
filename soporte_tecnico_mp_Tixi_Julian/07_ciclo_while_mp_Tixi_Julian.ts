// Ejercicio 07: Ciclo while y do-while aplicados al sistema de soporte técnico
// Alumno: Julián Oswaldo Tixi Páez

// 1. Ciclo while: Aumento de memoria asignada al servidor de soporte técnico
let memoriaServidor: number = 1024;
let memoriaServidorMaxima: number = 2048;

while (memoriaServidor < memoriaServidorMaxima) {
    console.log("Memoria asignada al servidor de soporte (MB): ", memoriaServidor);
    memoriaServidor += 256;
}

// 2. Ciclo while: Niveles progresivos de diagnóstico y escalamiento de un ticket
let nivelDiagnostico: number = 1;

while (nivelDiagnostico <= 10) {
    console.log("Nivel de diagnóstico y escalamiento del ticket: ", nivelDiagnostico);
    nivelDiagnostico++;
}

// 3. Ciclo while: Intentos de conexión y ping a un equipo cliente reportado
let intentoPing: number = 0;
let respuestasExitosas: number = 0;

while (intentoPing < 10) {
    intentoPing++;
    let respuestaRed: boolean = Math.random() < 0.5;
    if (respuestaRed) {
        respuestasExitosas++;
        console.log(`Intento de ping ${intentoPing}: ¡Respuesta exitosa del equipo cliente!, Total exitosas: ${respuestasExitosas}`);
    } else {
        console.log(`Intento de ping ${intentoPing}: Paquete perdido / Sin respuesta. Total exitosas: ${respuestasExitosas}`);
    }
}

// 4. Ciclo do-while: Rondas de mantenimiento preventivo a equipos del área
let rondasMantenimiento: number = 0;
do {
    rondasMantenimiento++;
    console.log(`Ronda de mantenimiento preventivo número: ${rondasMantenimiento}`);
} while (rondasMantenimiento < 5);

// 5. Procesamiento de tickets en cola con while, break y continue
interface TicketSoporte {
    codigo: string;
    categoria: string;
    tiempoEstimadoMinutos: number;
}

const ticketsCola: TicketSoporte[] = [
    { codigo: "TCK-101", categoria: "Hardware", tiempoEstimadoMinutos: 1800 },
    { codigo: "TCK-102", categoria: "Hardware", tiempoEstimadoMinutos: 1200 },
    { codigo: "TCK-103", categoria: "Software", tiempoEstimadoMinutos: 900 },
    { codigo: "TCK-104", categoria: "Redes", tiempoEstimadoMinutos: 800 }
];

let indice: number = 0;
while (indice < ticketsCola.length) {
    const ticket = ticketsCola[indice];
    if (ticket?.categoria === "Hardware") {
        console.log(`Ticket: ${ticket.codigo}, Categoría: ${ticket.categoria}, Tiempo SLA: ${ticket.tiempoEstimadoMinutos} min (Escalado a laboratorio de hardware)`);
        indice++;
        continue;
    }

    if (ticket && ticket.tiempoEstimadoMinutos < 1000) {
        console.log(`Ticket: ${ticket.codigo}, Categoría: ${ticket.categoria}, Tiempo SLA: ${ticket.tiempoEstimadoMinutos} min (Detención por ticket de resolución urgente)`);
        break;
    }

    if (ticket) {
        console.log(`Ticket: ${ticket.codigo}, Categoría: ${ticket.categoria}, Tiempo SLA: ${ticket.tiempoEstimadoMinutos} min`);
    }
    indice++;
}
