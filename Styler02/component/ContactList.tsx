import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
          "name": "Ora Wisozk",
          "status": "Deprecated Gradle features were used in this build, making it incompatible with Gradle 9.0.",
          "imageUrl": "https://loremflickr.com/640/480",
          "id": "1"
        },
        {
          "name": "Claudia Schroeder",
          "status": "Double-check that the alias matches between the keystore creation and configuration.",
          "imageUrl": "https://loremflickr.com/640/480",
          "id": "2"
        },
        {
          "name": "Todd Trantow",
          "status": "The keystore file should be in the android/app directory.",
          "imageUrl": "https://loremflickr.com/640/480",
          "id": "3"
        },
        {
          "name": "Jasmine Willms",
          "status": "Use the same password during keystore creation that you specify in gradle.properties.",
          "imageUrl": "https://loremflickr.com/640/480",
          "id": "4"
        },
        {
          "name": "Mr. Karen Mueller DDS",
          "status": "Make sure the keystore file path in gradle.properties matches the actual location.",
          "imageUrl": "https://loremflickr.com/640/480",
          "id": "5"
        },
        {
          "name": "Mr. Dianne Rohan",
          "status": "Based on the error message, there's a mismatch between your keystore configuration.",
          "imageUrl": "https://loremflickr.com/640/480",
          "id": "6"
        }
      ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
        style={styles.container}
        scrollEnabled={false}
      >
        {contacts.map(({id, name, status, imageUrl}) => (
            <View key={id} style={styles.userCard}>
                <Image 
                source={{
                    uri: imageUrl
                }}
                style={styles.userImage}
                 />
                 <View>
                     <Text style={styles.userName}>{name}</Text>
                     <Text style={styles.userStatus}>{status}</Text>
                 </View>
            </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginBottom: 3,
        
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        backgroundColor:'#490061',
        padding: 4,
        borderRadius: 10
    },
    userImage: {
        height: 50,
        width: 50,
        borderRadius: 60/2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff'
    },
    userStatus: {
        fontSize: 12,
        fontWeight: '400',
        color: '#fff',
        marginRight: 62,
        paddingBottom: 12
    },
});