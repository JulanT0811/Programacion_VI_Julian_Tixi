// app/paso3EncabezadoSeccion_mp_Tixi_Julian.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { StyleSheet, Text, View } from 'react-native'

export function Paso3EncabezadoSeccion({ titulo, nivel }: { titulo: string; nivel: string }) {
  return (
    <View style={styles.encabezado}>
      <Text style={styles.encabezadoTitulo}>{titulo}</Text>
      <Text style={styles.encabezadoNivel}>{nivel}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e0f2fe',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#0284c7',
    marginTop: 8,
  },
  encabezadoTitulo: { fontSize: 13, fontWeight: '700', color: '#0369a1' },
  encabezadoNivel: { fontSize: 11, color: '#0284c7', fontWeight: '600' },
})
