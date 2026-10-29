// app/index.tsx — añade debajo de styles5
import { useState } from 'react'
import { Alert, KeyboardAvoidingView, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

function Paso6() {
  const [nombre, setNombre] = useState('')
  const [ip, setIp] = useState('')
  const [puerto, setPuerto] = useState('22')
  const [etiqueta, setEtiqueta] = useState('')
  const [error, setError] = useState<string | null>(null)

  function onAgregar() {
    if (!nombre.trim() || !ip.trim() || !puerto.trim()) {
      setError('Completa todos los campos antes de continuar')
      return
    }
    setError(null)
    Alert.alert('Servidor listo', `${nombre} · ${ip}:${puerto}\nEtiqueta: ${etiqueta || 'sin etiqueta'}`)
  }

  return (
    <KeyboardAvoidingView
      style={styles6.raiz}
      behavior={Platform.select({ ios: 'padding', android: 'height' })}
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 24 })}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* Cabecera fija */}
        <View style={styles6.cabecera}>
          <Text style={styles6.cabeceraTitulo}>Nuevo servidor</Text>
          <Text style={styles6.cabeceraPlataforma}>
            {Platform.OS === 'ios' ? 'iOS · padding mode' : 'Android · height mode'}
          </Text>
        </View>

        {/* Cuerpo con scroll — los campos inferiores no quedan tapados */}
        <ScrollView
          contentContainerStyle={styles6.cuerpo}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles6.etiquetaCampo}>Nombre del servidor</Text>
          <TextInput
            style={styles6.campo}
            value={nombre}
            onChangeText={setNombre}
            placeholder="db-replica-02"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={styles6.etiquetaCampo}>Dirección IP</Text>
          <TextInput
            style={styles6.campo}
            value={ip}
            onChangeText={setIp}
            placeholder="10.0.3.22"
            keyboardType="numeric"
          />

          <Text style={styles6.etiquetaCampo}>Puerto SSH</Text>
          <TextInput
            style={styles6.campo}
            value={puerto}
            onChangeText={setPuerto}
            placeholder="22"
            keyboardType="number-pad"
          />

          <Text style={styles6.etiquetaCampo}>Etiqueta (opcional)</Text>
          <TextInput
            style={[styles6.campo, styles6.campoMultilinea]}
            value={etiqueta}
            onChangeText={setEtiqueta}
            placeholder="Réplica de lectura para región SA-East. Mantenimiento: lunes 02:00 UTC"
            multiline
            numberOfLines={3}
            textAlignVertical="top"
          />

          {error !== null && (
            <View style={styles6.bannerError}>
              <Text style={styles6.bannerErrorTexto}>{error}</Text>
            </View>
          )}

          <Pressable
            style={({ pressed }) => [
              styles6.boton,
              pressed && { opacity: 0.8 },
            ]}
            onPress={onAgregar}
          >
            <Text style={styles6.textoBoton}>Agregar servidor</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const styles6 = StyleSheet.create({
  raiz: { flex: 1, backgroundColor: '#f0f4f8' },
  cabecera: {
    backgroundColor: '#1565c0',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  cabeceraTitulo: { fontSize: 18, fontWeight: '700', color: '#fff' },
  cabeceraPlataforma: { fontSize: 11, color: '#90caf9', marginTop: 2 },
  cuerpo: { padding: 20, paddingBottom: 40 },
  etiquetaCampo: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1a1a1a',
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 1 },
      },
      android: { elevation: 1 },
    }),
  },
  campoMultilinea: { height: 80, paddingTop: 10 },
  bannerError: {
    backgroundColor: '#ffebee',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderLeftWidth: 3,
    borderLeftColor: '#e53935',
  },
  bannerErrorTexto: { fontSize: 13, color: '#c62828' },
  boton: {
    backgroundColor: '#1565c0',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  textoBoton: { color: '#fff', fontWeight: '700', fontSize: 16 },
})