import { StyleSheet, Text, View, Linking, Image } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in Javascript 25 - ES12
            </Text>
        </View>
        <Image
        source={{
            uri: 'https://i0.wp.com/plopdo.com/wp-content/uploads/2021/11/feature-pic.jpg?fit=537%2C322&ssl=1'
        }}
        style={styles.cardImage}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{

    },
    card: {},
    elevatedCard: {},
    headingContainer: {},
    headerText: {},
    cardImage: {}
})