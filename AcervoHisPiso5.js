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
        title="5.1 Obras Bibliograficas editadas entre los Siglos XVII y XX" 
        onPress={() => navigation.navigate('Ahp1')} 
        imageSource={require('./fotos/Antiguo2.jpg')}
      />
      <MenuButton 
        title="5.2 Fondo de Impresos Europeos Siglos XVII y XVIII" 
        onPress={() => navigation.navigate('Ahp2')} 
        imageSource={require('./fotos/Libreria4.jpg')}
      />
      <MenuButton 
        title="5.3 Fondo Historico Siglo XX" 
        onPress={() => navigation.navigate('Ahp3')} 
        imageSource={require('./fotos/Antiguo1.jpg')}
      />
      <MenuButton 
        title="5.4 Fondos Particulares" 
        onPress={() => navigation.navigate('Ahp4')} 
        imageSource={require('./fotos/Libreria.jpg')}
      />
      <MenuButton 
        title="5.5 Cinemateca" 
        onPress={() => navigation.navigate('Ahp5')} 
        imageSource={require('./fotos/Libros3.jpg')}
      />
      <MenuButton 
        title="5.6 Fototeca de Jalisco" 
        onPress={() => navigation.navigate('Ahp6')} 
        imageSource={require('./fotos/Libreria5.jpg')}
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