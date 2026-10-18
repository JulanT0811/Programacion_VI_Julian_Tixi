// Ejercicio 11: Programación Orientada a Objetos - Encapsulamiento en soporte técnico
// Alumno: Julián Oswaldo Tixi Páez

class TicketSoporte {
    private tiempoRestanteSlaMinutos: number = 100;

    consumirTiempoAtencion(minutosInvertidos: number): void {
        if (minutosInvertidos > 0) {
            this.tiempoRestanteSlaMinutos = Math.max(0, this.tiempoRestanteSlaMinutos - minutosInvertidos);
        }
    }

    consultarTiempoRestante(): number {
        return this.tiempoRestanteSlaMinutos;
    }
}

const ticketIncidencia = new TicketSoporte();
ticketIncidencia.consumirTiempoAtencion(50);
console.log("Tiempo de SLA restante (minutos):", ticketIncidencia.consultarTiempoRestante());
ticketIncidencia.consumirTiempoAtencion(25);
console.log("Tiempo de SLA restante (minutos):", ticketIncidencia.consultarTiempoRestante());
