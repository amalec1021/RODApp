/**
 * Auth Layout - Stack navigator for authentication flow
 *
 * Screens: Welcome, Login, Signup
 */

import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function AuthLayout() {
  const { t } = useTranslation();

  return (
    <Stack
      screenOptions={{
        animation: 'default',
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTintColor: '#000',
        contentStyle: {
          backgroundColor: '#f3ffe6ff',
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="login"
        options={{
          title: t('auth.loginTitle'),
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          title: t('auth.signupTitle'),
        }}
      />
    </Stack>
  );
}
