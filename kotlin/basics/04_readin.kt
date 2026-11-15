fun main() {
    println("Inputs de terminal readline")
    println("Como te llamas")
    

    val nombre = readLine()
    
    println("Welcome a otro universo : $nombre")


    println("Cristales de Rick")
    val cristalesRick = readLine()!!.toInt()
    println("Cristales de Morty")
    val cristalesMorty = readLine()!!.toInt()
    val total = cristalesRick+cristalesMorty
    println("Total de cristales: $total")


    println("Calculadora de Energia")
    val energiaInicial = readLine()!!.toInt()
    println("Energia Cinsumida: ")
    val energiaConsumida = readLine()!!.toInt()
    val energiaRestante = energiaInicial- energiaConsumida
    println("Energia Restante: $energiaRestante")

    

}