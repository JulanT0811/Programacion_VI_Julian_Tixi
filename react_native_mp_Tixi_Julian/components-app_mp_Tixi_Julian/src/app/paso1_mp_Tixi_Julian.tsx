// app/paso1.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { StyleSheet, Text, View } from 'react-native'

// ─── Paso 1 — Props tipadas: TarjetaTicket ───────────────────────────

interface TarjetaTicketProps {
  codigo: string
  usuario: string
  departamento: string
  categoria: string
  slaHoras: number
  prioridad?: 'Baja' | 'Media' | 'Alta' | 'Crítica'
}

function TarjetaTicket({
  codigo,
  usuario,
  departamento,
  categoria,
  slaHoras,
  prioridad = 'Media',
}: TarjetaTicketProps) {
  const colorPrioridad =
    prioridad === 'Crítica' ? '#b91c1c' :
    prioridad === 'Alta' ? '#c2410c' :
    prioridad === 'Media' ? '#15803d' : '#475569'

  return (
    <View style={styles.tarjeta}>
      <View style={styles.filaEncabezado}>
        <Text style={styles.codigoTicket}>{codigo}</Text>
        <Text style={[styles.badgePrioridad, { color: colorPrioridad, borderColor: colorPrioridad }]}>
          {prioridad.toUpperCase()}
        </Text>
      </View>
      <Text style={styles.usuarioTicket}>{usuario} · {departamento}</Text>
      <Text style={styles.categoriaTicket}>Incidencia: {categoria}</Text>
      <Text style={styles.slaTicket}>Tiempo límite de resolución (SLA): {slaHoras} horas</Text>
    </View>
  )
}

export function Paso1() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Cola de Tickets — Soporte Técnico</Text>
      <TarjetaTicket
        codigo="TCK-101"
        usuario="Ana Morales"
        departamento="Finanzas"
        categoria="Caída de enlace VPN y ERP"
        slaHoras={2}
        prioridad="Crítica"
      />
      <TarjetaTicket
        codigo="TCK-102"
        usuario="Carlos Ruiz"
        departamento="Operaciones"
        categoria="Falla en tarjeta de red en estación"
        slaHoras={4}
        prioridad="Alta"
      />
      <TarjetaTicket
        codigo="TCK-103"
        usuario="Diana Ortiz"
        departamento="Recursos Humanos"
        categoria="Restablecimiento de credenciales Active Directory"
        slaHoras={8}
        prioridad="Media"
      />
    </View>
  )
}

export default Paso1

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
  },
  encabezado: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#0f172a',
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },
  filaEncabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  codigoTicket: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0284c7',
  },
  badgePrioridad: {
    fontSize: 11,
    fontWeight: '700',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  usuarioTicket: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 4,
  },
  categoriaTicket: {
    fontSize: 13,
    color: '#475569',
    marginBottom: 4,
  },
  slaTicket: {
    fontSize: 12,
    color: '#64748b',
    fontWeight: '500',
  },
})