import React from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flexDirection : 'row'}}>
        <View
          style={{height : 100, backgroundColor : '#4f6156', flex : 0.2}} >
          <Text>Seja bem vindo (a) ao seu gerenciador de exercícios.</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
