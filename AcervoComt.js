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
        title="Piso 1. Biblioteca Infantil y Juvenil José Rosas Moreno" 
        onPress={() => navigation.navigate('Acp1')} 
        imageSource={require('./fotos/Libreria11.jpeg')}
      />
      <MenuButton 
        title="Piso 2. Acervo General Contemporaneo" 
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
        title="Recursos Electronicos" 
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
