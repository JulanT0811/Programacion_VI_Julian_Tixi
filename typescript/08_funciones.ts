// Funciones simples
//devolucion un valor 
function sumarCreditos(credito1: number, credito2: number): number {
    return credito1 + credito2 ;
}

const totalCreditos = sumarCreditos(10, 20);
console.log(`Total de créditos: ${totalCreditos}`);

//sin devolucion un valor 
function mostrarCentroDeEntrenamiento(nombre: string): void {
    console.log(`Centro de entrenamiento: ${nombre}`);
    const naves: string[] = ["X-Wing", "TIE Fighter", "Millennium Falcon"];
    for (const nave of naves) {
        console.log(`Nave DISPONIBLE:${nave}`);
    }
}

mostrarCentroDeEntrenamiento("Jedi Academy");

//funcione com parametros opcionales
function entrenarJedi(nombre: string, nivel?: number): void {
    if (nivel) {
        console.log(`El Jedi ${nombre}esta entrenando en el nivel ${nivel }`);
    } else {
        console.log(`El Jedi ${nombre} esta entrenando `);
    }
}

entrenarJedi("Luke Skywalker", 5);
entrenarJedi("Yoda");
function entrenarJedi(nombre: string, nivel: number = 1): void {
    console.log(`El Jedi ${nombre} esta entrenando en el nivel ${nivel}`);
}

entrenarJedi("Leia", 5);
entrenarJedi("Obi-Wan");

// funciones flecha
function potenciarFuerza(fuerza: number): number {
    return fuerza * 2;
}

const potenciarFuerzaFlecha = (fuerza: number): number => fuerza * 2;
const fuerzaOriginal : number = 50;
const fuerzaPotenciada : number = potenciarFuerza(fuerzaOriginal);
console.log(`Fuerza original: ${fuerzaOriginal}, Fuerza potenciada: ${fuerzaPotenciada}`);

const fuerzaPotenciadaFlecha : number = potenciarFuerzaFlecha(fuerzaOriginal);
console.log(`Fuerza original: ${fuerzaOriginal}, Fuerza potenciada (flecha): ${fuerzaPotenciadaFlecha}`);