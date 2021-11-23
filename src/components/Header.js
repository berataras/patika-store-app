import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <TextInput style={styles.input} placeholder="Ara..." />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: 'purple',
    fontWeight: '900',
  },
  input: {
    backgroundColor: '#ECEFF1',
    padding: 20,
    borderRadius: 15,
    marginTop: 10,
  },
})

export default Header;
