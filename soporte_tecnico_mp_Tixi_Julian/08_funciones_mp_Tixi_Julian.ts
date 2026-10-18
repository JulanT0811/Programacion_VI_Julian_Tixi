// Ejercicio 08: Funciones, parámetros, sobrecargas y closures en soporte técnico
// Alumno: Julián Oswaldo Tixi Páez

// 1. Funciones simples: Con devolución de un valor
function sumarHorasAtencion(horasNivel1: number, horasNivel2: number): number {
    return horasNivel1 + horasNivel2;
}

const totalHorasAtencion: number = sumarHorasAtencion(10, 20);
console.log(`Total de horas de atención en soporte: ${totalHorasAtencion}`);

// 2. Funciones simples: Sin devolución de valor (void)
function mostrarMesaDeAyuda(area: string): void {
    console.log(`Área de soporte técnico: ${area}`);
    const serviciosDisponibles: string[] = ["Soporte Remoto", "Mantenimiento Preventivo", "Configuración de Redes"];
    for (const servicio of serviciosDisponibles) {
        console.log(`Servicio DISPONIBLE: ${servicio}`);
    }
}

mostrarMesaDeAyuda("HelpDesk Central IT");

// 3. Funciones con parámetros opcionales
function asignarTicketTecnico(nombreTecnico: string, prioridad?: number): void {
    if (prioridad !== undefined) {
        console.log(`El técnico ${nombreTecnico} atiende ticket con prioridad nivel ${prioridad}`);
    } else {
        console.log(`El técnico ${nombreTecnico} atiende ticket con prioridad estándar`);
    }
}

asignarTicketTecnico("Carlos Mendoza", 5);
asignarTicketTecnico("María Gómez");

// 4. Funciones con parámetros por defecto
function registrarIncidencia(categoria: string, nivelSla: number = 1): void {
    console.log(`Incidencia registrada en ${categoria} con SLA de nivel ${nivelSla}`);
}

registrarIncidencia("Software", 5);
registrarIncidencia("Impresoras");

// 5. Funciones flecha (Arrow functions)
function calcularTiempoRespuesta(tiempoBaseMinutos: number): number {
    return tiempoBaseMinutos * 2;
}

const calcularTiempoRespuestaFlecha = (tiempoBaseMinutos: number): number => tiempoBaseMinutos * 2;

const tiempoBase: number = 50;
const tiempoNormal: number = calcularTiempoRespuesta(tiempoBase);
console.log(`Tiempo base: ${tiempoBase} min, Tiempo crítico estimado: ${tiempoNormal} min`);

const tiempoFlecha: number = calcularTiempoRespuestaFlecha(tiempoBase);
console.log(`Tiempo base: ${tiempoBase} min, Tiempo crítico estimado (flecha): ${tiempoFlecha} min`);

// 6. Sobrecarga de funciones (Function overloads)
function formatearDatoSoporte(valor: number): string;
function formatearDatoSoporte(valor: string): string;
function formatearDatoSoporte(valor: boolean): string;

function formatearDatoSoporte(valor: number | string | boolean): string {
    if (typeof valor === "number") {
        return `$${valor.toLocaleString("es-EC", { minimumFractionDigits: 2 })}`;
    }
    if (typeof valor === "boolean") {
        return valor ? "TICKET RESUELTO" : "TICKET PENDIENTE";
    }
    return `"${valor}"`;
}

console.log(formatearDatoSoporte(1233434.5));
console.log(formatearDatoSoporte(true));
console.log(formatearDatoSoporte("Falla en switch de piso 3"));

// 7. Closures: Contador de tickets procesados
function crearContadorTickets(inicio: number = 0) {
    let cuenta: number = inicio;
    return {
        incrementar: (): number => ++cuenta,
        decrementar: (): number => --cuenta,
        valor: (): number => cuenta,
        resetear: (): void => { cuenta = inicio; }
    };
}

const contadorTecnico1 = crearContadorTickets();
const contadorTecnico2 = crearContadorTickets(10);

contadorTecnico1.incrementar();
contadorTecnico1.incrementar();
contadorTecnico1.incrementar();
contadorTecnico2.incrementar();

console.log("Tickets resueltos Técnico 1:", contadorTecnico1.valor()); // 3
console.log("Tickets resueltos Técnico 2:", contadorTecnico2.valor()); // 11

contadorTecnico1.resetear();
console.log("Tickets Técnico 1 tras reset:", contadorTecnico1.valor()); // 0
