import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {contacts} from './data.js';
import React from 'react';

export default function WhatsAppHome() {
  return (
    <View>
      <View>
        <Text style={styles.headingText}>Live</Text>
        <ScrollView horizontal={true}>
          {contacts.map(({id, imageUrl, name}) => (
            <View key={id} style={styles.userLiveCard}>
              <Image
                source={{
                  uri: imageUrl,
                }}
                style={styles.userImage}
              />
              <Text style={styles.userLiveName}>{name.split(' ')[0]}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View>
        <Text style={styles.headingText}>Chats</Text>
        <ScrollView>
          {contacts.map(({id, imageUrl, status, name}) => (
            <View key={id} style={styles.userCard}>
              <Image
                source={{
                  uri: imageUrl,
                }}
                style={styles.userImage}
              />
              <View style={styles.userTextContiner}>
                <Text style={styles.userTextName}>{name}</Text>
                <Text style={styles.userTextStatus}>{status}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 21,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  
  userLiveCard: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  userLiveName: {
    fontSize: 12,
    fontWeight: 300,
    flex: 1,
  },

  userCard: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
    marginBottom: 20,
  },

  userImage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    borderWidth: 3,
    borderColor: '#EAF0F1',
  },

  userTextContiner: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 12,
  },

  userTextName: {},
  userTextStatus: {},
});
