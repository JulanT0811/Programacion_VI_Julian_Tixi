// app/index.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { StyleSheet, Text, View } from 'react-native'

// Importa los componentes de cada paso desde sus respectivos archivos con _mp_Tixi_Julian
import Paso1 from './paso1_mp_Tixi_Julian'
import Paso2 from './paso2_mp_Tixi_Julian'
import Paso3 from './paso3_mp_Tixi_Julian'
import Paso4 from './paso4_mp_Tixi_Julian'
import Paso5 from './paso5_mp_Tixi_Julian'
import Paso6 from './paso6_mp_Tixi_Julian'

// ┌──────────────────────────────────────────────────────────────────┐
// │  Sistema de Soporte Técnico — Navegación de Componentes          │
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos. │
// │  1  Paso 1  Props tipadas — TarjetaTicket                        │
// │  2  Paso 2  children y composición — Card reutilizable          │
// │  3  Paso 3  Props opcionales y BadgeEstado de incidencias       │
// │  4  Paso 4  ScrollView y SafeAreaView — Cola activa de tickets  │
// │  5  Paso 5  Modal de confirmación — Cierre de tickets           │
// │  6  Paso 6  Pantalla completa — Centro de Control y Gestión     │
// └──────────────────────────────────────────────────────────────────┘
const PASO = 6

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
        <View style={estilosBase.centrado}>
          <Text>Paso {PASO}: crea el componente primero</Text>
        </View>
      )
  }
}

const estilosBase = StyleSheet.create({
  centrado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f172a',
  },
})