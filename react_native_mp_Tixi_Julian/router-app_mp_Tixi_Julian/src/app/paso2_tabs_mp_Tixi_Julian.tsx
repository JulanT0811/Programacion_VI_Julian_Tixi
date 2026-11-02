// app/paso2_tabs_mp_Tixi_Julian.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { router } from 'expo-router'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export function Paso2Tabs() {
  return (
    <View style={styles.contenedor}>
      <View style={styles.cabecera}>
        <Text style={styles.subtitulo}>TABS DE NAVEGACIÓN · EXPO ROUTER</Text>
        <Text style={styles.titulo}>Pestañas del Sistema de Soporte</Text>
      </View>

      <View style={styles.cuerpo}>
        <View style={styles.tarjetaTab}>
          <Text style={styles.iconoTab}>🖥</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.nombreTab}>Tab 1: Inicio (Dashboard)</Text>
            <Text style={styles.descTab}>Resumen del clúster, servidores activos y SLA promedio.</Text>
          </View>
        </View>

        <View style={styles.tarjetaTab}>
          <Text style={styles.iconoTab}>🔔</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.nombreTab}>Tab 2: Alertas Críticas (Badge: 3)</Text>
            <Text style={styles.descTab}>Alertas de disco, memoria y caída de servidores.</Text>
          </View>
        </View>

        <View style={styles.tarjetaTab}>
          <Text style={styles.iconoTab}>⚙</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.nombreTab}>Tab 3: Ajustes HelpDesk</Text>
            <Text style={styles.descTab}>Intervalos de sondeo ping, zona horaria y notificaciones.</Text>
          </View>
        </View>

        <Pressable
          style={styles.botonAbrir}
          onPress={() => router.push('/(tabs)' as any)}
        >
          <Text style={styles.textoBoton}>Abrir Navegación por Tabs</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Paso2Tabs

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f1f5f9' },
  cabecera: { padding: 18, backgroundColor: '#0284c7' },
  subtitulo: { fontSize: 11, fontWeight: '700', color: '#bae6fd', letterSpacing: 0.5 },
  titulo: { fontSize: 20, fontWeight: '700', color: '#ffffff', marginTop: 2 },
  cuerpo: { padding: 18, gap: 12 },
  tarjetaTab: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    gap: 14,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  iconoTab: { fontSize: 28 },
  nombreTab: { fontSize: 15, fontWeight: '700', color: '#0f172a' },
  descTab: { fontSize: 12, color: '#64748b', marginTop: 2 },
  botonAbrir: {
    backgroundColor: '#0284c7',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
    elevation: 3,
  },
  textoBoton: { color: '#ffffff', fontWeight: 'bold', fontSize: 15 },
})
