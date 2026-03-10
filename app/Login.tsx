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

const Login = () => {
  return(
    <SafeAreaProvider>
      <SafeAreaView style={{flexDirection : 'column'}}>

        <View style={styles.principalView} >
          <Image
          style={styles.logoPrincipal}
          source={require('@/assets/images/logo.png')}/>
        </View>

        <View style={styles.viewItems}>
          <TextInput style={styles.input} placeholder="Username"/>
          <TextInput style={styles.input} placeholder="Senha"/>
          <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => showAlert('Login realizado com sucesso!')}
          activeOpacity={0.7}>
            <Text style={styles.textLogin}>Login</Text>
         </TouchableOpacity>
         <TouchableOpacity
          style={styles.buttonCadastro}
          onPress={() => showAlert('Rota página Cadastro')}
          activeOpacity={0.7}>
            <Text style={styles.textCadastro}>Cadastre-se</Text>
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
  logoPrincipal: {
    width: 210,
    height: 170,
  },
  viewItems: {
    marginTop : 20,
    width : '100%',
    alignItems : 'center',
    padding : 50,
  },
  buttonLogin: {
    backgroundColor : '#567756',
    width : '50%',
    height : 50,
    borderRadius : 10,
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
  },
    buttonCadastro: {
    borderColor: '#567756',
    borderWidth : 1,
    marginTop: 20,  
    width : '50%',
    height : 30,
    borderRadius : 10,
    alignItems: 'center',
    padding: 5,
  },
  textCadastro:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#567756',
  },
  textLogin: {
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

export default Login;