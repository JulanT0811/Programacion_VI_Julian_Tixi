// app/paso6_mp_Tixi_Julian.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { useMemo, useState } from 'react'
import {
  Alert,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { TicketGlobal } from './paso1_mp_Tixi_Julian'

const TICKETS_INICIALES_P6: TicketGlobal[] = [
  { id: '1', codigo: 'TCK-801', asunto: 'Interrupción en enlace troncal hacia sucursal Guayaquil', prioridad: 'Crítica', resuelto: false },
  { id: '2', codigo: 'TCK-802', asunto: 'Instalación de certificados digitales en facturación', prioridad: 'Media', resuelto: true },
  { id: '3', codigo: 'TCK-803', asunto: 'Bloqueo de contraseñas por intentos fallidos de usuario', prioridad: 'Alta', resuelto: false },
  { id: '4', codigo: 'TCK-804', asunto: 'Mantenimiento y limpieza física en switch de rack B', prioridad: 'Baja', resuelto: true },
  { id: '5', codigo: 'TCK-805', asunto: 'Sustitución de disco en arreglo RAID 5 de servidor', prioridad: 'Crítica', resuelto: false },
]

export function Paso6() {
  const [tickets, setTickets] = useState<TicketGlobal[]>(TICKETS_INICIALES_P6)
  const [nuevoAsunto, setNuevoAsunto] = useState('')
  const [prioridadSeleccionada, setPrioridadSeleccionada] = useState<'Media' | 'Alta' | 'Crítica'>('Media')
  const [filtro, setFiltro] = useState<'TODOS' | 'PENDIENTES' | 'CRITICOS' | 'RESUELTOS'>('TODOS')

  // Selectores derivados
  const total = tickets.length
  const pendientes = useMemo(() => tickets.filter((t) => !t.resuelto).length, [tickets])
  const criticosPendientes = useMemo(
    () => tickets.filter((t) => !t.resuelto && t.prioridad === 'Crítica').length,
    [tickets]
  )
  const resueltos = total - pendientes
  const tasaResolucion = total > 0 ? Math.round((resueltos / total) * 100) : 100

  const ticketsFiltrados = useMemo(() => {
    switch (filtro) {
      case 'PENDIENTES':
        return tickets.filter((t) => !t.resuelto)
      case 'CRITICOS':
        return tickets.filter((t) => t.prioridad === 'Crítica')
      case 'RESUELTOS':
        return tickets.filter((t) => t.resuelto)
      default:
        return tickets
    }
  }, [tickets, filtro])

  function registrarTicket() {
    if (!nuevoAsunto.trim()) {
      Alert.alert('Atención', 'Escribe el motivo o asunto del ticket')
      return
    }
    const nuevo: TicketGlobal = {
      id: Date.now().toString(),
      codigo: `TCK-${Math.floor(100 + Math.random() * 900)}`,
      asunto: nuevoAsunto.trim(),
      prioridad: prioridadSeleccionada,
      resuelto: false,
    }
    setTickets([nuevo, ...tickets])
    setNuevoAsunto('')
  }

  function alternarTicket(id: string) {
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, resuelto: !t.resuelto } : t))
    )
  }

  function eliminarTicket(id: string) {
    setTickets((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <SafeAreaView style={styles.contenedor}>
      {/* Cabecera del Centro de Mando */}
      <View style={styles.cabecera}>
        <View style={styles.filaTecnico}>
          <View>
            <Text style={styles.subtitulo}>CENTRO INTEGRAL DE GESTIÓN IT</Text>
            <Text style={styles.titulo}>Julián Oswaldo Tixi Páez</Text>
            <Text style={styles.rol}>Ingeniero Especialista de Soporte Técnico · Nivel 2</Text>
          </View>
          <View style={styles.badgeSla}>
            <Text style={styles.slaPorcentaje}>{tasaResolucion}%</Text>
            <Text style={styles.slaTexto}>SLA Éxito</Text>
          </View>
        </View>

        {/* Métricas rápidas */}
        <View style={styles.metricas}>
          <View style={[styles.tarjetaMetrica, { borderLeftColor: '#ef4444' }]}>
            <Text style={styles.metricaValor}>{criticosPendientes}</Text>
            <Text style={styles.metricaEtiqueta}>Críticos</Text>
          </View>
          <View style={[styles.tarjetaMetrica, { borderLeftColor: '#f59e0b' }]}>
            <Text style={styles.metricaValor}>{pendientes}</Text>
            <Text style={styles.metricaEtiqueta}>En Cola</Text>
          </View>
          <View style={[styles.tarjetaMetrica, { borderLeftColor: '#10b981' }]}>
            <Text style={styles.metricaValor}>{resueltos}</Text>
            <Text style={styles.metricaEtiqueta}>Cerrados</Text>
          </View>
        </View>
      </View>

      {/* Formulario Rápido de Incidencia */}
      <View style={styles.cajaFormulario}>
        <TextInput
          style={styles.campo}
          value={nuevoAsunto}
          onChangeText={setNuevoAsunto}
          placeholder="Describir nueva avería o incidencia técnica..."
          placeholderTextColor="#94a3b8"
        />
        <View style={styles.filaAccionesForm}>
          <View style={styles.selectorPrioridad}>
            {(['Media', 'Alta', 'Crítica'] as const).map((p) => (
              <Pressable
                key={p}
                style={[styles.botonPrio, prioridadSeleccionada === p && styles.botonPrioActiva]}
                onPress={() => setPrioridadSeleccionada(p)}
              >
                <Text style={[styles.textoPrio, prioridadSeleccionada === p && styles.textoPrioActiva]}>
                  {p}
                </Text>
              </Pressable>
            ))}
          </View>
          <Pressable style={styles.botonRegistrar} onPress={registrarTicket}>
            <Text style={styles.textoBotonRegistrar}>+ Abrir Ticket</Text>
          </Pressable>
        </View>
      </View>

      {/* Filtros de Lista */}
      <View style={styles.pestanas}>
        {(['TODOS', 'PENDIENTES', 'CRITICOS', 'RESUELTOS'] as const).map((modo) => (
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

      {/* Lista de Tickets en Tiempo Real */}
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
                    item.prioridad === 'Crítica'
                      ? styles.badgeCritico
                      : item.prioridad === 'Alta'
                      ? styles.badgeAlta
                      : styles.badgeNormal,
                  ]}
                >
                  {item.prioridad}
                </Text>
              </View>
              <Text style={[styles.asunto, item.resuelto && styles.asuntoResuelto]}>
                {item.asunto}
              </Text>
            </View>

            <View style={styles.accionesTarjeta}>
              <Pressable
                style={[styles.botonAlternar, item.resuelto ? styles.botonResuelto : styles.botonResolver]}
                onPress={() => alternarTicket(item.id)}
              >
                <Text style={styles.textoAlternar}>{item.resuelto ? '✓ Resuelto' : 'Resolver'}</Text>
              </Pressable>
              <Pressable style={styles.botonBorrar} onPress={() => eliminarTicket(item.id)}>
                <Text style={styles.textoBorrar}>✕</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default Paso6

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#0f172a' },
  cabecera: {
    padding: 18,
    backgroundColor: '#1e293b',
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  filaTecnico: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  subtitulo: { fontSize: 10, fontWeight: '700', color: '#38bdf8', letterSpacing: 0.5 },
  titulo: { fontSize: 20, fontWeight: 'bold', color: '#f8fafc', marginTop: 2 },
  rol: { fontSize: 12, color: '#94a3b8', marginTop: 2 },
  badgeSla: {
    backgroundColor: '#0f172a',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  slaPorcentaje: { fontSize: 18, fontWeight: 'bold', color: '#10b981' },
  slaTexto: { fontSize: 10, color: '#94a3b8' },
  metricas: { flexDirection: 'row', gap: 8, marginTop: 14 },
  tarjetaMetrica: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 10,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderWidth: 1,
    borderColor: '#334155',
  },
  metricaValor: { fontSize: 16, fontWeight: 'bold', color: '#f8fafc' },
  metricaEtiqueta: { fontSize: 11, color: '#94a3b8', marginTop: 2 },
  cajaFormulario: {
    backgroundColor: '#1e293b',
    margin: 12,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#334155',
    gap: 10,
  },
  campo: {
    backgroundColor: '#0f172a',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 14,
    color: '#f8fafc',
  },
  filaAccionesForm: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  selectorPrioridad: { flexDirection: 'row', gap: 6 },
  botonPrio: { paddingHorizontal: 10, paddingVertical: 6, borderRadius: 6, backgroundColor: '#0f172a' },
  botonPrioActiva: { backgroundColor: '#0284c7' },
  textoPrio: { fontSize: 11, fontWeight: '700', color: '#94a3b8' },
  textoPrioActiva: { color: '#ffffff' },
  botonRegistrar: { backgroundColor: '#0284c7', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 8 },
  textoBotonRegistrar: { color: '#ffffff', fontWeight: 'bold', fontSize: 12 },
  pestanas: { flexDirection: 'row', paddingHorizontal: 12, gap: 6, marginBottom: 8 },
  pestana: { flex: 1, paddingVertical: 6, borderRadius: 6, backgroundColor: '#1e293b', alignItems: 'center' },
  pestanaActiva: { backgroundColor: '#0284c7' },
  textoPestana: { fontSize: 10, fontWeight: '700', color: '#94a3b8' },
  textoPestanaActiva: { color: '#ffffff' },
  lista: { paddingHorizontal: 12, paddingBottom: 24, gap: 8 },
  tarjeta: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },
  info: { flex: 1, gap: 4 },
  filaCodigo: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  codigo: { fontSize: 13, fontWeight: '700', color: '#38bdf8' },
  badge: { fontSize: 10, fontWeight: '700', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  badgeCritico: { backgroundColor: '#450a0a', color: '#f87171' },
  badgeAlta: { backgroundColor: '#451a03', color: '#fb923c' },
  badgeNormal: { backgroundColor: '#0f172a', color: '#94a3b8' },
  asunto: { fontSize: 13, fontWeight: '600', color: '#f8fafc' },
  asuntoResuelto: { textDecorationLine: 'line-through', color: '#64748b' },
  accionesTarjeta: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  botonAlternar: { paddingHorizontal: 10, paddingVertical: 6, borderRadius: 6 },
  botonResolver: { backgroundColor: '#0284c7' },
  botonResuelto: { backgroundColor: '#059669' },
  textoAlternar: { color: '#ffffff', fontSize: 11, fontWeight: '700' },
  botonBorrar: {
    backgroundColor: '#0f172a',
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBorrar: { color: '#f87171', fontWeight: 'bold', fontSize: 11 },
})
