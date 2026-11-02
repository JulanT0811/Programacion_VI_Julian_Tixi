// app/paso2_mp_Tixi_Julian.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { useMemo, useState } from 'react'
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { TicketGlobal } from './paso1_mp_Tixi_Julian'

const TICKETS_MUESTRA: TicketGlobal[] = [
  { id: '1', codigo: 'TCK-401', asunto: 'Caída de servidor de autenticación LDAP', prioridad: 'Crítica', resuelto: false },
  { id: '2', codigo: 'TCK-402', asunto: 'Configurar impresora fiscal en caja 2', prioridad: 'Baja', resuelto: true },
  { id: '3', codigo: 'TCK-403', asunto: 'Falla masiva de VPN en sucursal centro', prioridad: 'Crítica', resuelto: false },
  { id: '4', codigo: 'TCK-404', asunto: 'Actualización de parches de seguridad en Windows', prioridad: 'Media', resuelto: true },
  { id: '5', codigo: 'TCK-405', asunto: 'Lentitud de consultas a base de datos SAP', prioridad: 'Alta', resuelto: false },
]

export function Paso2() {
  const [filtro, setFiltro] = useState<'TODOS' | 'CRITICOS' | 'PENDIENTES' | 'RESUELTOS'>('TODOS')

  // Selectores derivados del estado
  const ticketsFiltrados = useMemo(() => {
    switch (filtro) {
      case 'CRITICOS':
        return TICKETS_MUESTRA.filter((t) => t.prioridad === 'Crítica')
      case 'PENDIENTES':
        return TICKETS_MUESTRA.filter((t) => !t.resuelto)
      case 'RESUELTOS':
        return TICKETS_MUESTRA.filter((t) => t.resuelto)
      default:
        return TICKETS_MUESTRA
    }
  }, [filtro])

  const totalCriticos = useMemo(
    () => TICKETS_MUESTRA.filter((t) => t.prioridad === 'Crítica' && !t.resuelto).length,
    []
  )
  const totalPendientes = useMemo(
    () => TICKETS_MUESTRA.filter((t) => !t.resuelto).length,
    []
  )

  return (
    <SafeAreaView style={styles.contenedor}>
      <View style={styles.cabecera}>
        <Text style={styles.subtitulo}>SELECTORS Y FILTRADO DE ESTADO</Text>
        <Text style={styles.titulo}>Monitoreo Selectivo de Tickets</Text>
      </View>

      {/* Tarjetas de métricas calculadas con Selectors */}
      <View style={styles.metricas}>
        <View style={[styles.cajaMetrica, { borderLeftColor: '#ef4444' }]}>
          <Text style={styles.valorMetrica}>{totalCriticos}</Text>
          <Text style={styles.etiquetaMetrica}>Críticos Urgentes</Text>
        </View>
        <View style={[styles.cajaMetrica, { borderLeftColor: '#f59e0b' }]}>
          <Text style={styles.valorMetrica}>{totalPendientes}</Text>
          <Text style={styles.etiquetaMetrica}>Total Pendientes</Text>
        </View>
        <View style={[styles.cajaMetrica, { borderLeftColor: '#10b981' }]}>
          <Text style={styles.valorMetrica}>{TICKETS_MUESTRA.length}</Text>
          <Text style={styles.etiquetaMetrica}>Tickets Totales</Text>
        </View>
      </View>

      {/* Botones de filtro (Selectors) */}
      <View style={styles.pestanas}>
        {(['TODOS', 'CRITICOS', 'PENDIENTES', 'RESUELTOS'] as const).map((modo) => (
          <Pressable
            key={modo}
            style={[styles.pestana, filtro === modo && styles.pestanaActiva]}
            onPress={() => setFiltro(modo)}
          >
            <Text style={[styles.textoPestana, filtro === modo && styles.textoPestanaActiva]}>
              {modo}
            </Text>
          </Pressable>
        ))}
      </View>

      <FlatList
        data={ticketsFiltrados}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <View style={styles.tarjeta}>
            <View style={styles.info}>
              <View style={styles.filaCodigo}>
                <Text style={styles.codigo}>{item.codigo}</Text>
                <Text
                  style={[
                    styles.badge,
                    item.prioridad === 'Crítica' ? styles.badgeCritico : styles.badgeNormal,
                  ]}
                >
                  {item.prioridad}
                </Text>
              </View>
              <Text style={styles.asunto}>{item.asunto}</Text>
            </View>
            <Text style={[styles.estadoTexto, item.resuelto ? styles.resuelto : styles.pendiente]}>
              {item.resuelto ? '✓ RESUELTO' : '● EN COLA'}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default Paso2

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f1f5f9' },
  cabecera: { padding: 18, backgroundColor: '#0284c7' },
  subtitulo: { fontSize: 11, fontWeight: '700', color: '#bae6fd', letterSpacing: 0.5 },
  titulo: { fontSize: 20, fontWeight: '700', color: '#ffffff', marginTop: 2 },
  metricas: { flexDirection: 'row', padding: 12, gap: 8 },
  cajaMetrica: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
    borderLeftWidth: 4,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  valorMetrica: { fontSize: 18, fontWeight: 'bold', color: '#0f172a' },
  etiquetaMetrica: { fontSize: 11, color: '#64748b', marginTop: 2 },
  pestanas: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    gap: 6,
    marginBottom: 8,
  },
  pestana: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: '#e2e8f0',
    alignItems: 'center',
  },
  pestanaActiva: { backgroundColor: '#0284c7' },
  textoPestana: { fontSize: 11, fontWeight: '700', color: '#475569' },
  textoPestanaActiva: { color: '#ffffff' },
  lista: { padding: 12, gap: 8 },
  tarjeta: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  info: { flex: 1, gap: 4 },
  filaCodigo: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  codigo: { fontSize: 14, fontWeight: '700', color: '#0284c7' },
  badge: { fontSize: 10, fontWeight: '700', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  badgeCritico: { backgroundColor: '#fee2e2', color: '#b91c1c' },
  badgeNormal: { backgroundColor: '#f1f5f9', color: '#475569' },
  asunto: { fontSize: 13, fontWeight: '600', color: '#0f172a' },
  estadoTexto: { fontSize: 11, fontWeight: '700' },
  resuelto: { color: '#15803d' },
  pendiente: { color: '#d97706' },
})
