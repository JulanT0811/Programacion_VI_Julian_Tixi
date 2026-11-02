// app/paso1_inicio_mp_Tixi_Julian.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { Link, router, type Href } from 'expo-router'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export function Paso1Inicio() {
  return (
    <View style={styles.contenedor}>
      <View style={styles.badge}>
        <Text style={styles.badgeTexto}>SISTEMA DE SOPORTE TÉCNICO · JULIÁN TIXI</Text>
      </View>
      <Text style={styles.titulo}>Centro de Control HelpDesk</Text>
      <Text style={styles.subtitulo}>Gestión centralizada de tickets, servidores y alertas SLA</Text>

      <View style={styles.menu}>
        <Pressable
          style={styles.botonNavegar}
          onPress={() => router.push('/(tabs)' as any)}
        >
          <Text style={styles.textoBoton}>📊 Ir al Panel con Tabs (Dashboard)</Text>
        </Pressable>

        <Pressable
          style={[styles.botonNavegar, { backgroundColor: '#0284c7' }]}
          onPress={() => router.push('/servidores' as any)}
        >
          <Text style={styles.textoBoton}>🖥 Lista de Nodos y Tickets (Ruta dinámica)</Text>
        </Pressable>

        <Pressable
          style={[styles.botonNavegar, { backgroundColor: '#0f172a' }]}
          onPress={() => router.push('/(modals)/agregar' as any)}
        >
          <Text style={styles.textoBoton}>➕ Abrir Nuevo Ticket (Modal)</Text>
        </Pressable>

        <Link href={'/servidores/1' as Href} asChild>
          <Pressable style={styles.enlaceLink}>
            <Text style={styles.textoLink}>🔗 Link declarativo: Ver Detalle Servidor #1</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  )
}

export default Paso1Inicio

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    padding: 24,
    gap: 12,
  },
  badge: {
    backgroundColor: '#e0f2fe',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 12,
  },
  badgeTexto: {
    fontSize: 11,
    fontWeight: '700',
    color: '#0284c7',
    letterSpacing: 0.5,
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0f172a',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 12,
  },
  menu: {
    width: '100%',
    gap: 10,
  },
  botonNavegar: {
    backgroundColor: '#1e293b',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 2,
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  enlaceLink: {
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 4,
  },
  textoLink: {
    fontSize: 13,
    color: '#0284c7',
    fontWeight: '600',
  },
})
