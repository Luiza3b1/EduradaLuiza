import React from "react";
import { View, Text, Textinput, StyleSheet } from "react-native";
const PercentageDimensionsBasics = () => {
  return (
  <View style = {{height: '100%' }}>
  </View>
       style={{
        height: '15%', 
        backgroundColor: 'powderblue',
  }}
/>

<Text style={styles.heading}> Tela de Login </Text>
<Text Input
style = {styles.input}
placeholder = "senha"

/>

   </View>
  );
};

const styles = StyleSheet.create{{
    heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
    input: (
    widht: '80%',
    padding: 10,
    marginBotton: 10.
    borderWidht: 1,
    borderColor: 'grey',
  )

}};

export defaut telalogin;