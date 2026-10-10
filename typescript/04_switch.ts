type Personaje =
|"Luke skywalker" 
| "Darth vader" 
| "Leia organa"
| "Han solo" 
| "Yoda";

let Personaje: Personaje = "Han solo"  ;

switch (Personaje) {
    case "Luke skywalker":
        console.log("Luke skywalker es un Jedi");
        break;
    case "Darth vader":
        console.log("Darth vader es un Sith");
        break;
    case "Leia organa":
        console.log("Leia organa es una princesa");
        break;
    case "Han solo":
        console.log("Han solo es un contrabandista");
        break;
    case "Yoda":
        console.log("Yoda es un maestro Jedi");
        break;
    default:
        console.log("Personaje desconocido");
}

type Jedi = "Luke "| "obiwan" | "Yoda" ;
let Jedi: Jedi = "Luke" ;
let nivelFuerza: number = 100;
let tieneSable: boolean = true;

switch (Jedi) {
    case "luke":
        if (nivelFuerza > 80 && tieneSable) {
            console.log("Luke es un Jedi poderoso");
        } else {
            console.log("Luke necesita mejorar su entrenamiento");
        }
        break;
    case "obiwan":
        if (nivelFuerza > 70 && tieneSable) {
            console.log("Obiwan es un Jedi experimentado");
        } else {
            console.log("Obiwan necesita mejorar su entrenamiento");
        }
        break;
    case "Yoda":
        if (nivelFuerza > 90 && tieneSable) {
            console.log("Yoda es un maestro Jedi");
        } else {
            console.log("Yoda necesita mejorar su entrenamiento");
        }
        break;
    default:
        console.log("Jedi desconocido");
}
