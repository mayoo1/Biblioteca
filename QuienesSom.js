import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
      <MenuButton 
        title="Acerca de la Biblioteca" 
        onPress={() => navigation.navigate('Qsab')} 
        imageSource={require('./fotos/Libros1.jpg')}
      />
      <MenuButton 
        title="Historia" 
        onPress={() => navigation.navigate('Qsh')} 
        imageSource={require('./fotos/Historia.jpg')}
      />
      <MenuButton 
        title="Directorio" 
        onPress={() => navigation.navigate('Qsd')} 
        imageSource={require('./fotos/Logo2.png')}
      />
      <MenuButton 
        title="Ubicación" 
        onPress={() => navigation.navigate('Qsu')} 
        imageSource={require('./fotos/Mapa.png')}
      />
      <MenuButton 
        title="Conoce la Biblioteca" 
        onPress={() => navigation.navigate('Qscb')} 
        imageSource={require('./fotos/Biblioteca1.jpg')}
      />
      <MenuButton 
        title="La Biblioteca en Redes Sociales" 
        onPress={() => navigation.navigate('Qsr')} 
        imageSource={require('./fotos/Redes.png')}
      />
      <MenuButton 
        title="Creditos de la Aplicacion" 
        onPress={() => navigation.navigate('Qsc')} 
        imageSource={require('./fotos/Biblioteca2.jpg')}
      />
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
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
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
    fontSize: 12.5,
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
