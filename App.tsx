import './i18n';
import WelcomeScreen from './screens/WelcomeScreen';
import LogInScreen from './screens/LogInScreen';
import SignUpScreen from './screens/SignUpScreen';
import MainAppScreen from './screens/MainAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator<RootStackParamList>();
const WelcomeScreenName = 'WelcomeScreen';
const LogInScreenName = 'LogInScreen';
const SignUpScreenName = 'SignUpScreen';
const MainAppScreenName = 'MainAppScreen';

export type RootStackParamList = {
  WelcomeScreen: undefined;
  LogInScreen: undefined;
  SignUpScreen: undefined;
  MainAppScreen: undefined;
};

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      {LoadNavScreens()}
    </>
  );
}

function LoadNavScreens() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{animation: 'default'}}>
        <Stack.Screen
          name={WelcomeScreenName}
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={LogInScreenName}
          component={LogInScreen}
          options={{title: 'Log in into customer app', headerStyle: {backgroundColor: '#f3ffe6ff'}} }
        />
        <Stack.Screen
          name={SignUpScreenName}
          component={SignUpScreen}
          options={{title: 'Sign up into customer app', headerStyle: {backgroundColor: '#f3ffe6ff'}} }
        />
        <Stack.Screen
          name={MainAppScreenName}
          component={MainAppScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}