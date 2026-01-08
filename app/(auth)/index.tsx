/**
 * Welcome Screen - Entry point for authentication flow
 *
 * URL: rodapp://
 */

import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Images } from '../../assets/images';
import { useTranslation } from 'react-i18next';

export default function WelcomeScreen() {
  const router = useRouter();
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();

  function handleLogin() {
    router.push('/(auth)/login');
  }

  function handleSignUp() {
    router.push('/(auth)/signup');
  }

  function handleProviderApp() {
    Linking.openURL('https://play.google.com/store');
  }

  return (
    <LinearGradient colors={['#b8eeffff', '#c9fd91ff']} style={styles.container}>
      <View style={[styles.content, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
        <View style={styles.logoContainer}>
          <Image source={Images.logo} style={styles.logo} />
        </View>

        <Text style={styles.title}>{t('welcome.title')}</Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>{t('welcome.signUp')}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logInButton} onPress={handleLogin}>
            <Text style={styles.logInButtonText}>{t('welcome.logIn')}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.providerButton} onPress={handleProviderApp}>
            <Text style={styles.providerButtonText}>{t('welcome.providerApp')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3ffe6ff',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    height: '15%',
  },
  buttonsContainer: {
    width: '90%',
    gap: 12,
  },
  signUpButton: {
    backgroundColor: '#22c55e',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  logInButton: {
    backgroundColor: '#f3ffe60e',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  logInButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  providerButton: {
    paddingVertical: 14,
    alignItems: 'center',
  },
  providerButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
});
