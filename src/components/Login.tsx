// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Alert,
//   TouchableOpacity,
// } from 'react-native';

// export default function Login({navigation}) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = () => {
//     if (!submitted) {
//       if (!email || !password) {
//         return Alert.alert('Please fill all fields');
//       }

//       setLoading(true);

//       setTimeout(() => {
//         setLoading(false);
//         setSubmitted(true);

//         console.log('Email:', email);
//         console.log('Password:', password);
//       }, 2000); // Simulate a 2-second delay
//     } else {
//       // Clear data
//       setEmail('');
//       setPassword('');
//       setSubmitted(false);
//     }
//   };

//   return (
//     <View style={styles.Maincontainer}>
//       <Text style={styles.pageTitle}>Login Page</Text>
//       <View style={styles.inputContainer}>
//         <Text style={styles.inputLabel}>Email*</Text>
//         <TextInput
//           style={styles.inputBox}
//           placeholder="Enter your email"
//           autoComplete="email"
//           placeholderTextColor="#999"
//           keyboardType="email-address"
//           value={email}
//           onChangeText={setEmail}
//         />
//       </View>
//       <View style={styles.inputContainer}>
//         <Text style={styles.inputLabel}>Password*</Text>
//         <TextInput
//           style={styles.inputBox}
//           placeholder="Enter your password"
//           placeholderTextColor="#999"
//           autoComplete="password"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />
//       </View>
//       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>
//           {loading ? 'Loading...' : submitted ? 'Clear Data' : 'Login'}
//         </Text>
//       </TouchableOpacity>
//       <View style={styles.linkContainer}>
//         <Text style={styles.linkText}>
//           Not a Register ? <Text style={styles.link} onPress={()=>navigation.navigate("Register")}> Register</Text>
//         </Text>
//       </View>
//       {submitted && (
//         <View>
//           <Text style={styles.outputText}>Email: {email}</Text>
//           <Text style={styles.outputText}>Password: {password}</Text>
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   Maincontainer: {
//     flex: 1,
//     justifyContent: 'center',

//     backgroundColor: '#f7f1e3',
//     padding: 20,
//   },
//   inputContainer: {
//     width: '80%',
//     marginBottom: 20,
//   },
//   pageTitle: {
//     fontSize: 36,
//     fontWeight: 'bold',
//     color: '#2d3436',
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   inputBox: {
//     width: '100%',
//     height: 45,
//     backgroundColor: '#ffffff',
//     borderRadius: 10,
//     paddingLeft: 15,
//     fontSize: 20,
//     borderWidth: 1,
//     borderColor: '#dfe6e9',
//   },
//   inputLabel: {
//     fontSize: 18,
//     color: 'rgb(48, 48, 47)',
//     marginBottom: 5,
//     fontWeight: 'bold',
//   },
//   button: {
//     backgroundColor: '#0984e3',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     width: '80%',
//     marginTop: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   linkContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   linkText: {
//     color: '#0984e3',
//     fontSize: 16,
//   },
//   link: {
//     color: 'red',
//   },
//   outputText: {
//     fontSize: 18,
//     color: '#2d3436',
//     textAlign: 'center',
//     marginTop: 20,
//   },
// });

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!submitted) {
      if (!email || !password) {
        return Alert.alert('Please fill all fields');
      }

      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);

        console.log('Email:', email);
        console.log('Password:', password);
      }, 2000); // Simulate a 2-second delay
    } else {
      // Clear data
      setEmail('');
      setPassword('');
      setSubmitted(false);
    }
  };

  return (
    <View style={styles.Maincontainer}>
      <Text style={styles.pageTitle}>Login Page</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email*</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter your email"
          autoComplete="email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password*</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter your password"
          placeholderTextColor="#999"
          autoComplete="password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>
          {loading ? 'Loading...' : submitted ? 'Clear Data' : 'Login'}
        </Text>
      </TouchableOpacity>
      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>
          Not Registered?{' '}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('Register')}>
            Register
          </Text>
        </Text>
      </View>
      {submitted && (
        <View>
          <Text style={styles.outputText}>Email: {email}</Text>
          <Text style={styles.outputText}>Password: {password}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: '#f7f1e3',
    padding: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  pageTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2d3436',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputBox: {
    width: '100%',
    height: 45,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#dfe6e9',
  },
  inputLabel: {
    fontSize: 18,
    color: 'rgb(48, 48, 47)',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#0984e3',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  linkContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  linkText: {
    color: '#0984e3',
    fontSize: 16,
  },
  link: {
    color: 'red',
  },
  outputText: {
    fontSize: 18,
    color: '#2d3436',
    textAlign: 'center',
    marginTop: 20,
  },
});
