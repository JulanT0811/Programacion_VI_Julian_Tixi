// app/(tabs)/ajustes.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { router, Stack } from 'expo-router'
import { Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native'
import { useState } from 'react'

export default function TabAjustes() {
  const [notificaciones, setNotificaciones] = useState(true)
  const [sonidoSLA, setSonidoSLA] = useState(true)
  const [modoOscuro, setModoOscuro] = useState(false)

  return (
    <ScrollView style={styles.contenedor} contentContainerStyle={styles.contenido}>
      <Stack.Screen options={{ title: 'Ajustes HelpDesk' }} />

      <View style={styles.cabecera}>
        <Text style={styles.subtitulo}>CONFIGURACIÓN DEL SISTEMA</Text>
        <Text style={styles.titulo}>Preferencias de Mesa de Ayuda</Text>
        <Text style={styles.tecnico}>Operador: Julián Oswaldo Tixi Páez</Text>
      </View>

      {/* Perfil del Técnico */}
      <View style={styles.tarjeta}>
        <Text style={styles.seccionTitulo}>PERFIL DEL ESPECIALISTA</Text>
        <View style={styles.filaInfo}>
          <Text style={styles.etiqueta}>Técnico Responsable</Text>
          <Text style={styles.valor}>Julián Oswaldo Tixi Páez</Text>
        </View>
        <View style={styles.filaInfo}>
          <Text style={styles.etiqueta}>Rol del Sistema</Text>
          <Text style={styles.valor}>Administrador de Infraestructura L3</Text>
        </View>
        <View style={styles.filaInfo}>
          <Text style={styles.etiqueta}>Zona Horaria</Text>
          <Text style={styles.valor}>America/Guayaquil (UTC-5)</Text>
        </View>
      </View>

      {/* Opciones del Monitor de Red */}
      <View style={styles.tarjeta}>
        <Text style={styles.seccionTitulo}>PARÁMETROS DE SONDEO & SLA</Text>
        <View style={styles.filaInfo}>
          <Text style={styles.etiqueta}>Intervalo de Ping</Text>
          <Text style={styles.valor}>Cada 15 segundos</Text>
        </View>
        <View style={styles.filaInfo}>
          <Text style={styles.etiqueta}>Umbral Alerta CPU</Text>
          <Text style={styles.valor}>&gt; 90% sostenido</Text>
        </View>
        <View style={styles.filaInfo}>
          <Text style={styles.etiqueta}>Umbral Alerta Disco</Text>
          <Text style={styles.valor}>&gt; 85% capacidad</Text>
        </View>
      </View>

      {/* Switches de configuración */}
      <View style={styles.tarjeta}>
        <Text style={styles.seccionTitulo}>NOTIFICACIONES & ALERTAS</Text>

        <View style={styles.filaSwitch}>
          <Text style={styles.etiquetaSwitch}>Notificaciones Push SLA</Text>
          <Switch
            value={notificaciones}
            onValueChange={setNotificaciones}
            thumbColor={notificaciones ? '#0284c7' : '#94a3b8'}
          />
        </View>

        <View style={styles.filaSwitch}>
          <Text style={styles.etiquetaSwitch}>Alarma Sonora en Caída Crítica</Text>
          <Switch
            value={sonidoSLA}
            onValueChange={setSonidoSLA}
            thumbColor={sonidoSLA ? '#0284c7' : '#94a3b8'}
          />
        </View>

        <View style={styles.filaSwitch}>
          <Text style={styles.etiquetaSwitch}>Tema Oscuro de Consola</Text>
          <Switch
            value={modoOscuro}
            onValueChange={setModoOscuro}
            thumbColor={modoOscuro ? '#0284c7' : '#94a3b8'}
          />
        </View>
      </View>

      <Pressable
        style={styles.botonVolver}
        onPress={() => router.push('/' as any)}
      >
        <Text style={styles.textoBotonVolver}>⬅ Ir al Menú de Pasos 1 a 5</Text>
      </Pressable>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f1f5f9' },
  contenido: { padding: 16, gap: 14, paddingBottom: 32 },
  cabecera: {
    backgroundColor: '#0284c7',
    padding: 18,
    borderRadius: 12,
  },
  subtitulo: { fontSize: 11, fontWeight: '700', color: '#bae6fd', letterSpacing: 0.5 },
  titulo: { fontSize: 20, fontWeight: '700', color: '#ffffff', marginTop: 2 },
  tecnico: { fontSize: 13, color: '#e0f2fe', marginTop: 4 },
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#0f172a',
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  seccionTitulo: {
    fontSize: 11,
    fontWeight: '700',
    color: '#64748b',
    letterSpacing: 0.8,
  },
  filaInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
  },
  etiqueta: { fontSize: 13, color: '#475569', fontWeight: '500' },
  valor: { fontSize: 13, color: '#0f172a', fontWeight: '600' },
  filaSwitch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 2,
  },
  etiquetaSwitch: { fontSize: 13, color: '#334155', fontWeight: '500' },
  botonVolver: {
    backgroundColor: '#0f172a',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 6,
  },
  textoBotonVolver: { color: '#ffffff', fontWeight: '600', fontSize: 14 },
})