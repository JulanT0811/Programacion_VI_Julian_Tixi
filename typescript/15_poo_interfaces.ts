interface ParticipanteTorneo{
    nombre: string;
    nivelPoder: number;
    presentarPoder(): void;
    transformarse(): void { 
        console.log("Participante transformado");
    }

}

class Goku implements ParticipanteTorneo{
    nombre = "Goku";
    nivelPoder = 9000;
    presentarTecnica(): void{
        console.log("Goku utiliza kamehameha")
    }
    transformarse(): void {
        console.log("Transformacion")
    }
}

class Vegeta implements ParticipanteTorneo{
    nombre = "Vegeta";
    nivelPoder = 8500;
    presentarTecnica(): void{
        console.log("Vegeta utiliza final flash")
    }
    transformarse(): void {
        console.log("Transformacion vegeta")
    }
}