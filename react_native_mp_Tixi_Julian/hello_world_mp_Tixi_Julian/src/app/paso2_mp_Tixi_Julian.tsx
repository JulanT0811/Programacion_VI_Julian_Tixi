// app/paso2.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native'

export function Paso2() {
  return (
    <View style={styles.contenedor}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4997/4997543.png' }}
        style={styles.logo}
      />
      <Text style={styles.titulo}>Centro de Soporte Técnico</Text>
      <Text style={styles.subtitulo}>Asignación Inmediata de Incidencias</Text>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          pressed && styles.botonPresionado,
        ]}
        onPress={() =>
          Alert.alert(
            'Ticket de Soporte Asignado',
            'Se ha asignado el ticket #1042 al especialista de guardia: Julián Tixi. SLA en curso.'
          )
        }
      >
        <Text style={styles.textoBoton}>Asignar Ticket a Técnico</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    backgroundColor: '#f8fafc',
    padding: 24,
  },
  logo: {
    width: 90,
    height: 90,
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0f172a',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 15,
    color: '#64748b',
    textAlign: 'center',
  },
  boton: {
    backgroundColor: '#0284c7',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10,
    shadowColor: '#0284c7',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  botonPresionado: {
    backgroundColor: '#0369a1',
  },
  textoBoton: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16,
  },
})