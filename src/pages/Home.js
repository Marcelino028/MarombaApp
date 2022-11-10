import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image} from 'react-native';
import { SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';

export default function Home() {
  const  navigation = useNavigation()
  return (

    <SafeAreaView>
    <View style={view.container}>
      <Text style={texts1.marombaapp}>Marombapp</Text>
      <Text style={texts2.dietas}>Dietas e dicas para ganho</Text>
      <Text style={texts2.dietas}>de massa muscular.</Text> 
      <Image style={image1.image} source={require('../../assets/imagens/imagem.png')}/>
    </View>
       
    <View>
      <Button title="Login" onPress={() => navigation.navigate('Login')} buttonStyle={style.button}/>
      <Button title="Cadastre-se" onPress={() => navigation.navigate('Cadastro')} buttonStyle={style2.button2}/>
    </View>
  </SafeAreaView>

  );
}

const view = StyleSheet.create({
  container: {
    backgroundColor: '#5356c4',
    marginBottom: 20,
    height: 400,
    color:'#fff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

const texts1 = StyleSheet.create({
  marombaapp: {
    color: '#fff',
    marginTop: 30,
    fontSize: 40,
    marginBottom: -30,
    
    textAlign: 'center',
  },
});

const texts2 = StyleSheet.create({
  dietas: {
    color: '#fff',
    marginTop: 30,
    fontSize: 20,
    marginBottom: -30,
    textAlign: 'center',
  },
});

const image1 = StyleSheet.create({
  image: {
    width: 220,
    height: 220,
    alignSelf: 'center',
    marginTop: 60,
  },
});



const style2 = StyleSheet.create({
  button2: {
    backgroundColor: '#262e35',
    width: 150,
    alignSelf: 'center',
    height: 50,
    marginTop: 30,
    borderRadius: 10,


  }
})

const style = StyleSheet.create({
  button: {
    backgroundColor: '#E13A62',
    width: 200,
    alignSelf: 'center',
    height: 70,
    marginTop: 30,
    borderRadius: 15,


  }
})






