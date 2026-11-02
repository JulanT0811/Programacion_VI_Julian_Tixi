// app/paso1_mp_Tixi_Julian.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { useState } from 'react'
import { Alert, FlatList, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'

// ─── Paso 1 — Store básico de tickets de soporte ─────────────────────

export type TicketGlobal = {
  id: string
  codigo: string
  asunto: string
  prioridad: 'Baja' | 'Media' | 'Alta' | 'Crítica'
  resuelto: boolean
}

// Simulación de store reactivo
let estadoGlobalTickets: TicketGlobal[] = [
  { id: '1', codigo: 'TCK-301', asunto: 'Falla en switch de piso 1', prioridad: 'Alta', resuelto: false },
  { id: '2', codigo: 'TCK-302', asunto: 'Cambio de tóner en impresora RRHH', prioridad: 'Baja', resuelto: true },
  { id: '3', codigo: 'TCK-303', asunto: 'Reinicio de servicio PostgreSQL', prioridad: 'Crítica', resuelto: false },
]

export function Paso1() {
  const [tickets, setTickets] = useState<TicketGlobal[]>(estadoGlobalTickets)
  const [nuevoAsunto, setNuevoAsunto] = useState('')

  function agregarTicket() {
    if (!nuevoAsunto.trim()) {
      Alert.alert('Campo requerido', 'Ingresa la descripción del problema')
      return
    }
    const nuevo: TicketGlobal = {
      id: Date.now().toString(),
      codigo: `TCK-${Math.floor(100 + Math.random() * 900)}`,
      asunto: nuevoAsunto.trim(),
      prioridad: 'Media',
      resuelto: false,
    }
    const actualizados = [nuevo, ...tickets]
    estadoGlobalTickets = actualizados
    setTickets(actualizados)
    setNuevoAsunto('')
  }

  function alternarEstado(id: string) {
    const actualizados = tickets.map((t) =>
      t.id === id ? { ...t, resuelto: !t.resuelto } : t
    )
    estadoGlobalTickets = actualizados
    setTickets(actualizados)
  }

  function eliminarTicket(id: string) {
    const actualizados = tickets.filter((t) => t.id !== id)
    estadoGlobalTickets = actualizados
    setTickets(actualizados)
  }

  return (
    <SafeAreaView style={styles.contenedor}>
      <View style={styles.cabecera}>
        <Text style={styles.subtitulo}>ESTADO GLOBAL BÁSICO · JULIÁN TIXI</Text>
        <Text style={styles.titulo}>Store de Tickets de Soporte</Text>
      </View>

      <View style={styles.formulario}>
        <TextInput
          style={styles.campo}
          value={nuevoAsunto}
          onChangeText={setNuevoAsunto}
          placeholder="Describir nueva incidencia técnica..."
          placeholderTextColor="#94a3b8"
        />
        <Pressable style={styles.botonAgregar} onPress={agregarTicket}>
          <Text style={styles.textoBoton}>+ Agregar Ticket</Text>
        </Pressable>
      </View>

      <FlatList
        data={tickets}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <View style={styles.tarjeta}>
            <View style={styles.info}>
              <View style={styles.filaCodigo}>
                <Text style={styles.codigo}>{item.codigo}</Text>
                <Text
                  style={[
                    styles.badgePrioridad,
                    item.prioridad === 'Crítica'
                      ? styles.prioridadCritica
                      : styles.prioridadNormal,
                  ]}
                >
                  {item.prioridad}
                </Text>
              </View>
              <Text style={[styles.asunto, item.resuelto && styles.asuntoResuelto]}>
                {item.asunto}
              </Text>
            </View>

            <View style={styles.acciones}>
              <Pressable
                style={[styles.botonEstado, item.resuelto ? styles.botonResuelto : styles.botonPendiente]}
                onPress={() => alternarEstado(item.id)}
              >
                <Text style={styles.textoEstado}>
                  {item.resuelto ? '✓ Resuelto' : 'Atender'}
                </Text>
              </Pressable>
              <Pressable style={styles.botonEliminar} onPress={() => eliminarTicket(item.id)}>
                <Text style={styles.textoEliminar}>✕</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default Paso1

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f1f5f9' },
  cabecera: {
    padding: 18,
    backgroundColor: '#0284c7',
  },
  subtitulo: { fontSize: 11, fontWeight: '700', color: '#bae6fd', letterSpacing: 0.5 },
  titulo: { fontSize: 20, fontWeight: '700', color: '#ffffff', marginTop: 2 },
  formulario: {
    flexDirection: 'row',
    padding: 14,
    gap: 8,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  campo: {
    flex: 1,
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#0f172a',
  },
  botonAgregar: {
    backgroundColor: '#0284c7',
    paddingHorizontal: 14,
    justifyContent: 'center',
    borderRadius: 8,
  },
  textoBoton: { color: '#ffffff', fontWeight: '700', fontSize: 13 },
  lista: { padding: 14, gap: 10 },
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
  badgePrioridad: {
    fontSize: 10,
    fontWeight: '700',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  prioridadCritica: { backgroundColor: '#fee2e2', color: '#b91c1c' },
  prioridadNormal: { backgroundColor: '#f1f5f9', color: '#475569' },
  asunto: { fontSize: 14, fontWeight: '600', color: '#0f172a' },
  asuntoResuelto: { textDecorationLine: 'line-through', color: '#94a3b8' },
  acciones: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  botonEstado: { paddingHorizontal: 10, paddingVertical: 6, borderRadius: 6 },
  botonPendiente: { backgroundColor: '#0284c7' },
  botonResuelto: { backgroundColor: '#15803d' },
  textoEstado: { color: '#ffffff', fontSize: 11, fontWeight: '700' },
  botonEliminar: {
    backgroundColor: '#f1f5f9',
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoEliminar: { color: '#ef4444', fontWeight: 'bold', fontSize: 12 },
})
