// app/paso1.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { StyleSheet, Text, View } from 'react-native'

export function Paso1() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.badge}>SISTEMA DE SOPORTE TÉCNICO</Text>
      <Text style={styles.titulo}>Mesa de Ayuda & HelpDesk</Text>
      <Text style={styles.subtitulo}>Ticket #1042 — Falla de Conectividad en Switch</Text>
      <Text style={styles.detalle}>Prioridad: Alta · SLA: 4 horas · Técnico: Julián Tixi</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
    padding: 24,
    gap: 10,
  },
  badge: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0284c7',
    backgroundColor: '#e0f2fe',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    letterSpacing: 0.5,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#334155',
    textAlign: 'center',
  },
  detalle: {
    fontSize: 13,
    color: '#64748b',
    textAlign: 'center',
  },
})