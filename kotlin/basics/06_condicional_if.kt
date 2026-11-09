fun main(){
    println("Condicional If")
    println("Condicional simple o un camino")
    val energia = 80 
    if (energia>= 50){
        println("Energia Insuficiente")
    }


    println("Condicional if else 2 caminos")
    energia = 70 
    if (energia>= 50){
        println("Energia suficiente")
    } else {
        println("Energia insuficiente")
    }


    println("Condicional multiple")
    energia = 70 
    if (energia>= 100){
        println("Energia suficiente")
    } else if (energia>= 50){
        println("puede despegar")
    } else {
        println("Energia insuficiente")
    }

    println("Condicional multiple")
    energia = 70 
    var motorActivo = true
    if (energia>= 100){
        println("Energia suficiente")
        if (motorActivo){
            println("puede despegar")
        }
    } else if (energia>= 50){
        println("Energia suficiente")
        if (motorActivo){
            println("puede despegar")
        }
    } else {
        println("Energia insuficiente")
    }


}