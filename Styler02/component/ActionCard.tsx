import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blogl Card</Text>
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
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>If your app is linked against an earlier version of iOS but is running in iOS 9.0 or later, you can call this method up to 50 times. After reaching that limit, subsequent calls always resolve to false. If the user reinstalls or upgrades the app, iOS resets the limit.</Text>
        </View>
        <View style={styles.footerContainer}>
        <TouchableOpacity
            onPress={()=> openWebsite('https://reactnative.dev/docs/touchableopacity#example')}
          >
            <Text style={styles.sociaLiks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=> openWebsite('https://www.instagram.com/pure.eats.orginal/')}
          >
            <Text style={styles.sociaLiks}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8
    },
    card: {
      width: 340,
      height: 360,
      borderRadius: 6,
      marginVertical: 12,
      marginHorizontal: 10
    },
    elevatedCard: {
      backgroundColor: '#E07C24',
      elevation: 3,
      shadowOffset: {
        width: 1,
        height: 1
      },
      shadowColor: '#333',
      shadowOpacity: 0.4
    },
    headingContainer: {
      height: 40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    headerText: {
      color: '#00000',
      fontSize: 16,
      fontWeight: '600'
    },
    cardImage: {
      height: 160,
    },
    bodyContainer: {
      padding: 10
    },
    footerContainer: {
      padding: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    sociaLiks: {
      fontSize: 14,
      color: '#000000',
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 20,
      paddingVertical: 6,
      borderRadius: 6
    }
})