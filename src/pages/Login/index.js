import { View, Text } from 'react-native';
import { useState} from 'react';

export default function Register() {
  const [name, setName] = useState();
  function inserirRegistro(){

  }

  return (
   <View>
      < TouchableOpacity
       onPress={inserirRegistro}>
        <Text>Inserir</Text>
      </TouchableOpacity>
  </View>
  );
}