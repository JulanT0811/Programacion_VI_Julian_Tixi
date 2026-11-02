// app/(tabs)/_layout.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { Tabs } from 'expo-router'
import { Text, type TextStyle } from 'react-native'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#0284c7',
        tabBarInactiveTintColor: '#64748b',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopColor: '#e2e8f0',
          height: 60,
          paddingBottom: 8,
          paddingTop: 6,
        },
        headerStyle: { backgroundColor: '#0284c7' },
        headerTintColor: '#ffffff',
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Panel Control',
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <TabIcon nombre="inicio" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="alertas"
        options={{
          title: 'Alertas SLA',
          tabBarLabel: 'Alertas',
          tabBarIcon: ({ color, size }) => (
            <TabIcon nombre="alertas" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tabs.Screen
        name="ajustes"
        options={{
          title: 'Ajustes Soporte',
          tabBarLabel: 'Ajustes',
          tabBarIcon: ({ color, size }) => (
            <TabIcon nombre="ajustes" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  )
}

function TabIcon({
  nombre,
  color,
  size,
}: {
  nombre: string
  color: TextStyle['color']
  size: number
}) {
  const icono: Record<string, string> = {
    inicio: '🖥',
    alertas: '🔔',
    ajustes: '⚙',
  }
  return <Text style={{ fontSize: size * 0.85, color }}>{icono[nombre] ?? '📌'}</Text>
}