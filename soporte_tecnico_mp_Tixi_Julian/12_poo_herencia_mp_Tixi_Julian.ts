// Ejercicio 12: Programación Orientada a Objetos - Herencia en soporte técnico
// Alumno: Julián Oswaldo Tixi Páez

// Jerarquía 1: Tipos de tickets de soporte técnico
class TicketSoporte {
    atender(): void {
        console.log("Atención básica inicial del ticket de soporte");
    }
}

class TicketHardware extends TicketSoporte {
    reemplazarComponente(): void {
        console.log("El técnico de hardware reemplaza la memoria RAM dañada");
    }
}

class TicketRedes extends TicketSoporte {
    reconfigurarRouter(): void {
        console.log("El especialista en redes restablece la configuración del router y VLAN");
    }
}

const ticketHardware = new TicketHardware();
ticketHardware.atender();
ticketHardware.reemplazarComponente();

const ticketRedes = new TicketRedes();
ticketRedes.atender();
ticketRedes.reconfigurarRouter();

// Jerarquía 2: Especialistas de infraestructura IT
class EspecialistaIT {
    ejecutarDiagnostico(): void {
        console.log("El especialista realiza un diagnóstico preventivo del sistema");
    }
}

class AdministradorServidores extends EspecialistaIT {
    restaurarCopiaSeguridad(): void {
        console.log("El administrador de servidores restaura la base de datos desde el backup en la nube");
    }
}

class OficialSeguridadTI extends EspecialistaIT {
    bloquearAtaque(): void {
        console.log("El oficial de seguridad bloquea direcciones IP maliciosas en el firewall perimetral");
    }
}

const adminServidores = new AdministradorServidores();
adminServidores.ejecutarDiagnostico();
adminServidores.restaurarCopiaSeguridad();

const oficialSeguridad = new OficialSeguridadTI();
oficialSeguridad.ejecutarDiagnostico();
oficialSeguridad.bloquearAtaque();
