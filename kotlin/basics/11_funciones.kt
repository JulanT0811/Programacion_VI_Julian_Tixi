fun activarPortal(){
    println("Activando portal interdimensional")
    println("Conteo regresivo")
    println("3")
    println("2")
    println("1")
    println("Francisco Higuera activó el Portal")
}

fun viajar(dimencion: String, viajes :Int, consuko: Int){
    println("Viajando a $dimension")
    vat total=viajes*consumo
    println("consumo total : $total")
}

funcalcularPrecio(precio: Doble):Doble{
    var descuento : Doble=0.0
    if(precio>=100){
        descuento= precio *0.15
    }
    return descuento 
}


fun calcularEnergiaTotal(energias: Array<Int>): Int {
    var total = 0
    for (energia in energias) {
        total += energia
        if (energia >= 100) {
            println("sobre Energia $energia")
        }
    }
    return total
}


fun main(){
    activarPortal()
    activarPortal()
    viajar("Tierra",5,4)
    viajar("Marte",4,7)
    val descuentoClientes = calcularPrecio(123.5)
    println("El cliente Julian tiene este documento : $descuentoClientes ")
    val totalEnergias=arrayOf(30,50,80,100,60)
    println("Energia total $totalEnergias")
}