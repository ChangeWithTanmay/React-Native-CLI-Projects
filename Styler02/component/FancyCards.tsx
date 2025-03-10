import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Tranding Cards</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zwhySGCEBxRRFYIcQgvOLOpRGqrT3d7Qng&s',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Howa Maha</Text>
          <Text style={styles.cardLabel}>Amazon Jungle</Text>
          <Text style={styles.cardDescribtion}>
            An image is a visual representation. An image can be
            two-dimensional, such as a drawing, painting, or photograph, or
            three-dimensional, such as a carving or sculpture.
          </Text>
          <Text style={styles.cardFooter}>12 min away..</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 348,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 6
    
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
        width: 1,
        height: 1,
    }
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopEndRadius: 6
  },
  cardBody: {
    flexGrow: 1,
    paddingHorizontal: 12
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 6
  },
  cardDescribtion: {
    color: '#777E8B',
    fontSize: 12,
    marginBottom: 6,
    marginTop: 6,
    flexShrink: 1
  },
  cardFooter: {
    color: '#000000',
    fontSize: 10,
    marginTop: 5
  },
});
