import { useMemo, useState } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
} from 'react-native';

interface Producto {
  nombre: string;
  precio: number;
  cantidad: number;
}

export default function Paso6() {
  const [productos, setProductos] = useState<Producto[]>([
    { nombre: 'Teclado', precio: 25, cantidad: 2 },
    { nombre: 'Mouse', precio: 15, cantidad: 3 },
    { nombre: 'Monitor', precio: 200, cantidad: 1 },
  ]);

  const [contador, setContador] = useState<number>(0);

  // Memoriza el cálculo del total
  const total = useMemo(() => {
    console.log('Calculando total...');

    return productos.reduce(
      (acumulado, producto) =>
        acumulado + producto.precio * producto.cantidad,
      0
    );
  }, [productos]);

  function agregarProducto() {
    setProductos((actuales) => [
      ...actuales,
      { nombre: 'Audífonos', precio: 30, cantidad: 1 },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Tienda de tecnología
      </Text>

      <Text>Productos: {productos.length}</Text>

      <Text style={styles.total}>
        Total: ${total.toFixed(2)}
      </Text>

      <Button
        title="Incrementar contador"
        onPress={() => setContador((c) => c + 1)}
      />

      <Text>Contador: {contador}</Text>

      <Button
        title="Agregar audífonos"
        onPress={agregarProducto}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    gap: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});