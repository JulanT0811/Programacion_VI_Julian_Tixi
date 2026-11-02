// app/paso5_mp_Tixi_Julian.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { useState } from 'react'
import { Alert, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

const REGEX_IPV4 = /^(\d{1,3}\.){3}\d{1,3}$/

type CamposFormulario = {
  solicitante: string
  ipEquipo: string
  prioridad: string
}

type ErroresFormulario = {
  solicitante: string | null
  ipEquipo: string | null
  prioridad: string | null
}

function validar(campos: CamposFormulario): ErroresFormulario {
  const errores: ErroresFormulario = { solicitante: null, ipEquipo: null, prioridad: null }

  // Solicitante: obligatorio, al menos 3 caracteres
  if (campos.solicitante.trim().length === 0) {
    errores.solicitante = 'El nombre del solicitante es obligatorio'
  } else if (campos.solicitante.trim().length < 3) {
    errores.solicitante = 'Debe tener al menos 3 caracteres'
  }

  // IP del equipo: formato IPv4 válido
  if (campos.ipEquipo.trim().length === 0) {
    errores.ipEquipo = 'La dirección IP del equipo es obligatoria'
  } else if (!REGEX_IPV4.test(campos.ipEquipo.trim())) {
    errores.ipEquipo = 'Formato inválido (ej. 192.168.1.10)'
  }

  // Prioridad: número entre 1 (Baja) y 5 (Crítica)
  const nivel = Number(campos.prioridad)
  if (campos.prioridad.trim().length === 0) {
    errores.prioridad = 'La prioridad SLA es obligatoria'
  } else if (!Number.isInteger(nivel) || nivel < 1 || nivel > 5) {
    errores.prioridad = 'Nivel inválido (debe ser del 1 al 5)'
  }

  return errores
}

function hayErrores(errores: ErroresFormulario): boolean {
  return Object.values(errores).some((e) => e !== null)
}

export function Paso5() {
  const [campos, setCampos] = useState<CamposFormulario>({
    solicitante: '',
    ipEquipo: '',
    prioridad: '3',
  })
  const [errores, setErrores] = useState<ErroresFormulario>({
    solicitante: null,
    ipEquipo: null,
    prioridad: null,
  })

  function actualizar(campo: keyof CamposFormulario, valor: string) {
    setCampos((prev) => ({ ...prev, [campo]: valor }))
    if (errores[campo]) {
      setErrores((prev) => ({ ...prev, [campo]: null }))
    }
  }

  function onSubmit() {
    const nuevosErrores = validar(campos)
    setErrores(nuevosErrores)
    if (hayErrores(nuevosErrores)) return

    Alert.alert(
      'Ticket Registrado',
      `Solicitante: ${campos.solicitante}\nIP Equipo: ${campos.ipEquipo}\nPrioridad SLA: Nivel ${campos.prioridad}`,
      [
        {
          text: 'Registrar otro',
          onPress: () => {
            setCampos({ solicitante: '', ipEquipo: '', prioridad: '3' })
            setErrores({ solicitante: null, ipEquipo: null, prioridad: null })
          },
        },
      ]
    )
  }

  return (
    <SafeAreaView style={styles.contenedor}>
      <View style={styles.cabecera}>
        <Text style={styles.subtitulo}>REGISTRO CON VALIDACIÓN</Text>
        <Text style={styles.titulo}>Nuevo Ticket de Incidencia</Text>
      </View>

      <ScrollView contentContainerStyle={styles.formulario} keyboardShouldPersistTaps="handled">
        {/* Solicitante */}
        <View style={styles.grupoCampo}>
          <Text style={styles.etiqueta}>Nombre del Solicitante *</Text>
          <TextInput
            style={[styles.campo, errores.solicitante ? styles.campoError : null]}
            value={campos.solicitante}
            onChangeText={(v) => actualizar('solicitante', v)}
            placeholder="ej. Ana Morales (Finanzas)"
          />
          {errores.solicitante && <Text style={styles.textoError}>{errores.solicitante}</Text>}
        </View>

        {/* IP del Equipo */}
        <View style={styles.grupoCampo}>
          <Text style={styles.etiqueta}>IP del Equipo Afectado *</Text>
          <TextInput
            style={[styles.campo, errores.ipEquipo ? styles.campoError : null]}
            value={campos.ipEquipo}
            onChangeText={(v) => actualizar('ipEquipo', v)}
            placeholder="192.168.1.15"
            keyboardType="numeric"
          />
          {errores.ipEquipo && <Text style={styles.textoError}>{errores.ipEquipo}</Text>}
        </View>

        {/* Prioridad */}
        <View style={styles.grupoCampo}>
          <Text style={styles.etiqueta}>Prioridad de Atención SLA (1 al 5) *</Text>
          <TextInput
            style={[styles.campo, errores.prioridad ? styles.campoError : null]}
            value={campos.prioridad}
            onChangeText={(v) => actualizar('prioridad', v)}
            placeholder="1: Baja, 5: Crítica"
            keyboardType="number-pad"
          />
          {errores.prioridad && <Text style={styles.textoError}>{errores.prioridad}</Text>}
        </View>

        <Pressable
          style={({ pressed }) => [styles.boton, pressed && { opacity: 0.8 }]}
          onPress={onSubmit}
        >
          <Text style={styles.textoBoton}>Registrar Ticket en Mesa de Ayuda</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Paso5

const styles = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#f1f5f9' },
  cabecera: {
    padding: 18,
    backgroundColor: '#0284c7',
  },
  subtitulo: {
    fontSize: 11,
    fontWeight: '700',
    color: '#bae6fd',
    letterSpacing: 0.5,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginTop: 2,
  },
  formulario: { padding: 18, paddingBottom: 40 },
  grupoCampo: { marginBottom: 16 },
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
  campoError: { borderColor: '#ef4444', backgroundColor: '#fef2f2' },
  textoError: { fontSize: 12, color: '#ef4444', marginTop: 4 },
  boton: {
    backgroundColor: '#0284c7',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
    elevation: 3,
  },
  textoBoton: { color: '#ffffff', fontWeight: '700', fontSize: 16 },
})
