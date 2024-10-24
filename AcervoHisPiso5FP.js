import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const MenuButton = ({ title, onPress, imageSource }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.button}>
    <Image source={imageSource} style={styles.buttonImage} />
    <Text style={styles.buttonText}>{title}</Text>
    <Image source={require('./fotos/ico1.png')} style={styles.iconImage} />
  </TouchableOpacity>
);

const App = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <MenuButton title="5.4.1 Francisco Arreola Adame" onPress={() => navigation.navigate('Ahp5fpd1')} imageSource={require('./fotos/persona10.jpg')} />
        <MenuButton title="5.4.2 Jorge Enciso Alatorre" onPress={() => navigation.navigate('Ahp5fpd2')} imageSource={require('./fotos/persona11.jpg')} />
        <MenuButton title="5.4.3 José Cornejo Franco" onPress={() => navigation.navigate('Ahp5fpd3')} imageSource={require('./fotos/persona12.jpg')} />
        <MenuButton title="5.4.4 Pedro Espinosa y Dávalos" onPress={() => navigation.navigate('Ahp5fpd4')} imageSource={require('./fotos/persona13.jpg')} />
        <MenuButton title="5.4.5 Paulino Machorro Narváez" onPress={() => navigation.navigate('Ahp5fpd5')} imageSource={require('./fotos/persona14.jpg')} />
        <MenuButton title="5.4.6 Luis M. Rivera" onPress={() => navigation.navigate('Ahp5fpd6')} imageSource={require('./fotos/persona15.jpg')} />
        <MenuButton title="5.4.7 Saul Rodiles Piña" onPress={() => navigation.navigate('Ahp5fpd7')} imageSource={require('./fotos/persona16.jpg')} />
        <MenuButton title="5.4.8 Lorenzo Martínez Negrete" onPress={() => navigation.navigate('Ahp5fpd8')} imageSource={require('./fotos/persona17.jpg')} />
        <MenuButton title="5.4.9 Agustín Rivera y Sanromán" onPress={() => navigation.navigate('Ahp5fpd9')} imageSource={require('./fotos/persona18.jpg')} />
        <MenuButton title="5.4.10 Felipe de la Rosa" onPress={() => navigation.navigate('Ahp5fpd10')} imageSource={require('./fotos/persona19.jpg')} />
        <MenuButton title="5.4.11 Antonio Peñafiel" onPress={() => navigation.navigate('Ahp5fpd11')} imageSource={require('./fotos/persona20.jpg')} />
        <MenuButton title="5.4.12 Araceli Ibarra Bellon" onPress={() => navigation.navigate('Ahp5fpd12')} imageSource={require('./fotos/anonima.jpg')} />
        <MenuButton title="5.4.13 Phil Weigand Moore" onPress={() => navigation.navigate('Ahp5fpd13')} imageSource={require('./fotos/persona21.jpg')} />
        <MenuButton title="5.4.14 Fondo Preparatoria de Jalisco" onPress={() => navigation.navigate('Ahp5fpd14')} imageSource={require('./fotos/prepa.png')} />
        <MenuButton title="5.4.15 Arturo Rivas Sainz" onPress={() => navigation.navigate('Ahp5fpd15')} imageSource={require('./fotos/persona22.jpg')} />
        <MenuButton title="5.4.16 Colecciones Editoriales" onPress={() => navigation.navigate('Ahp5fpd16')} imageSource={require('./fotos/Libros6.jpg')} />
        <MenuButton title="5.4.17 Colección Alfonso L. Fots Díaz" onPress={() => navigation.navigate('Ahp5fpd17')} imageSource={require('./fotos/pintura.jpg')} />
        <MenuButton title="5.4.18 Colección Alberto Gómez Barbosa" onPress={() => navigation.navigate('Ahp5fpd18')} imageSource={require('./fotos/persona9.jpg')} />
        <MenuButton title="5.4.19 Colección Ignacio Retes" onPress={() => navigation.navigate('Ahp5fpd19')} imageSource={require('./fotos/persona23.jpg')} />
        <MenuButton title="5.4.20 Gabriel Retes Balzaretti" onPress={() => navigation.navigate('Ahp5fpd20')} imageSource={require('./fotos/persona24.jpg')} />
        <MenuButton title="5.4.21 Ignacio Igor Arreola Haro" onPress={() => navigation.navigate('Ahp5fpd21')} imageSource={require('./fotos/persona25.jpg')} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    alignItems: 'center',
    paddingTop: 10,
  },
  scrollView: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    marginVertical: 8,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  buttonImage: {
    height: 50,
    width: 50,
    borderRadius: 7,
  },
  buttonText: {
    flex: 1,
    color: 'darkred',
    fontSize: 14, // Aumenté un poco el tamaño de la fuente
    fontWeight: 'bold',
    marginLeft: 20,
    textAlign: 'left',
  },
  iconImage: {
    width: 30,
    height: 30,
  },
});

export default App;

