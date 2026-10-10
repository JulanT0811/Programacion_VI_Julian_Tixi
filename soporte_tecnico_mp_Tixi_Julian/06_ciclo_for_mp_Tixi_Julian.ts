// Ejercicio 06: Ciclos for para procesamiento y control de SLA en tickets de soporte técnico
// Alumno: Julián Oswaldo Tixi Páez

// Ciclo for - Ejemplo 1: Condición inicial que no se cumple
for (let i = 5; i < 5; i += 5) {
    console.log(`Revisión de ticket en cola ${i}`);
}

// Ciclo for - Ejemplo 2: Condición que no se ejecuta por rango
for (let i = 40; i > 50; i += 5) {
    console.log(`Monitoreo de ticket de soporte ${i}`);
}

// Ciclo for - Ejemplo 3: Cuenta regresiva de tiempo límite (SLA) en minutos
for (let i = 40; i > 0; i -= 5) {
    console.log(`Tiempo restante de SLA para resolver el ticket: ${i} minutos`);
}

// Ciclo for - Ejemplo 4: Control de flujo con break y continue en la gestión de tickets
for (let i = 40; i > 0; i -= 5) {
    if (i === 20) {
        console.log("Atención del ticket finalizada con éxito al minuto 20 (break)");
        break;
    }
    if (i === 30) {
        console.log("Ticket en espera de información del usuario al minuto 30 (continue)");
        continue;
    }
    console.log(`Procesando ticket en cola, tiempo restante: ${i} minutos`);
}
