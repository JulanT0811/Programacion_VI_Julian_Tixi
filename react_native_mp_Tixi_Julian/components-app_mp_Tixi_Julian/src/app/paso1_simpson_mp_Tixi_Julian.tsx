// app/paso1_simpson.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { StyleSheet, Text, View } from 'react-native'

// ─── Paso 1 — Props tipadas: Personal de Soporte Técnico ──────────────

interface TecnicoProps {
  nombre: string
  especialidad: string
  nivel: string
  extension: number
}

function TarjetaTecnico({ nombre, especialidad, nivel, extension }: TecnicoProps) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombreTecnico}>{nombre}</Text>
      <Text style={styles.datoEspecialidad}>{especialidad} · Ext: {extension}</Text>
      <Text style={styles.datoNivel}>Nivel de Atención: {nivel}</Text>
    </View>
  )
}

export function Paso1Simpson() {
  return (
    <View style={styles.fondo}>
      <Text style={styles.encabezado}>Equipo de Soporte Técnico</Text>
      <TarjetaTecnico
        nombre="Julián Oswaldo Tixi"
        especialidad="Administración de Redes y Servidores"
        nivel="Nivel 2 (Intermedio)"
        extension={201}
      />
      <TarjetaTecnico
        nombre="Carlos Mendoza"
        especialidad="Diagnóstico de Hardware y Periféricos"
        nivel="Nivel 1 (HelpDesk)"
        extension={202}
      />
      <TarjetaTecnico
        nombre="Sofía Paredes"
        especialidad="Ciberseguridad y Auditoría de Sistemas"
        nivel="Nivel 3 (Especialista)"
        extension={203}
      />
    </View>
  )
}

export default Paso1Simpson

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    padding: 20,
    justifyContent: 'center',
    gap: 12,
  },
  encabezado: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: 12,
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  nombreTecnico: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0284c7',
  },
  datoEspecialidad: {
    fontSize: 13,
    color: '#334155',
    marginTop: 4,
  },
  datoNivel: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 2,
    fontWeight: '500',
  },
})