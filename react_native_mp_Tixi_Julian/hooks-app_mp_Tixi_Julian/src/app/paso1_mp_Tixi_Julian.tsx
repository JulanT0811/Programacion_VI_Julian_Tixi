// app/paso1.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

// ─── Paso 1 — useState: Reintentos de conexión en soporte técnico ────

export default function Paso1() {
  const [intentos, setIntentos] = useState<number>(0)
  const [conectado, setConectado] = useState<boolean>(false)

  function manejarReintento() {
    if (conectado) return
    const nuevoIntento = intentos + 1
    setIntentos(nuevoIntento)
    // Simula éxito al tercer intento de conexión al HelpDesk
    if (nuevoIntento >= 3) {
      setConectado(true)
    }
  }

  function reiniciar() {
    setIntentos(0)
    setConectado(false)
  }

  const estadoTexto = conectado
    ? '✓ Conectado a Servidor HelpDesk Central'
    : `Intento ${intentos} de 3 fallido`

  const colorEstado = conectado ? '#15803d' : '#b91c1c'

  return (
    <View style={styles.contenedor}>
      <Text style={styles.badge}>SISTEMA DE SOPORTE TÉCNICO</Text>
      <Text style={styles.titulo}>Conexión con Base de Datos de Tickets</Text>

      <View style={[styles.tarjeta, { borderColor: colorEstado }]}>
        <Text style={[styles.estado, { color: colorEstado }]}>
          {estadoTexto}
        </Text>
        <Text style={styles.detalle}>servidor-tickets-01 · 10.0.2.20:5432 (PostgreSQL)</Text>
      </View>

      <Text style={[styles.errorTexto, { color: colorEstado }]}>
        {intentos > 0 && !conectado ? 'Alerta: Tiempo de respuesta agotado al contactar al servidor' : null}
      </Text>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          conectado ? styles.botonDeshabilitado : styles.botonActivo,
          pressed && !conectado && { opacity: 0.75 },
        ]}
        onPress={manejarReintento}
        disabled={conectado}
      >
        <Text style={styles.textoBoton}>
          {conectado ? 'Servidor Conectado' : 'Reintentar Conexión'}
        </Text>
      </Pressable>

      <Pressable style={styles.botonSecundario} onPress={reiniciar}>
        <Text style={styles.textoSecundario}>Reiniciar Simulación de Diagnóstico</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f8fafc',
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
    textAlign: 'center',
  },
  tarjeta: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 18,
    borderWidth: 2,
    alignItems: 'center',
    gap: 6,
    shadowColor: '#0f172a',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  estado: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  detalle: {
    fontSize: 12,
    color: '#64748b',
  },
  errorTexto: {
    fontSize: 12,
    fontWeight: '500',
    height: 18,
  },
  boton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  botonActivo: {
    backgroundColor: '#0284c7',
    elevation: 3,
  },
  botonDeshabilitado: {
    backgroundColor: '#94a3b8',
  },
  textoBoton: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  botonSecundario: {
    paddingVertical: 10,
  },
  textoSecundario: {
    color: '#64748b',
    fontSize: 13,
    fontWeight: '500',
  },
})