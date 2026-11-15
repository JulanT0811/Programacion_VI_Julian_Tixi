// Ejercicio 11: Definicion y uso de funciones en Kotlin
// Tema: Sistema de Soporte Tecnico
// Alumno: Julian Oswaldo Tixi Paez

fun iniciarDiagnostico() {
    println("Iniciando diagnostico de infraestructura de red")
    println("Verificacion de componentes...")
    println("3")
    println("2")
    println("1")
    println("Julian Tixi inicio el diagnostico tecnico con exito")
}

fun registrarMantenimiento(area: String, equipos: Int, costoPorEquipo: Int) {
    println("Mantenimiento en el area: $area")
    val total = equipos * costoPorEquipo
    println("Costo total de mantenimiento: $total USD")
}

fun calcularDescuentoSoporte(precio: Double): Double {
    var descuento = 0.0
    if (precio >= 100.0) {
        descuento = precio * 0.15
    }
    return descuento
}

fun calcularTicketsTotales(ticketsPorTurno: Array<Int>): Int {
    var total = 0
    for (tickets in ticketsPorTurno) {
        total += tickets
        if (tickets >= 100) {
            println("Alerta: Turno con sobrecarga de tickets: $tickets")
        }
    }
    return total
}

fun main() {
    iniciarDiagnostico()
    iniciarDiagnostico()

    registrarMantenimiento("Sistemas", 5, 40)
    registrarMantenimiento("Telecomunicaciones", 4, 70)

    val descuento = calcularDescuentoSoporte(123.5)
    println("El cliente Julian tiene este descuento especial: $descuento USD")

    val ticketsSemanales = arrayOf(30, 50, 80, 100, 60)
    val total = calcularTicketsTotales(ticketsSemanales)
    println("Total de tickets atendidos en la semana: $total")
}

