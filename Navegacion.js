import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerToggleButton, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Image, TouchableOpacity, View, SectionItem, Linking, Text, Button, useContext} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import PORTADA from './Portada';
import PRINCIPAL from './Principal'; 
import QS from './QuienesSom'; 
import QSAB from './QuienesSomAB'; 
import QSABH from './QuienesSomABHis'; 
import QSABHO from './QuienesSomABHoy'; 
import QSH from './QuienesSomHis'; 
import QSHP from './QuienesSomHisPrime'; 
import QSHN from './QuienesSomHisNom'; 
import QSD from './QuienesSomDirec'; 
import QSU from './QuienesSomUbi'; 
import QSR from './QuienesSomRedes'; 
import QSCB from './QuienesSomBiblio'; 
import QSC from './QuienesSomCredi';
import S from './Serv'; 
import SA from './ServAtencion'; 
import SB from './ServBiblio'; 
import SL from './ServList'; 
import SC from './ServCata'; 
import SR from './ServRecur'; 
import SF from './ServForm';
import AH from './AcervoHis'; 
import AHP1 from './AcervoHisPiso1'; 
import AHP2 from './AcervoHisPiso2'; 
import AHP3 from './AcervoHisPiso3'; 
import AHP4 from './AcervoHisPiso4';
import AHP5 from './AcervoHisPiso5'; 
import AHP5C from "./AcervoHisPiso5Cine"; 
import AHP5F from "./AcervoHisPiso5Fondo"; 
import AHP5FH from "./AcervoHisPiso5FondoHis"; 
import AHP5FP from "./AcervoHisPiso5FP";
import AHP5FPD1 from "./AcervoHisPiso5FPD1";
import AHP5FPD2 from "./AcervoHisPiso5FPD2";
import AHP5FPD3 from "./AcervoHisPiso5FPD3";
import AHP5FPD4 from "./AcervoHisPiso5FPD4";
import AHP5FPD5 from "./AcervoHisPiso5FPD5";
import AHP5FPD6 from "./AcervoHisPiso5FPD6";
import AHP5FPD7 from "./AcervoHisPiso5FPD7";
import AHP5FPD8 from "./AcervoHisPiso5FPD8";
import AHP5FPD9 from "./AcervoHisPiso5FPD9";
import AHP5FPD10 from "./AcervoHisPiso5FPD10";
import AHP5FPD11 from "./AcervoHisPiso5FPD11";
import AHP5FPD12 from "./AcervoHisPiso5FPD12";
import AHP5FPD13 from "./AcervoHisPiso5FPD13";
import AHP5FPD14 from "./AcervoHisPiso5FPD14";
import AHP5FPD15 from "./AcervoHisPiso5FPD15";
import AHP5FPD16 from "./AcervoHisPiso5FPD16";
import AHP5FPD17 from "./AcervoHisPiso5FPD17";
import AHP5FPD18 from "./AcervoHisPiso5FPD18";
import AHP5FPD19 from "./AcervoHisPiso5FPD19";
import AHP5FPD20 from "./AcervoHisPiso5FPD20";
import AHP5FPD21 from "./AcervoHisPiso5FPD21";
import AHP5FO from "./AcervoHisPiso5Foto"; 
import AHP5FOD1 from "./AcervoHisPiso5FotoD1"; 
import AHP5FOD2 from "./AcervoHisPiso5FotoD2"; 
import AHP5O from "./AcervoHisPiso5Obra";
import AHP6 from './AcervoHisPiso6';
import AHP6AC from './AcervoHisPiso6Ac';
import AHP6ACD1 from './AcervoHisPiso6AcD1';
import AHP6ACD2 from './AcervoHisPiso6AcD2';
import AHP6ACD3 from './AcervoHisPiso6AcD3';
import AHP6ACD4 from './AcervoHisPiso6AcD4';
import AHP6ACD5 from './AcervoHisPiso6AcD5';
import AHP6ACD6 from './AcervoHisPiso6AcD6';
import AHP6TE from './AcervoHisPiso6Te';
import AHP6TED1 from './AcervoHisPiso6TeD1';
import AHP6TED2 from './AcervoHisPiso6TeD2';
import AHP6TED3 from './AcervoHisPiso6TeD3';
import AHP6TED4 from './AcervoHisPiso6TeD4';
import AHP6TED5 from './AcervoHisPiso6TeD5';
import AHP6TED6 from './AcervoHisPiso6TeD6';
import AHP6TED7 from './AcervoHisPiso6TeD7';
import AHP6TED8 from './AcervoHisPiso6TeD8';
import AHP6TED9 from './AcervoHisPiso6TeD9';
import AHP6TED10 from './AcervoHisPiso6TeD10';
import AHP6TED11 from './AcervoHisPiso6TeD11';
import AHP6OBR from './AcervoHisPiso6Obr';
import AHP6SAL from './AcervoHisPiso6Sal';
import AHP6SALD1 from './AcervoHisPiso6SalD1';
import AHP6SALD2 from './AcervoHisPiso6SalD2';
import AHP6SALD3 from './AcervoHisPiso6SalD3';
import AHP6SALD4 from './AcervoHisPiso6SalD4';
import PISO1 from './Piso1';
import DOC1 from './Documento';
import DOC2 from './Documento2';
import DOC3 from './Documento3';
import DOC4 from './Documento4';
import DOC5 from './Documento5';
import DOC6 from './Documento6';
import PISO2 from './Piso2';
import PISO3 from './Piso3';
import AC from './AcervoComt';
import ACP1 from './AcervoComtPiso1';
import ACP2 from './AcervoComtPiso2';
import ACP3 from './AcervoComtPiso3';
import ACP3D1 from './AcervoComtPiso3D1';
import ACP3D2 from './AcervoComtPiso3D2';
import ACP3D3 from './AcervoComtPiso3D3';
import ACP3D4 from './AcervoComtPiso3D4';
import ACP4 from './AcervoComtPiso4';
import ACP4D1 from './AcervoComtPiso4D1';
import ACP4D2 from './AcervoComtPiso4D2';
import ACP4D3 from './AcervoComtPiso4D3';
import ACP4D4 from './AcervoComtPiso4D4';
import ACP4D5 from './AcervoComtPiso4D5';
import ACP4D6 from './AcervoComtPiso4D6';
import ACP4D7 from './AcervoComtPiso4D7';
import ACP5 from './AcervoComtPiso5'; 
import ACP5D1 from './AcervoComtPiso5D1';
import ACP5D2 from './AcervoComtPiso5D2';
import ACP5D3 from './AcervoComtPiso5D3';
import ACP5D5 from './AcervoComtPiso5D5';
import ACRE from './AcervoComtRecursos';
import ACRED1 from './AcervoComtRecursosD1';
import ACRED3 from './AcervoComtRecursosD3';
import PISO2NOVE from './Piso2nove';
import PISO4 from './Piso4';
import PISO5 from './Piso5'; 
import AHP41 from './AcervoHis4-1';
import AHCFN from './AcervoHisColFran';
import AHP2AG from './AcervoHisPiso2AcerGen';
import AHP2CP from './AcervoHisPiso2ColePriv';
import AHP2TAC from './AcervoHisPiso2TesAlv';
import AHP1A2 from './AcervoHisPiso1A2';
import AHP1A3 from './AcervoHisPiso1A3';
import AHP1A4 from './AcervoHisPiso1A4';
import AHP1A5 from './AcervoHisPiso1A5'; 
import AHP1A5D1 from './AcervoHisPiso1A5D1';
import AHP1A5D2 from './AcervoHisPiso1A5D2'; 
import AHP1A5D3 from './AcervoHisPiso1A5D3';
import AHP1A5D4 from './AcervoHisPiso1A5D4';
import AHCAXG from './AHColArtXavGon';
import AHP1A6 from './AcervoHisPiso1A6';
import AHP1A7 from './AcervoHisPiso1A7';
import AHP2AVS from './AcervoHisPiso2ArcVisSon'; 
import AHP2AVSCRUDG from './AHP224AVSCRUDG'; 
import P2UDG from './PISO2UDG';
import P2UDG2 from './PISO2UDG2';
import P2UDG3 from './PISO2UDG3';
import P2UDG4 from './PISO2UDG4'; 
import EVNTS from './Eventos';
import GH from './GaleriaHis';
import NTAS from './Noticias';
import ico6 from './fotos/ico6.png';
import ico9 from './fotos/ico9.png';
import AHP1A2D1 from './AcervoHisPiso1A2D1';
import AHP1A2D2 from './AcervoHisPiso1A2D2';
import AHP1A2D3 from './AcervoHisPiso1A2D3';
import AHP1A2D4 from './AcervoHisPiso1A2D4';
import AHP1A2D5 from './AcervoHisPiso1A2D5'; 
import ACP2D1 from './AcervoComtPiso2D1';
import ACP2D2 from './AcervoComtPiso2D2';
import BD from './BaseDatos';



function ImageDrawerContent(navigation ) {
  return (
    <DrawerContentScrollView {...navigation}>
      <Image source={ require('./fotos/Logo.png') } resizeMethod="resize" resizeMode="contain" style={{ flex:1, alignSelf:"center", width:'80%', height:90, }} />
      <DrawerItemList {...navigation } />
      <SocialMediaLinks />
    </DrawerContentScrollView>
  );}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();



const LogoHeader = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'left', backgroundColor: 'white' }}>
  <Image
    source={require('./fotos/Logo.png')}
    style={{ height: '130%', width: '55%' }} 
    resizeMode="contain"
  />
</View>
);

const defaultScreenOptions = (title) => ({
  title,
  headerTitleAlign: 'center',
  headerTintColor: '#FF5800',
  headerTitleStyle: { fontWeight: 'bold', fontSize: 14 },
  headerStyle: {backgroundColor: 'white'},
  //headerLeft: () => (<Button title="atras"onPress={() => this.props.navigation.navigate.goBack()}></Button>) ,

});

const sections = [
  {
    title: 'Facebook',
    icon: require('./fotos/Fb.png'),
    link: 'https://www.facebook.com/bibliojalisco'
  },
  {
    title: 'Twitter',
    icon: require('./fotos/Tw.png'),
    link: 'https://x.com/BiblioJalisco'
  },
  {
    title: 'Instagram',
    icon: require('./fotos/Ins.png'),
    link: 'https://www.instagram.com/biblio_jalisco/?hl=es-la'
  },
  {
    title: 'YouTube',
    icon: require('./fotos/YT.png'),
    link: 'https://www.youtube.com/@bibliotecapublicadelestado384'
  },
];

const SocialMediaLinks = () => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
    {sections.map((section, index) => (
      <TouchableOpacity style={{borderWidth:0, borderColor:'black', marginTop: '45%'}} key={index} onPress={() => Linking.openURL(section.link)}>
        <Image source={section.icon} style={{ width: 30, height: 30}} />
      </TouchableOpacity>
    ))}
  </View>
);


const Navegacion = () => {
  return (
    <NavigationContainer>

      <Drawer.Navigator backBehavior='history' initialRouteName="Principal"
        drawerContent={(props) => <ImageDrawerContent {...props} />} 
        screenOptions={({ navigation }) => ({
          drawerPosition: 'right',
          drawerActiveTintColor: '#FF5800',
          headerBackTitleVisible: false,
          headerLeft: ({ route }) => {
            if (navigation.getState().routeNames[navigation.getState().index] === 'INICIO') {
              return null;
            }
            return (
              <TouchableOpacity 
               onPress={() => navigation.goBack()} 
              style={{ borderWidth: 0, borderColor: '#FF5800', padding: 4, borderLeftWidth: 10}} 
                >
                  <Image 
                    source={ico9} 
                    style={{ width: 20, height: 50 }} 
                    resizeMode="contain" 
                  />
                </TouchableOpacity>
            );
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Image source={ico6} style={{ width: 70, height: 50 }} />
            </TouchableOpacity>
          ),
        })}
      >
      <Drawer.Screen name="Portada" component={PORTADA} options={{...defaultScreenOptions('Portada'), headerShown: false, drawerLabelStyle: { color: 'darkred', fontWeight: 'normal' }, drawerItemStyle: { borderBottomWidth: 1, borderBottomColor: '#FF5800', display: 'none'}}}/>
        <Drawer.Screen name="INICIO" component={PRINCIPAL} options={{ headerBackground: () => <LogoHeader/>, headerTitle: '', headerTitleAlign: 'center', headerTintColor: '#FF5800', headerTitleStyle: { fontWeight: 'normal', fontSize: 15 }, headerStyle: {backgroundColor: 'white'}, drawerLabelStyle: { color: 'darkred', fontWeight: 'normal' }, drawerItemStyle: { borderBottomWidth: 1, borderBottomColor: '#FF5800' } }}/>
        <Drawer.Screen name="Qs" component={QS} options={{ ...defaultScreenOptions('QUIENES SOMOS'), drawerLabelStyle: { color: 'darkred', fontWeight: 'normal' }, drawerItemStyle: { borderBottomWidth: 1, borderBottomColor: '#FF5800' }}} />
        <Drawer.Screen name="Qsab" component={QSAB} options={{ ...defaultScreenOptions('Acerca de la Biblioteca'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Qsabh" component={QSABH} options={{ ...defaultScreenOptions('Historia'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Qsabho" component={QSABHO} options={{ ...defaultScreenOptions('Hoy en dia'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Qsh" component={QSH} options={{ ...defaultScreenOptions('Historia'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Qshp" component={QSHP} options={{ ...defaultScreenOptions('Primera Sede'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Qshn" component={QSHN} options={{ ...defaultScreenOptions('Nombramiento'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Qsd" component={QSD} options={{ ...defaultScreenOptions('Directorio'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Qsu" component={QSU} options={{ ...defaultScreenOptions('Ubicación'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Qsr" component={QSR} options={{ ...defaultScreenOptions('Redes Sociales'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Qscb" component={QSCB} options={{ ...defaultScreenOptions('Conoce la Biblioteca'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Qsc" component={QSC} options={{ ...defaultScreenOptions('Créditos'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="S" component={S} options={{ ...defaultScreenOptions('SERVICIOS'), drawerLabelStyle: { color: 'darkred', fontWeight: 'normal' }, drawerItemStyle: { borderBottomWidth: 1, borderBottomColor: '#FF5800' } }} />
        <Drawer.Screen name="Sa" component={SA} options={{ ...defaultScreenOptions('Atencion a Usuarios'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Sb" component={SB} options={{ ...defaultScreenOptions('Biblioteca Virtual'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Sl" component={SL} options={{ ...defaultScreenOptions('Listado de Servicios'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Sc" component={SC} options={{ ...defaultScreenOptions('Catalogo en Linea'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Sr" component={SR} options={{ ...defaultScreenOptions('Recursos Libres'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Sf" component={SF} options={{ ...defaultScreenOptions('Formato de Registro'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ah" component={AH} options={{ ...defaultScreenOptions('ACERVO HISTÓRICO'), drawerLabelStyle: { color: 'darkred', fontWeight: 'normal' }, drawerItemStyle: { borderBottomWidth: 1, borderBottomColor: '#FF5800' } }} />
        <Drawer.Screen name="Ahp1" component={AHP1} options={{ ...defaultScreenOptions('Archivos y Mapoteca'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp1A2" component={AHP1A2} options={{ ...defaultScreenOptions('1.2 Supremo Tribunal de Justicia del Estado de Jalisco'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp1A2d1" component={AHP1A2D1} options={{ ...defaultScreenOptions('1.2.1 Ramo Civil'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp1A2d2" component={AHP1A2D2} options={{ ...defaultScreenOptions('1.2.2 Ramo Criminal'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp1A2d3" component={AHP1A2D3} options={{ ...defaultScreenOptions('1.2.3 Ramo Administrativo'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp1A2d4" component={AHP1A2D4} options={{ ...defaultScreenOptions('1.2.4 Libros de Jueces y magistrados'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp1A2d5" component={AHP1A2D5} options={{ ...defaultScreenOptions('1.2.5 Exámenes de Abogados'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp1A3" component={AHP1A3} options={{ ...defaultScreenOptions('1.3 Dirección General de Instrucción Publica'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp1A4" component={AHP1A4} options={{ ...defaultScreenOptions('1.4 Hospital'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp1A5" component={AHP1A5} options={{ ...defaultScreenOptions('1.5 Archivos Particulares'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp1A5d1" component={AHP1A5D1} options={{ ...defaultScreenOptions('1.5.1 Dirección General de Rentas'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp1A5d2" component={AHP1A5D2} options={{ ...defaultScreenOptions('1.5.2 Ferrocarriles de Jalisco'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp1A5d3" component={AHP1A5D3} options={{ ...defaultScreenOptions('1.5.3 Jesús Camarena Archivos Particulares'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp1A5d4" component={AHP1A5D4} options={{ ...defaultScreenOptions('1.5.4 Capitán de Fragata de la Armada Mexicana Juan Jose Matute'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp1A6" component={AHP1A6} options={{ ...defaultScreenOptions('1.6 Microfilmes'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp1A7" component={AHP1A7} options={{ ...defaultScreenOptions('1.7 Mapoteca'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp41" component={AHP41} options={{ ...defaultScreenOptions('4.1 Publicaciones Seriadas'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahcfn" component={AHCFN} options={{ ...defaultScreenOptions('Colección Francisco Navarro'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp2ag" component={AHP2AG} options={{ ...defaultScreenOptions('2.1 Acervo General'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp2cp" component={AHP2CP} options={{ ...defaultScreenOptions('2.2 Colección Privada'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp2tac" component={AHP2TAC} options={{ ...defaultScreenOptions('2.3 Tesoro Álvarez del Castillo'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp2avs" component={AHP2AVS} options={{ ...defaultScreenOptions('2.4 Archivos Visuales'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp2avscrudg" component={AHP2AVSCRUDG} options={{ ...defaultScreenOptions('Colección Radio'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="P2udg" component={P2UDG} options={{ ...defaultScreenOptions('Jaime Sabines'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="P2udg2" component={P2UDG2} options={{ ...defaultScreenOptions('Manuel R. Lapuente'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="P2udg3" component={P2UDG3} options={{ ...defaultScreenOptions('Joe y a su chica'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="P2udg4" component={P2UDG4} options={{ ...defaultScreenOptions('Crisálida'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahcaxg" component={AHCAXG} options={{ ...defaultScreenOptions('Colección Arturo Xavier'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp2" component={AHP2} options={{ ...defaultScreenOptions('Biblioteca Álvarez del Castillo y Fonoteca'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp3" component={AHP3} options={{ ...defaultScreenOptions('Periódicos de Jalisco'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp4" component={AHP4} options={{ ...defaultScreenOptions('Publicaciones seriadas de Jalisco'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp5" component={AHP5} options={{ ...defaultScreenOptions('Acervo General, Fondos Particulares, Cinemáteca y Fototeca de Jalisco'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp5c" component={AHP5C} options={{ ...defaultScreenOptions('5.5 Cinemáteca'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp5f" component={AHP5F} options={{ ...defaultScreenOptions('5.2 Fondo de Impresos Europeos Siglos XVII y XVIII'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp5fh" component={AHP5FH} options={{ ...defaultScreenOptions('5.3 Fondo Histórico Siglo XX'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp5fp" component={AHP5FP} options={{ ...defaultScreenOptions('5.4 Fondos Particulares'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp5fpd1" component={AHP5FPD1} options={{ ...defaultScreenOptions('5.4.1 Francisco Arreola Adame'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp5fpd2" component={AHP5FPD2} options={{ ...defaultScreenOptions('5.4.2 Jorge Enciso Alatorre'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp5fpd3" component={AHP5FPD3} options={{ ...defaultScreenOptions('5.4.3 José Cornejo Franco'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp5fpd4" component={AHP5FPD4} options={{ ...defaultScreenOptions('5.4.4 Pedro Espinosa y Dávalos'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp5fpd5" component={AHP5FPD5} options={{ ...defaultScreenOptions('5.4.5 Paulino Machorro Narváez'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp5fpd6" component={AHP5FPD6} options={{ ...defaultScreenOptions('5.4.6 Luis M. Rivera'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp5fpd7" component={AHP5FPD7} options={{ ...defaultScreenOptions('5.4.7 Saul Rodiles Piña'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp5fpd8" component={AHP5FPD8} options={{ ...defaultScreenOptions('5.4.8 Lorenzo Martínez Negrete'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp5fpd9" component={AHP5FPD9} options={{ ...defaultScreenOptions('5.4.9 Agustín Rivera y Sanromán'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp5fpd10" component={AHP5FPD10} options={{ ...defaultScreenOptions('5.4.10 Felipe de la Rosa'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp5fpd11" component={AHP5FPD11} options={{ ...defaultScreenOptions('5.4.11 Antonio Peñafiel'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp5fpd12" component={AHP5FPD12} options={{ ...defaultScreenOptions('5.4.12 Araceli Ibarra Bellon'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp5fpd13" component={AHP5FPD13} options={{ ...defaultScreenOptions('5.4.13 Phil Weigand Moore'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp5fpd14" component={AHP5FPD14} options={{ ...defaultScreenOptions('5.4.14 Fondo Preparatoria de Jalisco'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp5fpd15" component={AHP5FPD15} options={{ ...defaultScreenOptions('5.4.15 Arturo Rivas Sainz'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp5fpd16" component={AHP5FPD16} options={{ ...defaultScreenOptions('5.4.16 Colecciones Editoriales'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp5fpd17" component={AHP5FPD17} options={{ ...defaultScreenOptions('5.4.17 Colección Alfonso L. Fots Díaz'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp5fpd18" component={AHP5FPD18} options={{ ...defaultScreenOptions('5.4.18 Colección Alberto Gómez Barbosa'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp5fpd19" component={AHP5FPD19} options={{ ...defaultScreenOptions('5.4.19 Colección Ignacio Retes'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp5fpd20" component={AHP5FPD20} options={{ ...defaultScreenOptions('5.4.20 Gabriel Retes Balzaretti'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp5fpd21" component={AHP5FPD21} options={{ ...defaultScreenOptions('5.4.21 Ignacio Igor Arriola Haro'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp5fo" component={AHP5FO} options={{ ...defaultScreenOptions('5.6 Fototeca de Jalisco'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp5fod1" component={AHP5FOD1} options={{ ...defaultScreenOptions('Colección Alberto Gómez Barbosa'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp5fod2" component={AHP5FOD2} options={{ ...defaultScreenOptions('Colección Emilio Garcia Riera (Sección Fotográfica)'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp5o" component={AHP5O} options={{ ...defaultScreenOptions('5.1 Obras Bibliográficas editadas entre los Siglos XVII y XX'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp6" component={AHP6} options={{ ...defaultScreenOptions('Fondos Especiales'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp6Te" component={AHP6TE} options={{ ...defaultScreenOptions('Tesoros Bibliográficos'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp6Ted1" component={AHP6TED1} options={{ ...defaultScreenOptions('6.1.1 Colección de Libros de lenguas Indígenas'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp6Ted2" component={AHP6TED2} options={{ ...defaultScreenOptions('6.1.2 Títulos Incunables'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp6Ted3" component={AHP6TED3} options={{ ...defaultScreenOptions('6.1.3 Primeros Impresos Mexicanos, Siglo XVI'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp6Ted4" component={AHP6TED4} options={{ ...defaultScreenOptions('6.1.4 Fondo Franciscano (Manuscrito)'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp6Ted5" component={AHP6TED5} options={{ ...defaultScreenOptions('6.1.5 Colección de joyas Bibliográficas de la Biblioteca Publica del Estado de Jalisco "Juan Jose Arreola"'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp6Ted6" component={AHP6TED6} options={{ ...defaultScreenOptions('6.1.6 Obras Impresas en Europa en el siglo XVI'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp6Ted7" component={AHP6TED7} options={{ ...defaultScreenOptions('6.1.7 Colección de Codices Facsimilares'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp6Ted8" component={AHP6TED8} options={{ ...defaultScreenOptions('6.1.8 Fondo de Cedularios'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp6Ted9" component={AHP6TED9} options={{ ...defaultScreenOptions('6.1.9 Fondo Reservado'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp6Ted10" component={AHP6TED10} options={{ ...defaultScreenOptions('6.1.10 Colección Guía de Forasteros y Calendarios del siglo XVII y XX'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp6Ted11" component={AHP6TED11} options={{ ...defaultScreenOptions('6.1.11 Álbum histórico gráfico casasola'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp6Ac" component={AHP6AC} options={{ ...defaultScreenOptions('Acervo Especial'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp6Acd1" component={AHP6ACD1} options={{ ...defaultScreenOptions('6.2.1 Colección de Biblias'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp6Acd2" component={AHP6ACD2} options={{ ...defaultScreenOptions('6.2.2 Colección de Thesaurus'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp6Acd3" component={AHP6ACD3} options={{ ...defaultScreenOptions('6.2.3 Colección de leyes de Indias'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp6Acd4" component={AHP6ACD4} options={{ ...defaultScreenOptions('6.2.4 Colección de Medicina'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp6Acd5" component={AHP6ACD5} options={{ ...defaultScreenOptions('6.2.5 Colección de Música'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp6Acd6" component={AHP6ACD6} options={{ ...defaultScreenOptions('6.2.6 Colección de Testigos'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp6Obr" component={AHP6OBR} options={{ ...defaultScreenOptions('Obras Bibliográficas editadas entre los siglos XVII y XX'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp6Sal" component={AHP6SAL} options={{ ...defaultScreenOptions('Sala Jalisciense'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp6Sald1" component={AHP6SALD1} options={{ ...defaultScreenOptions('6.4.1 Impresos Mexicanos desde el siglo XVII hasta 1930'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp6Sald2" component={AHP6SALD2} options={{ ...defaultScreenOptions('6.4.2 Misceláneas'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp6Sald3" component={AHP6SALD3} options={{ ...defaultScreenOptions('6.4.3 Impresos en Guadalajara siglos XVII al XX'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ahp6Sald4" component={AHP6SALD4} options={{ ...defaultScreenOptions('6.4.4 Fondo Jalisco Histórico'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Piso1" component={PISO1} options={{ ...defaultScreenOptions('Piso 1.1 Archivo de la Real Audiencia'), drawerItemStyle: { display: 'none' } }}  />  
        <Drawer.Screen name="Doc1" component={DOC1} options={{ ...defaultScreenOptions('Piso 1.1.1 Ramo Civil. Real Audiencia'), drawerItemStyle: { display: 'none' } }}  />  
        <Drawer.Screen name="Doc2" component={DOC2} options={{ ...defaultScreenOptions('Piso 1.1.2 Ramo Criminal. Real Audiencia'), drawerItemStyle: { display: 'none' } }}  />  
        <Drawer.Screen name="Doc3" component={DOC3} options={{ ...defaultScreenOptions('Piso 1.1.3 Ramo Fiscal. Real Audiencia'), drawerItemStyle: { display: 'none' } }}  />  
        <Drawer.Screen name="Doc4" component={DOC4} options={{ ...defaultScreenOptions('Piso 1.1.4 Bienes de difuntos. Real Audiencia'), drawerItemStyle: { display: 'none' } }}  />  
        <Drawer.Screen name="Piso3" component={PISO3} options={{ ...defaultScreenOptions('Piso 3 Hemeroteca histórica'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Doc5" component={DOC5} options={{ ...defaultScreenOptions('3.1 Periódicos de Jalisco'), drawerItemStyle: { display: 'none' } }}  />  
        <Drawer.Screen name="Doc6" component={DOC6} options={{ ...defaultScreenOptions('4.1 Publicaciones Seriadas'), drawerItemStyle: { display: 'none' } }}  />  
        <Drawer.Screen name="Piso2" component={PISO2} screenOptions={{headerBackTitleVisible: false}} options={{  ...defaultScreenOptions('Piso 2.3 Tesoro Álvarez del Castillo'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Ac" component={AC} options={{ ...defaultScreenOptions('ACERVO CONTEMPORÁNEO'), drawerLabelStyle: { color: 'darkred', fontWeight: 'normal' }, drawerItemStyle: { borderBottomWidth: 1, borderBottomColor: '#FF5800' }}} />
        <Drawer.Screen name="Acp1" component={ACP1} options={{ ...defaultScreenOptions('Piso 1. Biblioteca Infantil y Juvenil'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Acp2" component={ACP2} options={{ ...defaultScreenOptions('Piso 2. Acervo General Contemporáneo'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Acp2d1" component={ACP2D1} options={{ ...defaultScreenOptions('2.1 Libros 000 al 900'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Acp2d2" component={ACP2D2} options={{ ...defaultScreenOptions('2.2 Novedades'), drawerItemStyle: { display: 'none' } }} />        
        <Drawer.Screen name="Acp3" component={ACP3} options={{ ...defaultScreenOptions('Piso 3. Hemeroteca Contemporánea'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Acp3d1" component={ACP3D1} options={{ ...defaultScreenOptions('3.1 Hemeroteca Contemporánea'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Acp3d2" component={ACP3D2} options={{ ...defaultScreenOptions('3.2 Area de Tiflotecnia'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Acp3d3" component={ACP3D3}options={{ ...defaultScreenOptions('3.3 Colección de Pueblos Indígenas'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Acp3d4" component={ACP3D4} options={{ ...defaultScreenOptions('3.4 Modulo INEGI'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Acp4" component={ACP4} options={{ ...defaultScreenOptions('Piso 4. Colecciones Especiales Nacionales'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Acp4d1" component={ACP4D1} options={{ ...defaultScreenOptions('4.1 Fondo de Jalisco'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Acp4d2" component={ACP4D2} options={{ ...defaultScreenOptions('4.2 Colección Universidad de Guadalajara'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Acp4d3" component={ACP4D3} options={{ ...defaultScreenOptions('4.3 Biblioteca Ignacio L. Vallarta'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Acp4d4" component={ACP4D4} options={{ ...defaultScreenOptions('4.4 Fondo Enrique Estrada Faudón'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Acp4d5" component={ACP4D5} options={{ ...defaultScreenOptions('4.5 Fondo Biodiversidad Dr. Enrique Beltrán'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Acp4d6" component={ACP4D6} options={{ ...defaultScreenOptions('4.6 Hemeroteca Especializada sobre la Universidad de Guadalajara'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Acp4d7" component={ACP4D7} options={{ ...defaultScreenOptions('4.7 Mediateca, Documentos Sonoros y Cine'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Acp5" component={ACP5} options={{ ...defaultScreenOptions('Piso 5. Colecciones Internacionales'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Acp5d1" component={ACP5D1} options={{ ...defaultScreenOptions('5.1 Biblioteca Paul Rivel del CCC-IFAL'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Acp5d2" component={ACP5D2} options={{ ...defaultScreenOptions('5.2 Biblioteca Benjamin Franklin'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Acp5d3" component={ACP5D3} options={{ ...defaultScreenOptions('5.3 Biblioteca Josep Maria Muria I Romani'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Acp5d5" component={ACP5D5} options={{ ...defaultScreenOptions('5.5 Otras Colecciones'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Acre" component={ACRE} options={{ ...defaultScreenOptions('Recursos Electrónicos'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Acred1" component={ACRED1} options={{ ...defaultScreenOptions('Intranet'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Acred3" component={ACRED3} options={{ ...defaultScreenOptions('Autoaprendizaje de idiomas'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Piso2nove" component={PISO2NOVE} options={{ ...defaultScreenOptions('Piso 2.2 Novedades'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Piso4" component={PISO4} options={{ ...defaultScreenOptions('Piso 4.1 Fondo de Jalisco'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Piso5" component={PISO5} options={{ ...defaultScreenOptions('Piso 5.4 Ventana de Shanghai'), drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen name="Evnts" component={EVNTS} options={{ ...defaultScreenOptions('EVENTOS'), drawerLabelStyle: { color: 'darkred', fontWeight: 'normal' }, drawerItemStyle: { borderBottomWidth: 1, borderBottomColor: '#FF5800' }}} />
        <Drawer.Screen name="Gh" component={GH} options={{ ...defaultScreenOptions('GALERÍA HISTÓRICA'), drawerLabelStyle: { color: 'darkred', fontWeight: 'normal' }, drawerItemStyle: { borderBottomWidth: 1, borderBottomColor: '#FF5800' } }} />
        <Drawer.Screen name="Ntas" component={NTAS} options={{ ...defaultScreenOptions('NOTICIAS'), drawerLabelStyle: { color: 'darkred', fontWeight: 'normal' }, drawerItemStyle: { borderBottomWidth: 1, borderBottomColor: '#FF5800' } }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navegacion; 
