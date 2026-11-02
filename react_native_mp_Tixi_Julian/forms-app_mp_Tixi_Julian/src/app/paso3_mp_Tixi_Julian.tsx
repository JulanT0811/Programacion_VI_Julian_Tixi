// app/paso3_mp_Tixi_Julian.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native'
import { Paso1FilaServidor } from './paso1FilaServidor_mp_Tixi_Julian'
import { TicketSoporte } from './paso1_mp_Tixi_Julian'
import { Paso3EncabezadoSeccion } from './paso3EncabezadoSeccion_mp_Tixi_Julian'

export type SeccionAreaSoporte = {
  title: string
  nivel: string
  data: TicketSoporte[]
}

const SECCIONES_SOPORTE: SeccionAreaSoporte[] = [
  {
    title: 'Mesa de Ayuda · HelpDesk',
    nivel: 'SLA: 24h · Nivel 1',
    data: [
      { id: 's1', codigo: 'TCK-201', asunto: 'Desbloqueo de usuario en Active Directory', solicitante: 'Ana Morales', departamento: 'Finanzas', estado: 'RESUELTO' },
      { id: 's2', codigo: 'TCK-202', asunto: 'Instalación de paquete ofimático', solicitante: 'Carlos Ruiz', departamento: 'Logística', estado: 'EN PROCESO' },
      { id: 's3', codigo: 'TCK-203', asunto: 'Configuración de buzón de correo en móvil', solicitante: 'Diana Ortiz', departamento: 'RRHH', estado: 'ABIERTO' },
    ],
  },
  {
    title: 'Infraestructura de Redes',
    nivel: 'SLA: 4h · Nivel 2',
    data: [
      { id: 's4', codigo: 'TCK-204', asunto: 'Falla de enlace troncal en switch piso 2', solicitante: 'Luis Andrade', departamento: 'Ventas', estado: 'ABIERTO' },
      { id: 's5', codigo: 'TCK-205', asunto: 'Interferencia en telefonía VoIP recepción', solicitante: 'Mónica Silva', departamento: 'Atención', estado: 'EN PROCESO' },
    ],
  },
  {
    title: 'Data Center y Ciberseguridad',
    nivel: 'SLA: 2h · Nivel 3 (Crítico)',
    data: [
      { id: 's6', codigo: 'TCK-206', asunto: 'Alerta de intrusión en firewall perimetral', solicitante: 'Javier Vega', departamento: 'Sistemas', estado: 'EN PROCESO' },
      { id: 's7', codigo: 'TCK-207', asunto: 'Degradación de arreglo RAID en servidor SAP', solicitante: 'Elena Romero', departamento: 'DataCenter', estado: 'ABIERTO' },
    ],
  },
]

export function Paso3() {
  return (
    <SafeAreaView style={styles.contenedor}>
      <View style={styles.cabecera}>
        <Text style={styles.subtitulo}>ORGANIZACIÓN POR NIVELES DE ATENCIÓN</Text>
        <Text style={styles.titulo}>Tickets Agrupados por Área Técnica</Text>
      </View>
      <SectionList<TicketSoporte, SeccionAreaSoporte>
        sections={SECCIONES_SOPORTE}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Paso1FilaServidor ticket={item} />}
        renderSectionHeader={({ section }) => (
          <Paso3EncabezadoSeccion titulo={section.title} nivel={section.nivel} />
        )}
        stickySectionHeadersEnabled
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: '#e2e8f0', marginHorizontal: 12 }} />
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </SafeAreaView>
  )
}

export default Paso3

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f1f5f9' },
  cabecera: {
    padding: 18,
    backgroundColor: '#0284c7',
  },
  subtitulo: {
    fontSize: 11,
    fontWeight: '700',
    color: '#bae6fd',
    letterSpacing: 0.5,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginTop: 2,
  },
})
