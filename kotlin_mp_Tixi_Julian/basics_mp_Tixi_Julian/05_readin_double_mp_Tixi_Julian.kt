// Ejercicio 05: Lectura de datos numericos y decimales (Double)
// Tema: Sistema de Soporte Tecnico
// Alumno: Julian Oswaldo Tixi Paez

fun main() {
    println("Facturacion de Servicios - Sistema de Soporte Tecnico")
    println("Nombre del cliente:")
    val cliente = readLine()
    println("Cantidad de equipos para soporte:")
    val cantidadEquipos = readLine()!!.toInt()
    println("Costo por mantenimiento de equipo:")
    val costoPorEquipo = readLine()!!.toDouble()
    println("Presupuesto disponible del cliente:")
    val presupuesto = readLine()!!.toDouble()

    val costoTotal = cantidadEquipos * costoPorEquipo
    val saldoRestante = presupuesto - costoTotal

    println("Reporte de Soporte Tecnico")
    println("Cliente: $cliente")
    println("Costo total del servicio: $costoTotal")
    println("Saldo restante del presupuesto: $saldoRestante")
}

