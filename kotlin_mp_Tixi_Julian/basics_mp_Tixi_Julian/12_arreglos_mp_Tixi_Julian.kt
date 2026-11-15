// Ejercicio 12: Manejo de arreglos (Arrays) en Kotlin
// Tema: Sistema de Soporte Tecnico
// Alumno: Julian Oswaldo Tixi Paez

fun main() {
    println("Arreglos en Kotlin - Sistema de Soporte Tecnico")
    val ticketsPorDia = arrayOf(30, 50, 80, 100, 60)

    println("Tickets del dia 1: ${ticketsPorDia[0]}")
    println("Tickets del dia 3: ${ticketsPorDia[2]}")
    println("Tickets del dia 5 original: ${ticketsPorDia[4]}")

    ticketsPorDia[4] = 150
    println("Tickets del dia 5 actualizado: ${ticketsPorDia[4]}")

    for (ticket in ticketsPorDia) {
        println("Revision de carga de tickets:")
        val ticketsProyectados = ticket * 2
        println("Proyeccion doble de tickets: $ticketsProyectados")
        if (ticketsProyectados >= 150) {
            val cargaAlta = ticketsProyectados
            println("Alerta: Carga proyectada elevada: $cargaAlta")
        }
    }
}

