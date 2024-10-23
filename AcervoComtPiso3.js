import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

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
      <ScrollView style={styles.scrollView}>
        <MenuButton title="3.1 Hemeroteca Contemporánea" onPress={() => navigation.navigate('Acp3d1')} imageSource={require('./fotos/hc.jpg')} />
        <MenuButton title="3.2 Área de Tiflotecnia" onPress={() => navigation.navigate('Acp3d2')} imageSource={require('./fotos/at.png')} />
        <MenuButton title="3.3 Colección de Pueblos Indígenas" onPress={() => navigation.navigate('Acp3d3')} imageSource={require('./fotos/cpi.png')} />
        <MenuButton title="3.4 Módulo INEGI" onPress={() => navigation.navigate('Acp3d4')} imageSource={require('./fotos/inegi.png')} />
      </ScrollView>
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
  scrollView: {
    width: '100%',
    paddingHorizontal: '2%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.95,
    height: height * 0.1,
    backgroundColor: 'white',
    marginVertical: height * 0.010,
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
    fontSize: 14,
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

