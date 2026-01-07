import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function LogInScreen() {
    const { t } = useTranslation();
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const validateCredentials = () => {
        if (!emailOrPhone.trim()) {
            Alert.alert(t('common.error'), t('auth.errorEmailOrPhone'));
            return false;
        }
        if (!password.trim()) {
            Alert.alert(t('common.error'), t('auth.errorPassword'));
            return false;
        }
        return true;
    };

    const handleLogin = async () => {
        if (!validateCredentials()) return;

        setLoading(true);
        try {
            // Add your login API call here
            console.log('Login attempt:', { emailOrPhone, password });
            // Example: const response = await loginAPI(emailOrPhone, password);
            Alert.alert(t('common.success'), t('auth.loginSuccess'));
        } catch (error) {
            Alert.alert(t('common.error'), t('auth.loginFailed'));
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            {/* Input Fields */}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={t('auth.emailOrPhone')}
                    value={emailOrPhone}
                    onChangeText={setEmailOrPhone}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder={t('auth.password')}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>

            {/* Continue Button */}
            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
                disabled={loading}
            >
                <Text style={styles.buttonText}>
                    {loading ? t('auth.loggingIn') : t('common.continue')}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3ffe6ff',
    },
    inputContainer: {
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginBottom: 16,
        fontSize: 16,
    },
    button: {
        marginHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: '#22c55e',
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});