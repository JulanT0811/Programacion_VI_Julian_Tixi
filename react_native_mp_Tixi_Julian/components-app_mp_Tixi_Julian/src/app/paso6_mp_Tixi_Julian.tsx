// app/paso6.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { useState } from 'react'
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'

// ─── Paso 6 — Pantalla Completa: Centro de Control de Soporte Técnico ───

interface MetricaProps {
  titulo: string
  valor: string
  color: string
}

function MetricaCard({ titulo, valor, color }: MetricaProps) {
  return (
    <View style={[estilos6.metricaCard, { borderLeftColor: color }]}>
      <Text style={estilos6.metricaValor}>{valor}</Text>
      <Text style={estilos6.metricaTitulo}>{titulo}</Text>
    </View>
  )
}

export function Paso6() {
  const [ticketAtendido, setTicketAtendido] = useState(false)

  return (
    <SafeAreaView style={estilos6.contenedor}>
      <ScrollView contentContainerStyle={estilos6.scroll}>
        {/* Encabezado del Técnico */}
        <View style={estilos6.encabezado}>
          <Text style={estilos6.badgeRol}>TÉCNICO ESPECIALISTA IT</Text>
          <Text style={estilos6.nombreTecnico}>Julián Oswaldo Tixi Páez</Text>
          <Text style={estilos6.subtitulo}>Mesa de Ayuda · Nivel 2 de Atención</Text>
        </View>

        {/* Métricas rápidas */}
        <View style={estilos6.metricasGrid}>
          <MetricaCard titulo="Pendientes" valor="4" color="#0284c7" />
          <MetricaCard titulo="En Proceso" valor="2" color="#f59e0b" />
          <MetricaCard titulo="SLA Cumplido" valor="98%" color="#10b981" />
        </View>

        {/* Tarjeta de Ticket Activo */}
        <View style={estilos6.tarjetaActiva}>
          <View style={estilos6.filaTitulo}>
            <Text style={estilos6.ticketId}>#TCK-1042</Text>
            <Text style={estilos6.badgePrioridad}>ALTA PRIORIDAD</Text>
          </View>
          <Text style={estilos6.asuntoTicket}>Falla de autenticación y enlace VPN corporativo</Text>
          <Text style={estilos6.cliente}>Usuario: Ing. Roberto Vélez (Sucursal Norte)</Text>
          <Text style={estilos6.sla}>SLA restante: 1h 45m para vencimiento</Text>

          <View style={estilos6.acciones}>
            <Pressable
              style={[
                estilos6.botonAccion,
                ticketAtendido ? estilos6.botonCompletado : estilos6.botonPrimario,
              ]}
              onPress={() => {
                setTicketAtendido(true)
                Alert.alert(
                  'Atención de Incidencia',
                  'Iniciando sesión de soporte remoto con la estación del usuario...'
                )
              }}
            >
              <Text style={estilos6.textoBoton}>
                {ticketAtendido ? '✓ Ticket en Atención' : 'Iniciar Soporte Remoto'}
              </Text>
            </Pressable>

            <Pressable
              style={estilos6.botonSecundario}
              onPress={() =>
                Alert.alert(
                  'Escalamiento',
                  'Ticket escalado al Administrador de Redes (Nivel 3).'
                )
              }
            >
              <Text style={estilos6.textoBotonSecundario}>Escalar a Nivel 3</Text>
            </Pressable>
          </View>
        </View>

        {/* Registro de Auditoría */}
        <View style={estilos6.seccionHistorial}>
          <Text style={estilos6.tituloHistorial}>Historial de Actividades Recientes</Text>
          <Text style={estilos6.itemHistorial}>• 19:40 — Conexión SSH validada en firewall perimetral.</Text>
          <Text style={estilos6.itemHistorial}>• 18:15 — Ticket #1040 cerrado: Cambio de tóner en impresora.</Text>
          <Text style={estilos6.itemHistorial}>• 17:00 — Backup automático de base de datos verificado.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Paso6

const estilos6 = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  scroll: {
    padding: 20,
    paddingTop: 45,
    gap: 16,
  },
  encabezado: {
    backgroundColor: '#1e293b',
    padding: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#334155',
    gap: 4,
  },
  badgeRol: {
    fontSize: 11,
    fontWeight: '700',
    color: '#38bdf8',
    letterSpacing: 0.5,
  },
  nombreTecnico: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f8fafc',
  },
  subtitulo: {
    fontSize: 13,
    color: '#94a3b8',
  },
  metricasGrid: {
    flexDirection: 'row',
    gap: 10,
  },
  metricaCard: {
    flex: 1,
    backgroundColor: '#1e293b',
    padding: 12,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderWidth: 1,
    borderColor: '#334155',
  },
  metricaValor: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f8fafc',
  },
  metricaTitulo: {
    fontSize: 11,
    color: '#94a3b8',
    marginTop: 2,
  },
  tarjetaActiva: {
    backgroundColor: '#1e293b',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#38bdf8',
    gap: 8,
  },
  filaTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ticketId: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#38bdf8',
  },
  badgePrioridad: {
    fontSize: 10,
    fontWeight: '700',
    color: '#f87171',
    backgroundColor: '#450a0a',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  asuntoTicket: {
    fontSize: 15,
    fontWeight: '600',
    color: '#f8fafc',
  },
  cliente: {
    fontSize: 13,
    color: '#94a3b8',
  },
  sla: {
    fontSize: 12,
    color: '#f59e0b',
    fontWeight: '500',
  },
  acciones: {
    marginTop: 10,
    gap: 10,
  },
  botonAccion: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonPrimario: {
    backgroundColor: '#0284c7',
  },
  botonCompletado: {
    backgroundColor: '#059669',
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  botonSecundario: {
    backgroundColor: '#334155',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotonSecundario: {
    color: '#cbd5e1',
    fontSize: 13,
    fontWeight: '500',
  },
  seccionHistorial: {
    backgroundColor: '#1e293b',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#334155',
    gap: 6,
  },
  tituloHistorial: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#e2e8f0',
    marginBottom: 4,
  },
  itemHistorial: {
    fontSize: 12,
    color: '#94a3b8',
    lineHeight: 18,
  },
})
