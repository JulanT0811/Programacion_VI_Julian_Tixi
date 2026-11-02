// app/paso5_mp_Tixi_Julian.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { useState } from 'react'
import { Alert, FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { TicketGlobal } from './paso1_mp_Tixi_Julian'

let memoriaPersistidaSimulada: TicketGlobal[] = [
  { id: '1', codigo: 'TCK-701', asunto: 'Backup en la nube de base de datos comercial', prioridad: 'Alta', resuelto: true },
  { id: '2', codigo: 'TCK-702', asunto: 'Sustitución de disco duro en servidor web', prioridad: 'Crítica', resuelto: false },
]

export function Paso5() {
  const [tickets, setTickets] = useState<TicketGlobal[]>(memoriaPersistidaSimulada)
  const [ultimoGuardado, setUltimoGuardado] = useState<string>('Estado inicial sincronizado')

  function guardarPersistencia() {
    memoriaPersistidaSimulada = [...tickets]
    const ahora = new Date()
    const hora = `${ahora.getHours().toString().padStart(2, '0')}:${ahora.getMinutes().toString().padStart(2, '0')}:${ahora.getSeconds().toString().padStart(2, '0')}`
    setUltimoGuardado(`Guardado en almacenamiento local a las ${hora}`)
    Alert.alert('Almacenamiento Local', 'Estado de tickets persistido correctamente en caché local')
  }

  function restaurarPersistencia() {
    setTickets([...memoriaPersistidaSimulada])
    Alert.alert('Restauración Completa', 'Se recuperaron los tickets guardados en caché local')
  }

  function limpiarPersistencia() {
    memoriaPersistidaSimulada = []
    setTickets([])
    setUltimoGuardado('Caché local limpiada')
  }

  function agregarTicketRapido() {
    const id = Date.now().toString()
    const nuevo: TicketGlobal = {
      id,
      codigo: `TCK-${Math.floor(100 + Math.random() * 900)}`,
      asunto: 'Incidencia de red reportada por usuario',
      prioridad: 'Media',
      resuelto: false,
    }
    setTickets((prev) => [nuevo, ...prev])
  }

  return (
    <SafeAreaView style={styles.contenedor}>
      <View style={styles.cabecera}>
        <Text style={styles.subtitulo}>PERSISTENCIA DE ESTADO LOCAL</Text>
        <Text style={styles.titulo}>Almacenamiento Offline de Tickets</Text>
      </View>

      {/* Controles de Persistencia */}
      <View style={styles.panelControl}>
        <Text style={styles.estadoPersistencia}>● {ultimoGuardado}</Text>
        <Text style={styles.conteo}>Tickets actuales en memoria: {tickets.length}</Text>

        <View style={styles.filaBotones}>
          <Pressable style={[styles.boton, styles.botonGuardar]} onPress={guardarPersistencia}>
            <Text style={styles.textoBoton}>💾 Guardar Caché</Text>
          </Pressable>
          <Pressable style={[styles.boton, styles.botonRestaurar]} onPress={restaurarPersistencia}>
            <Text style={styles.textoBoton}>↺ Restaurar</Text>
          </Pressable>
          <Pressable style={[styles.boton, styles.botonLimpiar]} onPress={limpiarPersistencia}>
            <Text style={styles.textoBotonLimpiar}>🗑 Limpiar</Text>
          </Pressable>
        </View>

        <Pressable style={styles.botonAgregar} onPress={agregarTicketRapido}>
          <Text style={styles.textoBotonAgregar}>+ Generar Incidencia Rápida</Text>
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
              {item.resuelto ? '✓ RESUELTO' : '● PENDIENTE'}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default Paso5

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f1f5f9' },
  cabecera: { padding: 18, backgroundColor: '#0284c7' },
  subtitulo: { fontSize: 11, fontWeight: '700', color: '#bae6fd', letterSpacing: 0.5 },
  titulo: { fontSize: 20, fontWeight: '700', color: '#ffffff', marginTop: 2 },
  panelControl: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    gap: 8,
  },
  estadoPersistencia: { fontSize: 13, fontWeight: '700', color: '#0284c7' },
  conteo: { fontSize: 12, color: '#64748b' },
  filaBotones: { flexDirection: 'row', gap: 8, marginTop: 4 },
  boton: { flex: 1, paddingVertical: 10, borderRadius: 8, alignItems: 'center' },
  botonGuardar: { backgroundColor: '#0284c7' },
  botonRestaurar: { backgroundColor: '#0f172a' },
  botonLimpiar: { backgroundColor: '#fee2e2' },
  textoBoton: { color: '#ffffff', fontWeight: '700', fontSize: 12 },
  textoBotonLimpiar: { color: '#ef4444', fontWeight: '700', fontSize: 12 },
  botonAgregar: {
    backgroundColor: '#e0f2fe',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 6,
  },
  textoBotonAgregar: { color: '#0284c7', fontWeight: 'bold', fontSize: 13 },
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
  badge: { fontSize: 10, fontWeight: '700', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  badgeCritico: { backgroundColor: '#fee2e2', color: '#b91c1c' },
  badgeNormal: { backgroundColor: '#f1f5f9', color: '#475569' },
  asunto: { fontSize: 13, fontWeight: '600', color: '#0f172a' },
  estadoTexto: { fontSize: 11, fontWeight: '700' },
  resuelto: { color: '#15803d' },
  pendiente: { color: '#d97706' },
})
