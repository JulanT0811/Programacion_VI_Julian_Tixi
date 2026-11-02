// app/index.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { StyleSheet, Text, View } from 'react-native'
import Paso1 from './paso1_mp_Tixi_Julian'
import Paso2 from './paso2_mp_Tixi_Julian'
import Paso3 from './paso3_mp_Tixi_Julian'
import Paso4 from './paso4_mp_Tixi_Julian'
import Paso5 from './paso5_mp_Tixi_Julian'
import Paso6 from './paso6_mp_Tixi_Julian'

// ┌──────────────────────────────────────────────────────────────────────────┐
// │  Sistema de Soporte Técnico — Estado Global (Store & Selectors)          │
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos.         │
// │  1  Paso 1  Store básico — useTicketsStore con crear, resolver y borrar │
// │  2  Paso 2  Selectors — Filtrado reactivo por críticos y estados        │
// │  3  Paso 3  Acciones asíncronas — Sincronización con API de HelpDesk    │
// │  4  Paso 4  Múltiples stores — Tickets de soporte + Sesión del Técnico   │
// │  5  Paso 5  Persistencia local — Almacenamiento y caché offline         │
// │  6  Paso 6  Ejemplo combinado — Centro de mando integral de soporte     │
// └──────────────────────────────────────────────────────────────────────────┘
const PASO = 1

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    case 2:
      return <Paso2 />
    case 3:
      return <Paso3 />
    case 4:
      return <Paso4 />
    case 5:
      return <Paso5 />
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