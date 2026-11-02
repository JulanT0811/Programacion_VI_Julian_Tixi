// app/(modals)/agregar.tsx — Sistema de Soporte Técnico (Modal Expo Router)
// Alumno: Julián Oswaldo Tixi Páez
import { router } from 'expo-router'
import { useState } from 'react'
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

export default function ModalAgregarServidor() {
  const [nombre, setNombre] = useState('')
  const [ip, setIp] = useState('')
  const [servicio, setServicio] = useState('')
  const [prioridad, setPrioridad] = useState<'baja' | 'media' | 'alta' | 'crítica'>('alta')

  function guardar() {
    if (!nombre.trim() || !ip.trim()) {
      Alert.alert('Datos requeridos', 'Por favor ingresa el nombre del host y su IP.')
      return
    }

    Alert.alert(
      'Servidor Registrado',
      `El nodo ${nombre} (${ip}) fue registrado con éxito en el Sistema de Soporte Técnico por Julián Oswaldo Tixi Páez.`,
      [
        {
          text: 'Entendido',
          onPress: () => router.back(), // cierra el modal de Expo Router
        },
      ]
    )
  }

  return (
    <View style={styles.contenedor}>
      <View style={styles.header}>
        <Text style={styles.subtitulo}>MESA DE AYUDA · NUEVO NODO DE INFRAESTRUCTURA</Text>
        <Text style={styles.titulo}>Alta de Servidor / Incidencia</Text>
        <Text style={styles.tecnico}>Registrado por: Julián Oswaldo Tixi Páez</Text>
      </View>

      <View style={styles.grupo}>
        <Text style={styles.etiqueta}>Identificador del Host / Servidor *</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="ej. srv-backup-02 o SRV-VPN-GATEWAY"
          placeholderTextColor="#64748b"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.grupo}>
        <Text style={styles.etiqueta}>Dirección IP de Gestión *</Text>
        <TextInput
          style={styles.input}
          value={ip}
          onChangeText={setIp}
          placeholder="ej. 192.168.10.45"
          placeholderTextColor="#64748b"
          keyboardType="decimal-pad"
        />
      </View>

      <View style={styles.grupo}>
        <Text style={styles.etiqueta}>Servicio de Soporte Asignado</Text>
        <TextInput
          style={styles.input}
          value={servicio}
          onChangeText={setServicio}
          placeholder="ej. Firewall Perimetral o Autenticación LDAP"
          placeholderTextColor="#64748b"
        />
      </View>

      <View style={styles.grupo}>
        <Text style={styles.etiqueta}>Prioridad de Supervisión SLA</Text>
        <View style={styles.filaPrioridad}>
          {(['baja', 'media', 'alta', 'crítica'] as const).map((p) => {
            const activa = prioridad === p
            return (
              <Pressable
                key={p}
                style={[
                  styles.btnPrioridad,
                  activa && styles.btnPrioridadActiva,
                  p === 'crítica' && activa && { backgroundColor: '#b91c1c' },
                ]}
                onPress={() => setPrioridad(p)}
              >
                <Text style={[styles.txtPrioridad, activa && styles.txtPrioridadActiva]}>
                  {p.toUpperCase()}
                </Text>
              </Pressable>
            )
          })}
        </View>
      </View>

      <Pressable
        style={({ pressed }) => [styles.boton, pressed && styles.botonPresionado]}
        onPress={guardar}
      >
        <Text style={styles.botonTexto}>Registrar Nodo en Sistema de Soporte</Text>
      </Pressable>

      <Pressable onPress={() => router.back()} style={styles.botonCancelar}>
        <Text style={styles.cancelar}>Cancelar y Cerrar Modal (router.back)</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#0f172a',
    padding: 22,
    gap: 16,
    justifyContent: 'center',
  },
  header: {
    gap: 4,
    marginBottom: 4,
  },
  subtitulo: { fontSize: 10, fontWeight: '700', color: '#38bdf8', letterSpacing: 0.5 },
  titulo: { fontSize: 20, fontWeight: '700', color: '#f8fafc' },
  tecnico: { fontSize: 12, color: '#94a3b8' },
  grupo: { gap: 6 },
  etiqueta: { fontSize: 13, color: '#cbd5e1', fontWeight: '600' },
  input: {
    backgroundColor: '#1e293b',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#f8fafc',
    borderWidth: 1,
    borderColor: '#334155',
  },
  filaPrioridad: { flexDirection: 'row', gap: 6 },
  btnPrioridad: {
    flex: 1,
    paddingVertical: 7,
    backgroundColor: '#1e293b',
    borderRadius: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  btnPrioridadActiva: { backgroundColor: '#0284c7', borderColor: '#38bdf8' },
  txtPrioridad: { fontSize: 10, fontWeight: '700', color: '#94a3b8' },
  txtPrioridadActiva: { color: '#ffffff' },
  boton: {
    backgroundColor: '#0284c7',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    marginTop: 6,
  },
  botonPresionado: { backgroundColor: '#0369a1' },
  botonTexto: { color: '#ffffff', fontWeight: '700', fontSize: 15 },
  botonCancelar: { alignItems: 'center', paddingVertical: 10 },
  cancelar: { color: '#94a3b8', fontSize: 13 },
})