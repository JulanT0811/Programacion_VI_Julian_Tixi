
class Boxeador {
    golpear(): void{
        console.log("Golpe básico");
    }
}

class Rocky extends Boxeador {
    golpeEspecial(): void{
        console.log("Rocky lanza un poderoso gancho");
    }
}

class Apollo extends Boxeador {
    golpeRapido(): void{
        console.log("Apollo  lanza un jab veloz");
    }
}

const rocky=new Rocky();
rocky.golpear();
rocky.golpeEspecial();
const apolloCreek = new Apollo();
apolloCreek.golpear();
apolloCreek.golpeRapido();



class Guerrero {
    atacar(): void {
        console.log("El guerrero realiza un ataque basico")
    }
}

class Goku extends Guerrero {
    kamehameha(): void {
        console.log("Goku lanza un poderozo kamehameha")
    }
}

class Vegueta extends Guerrero {
    finalFlash(): void {
        console.log("Vegueta usa su poderozo final flash")
    }
}

const goku=new Goku();
goku.atacar();
goku.kamehameha();
const vegueta = new Vegueta();
vegueta.atacar();
vegueta.finalFlash();