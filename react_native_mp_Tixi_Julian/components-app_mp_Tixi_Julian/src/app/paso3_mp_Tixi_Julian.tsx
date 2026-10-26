// app/paso3.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { StyleSheet, Text, View } from 'react-native'

// ─── Paso 3 — Props opcionales y BadgeEstado ─────────────────────────

type EstadoTicket = 'abierto' | 'en_progreso' | 'escalado' | 'resuelto' | 'critico'

interface BadgeEstadoProps {
  estado: EstadoTicket
  tamano?: number          // opcional — valor por defecto: 12
  mostrarIcono?: boolean   // opcional — valor por defecto: false
}

const COLOR_ESTADO: Record<EstadoTicket, { fondo: string; texto: string }> = {
  abierto:     { fondo: '#e0f2fe', texto: '#0369a1' },
  en_progreso: { fondo: '#fef3c7', texto: '#b45309' },
  escalado:    { fondo: '#f3e8ff', texto: '#7e22ce' },
  resuelto:    { fondo: '#dcfce7', texto: '#15803d' },
  critico:     { fondo: '#fee2e2', texto: '#b91c1c' },
}

const ICONO_ESTADO: Record<EstadoTicket, string> = {
  abierto:     '●',
  en_progreso: '◐',
  escalado:    '▲',
  resuelto:    '✓',
  critico:     '✕',
}

function BadgeEstado({
  estado,
  tamano = 12,
  mostrarIcono = false,
}: BadgeEstadoProps) {
  const colores = COLOR_ESTADO[estado]
  return (
    <View style={[estilos3.badge, { backgroundColor: colores.fondo }]}>
      {mostrarIcono && (
        <Text style={[estilos3.icono, { color: colores.texto, fontSize: tamano }]}>
          {ICONO_ESTADO[estado]}{' '}
        </Text>
      )}
      <Text style={[estilos3.textoBadge, { color: colores.texto, fontSize: tamano }]}>
        {estado.replace('_', ' ').toUpperCase()}
      </Text>
    </View>
  )
}

interface FilaTicketProps {
  codigo: string
  solicitante: string
  estado: EstadoTicket
  tiempoEsperaMin?: number // opcional
}

function FilaTicket({ codigo, solicitante, estado, tiempoEsperaMin }: FilaTicketProps) {
  return (
    <View style={estilos3.fila}>
      <View style={estilos3.infoIzq}>
        <Text style={estilos3.codigoTicket}>{codigo}</Text>
        <Text style={estilos3.solicitante}>{solicitante}</Text>
      </View>
      <View style={estilos3.infoDer}>
        <BadgeEstado estado={estado} mostrarIcono />
        {tiempoEsperaMin !== undefined && (
          <Text style={estilos3.tiempoEspera}>Espera: {tiempoEsperaMin} min</Text>
        )}
      </View>
    </View>
  )
}

export function Paso3() {
  return (
    <View style={estilos3.fondo}>
      <Text style={estilos3.titulo}>Monitoreo de Tickets por Estado</Text>

      <View style={estilos3.contenedorTickets}>
        <FilaTicket
          codigo="TCK-101"
          solicitante="Ana Morales (Finanzas)"
          estado="critico"
          tiempoEsperaMin={15}
        />
        <FilaTicket
          codigo="TCK-102"
          solicitante="Carlos Ruiz (Operaciones)"
          estado="escalado"
          tiempoEsperaMin={45}
        />
        <FilaTicket
          codigo="TCK-103"
          solicitante="Diana Ortiz (RRHH)"
          estado="en_progreso"
          tiempoEsperaMin={90}
        />
        <FilaTicket
          codigo="TCK-104"
          solicitante="Luis Andrade (Ventas)"
          estado="abierto"
        />
        <FilaTicket
          codigo="TCK-105"
          solicitante="Mónica Silva (Logística)"
          estado="resuelto"
        />
      </View>
    </View>
  )
}

export default Paso3

const estilos3 = StyleSheet.create({
  fondo: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8fafc',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 20,
    textAlign: 'center',
  },
  contenedorTickets: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    gap: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#0f172a',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  infoIzq: {
    gap: 4,
  },
  codigoTicket: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0284c7',
  },
  solicitante: {
    fontSize: 13,
    color: '#475569',
  },
  infoDer: {
    alignItems: 'flex-end',
    gap: 4,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
  },
  icono: {
    fontWeight: 'bold',
  },
  textoBadge: {
    fontWeight: '700',
  },
  tiempoEspera: {
    fontSize: 11,
    color: '#94a3b8',
  },
})