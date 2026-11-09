// Ejercicio 03: Operadores aritmeticos y de comparacion en Kotlin
// Tema: Sistema de Soporte Tecnico
// Alumno: Julian Oswaldo Tixi Paez

fun main() {
    println("Operadores - Sistema de Soporte Tecnico")
    println("Operadores Aritmeticos")

    var costoDiagnostico: Double = 10.50
    var costoRepuesto: Double = 5.50
    val totalServicio: Double = costoDiagnostico + costoRepuesto

    println("Suma +: $costoDiagnostico + $costoRepuesto = ${costoDiagnostico + costoRepuesto}")
    println("Suma +: $costoDiagnostico + $costoRepuesto = $totalServicio")
    println("Resta -: $costoDiagnostico - $costoRepuesto = ${costoDiagnostico - costoRepuesto}")
    println("Multiplicacion *: $costoDiagnostico * $costoRepuesto = ${costoDiagnostico * costoRepuesto}")
    println("Division /: $costoDiagnostico / $costoRepuesto = ${costoDiagnostico / costoRepuesto}")
    println("Residuo %: $costoDiagnostico % $costoRepuesto = ${costoDiagnostico % costoRepuesto}")

    println("Prioridades de los operadores aritmeticos")
    println("1 ()")
    println("2 *,/,%")
    println("3 +,-")
    val ticketsProcesados = 10 + 3 * 5 + 5
    println("Tickets Procesados: $ticketsProcesados")
    val horasMantenimiento = 15 / 5 * 5
    println("Horas Mantenimiento : $horasMantenimiento")
    val recursosAsignados = 100 + 20 / 4 * 3 - 10 % 3
    println("Recursos Asignados : $recursosAsignados")

    println("Operadores de Comparacion")
    println("Igual a == ${10 == 10}")
    println("Igual a == ${10 == 11}")
    println("Diferente de != ${5 != 10}")
    println("Diferente de != ${10 != 10}")
    println("Mayor que > ${5 > 10}")
    println("Mayor que > ${15 > 10}")
    println("Menor que < ${5 < 10}")
    println("Menor que < ${15 < 10}")
    println("Mayor igual >= ${10 >= 10}")
    println("Mayor igual >= ${15 >= 10}")
    println("Mayor igual >= ${5 >= 10}")
    println("Menor igual <= ${10 <= 10}")
    println("Menor igual <= ${15 <= 10}")
    println("Menor igual <= ${5 <= 10}")
}
