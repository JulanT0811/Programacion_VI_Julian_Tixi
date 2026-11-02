// app/paso6_mp_Tixi_Julian.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { useState } from 'react'
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

export function Paso6() {
  const [asunto, setAsunto] = useState('')
  const [solicitante, setSolicitante] = useState('')
  const [departamento, setDepartamento] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [errorBanner, setErrorBanner] = useState<string | null>(null)

  function onRegistrar() {
    if (!asunto.trim() || !solicitante.trim() || !departamento.trim()) {
      setErrorBanner('Por favor completa los campos principales de la incidencia')
      return
    }
    setErrorBanner(null)
    Alert.alert(
      'Incidencia Registrada con Éxito',
      `Ticket generado para ${solicitante} (${departamento})\nAsunto: ${asunto}\nSLA Asignado: 4 horas.`
    )
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#f1f5f9' }}
      behavior={Platform.select({ ios: 'padding', android: 'height' })}
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 24 })}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.cabecera}>
          <Text style={styles.subtitulo}>KEYBOARD AVOIDING VIEW</Text>
          <Text style={styles.cabeceraTitle}>Reporte de Avería e Incidencia</Text>
          <Text style={styles.cabeceraPlataforma}>
            {Platform.OS === 'ios' ? 'iOS · padding mode' : 'Android · height mode'}
          </Text>
        </View>

        <ScrollView
          contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
          keyboardShouldPersistTaps="handled"
        >
          {/* Asunto */}
          <View style={{ marginBottom: 14 }}>
            <Text style={styles.etiqueta}>Asunto del Problema *</Text>
            <TextInput
              style={styles.campo}
              value={asunto}
              onChangeText={setAsunto}
              placeholder="ej. Bloqueo en inicio de sesión ERP"
            />
          </View>

          {/* Solicitante */}
          <View style={{ marginBottom: 14 }}>
            <Text style={styles.etiqueta}>Nombre del Solicitante *</Text>
            <TextInput
              style={styles.campo}
              value={solicitante}
              onChangeText={setSolicitante}
              placeholder="ej. Ana Morales"
            />
          </View>

          {/* Departamento */}
          <View style={{ marginBottom: 14 }}>
            <Text style={styles.etiqueta}>Departamento / Área *</Text>
            <TextInput
              style={styles.campo}
              value={departamento}
              onChangeText={setDepartamento}
              placeholder="ej. Contabilidad / Piso 2"
            />
          </View>

          {/* Descripción detallada */}
          <Text style={styles.etiqueta}>Detalle Técnico del Problema (opcional)</Text>
          <TextInput
            style={[
              styles.campo,
              { height: 85, textAlignVertical: 'top', paddingTop: 10, marginBottom: 16 },
            ]}
            value={descripcion}
            onChangeText={setDescripcion}
            placeholder="Describe síntomas, mensajes de error observados o código..."
            multiline
            numberOfLines={3}
          />

          {errorBanner && (
            <View style={styles.bannerError}>
              <Text style={styles.bannerErrorTexto}>{errorBanner}</Text>
            </View>
          )}

          <Pressable
            style={({ pressed }) => [styles.boton, pressed && { opacity: 0.8 }]}
            onPress={onRegistrar}
          >
            <Text style={styles.textoBoton}>Enviar Ticket a Soporte Técnico</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default Paso6

const styles = StyleSheet.create({
  cabecera: {
    backgroundColor: '#0284c7',
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  subtitulo: {
    fontSize: 11,
    fontWeight: '700',
    color: '#bae6fd',
    letterSpacing: 0.5,
  },
  cabeceraTitle: { fontSize: 19, fontWeight: '700', color: '#ffffff', marginTop: 2 },
  cabeceraPlataforma: { fontSize: 11, color: '#e0f2fe', marginTop: 2 },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#334155', marginBottom: 4 },
  campo: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#0f172a',
  },
  bannerError: {
    backgroundColor: '#fee2e2',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderLeftWidth: 3,
    borderLeftColor: '#ef4444',
  },
  bannerErrorTexto: { fontSize: 13, color: '#b91c1c', fontWeight: '500' },
  boton: {
    backgroundColor: '#0284c7',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 4,
    elevation: 3,
  },
  textoBoton: { color: '#ffffff', fontWeight: '700', fontSize: 16 },
})
