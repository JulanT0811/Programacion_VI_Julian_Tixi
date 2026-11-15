fun main(){
    val energia = arrayOf (30,50,80,100,60)
    println(energias[0])
    println(energias[2])
    println(energias[4])
    energia[4]=150
    println(energias[4])
    for (energias in energias){
        println("Energia")
        val energiasDobles = energia *2
        println("Energia Doble $energiasDoble")
        if (energiasDoble>=150){
            energiaReducida = energiasDoble
            println("Energia Reducida : $energiaReducida")
        }
    }
}
