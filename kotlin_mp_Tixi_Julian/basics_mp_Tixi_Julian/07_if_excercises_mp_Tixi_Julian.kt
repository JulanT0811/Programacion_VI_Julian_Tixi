// Ejercicio 07: Ejercicio practico con condicional IF
// Tema: Sistema de Soporte Tecnico
// Alumno: Julian Oswaldo Tixi Paez

fun main() {
    println("Evaluacion de Solicitud de Soporte Tecnico")
    println("Nombre del cliente o empresa:")
    val cliente = readLine()
    println("Cantidad de equipos reportados con falla:")
    val equipos = readLine()!!.toInt()
    println("Costo unitario por reparacion:")
    val costoUnitario = readLine()!!.toDouble()
    println("Presupuesto aprobado por el cliente:")
    val presupuesto = readLine()!!.toDouble()

    val costoTotal = equipos * costoUnitario
    val saldo = presupuesto - costoTotal

    println("Reporte de Evaluacion")
    println("Cliente: $cliente")
    println("Costo total presupuestado: $costoTotal")
    println("Saldo restante: $saldo")

    if (saldo >= 0) {
        println("Estado: Solicitud de soporte aprobada")
        if (saldo >= 100.0) {
            println("Observacion: Cuenta con saldo a favor para mantenimientos futuros")
        }
    } else {
        println("Estado: Presupuesto insuficiente para cubrir la reparacion")
        println("Monto faltante: ${-saldo}")
    }
}

