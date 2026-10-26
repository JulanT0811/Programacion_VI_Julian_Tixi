import {
    Button,
    StyleSheet,
    Text,
    View,
} from 'react-native';


import {
    UsuarioProvider,
    useUsuario,
} from '../context/UsuarioContext';


// Componente que consume el contexto
function Perfil() {
  // 1. Extraer cargo y setCargo del contexto
  const { usuario, setUsuario, cargo, setCargo } = useUsuario();

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Hola, {usuario}
      </Text>

      {/* 2. Mostrar el cargo */}
      <Text style={styles.subtexto}>
        Cargo: {cargo}
      </Text>

      <View style={styles.botonContainer}>
        <Button
          title="Cambiar usuario"
          onPress={() => setUsuario('Homero Simpson')}
        />
      </View>

      {/* 3. Botón para actualizar el cargo */}
      <View style={styles.botonContainer}>
        <Button
          title="Cambiar cargo"
          onPress={() => setCargo('Líder Técnico')}
        />
      </View>
    </View>
  );
}


// Componente principal
export default function Paso5() {
  return (
    <UsuarioProvider>
      <Perfil />
    </UsuarioProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  texto: {
    fontSize: 24,
    marginBottom: 8,
  },
  subtexto: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  botonContainer: {
    marginVertical: 6,
    width: 200,
  },
});