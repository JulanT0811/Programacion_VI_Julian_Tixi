// app/servidores/index.tsx
import { Link, router, type Href } from 'expo-router'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'

interface Servidor {
  id: string
  nombre: string
  ip: string
  estado: 'activo' | 'degradado' | 'error'
}

const SERVIDORES: Servidor[] = [
  { id: '1', nombre: 'web-01',      ip: '10.0.2.10', estado: 'activo'   },
  { id: '2', nombre: 'db-primary',  ip: '10.0.2.20', estado: 'activo'   },
  { id: '3', nombre: 'cache-01',    ip: '10.0.2.30', estado: 'degradado' },
  { id: '4', nombre: 'worker-01',   ip: '10.0.2.40', estado: 'error'    },
  { id: '5', nombre: 'storage-nas', ip: '10.0.2.50', estado: 'activo'   },
]

const COLOR_ESTADO: Record<Servidor['estado'], string> = {
  activo:    '#2e7d32',
  degradado: '#e65100',
  error:     '#c62828',
}

export default function ListaServidores() {
  return (
    <View style={styles.contenedor}>
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
            <Text style={styles.ip}>{item.ip}</Text>
          </Pressable>
        )}
      />

      {/* Alternativa declarativa — un Link que lleva al primer servidor */}
      <Link href={'/servidores/1' as Href} asChild>
            <Pressable style={styles.enlaceContenedor}>
                <Text style={styles.enlaceDirecto}>
                Ir directo a web-01 (Link declarativo)
                </Text>
            </Pressable>
            </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  lista:      { padding: 16, gap: 10 },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    gap: 6,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  tarjetaPresionada: { backgroundColor: '#e3f2fd' },
  fila:       { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  nombre:     { fontSize: 16, fontWeight: '600', color: '#1a1a1a' },
  ip:         { fontSize: 13, color: '#1565c0', fontFamily: 'monospace' },
  enlaceContenedor: {
    margin: 16,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  badge: {
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeTexto:      { color: '#fff', fontSize: 11, fontWeight: '700' },
  enlaceDirecto: {
    textAlign: 'center',
    padding: 12,
    color: '#1565c0',
    fontSize: 14,
  },
})