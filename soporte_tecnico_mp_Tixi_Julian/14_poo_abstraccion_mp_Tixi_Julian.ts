// Ejercicio 14: Programación Orientada a Objetos - Abstracción en soporte técnico
// Alumno: Julián Oswaldo Tixi Páez

// 1. Primera abstracción: Dispositivos bajo soporte técnico
abstract class DispositivoSoporte {
    abstract diagnosticar(): void;
}

class ServidorEmpresarial extends DispositivoSoporte {
    diagnosticar(): void {
        console.log("Servidor: Diagnóstico de arreglo de discos RAID y uso de CPU");
    }
}

class ComputadoraEscritorio extends DispositivoSoporte {
    diagnosticar(): void {
        console.log("Computadora de escritorio: Diagnóstico de pantalla azul (BSOD) y módulos de RAM");
    }
}

const dispositivos: DispositivoSoporte[] = [
    new ServidorEmpresarial(),
    new ComputadoraEscritorio()
];

console.log(dispositivos);
dispositivos.forEach(dispositivo => dispositivo.diagnosticar());

// 2. Segunda abstracción: Protocolos de contingencia e incidencias
abstract class ProtocoloIncidencia {
    abstract ejecutarPlan(): void;
}

class ProtocoloCiberataque extends ProtocoloIncidencia {
    ejecutarPlan(): void {
        console.log("Protocolo de Ciberataque: Aislar subred afectada y bloquear tráfico en el cortafuegos");
    }
}

class ProtocoloCaidaServidor extends ProtocoloIncidencia {
    ejecutarPlan(): void {
        console.log("Protocolo de Caída de Servidor: Conmutar servicio hacia clúster de alta disponibilidad");
    }
}

const protocolos: ProtocoloIncidencia[] = [
    new ProtocoloCiberataque(),
    new ProtocoloCaidaServidor()
];

console.log(protocolos);
protocolos.forEach(protocolo => protocolo.ejecutarPlan());
