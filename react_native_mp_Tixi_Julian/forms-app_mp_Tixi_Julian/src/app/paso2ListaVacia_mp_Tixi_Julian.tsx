// app/paso2ListaVacia_mp_Tixi_Julian.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { StyleSheet, Text, View } from 'react-native'

export function Paso2ListaVacia() {
  return (
    <View style={styles.vacio}>
      <Text style={styles.vacioIcono}>✓</Text>
      <Text style={styles.vacioTexto}>No hay incidencias técnicas pendientes</Text>
      <Text style={styles.vacioSub}>Todos los tickets asignados han sido atendidos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  vacio: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    gap: 6,
  },
  vacioIcono: { fontSize: 32, color: '#15803d', fontWeight: 'bold' },
  vacioTexto: { fontSize: 16, fontWeight: '700', color: '#334155', textAlign: 'center' },
  vacioSub: { fontSize: 13, color: '#64748b', textAlign: 'center' },
})
