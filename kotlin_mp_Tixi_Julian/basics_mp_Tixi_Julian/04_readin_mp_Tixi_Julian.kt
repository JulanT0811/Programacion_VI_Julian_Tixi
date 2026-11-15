// Ejercicio 04: Lectura de datos por consola (readLine)
// Tema: Sistema de Soporte Tecnico
// Alumno: Julian Oswaldo Tixi Paez

fun main() {
    println("Inputs de terminal readLine - Sistema de Soporte Tecnico")
    println("Ingrese el nombre del tecnico:")
    val nombre = readLine()
    println("Bienvenido al Sistema de Soporte Tecnico: $nombre")

    println("Registro de tickets resueltos")
    println("Tickets de Hardware:")
    val ticketsHardware = readLine()!!.toInt()
    println("Tickets de Software:")
    val ticketsSoftware = readLine()!!.toInt()
    val totalTickets = ticketsHardware + ticketsSoftware
    println("Total de tickets resueltos: $totalTickets")

    println("Calculadora de Horas de Soporte")
    println("Horas de soporte asignadas:")
    val horasIniciales = readLine()!!.toInt()
    println("Horas consumidas en mantenimiento:")
    val horasConsumidas = readLine()!!.toInt()
    val horasRestantes = horasIniciales - horasConsumidas
    println("Horas restantes de soporte: $horasRestantes")
}

