// app/paso3_mp_Tixi_Julian.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { TicketGlobal } from './paso1_mp_Tixi_Julian'

export function Paso3() {
  const [tickets, setTickets] = useState<TicketGlobal[]>([])
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [ultimaSincronizacion, setUltimaSincronizacion] = useState<string>('Nunca')

  const cargarTicketsDesdeServidor = useCallback(() => {
    setCargando(true)
    setError(null)

    // Simula petición asíncrona a la API REST de HelpDesk
    setTimeout(() => {
      const exito = true // Simulación exitosa
      if (exito) {
        setTickets([
          { id: '1', codigo: 'TCK-501', asunto: 'Falla en conmutador de telefonía IP', prioridad: 'Alta', resuelto: false },
          { id: '2', codigo: 'TCK-502', asunto: 'Instalación de certificados SSL en portal', prioridad: 'Crítica', resuelto: false },
          { id: '3', codigo: 'TCK-503', asunto: 'Creación de cuenta para nuevo colaborador', prioridad: 'Baja', resuelto: true },
          { id: '4', codigo: 'TCK-504', asunto: 'Reemplazo de disco en NAS corporativo', prioridad: 'Media', resuelto: true },
        ])
        const ahora = new Date()
        setUltimaSincronizacion(
          `${ahora.getHours().toString().padStart(2, '0')}:${ahora.getMinutes().toString().padStart(2, '0')}:${ahora.getSeconds().toString().padStart(2, '0')}`
        )
      } else {
        setError('Error al sincronizar con el servidor de HelpDesk')
      }
      setCargando(false)
    }, 1200)
  }, [])

  useEffect(() => {
    cargarTicketsDesdeServidor()
  }, [cargarTicketsDesdeServidor])

  return (
    <SafeAreaView style={styles.contenedor}>
      <View style={styles.cabecera}>
        <Text style={styles.subtitulo}>ACCIONES ASÍNCRONAS EN ESTADO GLOBAL</Text>
        <Text style={styles.titulo}>Sincronización con API HelpDesk</Text>
      </View>

      <View style={styles.barraControl}>
        <View style={{ flex: 1 }}>
          <Text style={styles.textoControl}>Última sincronización: {ultimaSincronizacion}</Text>
          <Text style={styles.subtextoControl}>{tickets.length} incidencias en caché</Text>
        </View>
        <Pressable
          style={[styles.botonSincronizar, cargando && { opacity: 0.6 }]}
          onPress={cargarTicketsDesdeServidor}
          disabled={cargando}
        >
          <Text style={styles.textoBoton}>
            {cargando ? 'Sincronizando...' : '↻ Actualizar'}
          </Text>
        </Pressable>
      </View>

      {cargando ? (
        <View style={styles.centrado}>
          <ActivityIndicator size="large" color="#0284c7" />
          <Text style={styles.textoCargando}>Consultando servidor central de tickets...</Text>
        </View>
      ) : error ? (
        <View style={styles.centrado}>
          <Text style={styles.textoError}>{error}</Text>
          <Pressable style={styles.botonReintentar} onPress={cargarTicketsDesdeServidor}>
            <Text style={styles.textoReintentar}>Reintentar</Text>
          </Pressable>
        </View>
      ) : (
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
                {item.resuelto ? '✓ RESUELTO' : '● EN CURSO'}
              </Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  )
}

export default Paso3

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f1f5f9' },
  cabecera: { padding: 18, backgroundColor: '#0284c7' },
  subtitulo: { fontSize: 11, fontWeight: '700', color: '#bae6fd', letterSpacing: 0.5 },
  titulo: { fontSize: 20, fontWeight: '700', color: '#ffffff', marginTop: 2 },
  barraControl: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    gap: 10,
  },
  textoControl: { fontSize: 13, fontWeight: '700', color: '#0f172a' },
  subtextoControl: { fontSize: 12, color: '#64748b' },
  botonSincronizar: {
    backgroundColor: '#0284c7',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  textoBoton: { color: '#ffffff', fontWeight: '700', fontSize: 13 },
  centrado: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, gap: 10 },
  textoCargando: { fontSize: 14, color: '#64748b', fontWeight: '500' },
  textoError: { fontSize: 14, color: '#ef4444', fontWeight: '600', textAlign: 'center' },
  botonReintentar: {
    backgroundColor: '#0284c7',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 8,
  },
  textoReintentar: { color: '#ffffff', fontWeight: 'bold' },
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
