import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'WelcomeScreen'
>;

export default WelcomeScreen;

function WelcomeScreen({ navigation }: Props) {

    function LogInPressHandler() {
        navigation.navigate('LogInScreen');
    }

    function SignUpPressHandler() {
        navigation.navigate('SignUpScreen');
    }

    return (
        <LinearGradient colors={['#b8eeffff', '#c9fd91ff']} style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/images/logo.jpg')} style={styles.logo} />
            </View>

            {/* Title */}
            <Text style={styles.title}>RushOnDemand</Text>

            {/* Buttons */}
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.signUpButton } onPress={SignUpPressHandler}>
                    <Text style={styles.signUpButtonText}>Sign up</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.logInButton} onPress={LogInPressHandler}>
                    <Text style={styles.logInButtonText}>Log in</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.providerButton}
                    onPress={() =>
                    Linking.openURL('https://play.google.com/store')}>
                <Text style={styles.providerButtonText}>Provider app</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 70,
        backgroundColor: '#f3ffe6ff',
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