// app/index.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { StyleSheet, Text, View } from 'react-native'
import { Paso1 } from './paso1_mp_Tixi_Julian'
import { Paso1Serie } from './paso1Serie_mp_Tixi_Julian'
import { Paso2 } from './paso2_mp_Tixi_Julian'
import { Paso3 } from './paso3_mp_Tixi_Julian'
import { Paso4 } from './paso4_mp_Tixi_Julian'
import { Paso4Volumen } from './paso4Volumen_mp_Tixi_Julian'
import { Paso5 } from './paso5_mp_Tixi_Julian'
import { Paso5Volumen } from './paso5Volumen_mp_Tixi_Julian'
import { Paso6 } from './paso6_mp_Tixi_Julian'

// ┌──────────────────────────────────────────────────────────────────────────┐
// │  Sistema de Soporte Técnico — Formularios y Listas                       │
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos.         │
// │  1    Paso 1    FlatList básica — Cola de tickets de soporte             │
// │  1.1  Paso 1.1  FlatList técnicos — Personal de guardia en soporte       │
// │  2    Paso 2    FlatList avanzada — Paginación, separadores, recarga     │
// │  3    Paso 3    SectionList — Tickets agrupados por área técnica y SLA   │
// │  4    Paso 4    TextInput tipado — Acceso y diagnóstico remoto           │
// │  4.1  Paso 4.1  Cálculo de tiempos — Horas invertidas y costos SLA       │
// │  5    Paso 5    Formulario con validación — Nuevo ticket de soporte      │
// │  5.1  Paso 5.1  Cotizador validado — Presupuesto y materiales            │
// │  6    Paso 6    KeyboardAvoidingView — Reporte sin tapado de teclado     │
// └──────────────────────────────────────────────────────────────────────────┘
const PASO = 1

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    case 1.1:
      return <Paso1Serie />
    case 2:
      return <Paso2 />
    case 3:
      return <Paso3 />
    case 4:
      return <Paso4 />
    case 4.1:
      return <Paso4Volumen />
    case 5:
      return <Paso5 />
    case 5.1:
      return <Paso5Volumen />
    case 6:
      return <Paso6 />
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