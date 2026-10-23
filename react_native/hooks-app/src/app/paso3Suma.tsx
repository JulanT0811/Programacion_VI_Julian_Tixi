// app/index.tsx — Paso3
import { useEffect, useRef, useState } from 'react'
import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native'

export default function Paso3Suma() {
  const inputHostRef = useRef<Number>(null)
  const inputPuertoRef = useRef<Number>(null)

  const [host, setHost] = useState<string>('')
  const [puerto, setPuerto] = useState<string>('22')

  useEffect(() => {
    inputHostRef.current?.focus()
  }, [])


  const intentosSilenciososRef = useRef<number>(0)
  const [ultimaConexion, setUltimaConexion] = useState<string>('—')

  function intentarConexion() {
    intentosSilenciososRef.current += 1 
    
    setUltimaConexion(
      `${host || 'servidor'}:${puerto} — intento #${intentosSilenciososRef.current}`
    )
  }
  const valorImput1=  inputHostRef
  const valorImput2=  inputPuertoRef
  function sumaValor(){
    valorImput1 + valorImput2
  }
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Configurar Conexión SSH</Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Host o IP</Text>
        <TextInput
          ref={inputHostRef}
          style={styles.input}
          value={host}
          onChangeText={setHost}
          placeholder="10.0.2.10"
          placeholderTextColor="#aaa"
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => inputPuertoRef.current?.focus()}
        />

        <Text style={styles.etiqueta}>Puerto SSH</Text>
        <TextInput
          ref={inputPuertoRef}
          style={styles.input}
          value={puerto}
          onChangeText={setPuerto}
          placeholder="22"
          placeholderTextColor="#aaa"
          keyboardType="number-pad"
          returnKeyType="done"
        />
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          styles.botonActivo,
          pressed && { opacity: 0.75 },
        ]}
        onPress={intentarConexion}
      >
        <Text style={styles.textoBoton}>Conectar</Text>
      </Pressable>

      <Text style={styles.detalle}>Último intento: {sumaValor}</Text>
      <Text style={styles.detalle}>
        (los reintentos silenciosos no causan re-renders)
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
    gap: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  formulario: {
    width: '100%',
    gap: 8,
  },
  etiqueta: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginTop: 4,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1a1a1a',
  },
  detalle: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
  },
  boton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  botonActivo: {
    backgroundColor: '#1565c0',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
})