// app/paso3_tickets_mp_Tixi_Julian.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { router } from 'expo-router'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'

export interface ServidorTicket {
  id: string
  nombre: string
  ip: string
  estado: 'activo' | 'degradado' | 'error'
  servicio: string
}

export const SERVIDORES_SOPORTE: ServidorTicket[] = [
  { id: '1', nombre: 'srv-web-01',     ip: '10.0.2.10', estado: 'activo',   servicio: 'Portal de Tickets HelpDesk' },
  { id: '2', nombre: 'srv-db-primary', ip: '10.0.2.20', estado: 'activo',   servicio: 'Base de Datos PostgreSQL' },
  { id: '3', nombre: 'srv-cache-01',   ip: '10.0.2.30', estado: 'degradado',servicio: 'Servidor Caché Redis' },
  { id: '4', nombre: 'srv-worker-01',  ip: '10.0.2.40', estado: 'error',    servicio: 'Cola de Tareas y Notificaciones' },
  { id: '5', nombre: 'srv-storage-nas',ip: '10.0.2.50', estado: 'activo',   servicio: 'Almacenamiento de Backups' },
]

const COLOR_ESTADO: Record<ServidorTicket['estado'], string> = {
  activo:    '#15803d',
  degradado: '#b45309',
  error:     '#b91c1c',
}

export function Paso3Tickets() {
  return (
    <View style={styles.contenedor}>
      <View style={styles.cabecera}>
        <Text style={styles.subtitulo}>RUTAS DINÁMICAS · EXPO ROUTER</Text>
        <Text style={styles.titulo}>Nodos e Infraestructura de Soporte</Text>
      </View>

      <FlatList
        data={SERVIDORES_SOPORTE}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [styles.tarjeta, pressed && styles.tarjetaPresionada]}
            onPress={() => router.push(`/servidores/${item.id}` as any)}
          >
            <View style={styles.fila}>
              <Text style={styles.nombre}>{item.nombre}</Text>
              <View style={[styles.badge, { backgroundColor: COLOR_ESTADO[item.estado] }]}>
                <Text style={styles.badgeTexto}>{item.estado.toUpperCase()}</Text>
              </View>
            </View>
            <Text style={styles.servicio}>{item.servicio}</Text>
            <Text style={styles.ip}>{item.ip} · Clic para ver detalle (push)</Text>
          </Pressable>
        )}
      />
    </View>
  )
}

export default Paso3Tickets

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f1f5f9' },
  cabecera: { padding: 18, backgroundColor: '#0284c7' },
  subtitulo: { fontSize: 11, fontWeight: '700', color: '#bae6fd', letterSpacing: 0.5 },
  titulo: { fontSize: 20, fontWeight: '700', color: '#ffffff', marginTop: 2 },
  lista: { padding: 14, gap: 10 },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  tarjetaPresionada: { backgroundColor: '#f8fafc', borderColor: '#0284c7' },
  fila: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  nombre: { fontSize: 16, fontWeight: 'bold', color: '#0f172a' },
  servicio: { fontSize: 13, color: '#475569', marginTop: 4 },
  ip: { fontSize: 12, color: '#64748b', marginTop: 4 },
  badge: { borderRadius: 6, paddingVertical: 3, paddingHorizontal: 8 },
  badgeTexto: { fontSize: 10, fontWeight: '700', color: '#ffffff' },
})
