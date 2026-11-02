// app/paso4Volumen_mp_Tixi_Julian.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { ComponentRef, useRef, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

export function Paso4Volumen() {
  const [horasDiag, setHorasDiag] = useState('')
  const [horasRep, setHorasRep] = useState('')
  const [horasPruebas, setHorasPruebas] = useState('')

  const refRep = useRef<ComponentRef<TextInput>>(null)
  const refPruebas = useRef<ComponentRef<TextInput>>(null)

  const nDiag = parseFloat(horasDiag) || 0
  const nRep = parseFloat(horasRep) || 0
  const nPruebas = parseFloat(horasPruebas) || 0
  const tiempoTotal = nDiag + nRep + nPruebas
  const costoTotal = tiempoTotal * 35.0 // $35/hora de soporte

  return (
    <SafeAreaView style={styles.contenedor}>
      <View style={styles.cabecera}>
        <Text style={styles.subtitulo}>MÉTRICAS Y TIEMPOS SLA</Text>
        <Text style={styles.titulo}>Cálculo de Horas de Intervención Técnica</Text>
      </View>

      <ScrollView contentContainerStyle={styles.formulario} keyboardShouldPersistTaps="handled">
        {/* Horas de Diagnóstico */}
        <Text style={styles.etiqueta}>1. Horas de Diagnóstico Inicial</Text>
        <TextInput
          style={styles.campo}
          value={horasDiag}
          onChangeText={setHorasDiag}
          placeholder="ej. 1.5"
          keyboardType="numeric"
          returnKeyType="next"
          onSubmitEditing={() => refRep.current?.focus()}
        />

        {/* Horas de Reparación */}
        <Text style={styles.etiqueta}>2. Horas de Reparación / Configuración</Text>
        <TextInput
          ref={refRep}
          style={styles.campo}
          value={horasRep}
          onChangeText={setHorasRep}
          placeholder="ej. 2.0"
          keyboardType="numeric"
          returnKeyType="next"
          onSubmitEditing={() => refPruebas.current?.focus()}
        />

        {/* Horas de Pruebas */}
        <Text style={styles.etiqueta}>3. Horas de Pruebas y Validación</Text>
        <TextInput
          ref={refPruebas}
          style={styles.campo}
          value={horasPruebas}
          onChangeText={setHorasPruebas}
          placeholder="ej. 0.5"
          keyboardType="numeric"
          returnKeyType="done"
        />

        {/* Tarjeta de Resumen */}
        <View style={styles.tarjetaResumen}>
          <Text style={styles.tituloResumen}>Resumen de la Intervención</Text>
          <Text style={styles.datoResumen}>Tiempo Total Invertido: {tiempoTotal.toFixed(1)} horas</Text>
          <Text style={styles.costoResumen}>Costo Estimado de Servicio: ${costoTotal.toFixed(2)}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Paso4Volumen

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
    marginBottom: 14,
  },
  tarjetaResumen: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginTop: 10,
    gap: 6,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  tituloResumen: { fontSize: 15, fontWeight: '700', color: '#0f172a' },
  datoResumen: { fontSize: 14, color: '#475569' },
  costoResumen: { fontSize: 16, fontWeight: 'bold', color: '#15803d', marginTop: 4 },
})
