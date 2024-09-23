import { StyleSheet, Text, View } from 'react-native';

export default function App() {
   //requisição da API, mas não deve estar funcionando
   const fetchData = async () => {
    try {
      const response = await fetch('NÃO SEI O HTTP DA API'); // colocar o link certo
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
     
    </View>
  );
};
