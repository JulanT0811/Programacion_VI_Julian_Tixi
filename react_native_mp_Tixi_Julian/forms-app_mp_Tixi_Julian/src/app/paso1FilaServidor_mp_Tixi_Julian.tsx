// app/paso1FilaServidor_mp_Tixi_Julian.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { StyleSheet, Text, View } from 'react-native'
import { TicketSoporte } from './paso1_mp_Tixi_Julian'

export function Paso1FilaServidor({ ticket }: { ticket: TicketSoporte }) {
  const esActivo = ticket.estado === 'ABIERTO' || ticket.estado === 'EN PROCESO'

  return (
    <View style={styles.fila}>
      <View style={styles.info}>
        <View style={styles.filaCodigo}>
          <Text style={styles.codigo}>{ticket.codigo}</Text>
          <Text style={styles.departamento}>• {ticket.departamento}</Text>
        </View>
        <Text style={styles.asunto}>{ticket.asunto}</Text>
        <Text style={styles.solicitante}>Solicitante: {ticket.solicitante}</Text>
      </View>
      <View
        style={[
          styles.estado,
          esActivo ? styles.estadoActivo : styles.estadoCerrado,
        ]}
      >
        <Text
          style={[
            styles.textoEstado,
            esActivo ? styles.textoActivo : styles.textoCerrado,
          ]}
        >
          {ticket.estado}
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
  info: { flex: 1, gap: 2 },
  filaCodigo: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  codigo: { fontSize: 15, fontWeight: '700', color: '#0284c7' },
  departamento: { fontSize: 12, color: '#64748b', fontWeight: '500' },
  asunto: { fontSize: 14, fontWeight: '600', color: '#0f172a' },
  solicitante: { fontSize: 12, color: '#475569', marginTop: 2 },
  estado: {
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  estadoActivo: { backgroundColor: '#e0f2fe' },
  estadoCerrado: { backgroundColor: '#dcfce7' },
  textoEstado: { fontSize: 11, fontWeight: '700' },
  textoActivo: { color: '#0369a1' },
  textoCerrado: { color: '#15803d' },
})
