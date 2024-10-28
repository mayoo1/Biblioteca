import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, Linking, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../3Diseno';

const { width } = Dimensions.get('window');

openURL = (url) => {
  Linking.openURL(url).catch((err) => console.error('An error occurred', err));
};

const MenuButton = ({ title, onPress, imageSource }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={[styles.buttonM, {height: width * 0.2, width: width * 0.95}]}>
    <Image source={imageSource} style={[styles.buttonImageM, {height: width * 0.15, width: width * 0.15}]} />
    <Text style={styles.buttonTextM}>{title}</Text>
    <Image source={require('../fotos/ico1.png')} style={{height: width * 0.1, width: width * 0.1}} />
  </TouchableOpacity>
);

const App = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.containerM}>
      <ScrollView contentContainerStyle={styles.scrollM}>
        <MenuButton title="Atención a Usuarios" onPress={() => navigation.navigate('Sa')} imageSource={require('../fotos/Atencion.jpeg')}/>
        <MenuButton title="Biblioteca Virtual" onPress={() => this.openURL('http://virtual.bpej.udg.mx/')} imageSource={require('../fotos/BibliotecaVirtual.jpg')} />
        <MenuButton title="Listado de Servicios" onPress={() => navigation.navigate('Sl')} imageSource={require('../fotos/Auditorio.png')}/>
        <MenuButton title="Catálogo en Línea" onPress={() => navigation.navigate('Sc')} imageSource={require('../fotos/Libreria4.jpg')}/>
        <MenuButton title="Recursos Libres en Internet" onPress={() => navigation.navigate('Sr')} imageSource={require('../fotos/Libros2.png')}/>
        <MenuButton title="Formato de Registro Biblioteca Histórica Para Investigadores" onPress={() => this.openURL('http://virtual.bpej.udg.mx/')} imageSource={require('../fotos/Registro.png')}/>
      </ScrollView>
    </View>
  );
};

export default App;