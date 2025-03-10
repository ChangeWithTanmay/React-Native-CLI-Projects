import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Card</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,  styles.cardElevated]}>
            <Text>Tab.</Text>
        </View>
        <View style={[styles.card,  styles.cardElevated]}>
            <Text>Me</Text>
        </View>
        <View style={[styles.card,  styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card,  styles.cardElevated]}>
            <Text>more</Text>
        </View>
        <View style={[styles.card,  styles.cardElevated]}>
            <Text>😇</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        flex: 1,
        padding: 8
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 8,
        margin: 6
    },
    cardElevated:{
        backgroundColor:'#e1e1e1',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 2
    }
})