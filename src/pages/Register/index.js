//register index
import { View, Text } from 'react-native';
import { useState} from 'react';
import apiAuth from '../../services/apiAuth'; // conxao com a api

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
      })

      console.log(res.data);

    }catch(error){
      console.log("Erro: " + error.messege);
    }
     
  }
 
  return (
    <View>
      <Text>Insira seu nome:</Text>
      <TextInput
        placeholder="Nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Text>Insira seu email:</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      <Text>Insira sua senha:</Text>
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />

      
      <TouchableOpacity
        onPress={inserirRegistro}>
        <Text>Inserir</Text>
      </TouchableOpacity>
    </View>
  );
}