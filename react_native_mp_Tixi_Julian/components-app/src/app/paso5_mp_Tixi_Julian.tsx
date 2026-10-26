// app/paso5.tsx — Sistema de Soporte Técnico
// Alumno: Julián Oswaldo Tixi Páez
import { useState } from 'react'
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'

// ─── Paso 5 — Modal de confirmación ──────────────────────────────────

interface ModalConfirmProps {
  visible: boolean
  titulo: string
  mensaje: string
  etiquetaConfirmar?: string
  etiquetaCancelar?: string
  onConfirmar: () => void
  onCancelar: () => void
}

function ModalConfirm({
  visible,
  titulo,
  mensaje,
  etiquetaConfirmar = 'Confirmar',
  etiquetaCancelar = 'Cancelar',
  onConfirmar,
  onCancelar,
}: ModalConfirmProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancelar}
    >
      <Pressable style={estilos5.fondoModal} onPress={onCancelar}>
        <Pressable style={estilos5.dialogo} onPress={() => {}}>
          <Text style={estilos5.dialogoTitulo}>{titulo}</Text>
          <Text style={estilos5.dialogoMensaje}>{mensaje}</Text>
          <View style={estilos5.botones}>
            <Pressable
              style={[estilos5.boton, estilos5.botonCancelar]}
              onPress={onCancelar}
            >
              <Text style={estilos5.textoCancelar}>{etiquetaCancelar}</Text>
            </Pressable>
            <Pressable
              style={[estilos5.boton, estilos5.botonConfirmar]}
              onPress={onConfirmar}
            >
              <Text style={estilos5.textoConfirmar}>{etiquetaConfirmar}</Text>
            </Pressable>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  )
}

export function Paso5() {
  const [modalVisible, setModalVisible] = useState(false)
  const [accionEjecutada, setAccionEjecutada] = useState<string | null>(null)

  function confirmarCierre() {
    setModalVisible(false)
    setAccionEjecutada('✓ Ticket #TCK-1042 cerrado exitosamente por Julián Tixi. SLA cumplido.')
  }

  return (
    <View style={estilos5.fondo}>
      <Text style={estilos5.titulo}>Gestión de Cierre de Incidencia</Text>
      <Text style={estilos5.subtitulo}>Ticket #TCK-1042 · Servidor SAP en Producción</Text>

      <Pressable
        style={estilos5.botonAccion}
        onPress={() => setModalVisible(true)}
      >
        <Text style={estilos5.textoBotonAccion}>Dar por Resuelto y Cerrar Ticket</Text>
      </Pressable>

      {accionEjecutada && (
        <View style={estilos5.cajaResultado}>
          <Text style={estilos5.textoResultado}>{accionEjecutada}</Text>
        </View>
      )}

      <ModalConfirm
        visible={modalVisible}
        titulo="Cerrar Ticket de Soporte"
        mensaje="¿Confirma que la incidencia técnica ha sido solucionada en su totalidad y el servicio se encuentra operativo?"
        etiquetaConfirmar="Sí, Cerrar Ticket"
        etiquetaCancelar="Volver a Revisar"
        onConfirmar={confirmarCierre}
        onCancelar={() => setModalVisible(false)}
      />
    </View>
  )
}

export default Paso5

const estilos5 = StyleSheet.create({
  fondo: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f8fafc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f172a',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 6,
    marginBottom: 24,
    textAlign: 'center',
  },
  botonAccion: {
    backgroundColor: '#0284c7',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    elevation: 3,
  },
  textoBotonAccion: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  cajaResultado: {
    marginTop: 24,
    backgroundColor: '#dcfce7',
    borderWidth: 1,
    borderColor: '#86efac',
    borderRadius: 8,
    padding: 14,
  },
  textoResultado: {
    color: '#15803d',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  fondoModal: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  dialogo: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    gap: 12,
    elevation: 5,
  },
  dialogoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  dialogoMensaje: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
  },
  botones: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
    marginTop: 8,
  },
  boton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  botonCancelar: {
    backgroundColor: '#f1f5f9',
  },
  textoCancelar: {
    color: '#475569',
    fontWeight: '600',
  },
  botonConfirmar: {
    backgroundColor: '#0284c7',
  },
  textoConfirmar: {
    color: '#ffffff',
    fontWeight: '600',
  },
})