// app/(tabs)/index.tsx
import { Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function TabInicio() {
  return (
    <View style={styles.contenedor}>
      <Stack.Screen options={{ title: 'Panel de Control' }} />
      <Text style={styles.titulo}>Resumen del clúster</Text>
      <Text style={styles.dato}>8 servidores en línea</Text>
      <Text style={styles.dato}>3 alertas activas</Text>
      <Text style={styles.dato}>Uptime promedio: 99.94 %</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  titulo: { fontSize: 20, fontWeight: '700', color: '#1a237e' },
  dato:   { fontSize: 15, color: '#37474f' },
})