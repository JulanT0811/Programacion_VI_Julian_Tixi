// Ejercicio 08: Estructura de control WHEN
// Tema: Sistema de Soporte Tecnico
// Alumno: Julian Oswaldo Tixi Paez

fun main() {
    println("Estructura When - Sistema de Soporte Tecnico")
    val tipoTicket = 2
    when (tipoTicket) {
        1 -> println("Departamento Asignado: Hardware y Servidores")
        2 -> println("Departamento Asignado: Software y Sistemas Operativos")
        3 -> println("Departamento Asignado: Redes y Telecomunicaciones")
        else -> println("Departamento no disponible")
    }

    print("Ingrese el dia de guardia tecnica (1-7): ")
    val dia = readLine()!!.toInt()
    when (dia) {
        1, 2, 3, 4, 5 -> println("Dia de atencion tecnica regular")
        6, 7 -> println("Dia de soporte tecnico de emergencia")
        else -> println("Dia invalido")
    }

    print("Ingrese el porcentaje de consumo de SLA del ticket (0-100): ")
    val sla = readLine()!!.toInt()
    when (sla) {
        in 0..39 -> println("Estado SLA: Nivel optimo, dentro del tiempo")
        in 40..79 -> println("Estado SLA: Nivel medio, ticket en proceso")
        in 80..100 -> println("Estado SLA: Nivel critico, proximo a vencer")
        else -> println("Porcentaje de SLA fuera de rango")
    }

    val horasDisponibles = 80
    val guardiaActiva = true
    val costoServicio = 40

    when {
        horasDisponibles >= costoServicio && guardiaActiva -> {
            val restante = horasDisponibles - costoServicio
            println("Orden de soporte autorizada")
            println("Horas restantes del contrato: $restante")
        }
        horasDisponibles < costoServicio && guardiaActiva -> {
            println("Horas de soporte insuficientes en el contrato")
        }
        !guardiaActiva -> {
            println("El turno de soporte tecnico esta cerrado")
        }
    }
}

