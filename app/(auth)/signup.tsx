/**
 * Signup Screen
 *
 * URL: rodapp://signup or https://rodapp.com/signup
 */

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function SignUpScreen() {
  const router = useRouter();
  const { t } = useTranslation();
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [name, setName] = useState('');
  const [localization, setLocalization] = useState('');

  const handleSignUp = () => {
    // TODO: Add signup API call here
    console.log('Signup attempt:', { phoneOrEmail, name, localization });

    // Navigate to main app and reset navigation stack
    // Using replace() prevents user from going back to signup
    router.replace('/(tabs)/services');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.content}>
      <TextInput
        style={styles.input}
        placeholder={t('auth.phoneOrEmail')}
        value={phoneOrEmail}
        onChangeText={setPhoneOrEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder={t('auth.yourName')}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder={t('auth.localization')}
        value={localization}
        onChangeText={setLocalization}
      />
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.buttonText}>{t('auth.signUpButton')}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
  },
  signUpButton: {
    backgroundColor: '#22c55e',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
