// app/paso4_mp_Tixi_Julian.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { ComponentRef, useRef, useState } from 'react'
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

export function Paso4() {
  const [equipo, setEquipo] = useState('')
  const [ip, setIp] = useState('')
  const [puerto, setPuerto] = useState('22')
  const [password, setPassword] = useState('')
  const [mostrarPass, setMostrarPass] = useState(false)

  const refIp = useRef<ComponentRef<TextInput>>(null)
  const refPuerto = useRef<ComponentRef<TextInput>>(null)
  const refPass = useRef<ComponentRef<TextInput>>(null)

  return (
    <SafeAreaView style={styles.contenedor}>
      <View style={styles.cabecera}>
        <Text style={styles.subtitulo}>ASISTENCIA Y DIAGNÓSTICO REMOTO</Text>
        <Text style={styles.titulo}>Configurar Acceso Remoto de Soporte</Text>
      </View>

      <ScrollView contentContainerStyle={styles.formulario} keyboardShouldPersistTaps="handled">
        {/* Nombre / ID del equipo */}
        <Text style={styles.etiqueta}>Nombre del Equipo o Hostname</Text>
        <TextInput
          style={styles.campo}
          value={equipo}
          onChangeText={setEquipo}
          placeholder="ej. pc-finanzas-03"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          onSubmitEditing={() => refIp.current?.focus()}
        />

        {/* Dirección IP */}
        <Text style={styles.etiqueta}>Dirección IP de la Estación</Text>
        <TextInput
          ref={refIp}
          style={styles.campo}
          value={ip}
          onChangeText={setIp}
          placeholder="192.168.1.105"
          keyboardType="numeric"
          returnKeyType="next"
          onSubmitEditing={() => refPuerto.current?.focus()}
        />

        {/* Puerto de Servicio */}
        <Text style={styles.etiqueta}>Puerto de Soporte (SSH / VNC / RDP)</Text>
        <TextInput
          ref={refPuerto}
          style={styles.campo}
          value={puerto}
          onChangeText={setPuerto}
          placeholder="22"
          keyboardType="number-pad"
          returnKeyType="next"
          onSubmitEditing={() => refPass.current?.focus()}
        />

        {/* Contraseña de acceso */}
        <Text style={styles.etiqueta}>Token o Clave de Acceso Técnico</Text>
        <View style={styles.filaPass}>
          <TextInput
            ref={refPass}
            style={[styles.campo, { flex: 1, marginBottom: 0 }]}
            value={password}
            onChangeText={setPassword}
            placeholder="••••••••"
            secureTextEntry={!mostrarPass}
            returnKeyType="done"
            autoCapitalize="none"
          />
          <Pressable
            onPress={() => setMostrarPass((v) => !v)}
            style={styles.togglePass}
          >
            <Text style={styles.togglePassTexto}>
              {mostrarPass ? 'Ocultar' : 'Ver'}
            </Text>
          </Pressable>
        </View>

        {/* Vista previa del comando de conexión */}
        <Text style={styles.etiquetaPrevia}>Comando de Asistencia Remota:</Text>
        <View style={styles.preview}>
          <Text style={styles.previewTexto}>
            ssh soporte@{ip || '<ip-equipo>'} -p {puerto || '22'} # {equipo || '<equipo>'}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Paso4

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
  etiquetaPrevia: { fontSize: 13, fontWeight: '600', color: '#334155', marginTop: 14, marginBottom: 4 },
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
  filaPass: { flexDirection: 'row', gap: 8, marginBottom: 14 },
  togglePass: {
    paddingHorizontal: 14,
    justifyContent: 'center',
    backgroundColor: '#e0f2fe',
    borderRadius: 8,
  },
  togglePassTexto: { fontSize: 13, color: '#0284c7', fontWeight: '700' },
  preview: { backgroundColor: '#0f172a', borderRadius: 8, padding: 14, marginTop: 4 },
  previewTexto: { fontFamily: 'monospace', fontSize: 13, color: '#38bdf8' },
})
