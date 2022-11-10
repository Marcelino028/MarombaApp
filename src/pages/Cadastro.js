import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Image, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';


export default function Inicio() {
  const  navigation = useNavigation()
  const [input, setInput] = useState('');

  return (
    <SafeAreaView style={view.container}>
      <View>
        <Image style={user.image} source={require('../../assets/imagens/imagem.png')}/>
      </View>

        <View>
          <TextInput style={Inputs.inputs}
            placeholder="Nome Completo"
          />

          <TextInput style={Inputs.inputs}
            placeholder="E-maill"
          />

          <TextInput style={Inputs.inputs}
            placeholder="Digite uma Senha:"
            value={input}
            onChangeText={ (texto) => setInput(texto)}
         
          />

          
          <TextInput style={Inputs.inputs}
            placeholder="Confirme a Senha:"
            value={input}
            onChangeText={ (texto) => setInput(texto)}
         
          />

          <TextInput style={Inputs.inputs}
            placeholder="Digite sua Idade:"
            value={input}
            onChangeText={ (texto) => setInput(texto)}
         
          />
          
        
        </View>
      
       <View>
        <Button title="Proximo" onPress={() => navigation.navigate('NextCadastro')} buttonStyle={InputEntrar.buttonEntrar}/>
      </View> 
        
    </SafeAreaView>
  );
}


const view = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#5356c4',
  },
});

const user = StyleSheet.create({
  image: {
    marginBottom: -10 ,
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginTop: 60,
  },
});


const Inputs = StyleSheet.create({
  inputs: {
    marginBottom: -9,
    backgroundColor: '#fff',
    padding: 15,
    width: 300,
    color: '#000',
    fontSize: 17,
    alignSelf: 'center',
    height: 50,
    marginTop: 30,
    borderRadius: 10,


  }
})

const InputEntrar = StyleSheet.create({
  marginBottom: 20,
  buttonEntrar: {
    backgroundColor: '#E13A62',
    width: 200,
    alignSelf: 'center',
    height: 50,
    marginTop: 30,
    borderRadius: 10,


  }
})



