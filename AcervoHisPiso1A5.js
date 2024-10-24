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
        title="1.5.1 Dirección General de Rentas" 
        onPress={() => navigation.navigate('Ahp1A5d1')} 
        imageSource={require('./fotos/Antiguo18.jpg')}
      />
      <MenuButton 
        title="1.5.2 Ferrocarriles de Jalisco" 
        onPress={() => navigation.navigate('Ahp1A5d2')} 
        imageSource={require('./fotos/ferrocarriles.jpg')}
      />
      <MenuButton 
        title="1.5.3 Jesús Camarena Archivos Particulares" 
        onPress={() => navigation.navigate('Ahp1A5d3')} 
        imageSource={require('./fotos/jesus.jpg')}
      />
      <MenuButton 
        title="1.5.4 Capitán de Fragata de la Armada Mexicana Juan José" 
        onPress={() => navigation.navigate('Ahp1A5d4')} 
        imageSource={require('./fotos/juanjose.jpg')}
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
    paddingTop: height * 0.02,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    height: height * 0.09,
    backgroundColor: 'white',
    marginVertical: height * 0.01,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: width * 0.03,
  },
  buttonImage: {
    height: height * 0.07,
    width: height * 0.07,
    borderRadius: 7,
  },
  buttonText: {
    flex: 1,
    color: 'darkred',
    fontSize: width * 0.035,
    fontWeight: 'bold',
    marginLeft: width * 0.05,
    textAlign: 'left',
  },
  iconImage: {
    width: height * 0.04,
    height: height * 0.04,
  },
});

export default App;
