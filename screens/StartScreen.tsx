import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function StartScreen() {
    const [problem, setProblem] = useState('');

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                
            </View>

            {/* Main Content */}
            <View style={styles.content}>
                <Text style={styles.title}>RushOnDemand</Text>
                <Text style={styles.mainLabel}>How can {'\n'}I help you?</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Describe your problem..."
                    value={problem}
                    onChangeText={setProblem}
                />
            </View>

            {/* Navigation Menu */}
            <View style={styles.navbar}>
                <TouchableOpacity style={styles.navButton}>
                    <Text style={styles.navText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton}>
                    <Text style={styles.navText}>Map</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton}>
                    <Text style={styles.navText}>Requests</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton}>
                    <Text style={styles.navText}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        paddingTop: 100,
        backgroundColor: '#0f610cff',
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000000ff',
    },
    content: {
        flex: 1,
        gap: 70,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    mainLabel: {
        fontSize: 70,
        fontWeight: '600',
        color: '#333',
        textAlign: 'left',
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 40,
        padding: 12,
        fontSize: 16,
        height: 70,
        textAlignVertical: 'center',
        paddingLeft: 30,
    },
    navbar: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingVertical: 10,
        marginBottom: 50,
    },
    navButton: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    navText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#185e07ff',
    },
});