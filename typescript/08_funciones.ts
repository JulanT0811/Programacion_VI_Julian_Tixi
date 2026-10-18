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

//funciones overloads

function formatear(valor: number): string;
function formatear(valor: string): string;
function formatear(valor: boolean): string;

function formatear(valor: number | string | boolean): string {
    if (typeof valor === "number") {
        return valor.toLocaleString("es.MX",{minimumFractionDigits: 2})
    } 
    if (typeof valor === "boolean") {
        return valor ? "si":"no";
    }
    return `"${valor}"`;
}

console.log(formatear(1233434.5));
console.log(formatear(true));
console.log(formatear("activo"));

//closure
function crearContador(inicio: number = 0) {
    let cuenta = inicio;
    return {
        incrementar: () => ++cuenta,
        decrementar: () => --cuenta,
        valor: () => cuenta,
        resetear: () => {cuenta = inicio}
    }
}
const c1 = crearContador();
const c2 = crearContador(10);

c1.incrementar();
c1.incrementar();
c1.incrementar();
c2.incrementar();


console.log(c1.valor()); // 3
console.log(c2.valor()); // 11

c1.resetear();
console.log(c1.valor()); // 0