
abstract class Boxeador {
}

class Rocky extends Boxeador {
    atacar(): void {
        console.log("Rocky lanza un gancho");
    }
}

class Apollo extends Boxeador {
    atacar(): void {
        console.log("Apollo lanza un upper");
    }
}

const boxeadores: Boxeador[] = [
    new Rocky(),
    new Apollo()
];

console.log(boxeadores);
boxeadores.forEach(boxeador => boxeador.atacar());

abstract class Boxeador {
}

abstract class Sayayin {
    abstract transformarse(): void;
}

class Goku extends Sayayin {
    transformarse(): void {
        console.log("Goku se transforma en super Sayayin blue");
    }
}

class Vegueta extends Sayayin {
    transformarse(): void {
        console.log("Vegueta alcanza el ultra ego");
    }
}

const sayayins: Sayayin[] = [
    new Goku(),
    new Vegueta()
];

console.log(sayayins);

sayayins.forEach(sayayin => sayayin.transformarse());