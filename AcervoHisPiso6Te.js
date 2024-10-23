import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

const MenuButton = ({ title, onPress, imageSource }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles.button}>
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
        <MenuButton title="6.1.1 Colección de Libros de lenguas Indígenas" onPress={() => navigation.navigate('Ahp6Ted1')} imageSource={require('./fotos/Antiguo22.jpg')} />
        <MenuButton title="6.1.2 Títulos Incunables" onPress={() => navigation.navigate('Ahp6Ted2')} imageSource={require('./fotos/Antiguo23.jpg')} />
        <MenuButton title="6.1.3 Primeros Impresos Mexicanos, Siglo XVI" onPress={() => navigation.navigate('Ahp6Ted3')} imageSource={require('./fotos/Antiguo24.jpg')} />
        <MenuButton title="6.1.4 Fondo Franciscano (Manuscrito)" onPress={() => navigation.navigate('Ahp6Ted4')} imageSource={require('./fotos/Antiguo25.jpg')} />
        <MenuButton title="6.1.5 Colección de joyas Bibliográficas de la Biblioteca Publica del Estado de Jalisco 'Juan Jose Arreola'" onPress={() => navigation.navigate('Ahp6Ted5')} imageSource={require('./fotos/Antiguo26.jpg')} />
        <MenuButton title="6.1.6 Obras Impresas en Europa en el siglo XVI" onPress={() => navigation.navigate('Ahp6Ted6')} imageSource={require('./fotos/Libro4.jpg')} />
        <MenuButton title="6.1.7 Colección de Codices Facsimilares" onPress={() => navigation.navigate('Ahp6Ted7')} imageSource={require('./fotos/gdlp.jpg')} />
        <MenuButton title="6.1.8 Fondo de Cedularios" onPress={() => navigation.navigate('Ahp6Ted8')} imageSource={require('./fotos/Antiguo27.jpg')} />
        <MenuButton title="6.1.9 Fondo Reservado" onPress={() => navigation.navigate('Ahp6Ted9')} imageSource={require('./fotos/Antiguo28.jpg')} />
        <MenuButton title="6.1.10 Colección Guía de Forasteros y Calendarios del siglo XVII y XX" onPress={() => navigation.navigate('Ahp6Ted10')} imageSource={require('./fotos/Antiguo29.jpg')} />
        <MenuButton title="6.1.11 Álbum histórico gráfico casasola" onPress={() => navigation.navigate('Ahp6Ted11')} imageSource={require('./fotos/personas.jpg')} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'gainsboro',
    alignItems: 'center',
    paddingTop: 20,
  },
  scrollView: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.95, // 95% of screen width
    height: 70,
    backgroundColor: 'white',
    marginVertical: 10,
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
    fontSize: 14, // Slightly increased font size
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

