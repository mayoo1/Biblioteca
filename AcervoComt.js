import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

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
        title="Piso 1. Biblioteca Infantil y Juvenil José Rosas Moreno" 
        onPress={() => navigation.navigate('Acp1')} 
        imageSource={require('./fotos/Libreria11.jpeg')}
      />
      <MenuButton 
        title="Piso 2. Acervo General Contemporáneo" 
        onPress={() => navigation.navigate('Acp2')} 
        imageSource={require('./fotos/Libreria4.jpg')}
      />
      <MenuButton 
        title="Piso 3. Hemeroteca Contemporánea" 
        onPress={() => navigation.navigate('Acp3')} 
        imageSource={require('./fotos/Libreria6.jpg')}
      />
      <MenuButton 
        title="Piso 4. Colecciones Especiales Nacionales" 
        onPress={() => navigation.navigate('Acp4')} 
        imageSource={require('./fotos/Libreria5.jpg')}
      />
      <MenuButton 
        title="Piso 5. Colecciones Internacionales" 
        onPress={() => navigation.navigate('Acp5')} 
        imageSource={require('./fotos/Coleccion3.jpg')}
      />
      <MenuButton 
        title="Recursos Electrónicos" 
        onPress={() => navigation.navigate('Acre')} 
        imageSource={require('./fotos/RE.png')}
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
    paddingTop: '3%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.95,
    height: height * 0.1,
    backgroundColor: 'white',
    marginVertical: height * 0.01,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: '3%',
  },
  buttonImage: {
    height: '70%',
    width: '16%',
    borderRadius: 7,
  },
  buttonText: {
    flex: 1,
    color: 'darkred',
    fontSize: 12.5,
    fontWeight: 'bold',
    marginLeft: '5%',
    textAlign: 'left',
  },
  iconImage: {
    width: '10%',
    height: '50%',
  },
});

export default App;

