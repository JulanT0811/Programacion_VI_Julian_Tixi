fun main() {
    val portales = mutableListOf("Tierra", "Marte", "Saturno")
    var option: Int

    do {
        println("\nLaboratorio de Calderon Diego")
        println("1. Agregar Portal")
        println("2. Mostrar Portales")
        println("3. Modificar Portal")
        println("4. Eliminar Portal")
        println("5. Exit")
        print("Seleccione una opcion: ")
        

        option = readLine()!!.toInt()

        when (option) {
            1 -> {
                print("Nombre del nuevo portal: ")
                val nombre = readLine()!!
                portales.add(nombre)
                println("Portal incluido")
            }
            2 -> {
                println("Portales:")
                for ((i, portal) in portales.withIndex()) {
                    println("[$i] Portal: $portal")
                }
            }
            3 -> {
                println("Actualizar")
                print("Indice a modificar: ")
                val indice = readLine()!!.toInt()
                if (indice in portales.indices) {
                    print("Nuevo nombre: ")
                    val nuevoNombre = readLine()!!
                    portales[indice] = nuevoNombre
                    println("Portal actualizado")
                } else {
                    println("Indice no valido")
                }
            }
            4 -> {
                println("Eliminar")
                print("Indice a eliminar: ")
                val indice = readLine()!!.toInt()
                if (indice in portales.indices) {
                    portales.removeAt(indice)
                    println("Portal eliminado")
                } else {
                    println("Indice no valido")
                }
            }
            5 -> println("Saliendo del laboratorio...")
            else -> println("Opcion no valida")
        }
    } while (option != 5)
}