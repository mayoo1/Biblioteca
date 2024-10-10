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
        title="1.5.1 Dirección General de Rentas" 
        onPress={() => navigation.navigate('Ahp1A5d1')} 
        imageSource={require('./fotos/Antiguo13.jpg')}
      />
      <MenuButton 
        title="1.5.2 Ferrocarriles de Jalisco" 
        onPress={() => navigation.navigate('Ahp1A5d2')} 
        imageSource={require('./fotos/Antiguo14.jpg')}
      />
      <MenuButton 
        title="1.5.3 Jesús Camarena Archivos Particulares" 
        onPress={() => navigation.navigate('Ahp1A5d3')} 
        imageSource={require('./fotos/Antiguo6.jpg')}
      />
      <MenuButton 
        title="1.5.4 Capitán de Fragata de la Armada Méxicana Juan José Matute" 
        onPress={() => navigation.navigate('Ahp1A5d4')} 
        imageSource={require('./fotos/Antiguo9.jpg')}
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
