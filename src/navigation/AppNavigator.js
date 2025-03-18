import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import CustomerListScreen from '../screens/CustomerListScreen';
import AddCustomerScreen from '../screens/AddCustomerScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="CustomerList" component={CustomerListScreen} />
        <Stack.Screen name="AddCustomer" component={AddCustomerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
