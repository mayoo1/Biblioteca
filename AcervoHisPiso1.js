import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const MenuButton = ({ title, onPress, imageSource }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.button}>
    <Image source={imageSource} style={styles.buttonImage} />
    <Text style={styles.buttonText}>{title}</Text>
    <Image source={require('./fotos/ico1.png')} style={styles.iconImage} />
  </TouchableOpacity>
);

const App = () => {
  const navigation = useNavigation();

  const menuItems = [
    { title: "1.1 Archivo de la Real Audiencia de la Nueva Galicia", route: 'Piso1', image: require('./fotos/GaleriaHis3.png') },
    { title: "1.2 Supremo Tribunal de Justicia del Estado de Jalisco", route: 'Ahp1A2', image: require('./fotos/Antiguo3.jpg') },
    { title: "1.3 Dirección General de Instrucción Publica", route: 'Ahp1A3', image: require('./fotos/Antiguo4.jpg') },
    { title: "1.4 Hospital", route: 'Ahp1A4', image: require('./fotos/Antiguo6.jpg') },
    { title: "1.5 Archivos Particulares", route: 'Ahp1A5', image: require('./fotos/Antiguo5.jpg') },
    { title: "1.6 Microfilmes", route: 'Ahp1A6', image: require('./fotos/micro.jpg') },
    { title: "1.7 Mapoteca", route: 'Ahp1A7', image: require('./fotos/GaleriaHis5.png') },
  ];

  return (
    <View style={styles.container}>
      {menuItems.map(item => (
        <MenuButton 
          key={item.route} 
          title={item.title} 
          onPress={() => navigation.navigate(item.route)} 
          imageSource={item.image} 
        />
      ))}
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
    marginVertical: height * 0.015,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: width * 0.02,
  },
  buttonImage: {
    height: height * 0.065,
    width: height * 0.065,
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
    width: width * 0.08,
    height: width * 0.08,
  },
});

export default App;
