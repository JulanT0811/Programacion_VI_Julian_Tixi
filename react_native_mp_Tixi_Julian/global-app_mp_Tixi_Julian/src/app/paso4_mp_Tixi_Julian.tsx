// app/paso4_mp_Tixi_Julian.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { useState } from 'react'
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { TicketGlobal } from './paso1_mp_Tixi_Julian'

// Store 1: Auth del Técnico
type PerfilTecnico = {
  nombre: string
  rol: string
  activo: boolean
}

const TECNICO_DEFAULT: PerfilTecnico = {
  nombre: 'Julián Oswaldo Tixi Páez',
  rol: 'Ingeniero de Soporte Nivel 2',
  activo: true,
}

// Store 2: Tickets del sistema
const TICKETS_INICIALES: TicketGlobal[] = [
  { id: '1', codigo: 'TCK-601', asunto: 'Falla de enlace fibra óptica planta baja', prioridad: 'Crítica', resuelto: false },
  { id: '2', codigo: 'TCK-602', asunto: 'Actualización de firmware router perimetral', prioridad: 'Alta', resuelto: false },
  { id: '3', codigo: 'TCK-603', asunto: 'Reemplazo de mouse y teclado en gerencia', prioridad: 'Baja', resuelto: true },
]

export function Paso4() {
  const [tecnico, setTecnico] = useState<PerfilTecnico>(TECNICO_DEFAULT)
  const [tickets, setTickets] = useState<TicketGlobal[]>(TICKETS_INICIALES)

  function alternarGuardia() {
    setTecnico((prev) => ({ ...prev, activo: !prev.activo }))
  }

  function tomarTicket(id: string) {
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, resuelto: true } : t))
    )
  }

  return (
    <SafeAreaView style={styles.contenedor}>
      <View style={styles.cabecera}>
        <Text style={styles.subtitulo}>MÚLTIPLES STORES GLOBALES</Text>
        <Text style={styles.titulo}>Tickets + Perfil de Técnico</Text>
      </View>

      {/* Tarjeta de Auth / Perfil del Técnico */}
      <View style={styles.tarjetaPerfil}>
        <View style={{ flex: 1 }}>
          <Text style={styles.nombreTecnico}>{tecnico.nombre}</Text>
          <Text style={styles.rolTecnico}>{tecnico.rol}</Text>
          <Text style={[styles.estadoGuardia, tecnico.activo ? styles.enGuardia : styles.fueraGuardia]}>
            {tecnico.activo ? '● EN GUARDIA ACTIVA' : '○ FUERA DE TURNO'}
          </Text>
        </View>
        <Pressable
          style={[styles.botonGuardia, tecnico.activo ? styles.botonSalir : styles.botonEntrar]}
          onPress={alternarGuardia}
        >
          <Text style={styles.textoBotonGuardia}>
            {tecnico.activo ? 'Finalizar Turno' : 'Iniciar Turno'}
          </Text>
        </Pressable>
      </View>

      <View style={styles.seccionTickets}>
        <Text style={styles.tituloSeccion}>Incidencias Asignadas ({tickets.length})</Text>
      </View>

      <FlatList
        data={tickets}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <View style={styles.tarjetaTicket}>
            <View style={styles.infoTicket}>
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

            {item.resuelto ? (
              <Text style={styles.textoResuelto}>✓ Atendido</Text>
            ) : (
              <Pressable
                style={[styles.botonAtender, !tecnico.activo && { opacity: 0.5 }]}
                disabled={!tecnico.activo}
                onPress={() => tomarTicket(item.id)}
              >
                <Text style={styles.textoAtender}>Resolver</Text>
              </Pressable>
            )}
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default Paso4

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f1f5f9' },
  cabecera: { padding: 18, backgroundColor: '#0284c7' },
  subtitulo: { fontSize: 11, fontWeight: '700', color: '#bae6fd', letterSpacing: 0.5 },
  titulo: { fontSize: 20, fontWeight: '700', color: '#ffffff', marginTop: 2 },
  tarjetaPerfil: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    margin: 14,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    gap: 12,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  nombreTecnico: { fontSize: 16, fontWeight: 'bold', color: '#0f172a' },
  rolTecnico: { fontSize: 13, color: '#64748b', marginTop: 2 },
  estadoGuardia: { fontSize: 11, fontWeight: '700', marginTop: 6 },
  enGuardia: { color: '#15803d' },
  fueraGuardia: { color: '#94a3b8' },
  botonGuardia: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8 },
  botonSalir: { backgroundColor: '#fee2e2' },
  botonEntrar: { backgroundColor: '#e0f2fe' },
  textoBotonGuardia: { fontSize: 12, fontWeight: '700', color: '#0f172a' },
  seccionTickets: { paddingHorizontal: 14, paddingBottom: 6 },
  tituloSeccion: { fontSize: 14, fontWeight: '700', color: '#334155' },
  lista: { paddingHorizontal: 14, paddingBottom: 24, gap: 10 },
  tarjetaTicket: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  infoTicket: { flex: 1, gap: 4 },
  filaCodigo: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  codigo: { fontSize: 14, fontWeight: '700', color: '#0284c7' },
  badge: { fontSize: 10, fontWeight: '700', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  badgeCritico: { backgroundColor: '#fee2e2', color: '#b91c1c' },
  badgeNormal: { backgroundColor: '#f1f5f9', color: '#475569' },
  asunto: { fontSize: 13, fontWeight: '600', color: '#0f172a' },
  botonAtender: { backgroundColor: '#0284c7', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6 },
  textoAtender: { color: '#ffffff', fontSize: 12, fontWeight: '700' },
  textoResuelto: { color: '#15803d', fontSize: 12, fontWeight: '700' },
})
