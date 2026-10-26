// app/index.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { Text, View } from 'react-native'
import { Paso1 } from './paso1_mp_Tixi_Julian'
import { Paso2 } from './paso2_mp_Tixi_Julian'

// ┌──────────────────────────────────────────────────────────────────┐
// │  Sistema de Soporte Técnico - Mesa de Ayuda                      │
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos. │
// │  1  Paso 1  Texto y vistas básicas — Ticket de soporte           │
// │  2  Paso 2  Imágenes y botones — Asignación de técnico          │
// └──────────────────────────────────────────────────────────────────┘
const PASO = 2

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    case 2:
      return <Paso2 />
    default:
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}
