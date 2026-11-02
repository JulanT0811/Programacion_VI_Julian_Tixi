// app/(tabs)/index.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { router, Stack } from 'expo-router'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function TabInicio() {
  return (
    <ScrollView style={styles.contenedor} contentContainerStyle={styles.contenido}>
      <Stack.Screen options={{ title: 'Panel HelpDesk' }} />

      <View style={styles.banner}>
        <Text style={styles.subtitulo}>MESA DE AYUDA & SOPORTE TÉCNICO</Text>
        <Text style={styles.titulo}>Centro de Control de Infraestructura</Text>
        <Text style={styles.tecnico}>Administrador: Ing. Julián Oswaldo Tixi Páez</Text>
      </View>

      {/* Tarjetas de métricas en cuadrícula */}
      <View style={styles.grid}>
        <View style={styles.tarjetaMetrica}>
          <Text style={styles.metricaValor}>8 / 9</Text>
          <Text style={styles.metricaEtiqueta}>Servidores Online</Text>
          <Text style={styles.metricaEstado}>✓ 98.8% Disponibilidad</Text>
        </View>

        <View style={[styles.tarjetaMetrica, { borderColor: '#fca5a5' }]}>
          <Text style={[styles.metricaValor, { color: '#dc2626' }]}>3</Text>
          <Text style={styles.metricaEtiqueta}>Alertas Críticas</Text>
          <Text style={[styles.metricaEstado, { color: '#dc2626' }]}>⚠ Requieren acción</Text>
        </View>

        <View style={styles.tarjetaMetrica}>
          <Text style={[styles.metricaValor, { color: '#0284c7' }]}>24</Text>
          <Text style={styles.metricaEtiqueta}>Tickets Resueltos Hoy</Text>
          <Text style={styles.metricaEstado}>Tiempo medio: 18 min</Text>
        </View>

        <View style={styles.tarjetaMetrica}>
          <Text style={[styles.metricaValor, { color: '#16a34a' }]}>99.94%</Text>
          <Text style={styles.metricaEtiqueta}>SLA Global Mensual</Text>
          <Text style={styles.metricaEstado}>Cumplimiento óptimo</Text>
        </View>
      </View>

      {/* Acciones Rápidas */}
      <View style={styles.seccionAcciones}>
        <Text style={styles.tituloSeccion}>ACCIONES DEL TÉCNICO</Text>

        <Pressable
          style={styles.botonAccion}
          onPress={() => router.push('/servidores' as any)}
        >
          <Text style={styles.textoBotonAccion}>🖥 Inspeccionar Nodos y Servidores</Text>
        </Pressable>

        <Pressable
          style={[styles.botonAccion, { backgroundColor: '#0284c7' }]}
          onPress={() => router.push('/(modals)/agregar' as any)}
        >
          <Text style={styles.textoBotonAccion}>➕ Registrar Nueva Incidencia / Ticket</Text>
        </Pressable>

        <Pressable
          style={[styles.botonAccion, { backgroundColor: '#475569' }]}
          onPress={() => router.push('/' as any)}
        >
          <Text style={styles.textoBotonAccion}>⬅ Volver al Menú Principal de Pasos</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },
  contenido: {
    padding: 16,
    gap: 16,
    paddingBottom: 32,
  },
  banner: {
    backgroundColor: '#0284c7',
    borderRadius: 14,
    padding: 20,
    gap: 4,
  },
  subtitulo: {
    fontSize: 11,
    fontWeight: '700',
    color: '#bae6fd',
    letterSpacing: 0.5,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
  },
  tecnico: {
    fontSize: 13,
    color: '#e0f2fe',
    marginTop: 4,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  tarjetaMetrica: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    gap: 4,
    shadowColor: '#0f172a',
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  metricaValor: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0f172a',
  },
  metricaEtiqueta: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748b',
  },
  metricaEstado: {
    fontSize: 11,
    fontWeight: '600',
    color: '#16a34a',
    marginTop: 2,
  },
  seccionAcciones: {
    gap: 10,
    marginTop: 6,
  },
  tituloSeccion: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748b',
    letterSpacing: 0.8,
  },
  botonAccion: {
    backgroundColor: '#0f172a',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotonAccion: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
})