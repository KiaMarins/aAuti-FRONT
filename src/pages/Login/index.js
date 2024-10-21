import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import { useState } from 'react';
import apiAuth from '../../services/apiAuth';

export default function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function fazerLogin() {
    try {
      const res = await apiAuth.post('login', 
                  {
                    "email": email,
                    "password": password
                  });

      console.log(res.data);
      // Aqui você pode adicionar a lógica para armazenar o token ou redirecionar o usuário

    } catch (error) {
      console.log("Erro: " + error.message);
    }
  }

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}
      />

      <TouchableOpacity onPress={fazerLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
