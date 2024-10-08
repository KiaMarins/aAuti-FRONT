import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import { useState } from 'react';
import apiAuth from '../../services/apiAuth';

export default function Register() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function inserirRegistro(){
    try{

      const res = await apiAuth.post('users', 
                  {
                    "name": name,
                    "email": email,
                    "password": password
                  });
      
      console.log(res.data);

    }catch(error){
      console.log("Erro: "+ error.message);
    }
  }

  return (
    <View style={{ padding: 16 }}>
    <TextInput
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, marginBottom: 12, padding: 8 }}
      />
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


        <TouchableOpacity
         onPress={inserirRegistro}>
          <Text>Inserir</Text>
        </TouchableOpacity>
    </View>
  );
}