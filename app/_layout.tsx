/**
 * Root Layout - Main entry point for Expo Router
 *
 * This layout wraps the entire app and sets up:
 * - i18n internationalization
 * - Status bar configuration
 * - Navigation structure
 */

import '../i18n';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" translucent={true} backgroundColor='transparent' />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'transparent' },
        }}
      >
        {/* Auth flow */}
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />

        {/* Main app with tabs */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  );
}
