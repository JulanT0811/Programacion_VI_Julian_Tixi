// app/index.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { StyleSheet, Text, View } from 'react-native'
import Paso1 from './paso1_mp_Tixi_Julian'
import Paso2 from './paso2_mp_Tixi_Julian'
import Paso3 from './paso3_mp_Tixi_Julian'
import Paso3Suma from './paso3Suma_mp_Tixi_Julian'
import Paso4 from './paso4_mp_Tixi_Julian'

// ┌──────────────────────────────────────────────────────────────────┐
// │  Sistema de Soporte Técnico — Navegación de Hooks                │
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos. │
// │  1    Paso 1    useState — Reintentos de conexión a HelpDesk     │
// │  2    Paso 2    useEffect — Monitoreo de ping y latencia         │
// │  3    Paso 3    useRef — Foco programático en soporte remoto     │
// │  3.1  Paso 3.1  useRef / State — Calculadora de horas de soporte │
// │  4    Paso 4    Hooks nativos — Nodos del sistema y modo oscuro  │
// └──────────────────────────────────────────────────────────────────┘
const PASO = 4

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    case 2:
      return <Paso2 />
    case 3:
      return <Paso3 />
    case 3.1:
      return <Paso3Suma />
    case 4:
      return <Paso4 />
    default:
      return (
        <View style={estilos.centrado}>
          <Text style={estilos.textoError}>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}

const estilos = StyleSheet.create({
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
