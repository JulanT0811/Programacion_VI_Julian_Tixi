import { useState } from 'react'
import { Alert, Pressable, SafeAreaView, ScrollView, TextInput,StyleSheet,Text, View } from 'react-native'


const REGEX_IPV4 = /^(\d{1,3}\.){3}\d{1,3}$/

type CamposFormulario = {
  base: string
  altura: string
  profundidad: string
}

type ErroresFormulario = {
  base: string | null
  altura: string | null
  profundidad: string | null
}

function validar(campos: CamposFormulario): ErroresFormulario {
  const errores: ErroresFormulario = { base: null, altura: null, profundidad: null }

  // base: obligatorio, al menos 2 caracteres, sin espacios
  if (campos.base.trim().length === 0) {
    errores.base = 'El base es obligatorio'
  } else if (campos.base.trim().length < 2) {
    errores.base = 'El base debe tener al menos 2 caracteres'
  } else if (/\s/.test(campos.base)) {
    errores.base = 'El base no puede contener espacios'
  }

  // IP: formato IPv4 básico
  if (campos.altura.trim().length === 0) {
    errores.altura = 'La dirección altura es obligatoria'
  } else if (!REGEX_IPV4.test(campos.altura.trim())) {
    errores.altura = 'Formato inválido (ej. 192.168.1.10)'
  }

  // profundidad: número entre 1 y 65535
  const numeroPuerto = Number(campos.profundidad)
  if (campos.profundidad.trim().length === 0) {
    errores.profundidad = 'El puerto es obligatorio'
  } else if (!Number.isInteger(numeroPuerto) || numeroPuerto < 1 || numeroPuerto > 65535) {
    errores.profundidad = 'profundidad inválido (1 – 65 535)'
  }

  return errores
}

function hayErrores(errores: ErroresFormulario): boolean {
  return Object.values(errores).some((e) => e !== null)
}

function CampoConError({
  etiqueta,
  children,
  error,
}: {
  etiqueta: string
  children: React.ReactNode
  error: string | null
}) {
  return (
    <View style={styles5.campoWrapper}>
      <Text style={styles5.etiqueta}>{etiqueta}</Text>
      {children}
      {error !== null && <Text style={styles5.textoError}>{error}</Text>}
    </View>
  )
}

export function Paso5Volumen() {
  const [campos, setCampos] = useState<CamposFormulario>({
    base: '',
    altura: '',
    profundidad: '22',
  })
  const [errores, setErrores] = useState<ErroresFormulario>({
    base: null,
    altura: null,
    profundidad: null,
  })
  const [enviado, setEnviado] = useState(false)

  function actualizarCampo(campo: keyof CamposFormulario, valor: string) {
    setCampos((prev) => ({ ...prev, [campo]: valor }))
    // Borra el error del campo mientras el usuario escribe (UX más amigable)
    if (errores[campo] !== null) {
      setErrores((prev) => ({ ...prev, [campo]: null }))
    }
  }

  function onSubmit() {
    const nuevosErrores = validar(campos)
    setErrores(nuevosErrores)
    if (hayErrores(nuevosErrores)) return

    setEnviado(true)
    Alert.alert(
      'Servidor agregado',
      `${campos.base} · ${campos.altura}:${campos.profundidad}`,
      [
        {
          text: 'Agregar otro',
          onPress: () => {
            setCampos({ base: '', altura: '', profundidad: '22' })
            setErrores({ base: null, altura: null, profundidad: null })
            setEnviado(false)
          },
        },
      ]
    )
  }

  return (
    <SafeAreaView style={styles5.contenedor}>
      <ScrollView
        contentContainerStyle={styles5.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles5.titulo}>Agregar servidor</Text>
        <Text style={styles5.subtitulo}>
          Los campos marcados con * son obligatorios
        </Text>

        <CampoConError etiqueta="base del servidor *" error={errores.base}>
          <TextInput
            style={[
              styles5.campo,
              errores.base !== null && styles5.campoError,
            ]}
            value={campos.base}
            onChangeText={(v) => actualizarCampo('base', v)}
            placeholder="ej. web-03"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
          />
        </CampoConError>

        <CampoConError etiqueta="Dirección altura *" error={errores.altura}>
          <TextInput
            style={[
              styles5.campo,
              errores.altura !== null && styles5.campoError,
            ]}
            value={campos.altura}
            onChangeText={(v) => actualizarCampo('altura', v)}
            placeholder="192.168.1.10"
            keyboardType="numeric"
            returnKeyType="next"
          />
        </CampoConError>

        <CampoConError etiqueta="profundidad *" error={errores.profundidad}>
          <TextInput
            style={[
              styles5.campo,
              errores.profundidad !== null && styles5.campoError,
            ]}
            value={campos.profundidad}
            onChangeText={(v) => actualizarCampo('profundidad', v)}
            placeholder="22"
            keyboardType="number-pad"
            returnKeyType="done"
            onSubmitEditing={onSubmit}
          />
        </CampoConError>

        <Pressable
          style={({ pressed }) => [
            styles5.botonEnviar,
            pressed && styles5.botonEnviarPresionado,
            enviado && styles5.botonEnviarExito,
          ]}
          onPress={onSubmit}
        >
          <Text style={styles5.textoBoton}>
            {enviado ? '✓ Enviado' : 'Agregar servidor'}
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles5 = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f0f4f8' },
  scroll: { padding: 20, paddingBottom: 40 },
  titulo: { fontSize: 20, fontWeight: '700', color: '#1565c0', marginBottom: 4 },
  subtitulo: { fontSize: 12, color: '#888', marginBottom: 20 },
  campoWrapper: { marginBottom: 16 },
  etiqueta: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 4 },
  campo: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1a1a1a',
  },
  campoError: {
    borderColor: '#e53935',
    backgroundColor: '#fff8f8',
  },
  textoError: {
    fontSize: 12,
    color: '#e53935',
    marginTop: 4,
  },
  botonEnviar: {
    backgroundColor: '#1565c0',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  botonEnviarPresionado: { backgroundColor: '#0d47a1' },
  botonEnviarExito: { backgroundColor: '#2e7d32' },
  textoBoton: { color: '#fff', fontWeight: '700', fontSize: 16 },
})