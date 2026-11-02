// app/_layout.tsx — Sistema de Soporte Técnico (Expo Router Root)
// Alumno: Julián Oswaldo Tixi Páez
import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#0284c7' },
        headerTintColor: '#ffffff',
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Soporte Técnico · Julián Tixi',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          title: 'Dashboard Soporte',
        }}
      />
      <Stack.Screen
        name="servidores/index"
        options={{
          title: 'Infraestructura & Nodos',
        }}
      />
      <Stack.Screen
        name="servidores/[id]"
        options={{
          title: 'Detalle de Servidor',
        }}
      />
      {/* Modal para apertura de tickets de soporte */}
      <Stack.Screen
        name="(modals)/agregar"
        options={{
          presentation: 'modal',
          title: 'Nuevo Ticket de Soporte',
          headerStyle: { backgroundColor: '#1e293b' },
          headerTintColor: '#f8fafc',
        }}
      />
    </Stack>
  )
}