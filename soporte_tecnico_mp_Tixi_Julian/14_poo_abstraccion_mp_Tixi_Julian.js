"use strict";
// Ejercicio 14: Programación Orientada a Objetos - Abstracción en soporte técnico
// Alumno: Julián Oswaldo Tixi Páez

// 1. Primera abstracción: Dispositivos bajo soporte técnico
class DispositivoSoporte {
}

class ServidorEmpresarial extends DispositivoSoporte {
    diagnosticar() {
        console.log("Servidor: Diagnóstico de arreglo de discos RAID y uso de CPU");
    }
}

class ComputadoraEscritorio extends DispositivoSoporte {
    diagnosticar() {
        console.log("Computadora de escritorio: Diagnóstico de pantalla azul (BSOD) y módulos de RAM");
    }
}

const dispositivos = [
    new ServidorEmpresarial(),
    new ComputadoraEscritorio()
];

console.log(dispositivos);
dispositivos.forEach(dispositivo => dispositivo.diagnosticar());

// 2. Segunda abstracción: Protocolos de contingencia e incidencias
class ProtocoloIncidencia {
}

class ProtocoloCiberataque extends ProtocoloIncidencia {
    ejecutarPlan() {
        console.log("Protocolo de Ciberataque: Aislar subred afectada y bloquear tráfico en el cortafuegos");
    }
}

class ProtocoloCaidaServidor extends ProtocoloIncidencia {
    ejecutarPlan() {
        console.log("Protocolo de Caída de Servidor: Conmutar servicio hacia clúster de alta disponibilidad");
    }
}

const protocolos = [
    new ProtocoloCiberataque(),
    new ProtocoloCaidaServidor()
];

console.log(protocolos);
protocolos.forEach(protocolo => protocolo.ejecutarPlan());
