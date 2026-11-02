// app/(tabs)/alertas.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { router, Stack } from 'expo-router'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'

interface AlertaSoporte {
  id: string
  nivel: 'crítico' | 'advertencia' | 'info'
  mensaje: string
  host: string
  tiempo: string
  impacto: string
}

const ALERTAS_SOPORTE: AlertaSoporte[] = [
  {
    id: '1',
    nivel: 'crítico',
    mensaje: 'Disco al 96 % en servidor de correo HelpDesk',
    host: 'srv-worker-01',
    tiempo: 'hace 2 min',
    impacto: 'Interrupción en tickets salientes',
  },
  {
    id: '2',
    nivel: 'crítico',
    mensaje: 'CPU sostenida > 94 % en cola de procesos',
    host: 'srv-worker-01',
    tiempo: 'hace 6 min',
    impacto: 'Retraso de asignación a técnicos',
  },
  {
    id: '3',
    nivel: 'advertencia',
    mensaje: 'Consumo de RAM > 78 % en base de datos',
    host: 'srv-db-primary',
    tiempo: 'hace 18 min',
    impacto: 'Latencia en consultas complejas',
  },
  {
    id: '4',
    nivel: 'advertencia',
    mensaje: 'Memoria Caché Redis al 85 % de capacidad',
    host: 'srv-cache-01',
    tiempo: 'hace 35 min',
    impacto: 'Riesgo de desalojo de sesiones',
  },
  {
    id: '5',
    nivel: 'info',
    mensaje: 'Backup de tickets completado con éxito (20 TB)',
    host: 'srv-storage-nas',
    tiempo: 'hace 1 h',
    impacto: 'Integridad de datos verificada',
  },
]

const COLOR_NIVEL: Record<AlertaSoporte['nivel'], string> = {
  crítico: '#dc2626',
  advertencia: '#d97706',
  info: '#0284c7',
}

export default function TabAlertas() {
  return (
    <View style={estAlertas.contenedor}>
      <Stack.Screen options={{ title: 'Alertas Técnicas SLA' }} />

      <View style={estAlertas.cabeceraBarra}>
        <Text style={estAlertas.tituloCabecera}>Monitoreo en Tiempo Real</Text>
        <Text style={estAlertas.subtituloCabecera}>
          Técnico en turno: Julián Oswaldo Tixi Páez
        </Text>
      </View>

      <FlatList
        data={ALERTAS_SOPORTE}
        keyExtractor={(a) => a.id}
        contentContainerStyle={estAlertas.lista}
        renderItem={({ item }) => (
          <Pressable
            style={estAlertas.tarjeta}
            onPress={() => router.push('/servidores/4' as any)}
          >
            <View style={estAlertas.filaSuperior}>
              <View style={[estAlertas.badge, { backgroundColor: COLOR_NIVEL[item.nivel] }]}>
                <Text style={estAlertas.badgeTexto}>{item.nivel.toUpperCase()}</Text>
              </View>
              <Text style={estAlertas.tiempo}>{item.tiempo}</Text>
            </View>

            <Text style={estAlertas.mensaje}>{item.mensaje}</Text>
            <Text style={estAlertas.impacto}>Impacto: {item.impacto}</Text>

            <View style={estAlertas.filaInferior}>
              <Text style={estAlertas.host}>🖥 {item.host}</Text>
              <Text style={estAlertas.enlaceVer}>Ver diagnóstico →</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  )
}

const estAlertas = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f1f5f9' },
  cabeceraBarra: {
    backgroundColor: '#0284c7',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  tituloCabecera: { color: '#ffffff', fontSize: 16, fontWeight: '700' },
  subtituloCabecera: { color: '#e0f2fe', fontSize: 12, marginTop: 2 },
  lista: { padding: 14, gap: 10 },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 14,
    gap: 6,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#0f172a',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  filaSuperior: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badge: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeTexto: { color: '#ffffff', fontSize: 10, fontWeight: '800' },
  tiempo: { fontSize: 12, color: '#64748b' },
  mensaje: { fontSize: 14, color: '#0f172a', fontWeight: '700' },
  impacto: { fontSize: 12, color: '#475569' },
  filaInferior: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
    paddingTop: 6,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#f1f5f9',
  },
  host: { fontSize: 12, color: '#0284c7', fontWeight: '600', fontFamily: 'monospace' },
  enlaceVer: { fontSize: 12, color: '#0284c7', fontWeight: '600' },
})