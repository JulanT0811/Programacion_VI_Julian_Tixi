fun main(){
    var presupuestoTotal = 0.0
    println("Presupuesto de Expedicion")
    for (viaje in 1..6){
        val costoOriginal = viaje * 25
        var descuento = 0.0
        if (costoOriginal >= 100){
            descuento = costoOriginal * 0.20
        }
        val costoFinal = costoOriginal - descuento
        println("Viaje $viaje")
        println("Costo Original $costoOriginal")
        println("Viaje $viaje")
        println("Viaje $viaje")
        presupuestoTotal += costoFinal
    }
    println("Presupuesto total de la expedicion %if creditos".format(presupuestoTotal))
}

val portales = arrayOf (
    portal("Tierra",30),
    portal("Marte",65),
    portal("Saturno",95),
    portal("Jupiter",130),
    portal("Neptuno",45),
    portal("Julian",89),
    portal("Tixi",75),
)

val costoViaje=50;
for (portal in portales){
    println("Portal: ${portal.nombre}")
    println("Energía: ${portal.energia}")
    when{
        portal.energia < 50 -> {
            println("Estado: INACTIVO")
            println("No se puede realizar el viaje")
        }
        portal.energia < 80 -> {
            println("Estado: OPERATIVO")
        }
        portal.energia < 120 -> {
            println("Estado: ESTABLE")
        }
        else -> {
            println("Estado: ALTA CAPACIDAD")
        }
    }
}
if (portal.energia >= costoViaje) {
    val restante=portal.energia-costoViaje
    println("Viaje autorizado")
    println("Energia restante $restante")
}
