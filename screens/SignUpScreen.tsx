import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'SignUpScreen'
>;

export default function SignUpScreen({ navigation }: Props) {
    const { t } = useTranslation();
    const [phoneOrEmail, setPhoneOrEmail] = useState('');
    const [name, setName] = useState('');
    const [localization, setLocalization] = useState('');

    const handleSignUp = () => {
        navigation.reset({ // Reset navigation stack to prevent going back to SignUpScreen when logged in
            index: 0,
            routes: [{ name: 'MainAppScreen' }],
        });
    };

    return (
        <View style={styles.container}>
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f3ffe6ff',
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