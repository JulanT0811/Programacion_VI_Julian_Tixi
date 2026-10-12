// Ejercicio 04: Estructura switch para categorías e incidencias de tickets de soporte técnico
// Alumno: Julián Oswaldo Tixi Páez

// 1. Switch para clasificación por categoría del ticket
type CategoriaTicket =
  | "Hardware"
  | "Software"
  | "Redes e Infraestructura"
  | "Seguridad Informatica"
  | "Acceso y Permisos";

let categoriaActual: CategoriaTicket = "Redes e Infraestructura";

switch (categoriaActual) {
    case "Hardware":
        console.log("Ticket asignado a técnicos de mantenimiento y repuestos físicos");
        break;
    case "Software":
        console.log("Ticket asignado a técnicos de soporte de aplicaciones y sistemas operativos");
        break;
    case "Redes e Infraestructura":
        console.log("Ticket asignado a ingenieros de conectividad, routers y switches");
        break;
    case "Seguridad Informatica":
        console.log("Ticket asignado al equipo SOC y respuesta a incidentes de seguridad");
        break;
    case "Acceso y Permisos":
        console.log("Ticket asignado a administradores de Active Directory y gestión de cuentas");
        break;
    default:
        console.log("Categoría de ticket no reconocida");
}

// 2. Switch con condiciones compuestas por tipo de incidencia
type TipoIncidencia = "Servidor Caído" | "Fallo de Router" | "Base de Datos Lenta";
let incidencia: TipoIncidencia = "Servidor Caído";
let usuariosAfectados: number = 100;
let afectaServicioCritico: boolean = true;

switch (incidencia) {
    case "Servidor Caído":
        if (usuariosAfectados > 80 && afectaServicioCritico) {
            console.log("Incidencia Crítica: Notificar inmediatamente al equipo de guardia 24/7");
        } else {
            console.log("Incidencia Alta: Reiniciar servicios del servidor y revisar registros de error");
        }
        break;
    case "Fallo de Router":
        if (usuariosAfectados > 50 && afectaServicioCritico) {
            console.log("Incidencia Alta: Desviar tráfico de red al enlace de respaldo");
        } else {
            console.log("Incidencia Media: Reiniciar interfaz de red y verificar latencia del enlace");
        }
        break;
    case "Base de Datos Lenta":
        if (usuariosAfectados > 90 && afectaServicioCritico) {
            console.log("Incidencia Alta: Optimizar conexiones activas y memoria compartida");
        } else {
            console.log("Incidencia Media: Analizar consultas lentas o bloqueadas en la cola de transacciones");
        }
        break;
    default:
        console.log("Tipo de incidencia no clasificada");
}
