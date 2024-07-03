import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

function Register() {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Register</Text>
      <View style={{marginHorizontal: 20}}>
        <Text>NAME</Text>
        <TextInput style={styles.inputBox} />
        <Text>EMAIL ID</Text>
        <TextInput style={styles.inputBox} />
        <Text>PASSWORD</Text>
        <TextInput style={styles.inputBox} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e1d5c9',
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    marginTop: 10,
    paddingLeft: 10,
  },
});

export default Register;
