// app/paso3Suma.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { useRef, useState } from 'react'
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

// ─── Paso 3.1 — Cálculo de Horas y Costo de Soporte Técnico ──────────

export default function Paso3Suma() {
  const inputHorasDiagRef = useRef<TextInput>(null)
  const inputHorasRepRef = useRef<TextInput>(null)

  const [horasDiagnostico, setHorasDiagnostico] = useState<string>('')
  const [horasReparacion, setHorasReparacion] = useState<string>('')
  const [totalHoras, setTotalHoras] = useState<number | null>(null)
  const [costoTotal, setCostoTotal] = useState<number | null>(null)

  const TARIFA_HORA = 35.0 // $35 por hora de soporte técnico

  function calcularSumaHoras() {
    const diag = parseFloat(horasDiagnostico) || 0
    const rep = parseFloat(horasReparacion) || 0
    const suma = diag + rep
    setTotalHoras(suma)
    setCostoTotal(suma * TARIFA_HORA)
  }

  function limpiar() {
    setHorasDiagnostico('')
    setHorasReparacion('')
    setTotalHoras(null)
    setCostoTotal(null)
    inputHorasDiagRef.current?.focus()
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.badge}>FACTURACIÓN Y TIEMPOS SLA</Text>
      <Text style={styles.titulo}>Calculadora de Horas de Soporte Técnico</Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Horas de Diagnóstico y Evaluación</Text>
        <TextInput
          ref={inputHorasDiagRef}
          style={styles.input}
          value={horasDiagnostico}
          onChangeText={setHorasDiagnostico}
          placeholder="Ej: 2.5"
          placeholderTextColor="#94a3b8"
          keyboardType="decimal-pad"
          returnKeyType="next"
          onSubmitEditing={() => inputHorasRepRef.current?.focus()}
        />

        <Text style={styles.etiqueta}>Horas de Reparación y Mantenimiento</Text>
        <TextInput
          ref={inputHorasRepRef}
          style={styles.input}
          value={horasReparacion}
          onChangeText={setHorasReparacion}
          placeholder="Ej: 3.0"
          placeholderTextColor="#94a3b8"
          keyboardType="decimal-pad"
          returnKeyType="done"
          onSubmitEditing={calcularSumaHoras}
        />
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          styles.botonActivo,
          pressed && { opacity: 0.8 },
        ]}
        onPress={calcularSumaHoras}
      >
        <Text style={styles.textoBoton}>Calcular Total de Soporte</Text>
      </Pressable>

      {totalHoras !== null && (
        <View style={styles.cajaResultado}>
          <Text style={styles.textoResultado}>Total de Horas Invertidas: {totalHoras} hrs</Text>
          <Text style={styles.subtextoResultado}>Costo Total Estimado ($35/hr): ${costoTotal?.toFixed(2)}</Text>
        </View>
      )}

      <Pressable style={styles.botonLimpiar} onPress={limpiar}>
        <Text style={styles.textoLimpiar}>Restablecer Campos</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f8fafc',
    gap: 14,
  },
  badge: {
    fontSize: 11,
    fontWeight: '700',
    color: '#0284c7',
    backgroundColor: '#e0f2fe',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  titulo: {
    fontSize: 19,
    fontWeight: '700',
    color: '#0f172a',
    textAlign: 'center',
  },
  formulario: {
    width: '100%',
    gap: 8,
  },
  etiqueta: {
    fontSize: 13,
    fontWeight: '600',
    color: '#334155',
    marginTop: 4,
  },
  input: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#0f172a',
  },
  boton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
    elevation: 3,
  },
  botonActivo: {
    backgroundColor: '#0284c7',
  },
  textoBoton: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  cajaResultado: {
    width: '100%',
    backgroundColor: '#dcfce7',
    borderWidth: 1,
    borderColor: '#86efac',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    gap: 4,
  },
  textoResultado: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#15803d',
  },
  subtextoResultado: {
    fontSize: 14,
    fontWeight: '600',
    color: '#166534',
  },
  botonLimpiar: {
    paddingVertical: 8,
  },
  textoLimpiar: {
    color: '#64748b',
    fontSize: 13,
    fontWeight: '500',
  },
})