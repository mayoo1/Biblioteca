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
        title="Piso 1. Archivos y Mapoteca" 
        onPress={() => navigation.navigate('Ahp1')} 
        imageSource={require('./fotos/GaleriaHis3.png')}
      />
      <MenuButton 
        title="Piso 2. Biblioteca Álvarez del Castillo y Fonoteca" 
        onPress={() => navigation.navigate('Ahp2')} 
        imageSource={require('./fotos/Libreria6.jpg')}
      />
      <MenuButton 
        title="Piso 3. Periódicos de Jalisco" 
        onPress={() => navigation.navigate('Ahp3')} 
        imageSource={require('./fotos/Antiguo13.jpg')}
      />
      <MenuButton 
        title="Piso 4. Publicaciones seriadas de Jalisco (Del S.XIX hasta 1982) y Fonoteca" 
        onPress={() => navigation.navigate('Ahp4')} 
        imageSource={require('./fotos/Libreria7.jpg')}
      />
      <MenuButton 
        title="Piso 5. Acervo General, Fondos Particulares, Cinemateca y Fototeca de Jalisco" 
        onPress={() => navigation.navigate('Ahp5')} 
        imageSource={require('./fotos/Libros1.jpg')}
      />
      <MenuButton 
        title="Piso 6. Fondos Especiales" 
        onPress={() => navigation.navigate('Ahp6')} 
        imageSource={require('./fotos/Libros4.jpeg')}
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
