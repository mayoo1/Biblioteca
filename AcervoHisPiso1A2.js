import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Obtener dimensiones de la pantalla
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
    { title: "1.2.1 Ramo Civil. Supremo Tribunal", route: 'Ahp1A2d1', image: require('./fotos/Antiguo11.jpg') },
    { title: "1.2.2 Ramo Criminal. Supremo Tribunal de Justicia", route: 'Ahp1A2d2', image: require('./fotos/Antiguo16.jpg') },
    { title: "1.2.3 Ramo Administrativo. Supremo Tribunal", route: 'Ahp1A2d3', image: require('./fotos/Antiguo13.jpg') },
    { title: "1.2.4 Libros de Jueces y magistrados. Supremo Tribunal", route: 'Ahp1A2d4', image: require('./fotos/Antiguo14.jpg') },
    { title: "1.2.5 Exámenes de Abogados. Supremo Tribunal", route: 'Ahp1A2d5', image: require('./fotos/Antiguo15.jpg') },
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
    marginVertical: height * 0.02,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: width * 0.03,
  },
  buttonImage: {
    height: height * 0.06,
    width: height * 0.06,
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
