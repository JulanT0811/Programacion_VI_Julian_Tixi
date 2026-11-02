// app/paso5Volumen_mp_Tixi_Julian.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { useState } from 'react'
import { Alert, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

type CamposServicio = {
  horasDiagnostico: string
  horasReparacion: string
  repuestosCosto: string
}

type ErroresServicio = {
  horasDiagnostico: string | null
  horasReparacion: string | null
  repuestosCosto: string | null
}

function validar(campos: CamposServicio): ErroresServicio {
  const errores: ErroresServicio = {
    horasDiagnostico: null,
    horasReparacion: null,
    repuestosCosto: null,
  }

  const hDiag = Number(campos.horasDiagnostico)
  if (!campos.horasDiagnostico.trim()) {
    errores.horasDiagnostico = 'Las horas de diagnóstico son obligatorias'
  } else if (isNaN(hDiag) || hDiag < 0) {
    errores.horasDiagnostico = 'Debe ser un número válido'
  }

  const hRep = Number(campos.horasReparacion)
  if (!campos.horasReparacion.trim()) {
    errores.horasReparacion = 'Las horas de reparación son obligatorias'
  } else if (isNaN(hRep) || hRep < 0) {
    errores.horasReparacion = 'Debe ser un número válido'
  }

  const rep = Number(campos.repuestosCosto)
  if (!campos.repuestosCosto.trim()) {
    errores.repuestosCosto = 'El costo de repuestos es obligatorio (0 si no aplica)'
  } else if (isNaN(rep) || rep < 0) {
    errores.repuestosCosto = 'Debe ser un valor monetario positivo'
  }

  return errores
}

function hayErrores(e: ErroresServicio): boolean {
  return Object.values(e).some((err) => err !== null)
}

export function Paso5Volumen() {
  const [campos, setCampos] = useState<CamposServicio>({
    horasDiagnostico: '',
    horasReparacion: '',
    repuestosCosto: '0',
  })
  const [errores, setErrores] = useState<ErroresServicio>({
    horasDiagnostico: null,
    horasReparacion: null,
    repuestosCosto: null,
  })

  function actualizar(campo: keyof CamposServicio, valor: string) {
    setCampos((prev) => ({ ...prev, [campo]: valor }))
    if (errores[campo]) {
      setErrores((prev) => ({ ...prev, [campo]: null }))
    }
  }

  function onCalcular() {
    const nuevosErrores = validar(campos)
    setErrores(nuevosErrores)
    if (hayErrores(nuevosErrores)) return

    const totalHoras = (Number(campos.horasDiagnostico) || 0) + (Number(campos.horasReparacion) || 0)
    const costoManoObra = totalHoras * 35.0
    const totalFactura = costoManoObra + (Number(campos.repuestosCosto) || 0)

    Alert.alert(
      'Cotización de Soporte Técnico',
      `Horas Totales: ${totalHoras.toFixed(1)} hrs ($35/hr = $${costoManoObra.toFixed(2)})\nRepuestos: $${Number(campos.repuestosCosto).toFixed(2)}\nTotal Final: $${totalFactura.toFixed(2)}`
    )
  }

  return (
    <SafeAreaView style={styles.contenedor}>
      <View style={styles.cabecera}>
        <Text style={styles.subtitulo}>COTIZADOR DE SERVICIO TÉCNICO</Text>
        <Text style={styles.titulo}>Presupuesto de Mantenimiento</Text>
      </View>

      <ScrollView contentContainerStyle={styles.formulario} keyboardShouldPersistTaps="handled">
        {/* Horas Diagnóstico */}
        <View style={styles.grupoCampo}>
          <Text style={styles.etiqueta}>Horas de Diagnóstico *</Text>
          <TextInput
            style={[styles.campo, errores.horasDiagnostico ? styles.campoError : null]}
            value={campos.horasDiagnostico}
            onChangeText={(v) => actualizar('horasDiagnostico', v)}
            placeholder="ej. 1.5"
            keyboardType="numeric"
          />
          {errores.horasDiagnostico && <Text style={styles.textoError}>{errores.horasDiagnostico}</Text>}
        </View>

        {/* Horas Reparación */}
        <View style={styles.grupoCampo}>
          <Text style={styles.etiqueta}>Horas de Reparación *</Text>
          <TextInput
            style={[styles.campo, errores.horasReparacion ? styles.campoError : null]}
            value={campos.horasReparacion}
            onChangeText={(v) => actualizar('horasReparacion', v)}
            placeholder="ej. 2.0"
            keyboardType="numeric"
          />
          {errores.horasReparacion && <Text style={styles.textoError}>{errores.horasReparacion}</Text>}
        </View>

        {/* Costo Repuestos */}
        <View style={styles.grupoCampo}>
          <Text style={styles.etiqueta}>Costo de Repuestos / Materiales ($) *</Text>
          <TextInput
            style={[styles.campo, errores.repuestosCosto ? styles.campoError : null]}
            value={campos.repuestosCosto}
            onChangeText={(v) => actualizar('repuestosCosto', v)}
            placeholder="0"
            keyboardType="numeric"
          />
          {errores.repuestosCosto && <Text style={styles.textoError}>{errores.repuestosCosto}</Text>}
        </View>

        <Pressable
          style={({ pressed }) => [styles.boton, pressed && { opacity: 0.8 }]}
          onPress={onCalcular}
        >
          <Text style={styles.textoBoton}>Calcular Presupuesto Total</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Paso5Volumen

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
