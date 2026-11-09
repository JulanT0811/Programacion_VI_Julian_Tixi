// Ejercicio 02: Constantes, variables y tipos de datos en Kotlin
// Tema: Sistema de Soporte Tecnico
// Alumno: Julian Oswaldo Tixi Paez

const val MAX_TICKETS_DIARIOS = 50

fun main() {
    var capacidadAtencion = 100
    println(capacidadAtencion)
    println("Autor: Julian Oswaldo Tixi Paez")
    capacidadAtencion = 80
    println("Capacidad de Atencion")
    println(capacidadAtencion)

    println("Tipos de variables en kotlin")
    var ticketsAtendidos: Int = 14
    var ticketsEnCola: Int = 10
    println("ticketsAtendidos : $ticketsAtendidos")
    println("ticketsEnCola: $ticketsEnCola")

    println("Tipo Integer o Entero")
    var numeroSeguimientoGlobal: Long = 900000000L
    println("numeroSeguimientoGlobal: $numeroSeguimientoGlobal")

    println("Tipo Float")
    var tiempoRespuestaHoras: Float = 4.5f
    println("Tiempo de Respuesta (Horas) : $tiempoRespuestaHoras")

    println("Tipo Double")
    var costoMantenimiento: Double = 1250.55
    println("costoMantenimiento: $costoMantenimiento ")

    println("Tipo String")
    var cliente: String = "Juan Perez"
    var areaDepartamento: String = "Soporte de Redes y Servidores"
    println("Cliente: $cliente , Area: $areaDepartamento")

    println("Tipo Boolean")
    var ticketActivo: Boolean = true
    println("ticketActivo: $ticketActivo")

    println("VAL CONST VAR")
    val tecnicoResponsable = "Julian Oswaldo Tixi Paez"
    val ticketsDisponibles = 5
    println("Nombre del tecnico responsable : $tecnicoResponsable")
    println("tickets Disponibles: $ticketsDisponibles")
    println("Constante Limite de Tickets Diarios: $MAX_TICKETS_DIARIOS")
}
