// Ejercicio 13: Programación Orientada a Objetos - Polimorfismo en soporte técnico
// Alumno: Julián Oswaldo Tixi Páez

class AgenteSoporte {
    resolverTicket(): void {
        console.log("Resolución estándar de incidencia");
    }
}

class SoporteNivel1 extends AgenteSoporte {
    override resolverTicket(): void {
        console.log("Soporte Nivel 1: Resuelve reseteo de contraseñas y configuración de correos");
    }
}

class SoporteNivel2 extends AgenteSoporte {
    override resolverTicket(): void {
        console.log("Soporte Nivel 2: Diagnostica fallas de conectividad, controladores y servicios del SO");
    }
}

const equipoSoporte: AgenteSoporte[] = [
    new SoporteNivel1(),
    new SoporteNivel2()
];

console.log(equipoSoporte);
equipoSoporte.forEach(agente => agente.resolverTicket());
