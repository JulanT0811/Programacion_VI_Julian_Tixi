const val MAX_PORTALES = 10
fun main(){
    var energia =100
    println(energia)
    println("Autor: Julian Tixi ")
    energia =80
    println("Energia")
    println(energia)
    println("Tipos de variables en kotlin")
    var edad: Int = 14
    var portales: Int = 10
    println("edad : $edad")
    println("portales: $portales")
    println("Tipo Integer o Entero")
    var particulas: Long = 900000000L
    println("particulas: $particulas")
    println("Tipo Float")
    var combustible: Float = 45.5f
    println("Combustible : $combustible")
    println("Tipo Double")
    var distancia : Double = 1250.55
    println("distancia: $distancia ")
    println("Tipo String")
    var nombre: String = "Morty Smith"
    var dimension: String = "C-137"
    println("Nombre: $nombre , dimension: $dimension")
    println("Tipo Boolean")
    var portalActivo: Boolean = true
    println("portalActivo: $portalActivo")

    println("VAL CONST VAR")
    val cientifico = "Rick Sanchez"
    val portalesDisponibles = 5
    println("Nombre del cientifico : $cientifico")
    println("portales Disponibles: $portalesDisponibles")
    println("Constante Limite: $MAX_PORTALES")

}