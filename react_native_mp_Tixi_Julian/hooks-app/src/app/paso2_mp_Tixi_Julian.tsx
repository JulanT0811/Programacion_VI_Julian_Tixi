// app/paso2.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

// ─── Paso 2 — useEffect: Monitoreo periódico de conectividad en soporte

type EstadoPing = 'pinging' | 'ok' | 'timeout' | 'inactivo'

export default function Paso2() {
  const [latencia, setLatencia] = useState<number | null>(null)
  const [estado, setEstado] = useState<EstadoPing>('inactivo')
  const [activo, setActivo] = useState<boolean>(false)
  const [ciclos, setCiclos] = useState<number>(0)
  const [paquetesPerdidos, setPaquetesPerdidos] = useState<number>(0)

  useEffect(() => {
    if (!activo) return // no arrancar el intervalo si el monitoreo está detenido

    const intervalo = setInterval(() => {
      setEstado('pinging')

      // Simula latencia de red al host de soporte (10ms a 200ms, 15% timeout)
      setTimeout(() => {
        const falla = Math.random() < 0.15
        if (falla) {
          setLatencia(null)
          setEstado('timeout')
          setPaquetesPerdidos(p => p + 1)
        } else {
          const ms = Math.floor(Math.random() * 190) + 10
          setLatencia(ms)
          setEstado('ok')
        }
        setCiclos(c => c + 1)
      }, 400)
    }, 500)

    // Función de limpieza al desmontar o detener
    return () => clearInterval(intervalo)
  }, [activo])

  const colorEstado: Record<EstadoPing, string> = {
    pinging:  '#0284c7',
    ok:       '#15803d',
    timeout:  '#b91c1c',
    inactivo: '#64748b',
  }

  const porcentajePerdida =
    ciclos > 0 ? ((paquetesPerdidos / ciclos) * 100).toFixed(1) + '%' : '0.0%'

  return (
    <View style={styles.contenedor}>
      <Text style={styles.badge}>DIAGNÓSTICO DE RED DE SOPORTE</Text>
      <Text style={styles.titulo}>Monitoreo de Enlace — Servidor HelpDesk</Text>

      <View style={[styles.tarjeta, { borderColor: colorEstado[estado] }]}>
        <Text style={[styles.etiqueta, { color: colorEstado[estado] }]}>
          ESTADO: {estado.toUpperCase()}
        </Text>
        <Text style={styles.latencia}>
          Latencia: {latencia !== null ? `${latencia} ms` : '— ms'}
        </Text>
        <Text style={styles.ciclos}>Sondeos realizados: {ciclos}</Text>
        <Text style={styles.ciclos}>Paquetes perdidos: {paquetesPerdidos} ({porcentajePerdida})</Text>
        <Text style={styles.detalle}>host: soporte.empresa.local · 10.0.2.15 (Puerto 443)</Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          activo ? styles.botonDetener : styles.botonIniciar,
          pressed && { opacity: 0.8 },
        ]}
        onPress={() => setActivo(a => !a)}
      >
        <Text style={styles.textoBoton}>
          {activo ? 'Detener Diagnóstico de Ping' : 'Iniciar Diagnóstico de Ping'}
        </Text>
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
  tarjeta: {
    width: '100%',
    padding: 18,
    borderRadius: 12,
    borderWidth: 2,
    backgroundColor: '#ffffff',
    gap: 8,
    shadowColor: '#0f172a',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  etiqueta: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  latencia: {
    color: '#15803d',
    fontSize: 15,
    fontWeight: '600',
  },
  ciclos: {
    color: '#b45309',
    fontSize: 14,
    fontWeight: '500',
  },
  detalle: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 4,
  },
  boton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
  },
  botonIniciar: {
    backgroundColor: '#15803d',
  },
  botonDetener: {
    backgroundColor: '#b91c1c',
  },
  textoBoton: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
})