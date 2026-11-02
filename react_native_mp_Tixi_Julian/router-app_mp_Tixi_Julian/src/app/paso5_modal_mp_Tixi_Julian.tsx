// app/paso5_modal_mp_Tixi_Julian.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { router } from 'expo-router'
import { useState } from 'react'
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

export function Paso5Modal() {
  const [host, setHost] = useState('srv-worker-01')
  const [solicitante, setSolicitante] = useState('Dpto. Contabilidad / Ing. Tixi')
  const [prioridad, setPrioridad] = useState<'baja' | 'media' | 'alta' | 'crítica'>('alta')
  const [descripcion, setDescripcion] = useState('Saturación de almacenamiento al 96% en cola de correos.')
  const [creadoExitoso, setCreadoExitoso] = useState(false)

  function registrarTicket() {
    if (!host.trim() || !descripcion.trim()) {
      Alert.alert('Campos incompletos', 'Por favor llena los campos obligatorios.')
      return
    }
    setCreadoExitoso(true)
    setTimeout(() => {
      setCreadoExitoso(false)
      Alert.alert(
        'Ticket Registrado',
        `Ticket de Soporte generado con éxito para ${host}.\nPrioridad: ${prioridad.toUpperCase()}\nTécnico a cargo: Julián Oswaldo Tixi Páez`
      )
    }, 600)
  }

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.contenido}>
      <View style={styles.cabecera}>
        <Text style={styles.subtitulo}>PRESENTACIÓN MODAL · EXPO ROUTER</Text>
        <Text style={styles.titulo}>Crear Incidencia / Ticket de Soporte</Text>
        <Text style={styles.autor}>Mesa de Ayuda · Julián Oswaldo Tixi Páez</Text>
      </View>

      <View style={styles.formulario}>
        <View style={styles.grupo}>
          <Text style={styles.etiqueta}>Nodo o Servidor Afectado *</Text>
          <TextInput
            style={styles.input}
            value={host}
            onChangeText={setHost}
            placeholder="ej. srv-bd-01 o PC-SOPORTE-12"
            placeholderTextColor="#94a3b8"
          />
        </View>

        <View style={styles.grupo}>
          <Text style={styles.etiqueta}>Solicitante / Departamento *</Text>
          <TextInput
            style={styles.input}
            value={solicitante}
            onChangeText={setSolicitante}
            placeholder="Nombre o área requirente"
            placeholderTextColor="#94a3b8"
          />
        </View>

        <View style={styles.grupo}>
          <Text style={styles.etiqueta}>Nivel de Prioridad SLA</Text>
          <View style={styles.prioridadesFila}>
            {(['baja', 'media', 'alta', 'crítica'] as const).map((p) => {
              const activa = prioridad === p
              return (
                <Pressable
                  key={p}
                  style={[
                    styles.botonPrioridad,
                    activa && styles.botonPrioridadActivo,
                    p === 'crítica' && activa && { backgroundColor: '#b91c1c' },
                    p === 'alta' && activa && { backgroundColor: '#ea580c' },
                  ]}
                  onPress={() => setPrioridad(p)}
                >
                  <Text style={[styles.textoPrioridad, activa && styles.textoPrioridadActivo]}>
                    {p.toUpperCase()}
                  </Text>
                </Pressable>
              )
            })}
          </View>
        </View>

        <View style={styles.grupo}>
          <Text style={styles.etiqueta}>Descripción Técnica de la Falla *</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={descripcion}
            onChangeText={setDescripcion}
            placeholder="Detalla los síntomas o códigos de error detectados..."
            placeholderTextColor="#94a3b8"
            multiline
            numberOfLines={4}
          />
        </View>

        <Pressable
          style={({ pressed }) => [styles.botonGuardar, pressed && styles.botonPresionado]}
          onPress={registrarTicket}
        >
          <Text style={styles.textoBotonGuardar}>
            {creadoExitoso ? '✓ Generando Ticket...' : '🎫 Registrar Ticket de Soporte'}
          </Text>
        </Pressable>

        <Pressable
          style={styles.botonModalReal}
          onPress={() => router.push('/(modals)/agregar' as any)}
        >
          <Text style={styles.textoBotonModalReal}>
            Probar Apertura en Modal Nativo de Expo Router
          </Text>
        </Pressable>

        <Pressable style={styles.botonCerrar} onPress={() => router.back()}>
          <Text style={styles.textoBotonCerrar}>Cerrar o volver (router.back)</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default Paso5Modal

const styles = StyleSheet.create({
  scroll: { flex: 1, backgroundColor: '#0f172a' },
  contenido: { padding: 20, gap: 16, paddingBottom: 40 },
  cabecera: {
    backgroundColor: '#1e293b',
    padding: 18,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#0284c7',
  },
  subtitulo: { fontSize: 11, fontWeight: '700', color: '#38bdf8', letterSpacing: 0.5 },
  titulo: { fontSize: 19, fontWeight: '700', color: '#f8fafc', marginTop: 2 },
  autor: { fontSize: 12, color: '#94a3b8', marginTop: 4 },
  formulario: {
    backgroundColor: '#1e293b',
    padding: 18,
    borderRadius: 12,
    gap: 16,
    borderWidth: 1,
    borderColor: '#334155',
  },
  grupo: { gap: 6 },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#cbd5e1' },
  input: {
    backgroundColor: '#0f172a',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#f8fafc',
    borderWidth: 1,
    borderColor: '#334155',
  },
  textArea: { height: 90, textAlignVertical: 'top' },
  prioridadesFila: { flexDirection: 'row', gap: 6 },
  botonPrioridad: {
    flex: 1,
    paddingVertical: 8,
    backgroundColor: '#0f172a',
    borderRadius: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  botonPrioridadActivo: { backgroundColor: '#0284c7', borderColor: '#38bdf8' },
  textoPrioridad: { fontSize: 10, fontWeight: '700', color: '#94a3b8' },
  textoPrioridadActivo: { color: '#ffffff' },
  botonGuardar: {
    backgroundColor: '#0284c7',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  botonPresionado: { backgroundColor: '#0369a1' },
  textoBotonGuardar: { color: '#ffffff', fontWeight: '700', fontSize: 15 },
  botonModalReal: {
    backgroundColor: '#334155',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
  },
  textoBotonModalReal: { color: '#38bdf8', fontWeight: '600', fontSize: 13 },
  botonCerrar: { alignItems: 'center', paddingVertical: 8 },
  textoBotonCerrar: { color: '#94a3b8', fontSize: 13 },
})
