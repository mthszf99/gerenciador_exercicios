import React from "react";
import { Alert,  Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
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
          <Text style={styles.titleText}>
            Seja bem vindo (a) ao seu gerenciador de exercícios.
          </Text>
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
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  principalView: {
    alignItems : 'center',
    width : '100%'
  },
  viewItems: {
    marginTop : 250,
    width : '100%',
    alignItems : 'center'
,  },
  buttonLogin: {
    backgroundColor : '#567756',
    width : '50%',
    height : 30,
    borderRadius : 10,
    alignItems: 'center',
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