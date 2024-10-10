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
        title="2.1 Acervo General" 
        onPress={() => navigation.navigate('Ahp2ag')} 
        imageSource={require('./fotos/Antiguo2.jpg')}
      />
      <MenuButton 
        title="2.2 Coleccion Privada" 
        onPress={() => navigation.navigate('Ahp2cp')} 
        imageSource={require('./fotos/Libreria4.jpg')}
      />
      <MenuButton 
        title="2.3 Tesoro" 
        onPress={() => navigation.navigate('Ahp2tac')} 
        imageSource={require('./fotos/Antiguo1.jpg')}
      />
      <MenuButton 
        title="2.4 Archivos Visuales y Sonoros: Fonoteca" 
        onPress={() => navigation.navigate('Ahp2avs')} 
        imageSource={require('./fotos/Libreria.jpg')}
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
