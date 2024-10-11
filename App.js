import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Register from './src/pages/Register';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Register'>
        
        <Stack.Screen name="Register" component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//<Stack.Screen name="Home" component={Home}/>
//<Stack.Screen name="Login" component={Login}/>