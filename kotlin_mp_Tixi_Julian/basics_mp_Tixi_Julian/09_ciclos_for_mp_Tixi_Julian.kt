// Ejercicio 09: Ciclos FOR y rangos numericos
// Tema: Sistema de Soporte Tecnico
// Alumno: Julian Oswaldo Tixi Paez

data class DispositivoSoporte(
    val id: Int,
    val activo: Boolean
)

fun main() {
    println("Ciclos For - Sistema de Soporte Tecnico")

    for (i in 1..5) {
        println("Revisando estacion de trabajo $i")
    }

    for (i in 10 downTo 5) {
        println("Verificando puerto de switch $i")
    }

    for (i in 1..20 step 2) {
        println("Escaneando direccion IP de soporte: 192.168.1.$i")
    }

    for (i in 1..10) {
        val costo = 15 * i
        println("15 USD * $i horas = $costo USD")
        println("Costo acumulado: ${i * 15} USD")
    }
}

