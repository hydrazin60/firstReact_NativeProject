import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!submitted) {
      if (!name || !email || !password) {
        return Alert.alert('Please fill all fields');
      }

      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
      }, 2000); // Simulate a 2-second delay
    } else {
      // Clear data
      setName('');
      setEmail('');
      setPassword('');
      setSubmitted(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Register</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>NAME*</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter your name"
          placeholderTextColor="#999"
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>EMAIL*</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter your email"
          autoComplete="email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>PASSWORD*</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter your password"
          placeholderTextColor="#999"
          autoComplete="password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>
            {loading ? 'Loading...' : submitted ? 'Clear Data' : 'Submit'}
          </Text>
        </TouchableOpacity>
        <View style={styles.linkContainer} >
        <Text style={styles.LinkText}>
          Aleredy Register Plight <Text style={styles.link}>LOGIN</Text>
        </Text>
        </View>
      </View>
      {submitted && (
        <View>
          <Text style={styles.outputText}>Name: {name}</Text>
          <Text style={styles.outputText}>Email: {email}</Text>
          <Text style={styles.outputText}>Password: {password}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f7f1e3',
  },
  pageTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2d3436',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 18,
    color: 'rgb(48, 48, 47)',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  inputBox: {
    height: 45,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#dfe6e9',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 10,
    width: 150,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  outputText: {
    fontSize: 20,
    backgroundColor: 'black',
    color: 'white',
    fontWeight: 'bold',
    height: 40,
    display: 'flex',
    width: 300,
    margin: 10,
    padding: 2,
    paddingLeft: 10,
    borderRadius: 20,
    alignSelf: 'center',
  },
  link :{
color : 'red',
fontSize : 16,
 
  },
  LinkText :{
fontSize : 16,
fontWeight : 'bold',
color : 'black'
  },
  linkContainer : {
    marginTop : 16,
    marginLeft : 80,
  }

});

export default Register;
// import React, {useState} from 'react';
// import {Text, View, StyleSheet, TextInput, Alert} from 'react-native';
// import {TouchableOpacity} from 'react-native';

// function Register() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = () => {
//     if (!name || !email || !password) {
//       return Alert.alert('Please fill all fields');
//     }

//     setLoading(true);

//     setTimeout(() => {
//       setLoading(false);
//       setSubmitted(!submitted);
//       console.log('Name:', name);
//       console.log('Email:', email);
//       console.log('Password:', password);
//     }, 2000); // Simulate a 2-second delay
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.pageTitle}>Register</Text>
//       <View style={styles.inputContainer}>
//         <Text style={styles.inputLabel}>NAME*</Text>
//         <TextInput
//           style={styles.inputBox}
//           placeholder="Enter your name"
//           placeholderTextColor="#999"
//           value={name}
//           onChangeText={text => setName(text)}
//         />
//       </View>
//       <View style={styles.inputContainer}>
//         <Text style={styles.inputLabel}>EMAIL*</Text>
//         <TextInput
//           style={styles.inputBox}
//           placeholder="Enter your email"
//           autoComplete="email"
//           placeholderTextColor="#999"
//           keyboardType="email-address"
//           value={email}
//           onChangeText={text => setEmail(text)}
//         />
//       </View>
//       <View style={styles.inputContainer}>
//         <Text style={styles.inputLabel}>PASSWORD*</Text>
//         <TextInput
//           style={styles.inputBox}
//           placeholder="Enter your password"
//           placeholderTextColor="#999"
//           autoComplete="password"
//           secureTextEntry
//           value={password}
//           onChangeText={text => setPassword(text)}
//         />
//       </View>
//       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>
//           {loading ? 'Loading...' : 'Submit'}
//         </Text>
//       </TouchableOpacity>
//       {submitted && (
//         <View>
//           <Text style={styles.outputText}>Name: {name}</Text>
//           <Text style={styles.outputText}>Email: {email}</Text>
//           <Text style={styles.outputText}>Password: {password}</Text>
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#f7f1e3',
//   },
//   pageTitle: {
//     fontSize: 36,
//     fontWeight: 'bold',
//     color: '#2d3436',
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   inputLabel: {
//     fontSize: 18,
//     color: 'rgb(48, 48, 47)',
//     marginBottom: 5,
//     fontWeight: 'bold',
//   },
//   inputBox: {
//     height: 45,
//     backgroundColor: '#ffffff',
//     borderRadius: 10,
//     paddingLeft: 15,
//     fontSize: 20,
//     borderWidth: 1,
//     borderColor: '#dfe6e9',
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 20,
//     alignItems: 'center',
//     marginVertical: 10,
//     width: 100,
//   },
//   buttonText: {
//     color: '#ffffff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   outputText: {
//     fontSize: 20,
//     backgroundColor: 'black',
//     color: 'white',
//     fontWeight: 'bold',
//     height: 40,
//     display: 'flex',
//     width: 300,
//     margin: 10,
//     padding: 2,
//     paddingLeft: 10,
//     borderRadius: 20,
//   },
// });

// export default Register;
