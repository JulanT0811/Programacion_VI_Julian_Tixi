// Ejercicio 14: Listas mutables (mutableListOf) y Menu CRUD
// Tema: Sistema de Soporte Tecnico
// Alumno: Julian Oswaldo Tixi Paez

fun main() {
    val equiposSoporte = mutableListOf("Servidor Principal", "Router Central", "Estacion de Trabajo 01")
    var opcion: Int

    do {
        println("\n--- Panel de Gestion de Equipos - Sistema de Soporte Tecnico ---")
        println("Responsable: Julian Oswaldo Tixi Paez")
        println("1. Registrar nuevo equipo para soporte")
        println("2. Mostrar equipos registrados")
        println("3. Actualizar informacion de equipo")
        println("4. Dar de baja / Entregar equipo reparado")
        println("5. Salir del sistema")
        print("Seleccione una opcion: ")

        opcion = readLine()!!.toInt()

        when (opcion) {
            1 -> {
                print("Nombre del nuevo equipo o dispositivo: ")
                val nombre = readLine()!!
                equiposSoporte.add(nombre)
                println("Equipo ingresado exitosamente a soporte tecnico")
            }
            2 -> {
                println("\nEquipos en mantenimiento:")
                for ((i, equipo) in equiposSoporte.withIndex()) {
                    println("[$i] Equipo: $equipo")
                }
            }
            3 -> {
                println("\nActualizar equipo")
                print("Indice del equipo a modificar: ")
                val indice = readLine()!!.toInt()
                if (indice in equiposSoporte.indices) {
                    print("Nuevo nombre o especificacion: ")
                    val nuevoNombre = readLine()!!
                    equiposSoporte[indice] = nuevoNombre
                    println("Informacion del equipo actualizada con exito")
                } else {
                    println("Indice no valido en el sistema")
                }
            }
            4 -> {
                println("\nEliminar o retirar equipo")
                print("Indice del equipo a retirar: ")
                val indice = readLine()!!.toInt()
                if (indice in equiposSoporte.indices) {
                    val retirado = equiposSoporte.removeAt(indice)
                    println("Equipo '$retirado' retirado del soporte tecnico")
                } else {
                    println("Indice no valido en el sistema")
                }
            }
            5 -> println("Cerrando sesion del Sistema de Soporte Tecnico...")
            else -> println("Opcion no valida, intente nuevamente")
        }
    } while (opcion != 5)
}

