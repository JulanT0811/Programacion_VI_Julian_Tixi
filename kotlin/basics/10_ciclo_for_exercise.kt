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