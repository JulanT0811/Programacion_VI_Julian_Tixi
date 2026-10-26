// app/paso3.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { useEffect, useRef, useState } from 'react'
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

// ─── Paso 3 — useRef: Foco programático y contador en soporte remoto ──

export default function Paso3() {
  // ── Uso 1: Referencias a TextInput para control de foco programático ──
  const inputHostRef = useRef<TextInput>(null)
  const inputPuertoRef = useRef<TextInput>(null)

  const [host, setHost] = useState<string>('')
  const [puerto, setPuerto] = useState<string>('22')

  // Foco automático en el host al cargar la pantalla de soporte
  useEffect(() => {
    inputHostRef.current?.focus()
  }, [])

  // ── Uso 2: Contador mutable persistente sin disparar re-render ─────────
  const intentosSilenciososRef = useRef<number>(0)
  const [ultimaConexion, setUltimaConexion] = useState<string>('—')

  function intentarConexion() {
    intentosSilenciososRef.current += 1 // Muta en memoria sin causar re-render

    // Actualiza el estado visual con el último intento
    setUltimaConexion(
      `${host || 'estacion-cliente'}:${puerto} — intento de soporte #${intentosSilenciososRef.current}`
    )
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.badge}>SOPORTE REMOTO IT</Text>
      <Text style={styles.titulo}>Configurar Conexión SSH de Asistencia</Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>IP o Host del Equipo en Soporte</Text>
        <TextInput
          ref={inputHostRef}
          style={styles.input}
          value={host}
          onChangeText={setHost}
          placeholder="192.168.1.105"
          placeholderTextColor="#94a3b8"
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => inputPuertoRef.current?.focus()}
        />

        <Text style={styles.etiqueta}>Puerto de Servicio SSH</Text>
        <TextInput
          ref={inputPuertoRef}
          style={styles.input}
          value={puerto}
          onChangeText={setPuerto}
          placeholder="22"
          placeholderTextColor="#94a3b8"
          keyboardType="number-pad"
          returnKeyType="done"
        />
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          styles.botonActivo,
          pressed && { opacity: 0.8 },
        ]}
        onPress={intentarConexion}
      >
        <Text style={styles.textoBoton}>Conectar para Asistencia Remota</Text>
      </Pressable>

      <Text style={styles.detalle}>Última conexión: {ultimaConexion}</Text>
      <Text style={styles.detalleMuted}>
        (Los intentos silenciosos con useRef no provocan re-render innecesario)
      </Text>
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
  detalle: {
    fontSize: 13,
    color: '#0284c7',
    fontWeight: '600',
    textAlign: 'center',
  },
  detalleMuted: {
    fontSize: 12,
    color: '#94a3b8',
    textAlign: 'center',
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
})