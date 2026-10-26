// app/paso4.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

// ─── Paso 4 — ScrollView y SafeAreaView ──────────────────────────────

const TICKETS_SOPORTE_DEMO = [
  { id: '1',  codigo: 'TCK-101', depto: 'Finanzas',       incidencia: 'Falla en acceso a servidor SAP',        slaConsumido: 92, urgencia: 95 },
  { id: '2',  codigo: 'TCK-102', depto: 'Operaciones',    incidencia: 'Switch de planta sin enlace de fibra',   slaConsumido: 88, urgencia: 90 },
  { id: '3',  codigo: 'TCK-103', depto: 'Recursos Humanos',incidencia: 'Error al emitir roles de pago en ERP',   slaConsumido: 65, urgencia: 70 },
  { id: '4',  codigo: 'TCK-104', depto: 'Ventas',         incidencia: 'Bloqueo de cuenta de correo corporativo',slaConsumido: 40, urgencia: 50 },
  { id: '5',  codigo: 'TCK-105', depto: 'Logística',      incidencia: 'Impresora térmica de etiquetas trabada', slaConsumido: 25, urgencia: 30 },
  { id: '6',  codigo: 'TCK-106', depto: 'Auditoría',      incidencia: 'Solicitud de respaldo de base de datos', slaConsumido: 78, urgencia: 80 },
  { id: '7',  codigo: 'TCK-107', depto: 'Sistemas',       incidencia: 'Certificado SSL caducado en portal web', slaConsumido: 96, urgencia: 98 },
  { id: '8',  codigo: 'TCK-108', depto: 'Facturación',    incidencia: 'Lentitud al timbrar facturas electrónicas',slaConsumido: 52, urgencia: 60 },
  { id: '9',  codigo: 'TCK-109', depto: 'Servicio Cliente',incidencia: 'Auricular de telefonía IP con interferencia',slaConsumido: 15, urgencia: 20 },
  { id: '10', codigo: 'TCK-110', depto: 'Gerencia',       incidencia: 'Configuración de VPN en laptop directiva',slaConsumido: 35, urgencia: 45 },
]

interface BarraUsoProps {
  porcentaje: number
  etiqueta: string
}

function BarraProgreso({ porcentaje, etiqueta }: BarraUsoProps) {
  const color = porcentaje > 85 ? '#b91c1c'
              : porcentaje > 60 ? '#c2410c'
              : '#15803d'
  return (
    <View style={estilos4.barraFila}>
      <Text style={estilos4.barraEtiqueta}>{etiqueta}</Text>
      <View style={estilos4.barraFondo}>
        <View style={[estilos4.barraRelleno, { width: `${porcentaje}%`, backgroundColor: color }]} />
      </View>
      <Text style={[estilos4.barraPct, { color }]}>{porcentaje}%</Text>
    </View>
  )
}

function TarjetaTicketCola({ codigo, depto, incidencia, slaConsumido, urgencia }: typeof TICKETS_SOPORTE_DEMO[0]) {
  return (
    <View style={estilos4.tarjetaTicket}>
      <View style={estilos4.encabezadoTarjeta}>
        <Text style={estilos4.codigoTicket}>{codigo}</Text>
        <Text style={estilos4.deptoTicket}>{depto}</Text>
      </View>
      <Text style={estilos4.incidenciaTicket}>{incidencia}</Text>
      <BarraProgreso porcentaje={slaConsumido} etiqueta="SLA Consumido" />
      <BarraProgreso porcentaje={urgencia} etiqueta="Nivel de Urgencia" />
    </View>
  )
}

export function Paso4() {
  return (
    <SafeAreaView style={estilos4.safeArea}>
      <View style={estilos4.header}>
        <Text style={estilos4.headerTitulo}>Cola Activa de Soporte Técnico</Text>
        <Text style={estilos4.headerSub}>{TICKETS_SOPORTE_DEMO.length} incidencias en gestión</Text>
      </View>

      <ScrollView
        contentContainerStyle={estilos4.scrollContenido}
        showsVerticalScrollIndicator={false}
      >
        {TICKETS_SOPORTE_DEMO.map(tck => (
          <TarjetaTicketCola key={tck.id} {...tck} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Paso4

const estilos4 = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 45,
    paddingBottom: 16,
    backgroundColor: '#1e293b',
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  headerTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f8fafc',
  },
  headerSub: {
    fontSize: 13,
    color: '#94a3b8',
    marginTop: 2,
  },
  scrollContenido: {
    padding: 16,
    gap: 12,
  },
  tarjetaTicket: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#334155',
    gap: 8,
  },
  encabezadoTarjeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  codigoTicket: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#38bdf8',
  },
  deptoTicket: {
    fontSize: 12,
    color: '#cbd5e1',
    backgroundColor: '#334155',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    fontWeight: '600',
  },
  incidenciaTicket: {
    fontSize: 13,
    color: '#e2e8f0',
    marginBottom: 4,
  },
  barraFila: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  barraEtiqueta: {
    width: 105,
    fontSize: 11,
    color: '#94a3b8',
  },
  barraFondo: {
    flex: 1,
    height: 7,
    backgroundColor: '#334155',
    borderRadius: 4,
    overflow: 'hidden',
  },
  barraRelleno: {
    height: '100%',
    borderRadius: 4,
  },
  barraPct: {
    width: 36,
    textAlign: 'right',
    fontSize: 11,
    fontWeight: 'bold',
  },
})