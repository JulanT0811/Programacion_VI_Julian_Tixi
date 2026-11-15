// Ejercicio 06: Condicionales IF, IF-ELSE e IF anidados
// Tema: Sistema de Soporte Tecnico
// Alumno: Julian Oswaldo Tixi Paez

fun main() {
    println("Condicional If - Sistema de Soporte Tecnico")

    println("Condicional simple o de un camino")
    var ticketsPendientes = 80
    if (ticketsPendientes >= 50) {
        println("Alerta: Alto volumen de tickets pendientes")
    }

    println("Condicional if else de 2 caminos")
    ticketsPendientes = 30
    if (ticketsPendientes >= 50) {
        println("Alerta: Alto volumen de tickets pendientes")
    } else {
        println("Flujo normal de tickets en soporte")
    }

    println("Condicional multiple")
    ticketsPendientes = 70
    if (ticketsPendientes >= 100) {
        println("Estado critico: Asignar mas tecnicos urgentemente")
    } else if (ticketsPendientes >= 50) {
        println("Estado de advertencia: Nivel de atencion medio")
    } else {
        println("Estado optimo: Tickets bajo control")
    }

    println("Condicional anidado")
    ticketsPendientes = 60
    var servidorActivo = true
    if (ticketsPendientes >= 100) {
        println("Sobrecarga de tickets")
        if (servidorActivo) {
            println("El servidor de tickets esta respondiendo")
        }
    } else if (ticketsPendientes >= 50) {
        println("Nivel medio de tickets")
        if (servidorActivo) {
            println("El servidor de tickets esta operativo y despachando")
        }
    } else {
        println("Carga baja de tickets")
    }
}

