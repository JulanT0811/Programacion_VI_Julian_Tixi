// Ejercicio 10: Programación Orientada a Objetos - Clases y métodos en soporte técnico
// Alumno: Julián Oswaldo Tixi Páez

class TecnicoSoporte {
    public nombre: string;
    public nivelHabilidad: number;
    public ticketsAtendidos: number;

    constructor(
        nombre: string,
        nivelHabilidad: number,
        ticketsAtendidos: number
    ) {
        this.nombre = nombre;
        this.nivelHabilidad = nivelHabilidad;
        this.ticketsAtendidos = ticketsAtendidos;
    }

    resolverIncidencia(): void {
        this.ticketsAtendidos++;
        console.log(`${this.nombre} ha resuelto un ticket técnico con éxito. Total atendidos: ${this.ticketsAtendidos}`);
    }

    capacitarse(): void {
        this.nivelHabilidad += 10;
        console.log(`${this.nombre} ha completado una certificación técnica. Nuevo nivel de habilidad: ${this.nivelHabilidad}`);
    }
}

const tecnico1 = new TecnicoSoporte("Carlos Mendoza", 80, 100);
const tecnico2 = new TecnicoSoporte("Sofía Paredes", 90, 100);

tecnico1.resolverIncidencia();
tecnico2.capacitarse();
