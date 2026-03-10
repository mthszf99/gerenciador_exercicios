import React from "react";
import { Alert,  Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function showAlert(message : string) {
  if (Platform.OS === 'web') {
    window.alert(message);
  } else {
    Alert.alert(message);
  }
}



const Cadastro = () => {
  return(
    <SafeAreaProvider>
      <SafeAreaView style={{flexDirection : 'column'}}>

        <View style={styles.principalView} >
            <Text>
                Cadastre-se para iniciar seus treinos.
            </Text>
        </View>

        <View style={styles.viewItems}>
          <TextInput style={styles.input} placeholder="Username"/>
          <TextInput style={styles.input} placeholder="Nome"/>
          <TextInput style={styles.input} placeholder="Sobrenome"/>
          <TextInput style={styles.input} placeholder="Peso (kg)"/>
          <TextInput style={styles.input} placeholder="Altura (cm)"/>
          <TextInput style={styles.input} placeholder="Idade"/>
          <TextInput style={styles.input} placeholder="E-mail"/>
          <TextInput style={styles.input} placeholder="Senha"/>
          <TextInput style={styles.input} placeholder="Confirme a senha"/>
          <TouchableOpacity
          style={styles.buttonCadastro}
          onPress={() => showAlert('Cadastro realizado com sucesso!')}
          activeOpacity={0.7}>
            <Text style={styles.textCadastro}>Cadastrar</Text>
         </TouchableOpacity>
         <TouchableOpacity
          style={styles.buttonVoltar}
          onPress={() => showAlert('Volta ao login')}
          activeOpacity={0.7}>
            <Text style={styles.textVoltar}>Voltar</Text>
         </TouchableOpacity>             
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  principalView: {
    alignItems : 'center',
    width : '100%',
    marginTop : 20,
  },
  viewItems: {
    marginTop : 5,
    width : '100%',
    alignItems : 'center',
    padding : 50,
  },
  buttonCadastro: {
    backgroundColor : '#567756',
    width : '50%',
    height : 50,
    borderRadius : 10,
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
  },
    buttonVoltar: {
    borderColor: '#567756',
    borderWidth : 1,
    marginTop: 20,  
    width : '50%',
    height : 30,
    borderRadius : 10,
    alignItems: 'center',
    padding: 5,
  },
  textVoltar:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#567756',
  },
  textCadastro: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    margin : 10,
    height : 50,
    width : '80%',
    borderWidth: 1,
    padding: 10,
    borderColor : '#567756',
    borderRadius : 10,
  },
});

export default Cadastro;