// app/servidores/index.tsx — Sistema de Soporte Técnico (Ruta Servidores)
// Alumno: Julián Oswaldo Tixi Páez
import { Link, router, type Href } from 'expo-router'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'

export interface ServidorInfra {
  id: string
  nombre: string
  ip: string
  estado: 'activo' | 'degradado' | 'error'
  servicio: string
}

const SERVIDORES: ServidorInfra[] = [
  { id: '1', nombre: 'srv-web-01', ip: '10.0.2.10', estado: 'activo', servicio: 'Portal de Tickets HelpDesk' },
  { id: '2', nombre: 'srv-db-primary', ip: '10.0.2.20', estado: 'activo', servicio: 'Base de Datos PostgreSQL' },
  { id: '3', nombre: 'srv-cache-01', ip: '10.0.2.30', estado: 'degradado', servicio: 'Servidor Caché Redis' },
  { id: '4', nombre: 'srv-worker-01', ip: '10.0.2.40', estado: 'error', servicio: 'Cola de Tareas y Notificaciones' },
  { id: '5', nombre: 'srv-storage-nas', ip: '10.0.2.50', estado: 'activo', servicio: 'Almacenamiento de Backups' },
]

const COLOR_ESTADO: Record<ServidorInfra['estado'], string> = {
  activo: '#15803d',
  degradado: '#b45309',
  error: '#b91c1c',
}

export default function ListaServidores() {
  return (
    <View style={styles.contenedor}>
      <View style={styles.cabecera}>
        <Text style={styles.subtitulo}>RUTAS DINÁMICAS · EXPO ROUTER</Text>
        <Text style={styles.titulo}>Nodos de Red y Soporte Técnico</Text>
        <Text style={styles.tecnico}>Supervisado por: Julián Oswaldo Tixi Páez</Text>
      </View>

      <FlatList
        data={SERVIDORES}
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
            <View style={styles.filaInferior}>
              <Text style={styles.ip}>{item.ip}</Text>
              <Text style={styles.textoPush}>Ver Métricas (push) →</Text>
            </View>
          </Pressable>
        )}
      />

      <View style={styles.footerAcciones}>
        {/* Link declarativo */}
        <Link href={'/servidores/1' as Href} asChild>
          <Pressable style={styles.enlaceContenedor}>
            <Text style={styles.enlaceDirecto}>
              🔗 Ir directo a srv-web-01 (Link declarativo Expo Router)
            </Text>
          </Pressable>
        </Link>

        <Pressable
          style={styles.botonModal}
          onPress={() => router.push('/(modals)/agregar' as any)}
        >
          <Text style={styles.textoBotonModal}>➕ Agregar Nuevo Nodo (Modal)</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f1f5f9' },
  cabecera: {
    backgroundColor: '#0284c7',
    padding: 18,
    gap: 2,
  },
  subtitulo: { fontSize: 11, fontWeight: '700', color: '#bae6fd', letterSpacing: 0.5 },
  titulo: { fontSize: 20, fontWeight: '700', color: '#ffffff' },
  tecnico: { fontSize: 12, color: '#e0f2fe', marginTop: 2 },
  lista: { padding: 14, gap: 10 },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    gap: 6,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#0f172a',
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  tarjetaPresionada: { backgroundColor: '#f8fafc', borderColor: '#0284c7' },
  fila: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  nombre: { fontSize: 16, fontWeight: '700', color: '#0f172a' },
  servicio: { fontSize: 13, color: '#475569' },
  filaInferior: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  ip: { fontSize: 13, color: '#0284c7', fontFamily: 'monospace', fontWeight: '600' },
  textoPush: { fontSize: 12, color: '#0284c7', fontWeight: '600' },
  badge: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeTexto: { color: '#fff', fontSize: 10, fontWeight: '700' },
  footerAcciones: {
    padding: 14,
    gap: 8,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  enlaceContenedor: {
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cbd5e1',
  },
  enlaceDirecto: {
    color: '#0284c7',
    fontSize: 13,
    fontWeight: '600',
  },
  botonModal: {
    backgroundColor: '#0f172a',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  textoBotonModal: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '600',
  },
})