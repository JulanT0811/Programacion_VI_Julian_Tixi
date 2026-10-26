// app/paso2.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { ReactNode } from 'react'
import { StyleSheet, Text, View } from 'react-native'

// ─── Paso 2 — children y composición ────────────────────────────────

interface CardProps {
  titulo: string
  subtitulo?: string
  children: ReactNode
}

function Card({ titulo, subtitulo, children }: CardProps) {
  return (
    <View style={estilos2.card}>
      <View style={estilos2.cardCabecera}>
        <Text style={estilos2.cardTitulo}>{titulo}</Text>
        {subtitulo && (
          <Text style={estilos2.cardSubtitulo}>{subtitulo}</Text>
        )}
      </View>
      <View style={estilos2.cardCuerpo}>{children}</View>
    </View>
  )
}

function FilaInfo({ etiqueta, valor }: { etiqueta: string; valor: string }) {
  return (
    <View style={estilos2.fila}>
      <Text style={estilos2.etiqueta}>{etiqueta}</Text>
      <Text style={estilos2.valor}>{valor}</Text>
    </View>
  )
}

export function Paso2() {
  return (
    <View style={estilos2.fondo}>
      <Text style={estilos2.titulo}>Detalle de Ticket de Soporte</Text>

      <Card titulo="Ticket #TCK-1042" subtitulo="Incidencia en Servidor de Base de Datos">
        <FilaInfo etiqueta="Solicitante" valor="Ing. Roberto Vélez" />
        <FilaInfo etiqueta="Equipo" valor="Dell PowerEdge R740" />
        <FilaInfo etiqueta="Técnico" valor="Julián Tixi (Nivel 2)" />
        <FilaInfo etiqueta="Diagnóstico" valor="Alerta en disco RAID 5" />
        <FilaInfo etiqueta="SLA Restante" valor="1h 45 min" />
      </Card>

      <Card titulo="Acciones Técnicas" subtitulo="Procedimiento de resolución">
        <FilaInfo etiqueta="Tipo de Soporte" valor="En sitio / Data Center" />
        <FilaInfo etiqueta="Repuesto" valor="Disco SAS 1.2TB 10K" />
        <FilaInfo etiqueta="Estado Actual" valor="En atención técnica" />
      </Card>
    </View>
  )
}

export default Paso2

const estilos2 = StyleSheet.create({
  fondo: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    gap: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#0f172a',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  cardCabecera: {
    backgroundColor: '#0284c7',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 2,
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  cardSubtitulo: {
    fontSize: 12,
    color: '#bae6fd',
  },
  cardCuerpo: {
    padding: 14,
    gap: 10,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  etiqueta: {
    fontSize: 13,
    color: '#64748b',
    fontWeight: '500',
  },
  valor: {
    fontSize: 13,
    color: '#0f172a',
    fontWeight: '600',
  },
})
