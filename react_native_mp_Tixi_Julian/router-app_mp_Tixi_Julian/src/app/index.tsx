// app/index.tsx — Sistema de Soporte Técnico (Expo Router)
// Alumno: Julián Oswaldo Tixi Páez
import { useState } from 'react'
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Paso1Inicio from './paso1_inicio_mp_Tixi_Julian'
import Paso2Tabs from './paso2_tabs_mp_Tixi_Julian'
import Paso3Tickets from './paso3_tickets_mp_Tixi_Julian'
import Paso4Detalle from './paso4_detalle_mp_Tixi_Julian'
import Paso5Modal from './paso5_modal_mp_Tixi_Julian'

// ┌──────────────────────────────────────────────────────────────────────────┐
// │  Sistema de Soporte Técnico — Expo Router & Navegación                   │
// │  Alumno: Julián Oswaldo Tixi Páez                                        │
// │  Cambia este número (o pulsa los botones en pantalla) para ver cada paso │
// │  1  Paso 1  Inicio y rutas básicas (Stack navigation)                   │
// │  2  Paso 2  Tabs de navegación (Dashboard, Alertas y Ajustes)           │
// │  3  Paso 3  Rutas dinámicas y lista de servidores/tickets                │
// │  4  Paso 4  Detalle dinámico con parámetros de ruta ([id].tsx)           │
// │  5  Paso 5  Modal nativo de registro de incidentes / tickets            │
// └──────────────────────────────────────────────────────────────────────────┘
const PASO_INICIAL: number = 1

export default function Index() {
  const [pasoActual, setPasoActual] = useState<number>(PASO_INICIAL)

  function renderizarPaso() {
    switch (pasoActual) {
      case 1:
        return <Paso1Inicio />
      case 2:
        return <Paso2Tabs />
      case 3:
        return <Paso3Tickets />
      case 4:
        return <Paso4Detalle />
      case 5:
        return <Paso5Modal />
      default:
        return (
          <View style={estilos.centrado}>
            <Text style={estilos.textoError}>Paso {pasoActual} no encontrado</Text>
          </View>
        )
    }
  }

  return (
    <SafeAreaView style={estilos.contenedor}>
      {/* Selector interactivo de pasos */}
      <View style={estilos.barraPasos}>
        <View style={estilos.infoAlumno}>
          <Text style={estilos.tituloApp}>SISTEMA DE SOPORTE TÉCNICO</Text>
          <Text style={estilos.nombreAlumno}>Julián Oswaldo Tixi Páez</Text>
        </View>
        <View style={estilos.selectorBotones}>
          {[1, 2, 3, 4, 5].map((num) => {
            const activo = pasoActual === num
            return (
              <Pressable
                key={num}
                style={[estilos.botonPaso, activo && estilos.botonPasoActivo]}
                onPress={() => setPasoActual(num)}
              >
                <Text style={[estilos.textoPaso, activo && estilos.textoPasoActivo]}>
                  Paso {num}
                </Text>
              </Pressable>
            )
          })}
        </View>
      </View>

      {/* Contenido del paso actual */}
      <View style={estilos.contenido}>{renderizarPaso()}</View>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  barraPasos: {
    backgroundColor: '#1e293b',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
    gap: 8,
  },
  infoAlumno: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tituloApp: {
    fontSize: 11,
    fontWeight: '800',
    color: '#38bdf8',
    letterSpacing: 0.5,
  },
  nombreAlumno: {
    fontSize: 11,
    fontWeight: '600',
    color: '#94a3b8',
  },
  selectorBotones: {
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'space-between',
  },
  botonPaso: {
    flex: 1,
    backgroundColor: '#0f172a',
    paddingVertical: 7,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  botonPasoActivo: {
    backgroundColor: '#0284c7',
    borderColor: '#38bdf8',
  },
  textoPaso: {
    fontSize: 12,
    fontWeight: '700',
    color: '#94a3b8',
  },
  textoPasoActivo: {
    color: '#ffffff',
  },
  contenido: {
    flex: 1,
  },
  centrado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f172a',
  },
  textoError: {
    color: '#94a3b8',
    fontSize: 16,
  },
})