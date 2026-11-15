// Ejercicio 13: Listas inmutables (listOf) en Kotlin
// Tema: Sistema de Soporte Tecnico
// Alumno: Julian Oswaldo Tixi Paez

fun calcularCostoTotalRepuestos(costos: List<Int>): Int {
    var total = 0
    for (costo in costos) {
        total += costo
        if (costo > 150) {
            println("Repuesto o componente de alto valor: $costo USD")
        }
    }
    return total
}

fun main() {
    println("Listas Inmutables - Sistema de Soporte Tecnico")
    val equiposSoporte = listOf("Servidor Dell PowerEdge", "Router Cisco 2911", "Switch Catalyst 2960")
    var iteracion = 1

    for (equipo in equiposSoporte) {
        println("Equipo $iteracion : $equipo")
        iteracion++
    }

    val costosRepuestos = listOf(100, 150, 200, 80, 120)
    val total = calcularCostoTotalRepuestos(costosRepuestos)
    println("Costo total de repuestos para el cliente Julian Tixi: $total USD")
}

