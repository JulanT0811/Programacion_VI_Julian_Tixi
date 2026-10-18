// Ejercicio 09: Tipos personalizados, uniones, tuplas e interfaces en soporte técnico
// Alumno: Julián Oswaldo Tixi Páez

// 1. Tipos personalizados básicos y de unión
type IDTicket = string | number;
type CategoriaProblema = string;

// 2. Tupla: Ubicación física del equipo en centro de datos [Número de Rack, Unidad U]
type UbicacionServidor = [number, number];

// 3. Tipos de objetos y tipos de intersección
type MetricasHardware = {
    usoCpuPorcentaje: number;
    memoriaRamEnUsoGb: number;
};

const estadoBaseServidor: MetricasHardware = { usoCpuPorcentaje: 18, memoriaRamEnUsoGb: 16 };
const idTicketNumerico: IDTicket = 1042;
const idTicketAlfanumerico: IDTicket = "TCK-RED-901";

// Intersección de tipos (combinación de métricas con temperatura de funcionamiento)
type DiagnosticoCompleto = MetricasHardware & {
    temperaturaGrados: number;
};

const reporteServidor: DiagnosticoCompleto = {
    usoCpuPorcentaje: 45,
    memoriaRamEnUsoGb: 32,
    temperaturaGrados: 52
};

// 4. Interfaces: Modelo de usuario solicitante y técnico asignado
interface UsuarioSoporte {
    readonly id: number;
    nombre: string;
    email: string;
    telefonoContacto?: string;
}

// Herencia de interfaces
interface TecnicoSoporte extends UsuarioSoporte {
    cargo: string;
    especialidad: string;
}

const usuario1: UsuarioSoporte = {
    id: 1,
    nombre: "Ana Morales",
    email: "ana.morales@empresa.com"
};

const usuario2: UsuarioSoporte = {
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

const tecnicoResponsable: TecnicoSoporte = {
    id: 101,
    nombre: "Pedro Gómez",
    email: "pedro.gomez@soporte.com",
    cargo: "Ingeniero de Soporte Nivel 2",
    especialidad: "Infraestructura y Redes"
};

console.log("Técnico asignado:", tecnicoResponsable);
