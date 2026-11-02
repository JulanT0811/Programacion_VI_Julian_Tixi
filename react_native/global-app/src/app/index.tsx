// app/index.tsx
import { Text, View } from 'react-native'

// ┌──────────────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos.         │
// │  1  Paso 1  Store básico — useServidoresStore con crear/eliminar         │
// │  2  Paso 2  Selectors — consumir solo una parte del store                │
// │  3  Paso 3  Acciones asíncronas — cargarServidores con estado de carga   │
// │  4  Paso 4  Múltiples stores — useServidoresStore + useAuthStore         │
// │  5  Paso 5  Persistencia — middleware persist + AsyncStorage             │
// │  6  Paso 6  Ejemplo combinado — inventario persistido con selector       │
// └──────────────────────────────────────────────────────────────────────────┘
const PASO = 1

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    default:
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}

// ─── Paso 1 — se define más abajo ────────────────────────────────────────────
function Paso1() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Paso 1 pendiente</Text>
    </View>
  )
}