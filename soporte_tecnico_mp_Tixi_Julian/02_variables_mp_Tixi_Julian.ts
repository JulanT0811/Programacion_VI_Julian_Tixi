// Ejercicio 02: Constantes, variables y tipos de datos para tickets de soporte técnico
// Alumno: Julián Oswaldo Tixi Páez

// CONSTANTES DEL SISTEMA DE TICKETS
const TIEMPO_MAXIMO_SLA_HORAS: number = 24;
const COSTO_BASE_SOPORTE: number = 35.50;
const SERVICIO_API_HELPDESK: string = "https://api.soporte-tecnico.com/v1";
const SISTEMA_ACTIVO: boolean = true;

console.log("TIEMPO_MAXIMO_SLA_HORAS: ", TIEMPO_MAXIMO_SLA_HORAS);
console.log("COSTO_BASE_SOPORTE: ", COSTO_BASE_SOPORTE);
console.log("SERVICIO_API_HELPDESK: ", SERVICIO_API_HELPDESK);
console.log("SISTEMA_ACTIVO: ", SISTEMA_ACTIVO);

// VARIABLES
// Contador de tickets atendidos
let contadorTickets: number = 0;
console.log(contadorTickets);
contadorTickets = 5;
console.log(contadorTickets);
contadorTickets++;
console.log(contadorTickets);
contadorTickets += 5;
console.log(contadorTickets);
contadorTickets = contadorTickets + 3;
console.log(contadorTickets);

let cliente: string = "Juan Pérez";
let ticketResuelto: boolean = false;
console.log(cliente);
console.log(ticketResuelto);

// Array de áreas de soporte
let departamentosSoporte: string[] = ["HARDWARE", "SOFTWARE", "CONECTIVIDAD_RED"];
console.log(departamentosSoporte);

// Tipos especiales: null y undefined
let ticketAsignado: string | null = null;
let tecnicoResponsable: string | undefined;

// BigInt para identificadores de auditoría masivos
let numeroSeguimientoGlobal: bigint = 98723982737392n;

// Tipo Symbol para identificadores únicos
let ticketToken1: symbol = Symbol("TICKET_ID_001");
console.log(ticketToken1.toString());
let ticketToken2: symbol = Symbol("TICKET_ID_001");
console.log(ticketToken2.toString());
console.log(ticketToken1 === ticketToken2);

// Objeto tipado que representa un ticket de soporte
let ticketPrincipal: {
    codigo: string;
    prioridad: number;
    tiempoEstimadoHoras: number;
    esUrgente: boolean;
} = {
    codigo: "TCK-1001",
    prioridad: 5,
    tiempoEstimadoHoras: 35,
    esUrgente: false
};

console.log(ticketPrincipal);
