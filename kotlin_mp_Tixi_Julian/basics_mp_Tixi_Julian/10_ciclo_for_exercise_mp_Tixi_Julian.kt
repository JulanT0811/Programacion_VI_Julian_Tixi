// Ejercicio 10: Ejercicio integrador de ciclo FOR, arreglos y WHEN
// Tema: Sistema de Soporte Tecnico
// Alumno: Julian Oswaldo Tixi Paez

data class ServidorSoporte(
    val nombre: String,
    val rendimiento: Int
)

fun main() {
    var presupuestoTotal = 0.0
    println("Presupuesto de Mantenimiento Tecnico")

    for (mantenimiento in 1..6) {
        val costoOriginal = mantenimiento * 25.0
        var descuento = 0.0
        if (costoOriginal >= 100.0) {
            descuento = costoOriginal * 0.20
        }
        val costoFinal = costoOriginal - descuento
        println("Mantenimiento $mantenimiento")
        println("Costo Original: $costoOriginal USD")
        println("Descuento aplicado: $descuento USD")
        println("Costo Final: $costoFinal USD")
        presupuestoTotal += costoFinal
    }
    println("Presupuesto total del mantenimiento: %.2f USD".format(presupuestoTotal))

    println("\nMonitoreo de Infraestructura y Servidores")
    val servidores = arrayOf(
        ServidorSoporte("Servidor Web", 30),
        ServidorSoporte("Servidor Base de Datos", 65),
        ServidorSoporte("Router Principal", 95),
        ServidorSoporte("Switch Core", 130),
        ServidorSoporte("Firewall Perimetral", 45),
        ServidorSoporte("Estacion Julian", 89),
        ServidorSoporte("Servidor Tixi", 75)
    )

    val costoMantenimientoUrgente = 50

    for (servidor in servidores) {
        println("Servidor: ${servidor.nombre}")
        println("Rendimiento: ${servidor.rendimiento}%")
        when {
            servidor.rendimiento < 50 -> {
                println("Estado: CRITICO - Requiere mantenimiento inmediato")
            }
            servidor.rendimiento < 80 -> {
                println("Estado: OPERATIVO - Rendimiento regular")
            }
            servidor.rendimiento < 120 -> {
                println("Estado: ESTABLE - Rendimiento optimo")
            }
            else -> {
                println("Estado: ALTO RENDIMIENTO - Capacidad maxima")
            }
        }
    }

    val servidorEvaluar = servidores[0]
    if (servidorEvaluar.rendimiento >= costoMantenimientoUrgente) {
        val restante = servidorEvaluar.rendimiento - costoMantenimientoUrgente
        println("Margen operativo restante: $restante%")
    } else {
        println("Alerta: Rendimiento por debajo del umbral de seguridad")
    }
}

