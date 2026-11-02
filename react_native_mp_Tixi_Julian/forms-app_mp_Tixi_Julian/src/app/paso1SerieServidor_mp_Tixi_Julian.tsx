// app/paso1SerieServidor_mp_Tixi_Julian.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { StyleSheet, Text, View } from 'react-native'
import { TecnicoGuardia } from './paso1Serie_mp_Tixi_Julian'

export function Paso1SerieServidor({ tecnico }: { tecnico: TecnicoGuardia }) {
  return (
    <View style={styles.fila}>
      <View style={styles.info}>
        <Text style={styles.nombre}>{tecnico.nombre}</Text>
        <Text style={styles.especialidad}>{tecnico.especialidad} · Ext: {tecnico.extension}</Text>
      </View>
      <View style={[styles.badge, tecnico.disponible ? styles.badgeDisponible : styles.badgeOcupado]}>
        <Text style={[styles.textoBadge, tecnico.disponible ? styles.textoDisponible : styles.textoOcupado]}>
          {tecnico.disponible ? 'DISPONIBLE' : 'EN ATENCIÓN'}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginHorizontal: 12,
    marginTop: 8,
    borderRadius: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  info: { flex: 1 },
  nombre: { fontSize: 15, fontWeight: '700', color: '#0f172a' },
  especialidad: { fontSize: 13, color: '#64748b', marginTop: 2 },
  badge: {
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  badgeDisponible: { backgroundColor: '#dcfce7' },
  badgeOcupado: { backgroundColor: '#fef3c7' },
  textoBadge: { fontSize: 11, fontWeight: '700' },
  textoDisponible: { color: '#15803d' },
  textoOcupado: { color: '#b45309' },
})
